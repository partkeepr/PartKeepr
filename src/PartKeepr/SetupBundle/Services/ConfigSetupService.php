<?php

namespace PartKeepr\SetupBundle\Services;

use PartKeepr\SetupBundle\Visitor\ConfigVisitor;
use PartKeepr\SetupBundle\Visitor\LegacyConfigVisitor;
use Symfony\Bundle\TwigBundle\TwigEngine;

class ConfigSetupService
{
    /**
     * The authentification key length.
     */
    const KEY_LENGTH = 32;

    /**
     * @var TwigEngine
     */
    private $twig;

    /**
     * ConfigSetupService constructor.
     *
     * @param TwigEngine $twig
     */
    public function __construct(TwigEngine $twig)
    {
        $this->twig = $twig;
    }

    public function getConfig($config)
    {
        // Parameter defaults to ensure they exist
        $parameters = [
            'database_driver'   => null,
            'database_host'     => null,
            'database_port'     => null,
            'database_name'     => null,
            'database_password' => null,

            'mailer_transport'  => null,
            'mailer_host'       => null,
            'mailer_port'       => null,
            'mailer_encryption' => null,
            'mailer_user'       => null,
            'mailer_password'   => null,
            'mailer_auth_mode'  => null,

            'authentication_provider' => 'PartKeepr.Auth.HTTPBasicAuthenticationProvider',

            'locale' => 'en',

            'secret' => $this->generateSecret(),

            'fr3d_ldap.driver.host'                   => '127.0.0.1',
            'fr3d_ldap.driver.port'                   => 389,
            'fr3d_ldap.driver.username'               => null,
            'fr3d_ldap.driver.password'               => null,
            'fr3d_ldap.driver.bindRequiresDn'         => false,
            'fr3d_ldap.driver.baseDn'                 => '',
            'fr3d_ldap.driver.accountFilterFormat'    => null,
            'fr3d_ldap.driver.optReferrals'           => null,
            'fr3d_ldap.driver.useSsl'                 => null,
            'fr3d_ldap.driver.useStartTls'            => null,
            'fr3d_ldap.driver.accountCanonicalForm'   => null,
            'fr3d_ldap.driver.accountDomainName'      => null,
            'fr3d_ldap.driver.accountDomainNameShort' => null,
            'fr3d_ldap.user.enabled'                  => false,
            'fr3d_ldap.user.baseDn'                   => 'dc=example,dc=com',
            'fr3d_ldap.user.filter'                   => null,
            'fr3d_ldap.user.attribute.username'       => 'samaccountname',
            'fr3d_ldap.user.attribute.email'          => 'email',

            'partkeepr.filesystem.data_directory' => '%kernel.root_dir%/../data/',
            'partkeepr.cronjob.check'             => true,
            'partkeepr.filesystem.quota'          => false,
            'partkeepr.auth.max_users'            => 'unlimited',
            'partkeepr.category.path_separator'   => ' ➤ ',
            'partkeepr.maintenance'               => false,
            'partkeepr.maintenance.title'         => '',
            'partkeepr.maintenance.message'       => '',
            'cache.dunglas'                       => false,
            'cache.doctrine'                      => 'array',
            'partkeepr.parts.limit'               => false,
            'partkeepr.users.limit'               => false,
        ];

        if (function_exists('apc_fetch')) {
            $parameters['cache.dunglas'] = 'api.mapping.cache.apc';
            $parameters['cache.doctrine'] = 'apc';
        }

        $this->applyIf($parameters, $config);

        $parameters = array_merge($parameters, $config);

        if ($parameters['fr3d_ldap.user.attribute.username'] === null) {
            $parameters['fr3d_ldap.user.attribute.username'] = 'samaccountname';
        }

        if ($parameters['fr3d_ldap.user.attribute.email'] === null) {
            $parameters['fr3d_ldap.user.attribute.email'] = 'email';
        }

        array_walk_recursive($parameters, function (&$item) {
            $item = var_export($item, true);
        });

        ksort($parameters);

        return $this->twig->render('PartKeeprSetupBundle::parameters.php.twig',
            ['parameters' => $parameters]);
    }

    public function legacyConfigParser()
    {
        if (file_exists($this->getLegacyConfigPath())) {
            $parser = new \PHPParser_Parser(new \PHPParser_Lexer());
            $traverser = new \PHPParser_NodeTraverser();
            $traverser->addVisitor(new LegacyConfigVisitor());
            $statements = $parser->parse(file_get_contents($this->getLegacyConfigPath()));
            $traverser->traverse($statements);

            return LegacyConfigVisitor::getConfigValues();
        }

        return [];
    }

    public function configParser()
    {
        if (file_exists($this->getConfigPath(false))) {
            $parser = new \PHPParser_Parser(new \PHPParser_Lexer());
            $traverser = new \PHPParser_NodeTraverser();
            $traverser->addVisitor(new ConfigVisitor());
            $statements = $parser->parse(file_get_contents($this->getConfigPath(false)));
            $traverser->traverse($statements);

            return ConfigVisitor::getConfigValues();
        }

        return [];
    }

    public function getConfigPath($test)
    {
        if ($test) {
            $filename = 'parameters_setup.php';
        } else {
            $filename = 'parameters.php';
        }

        return dirname(__FILE__).'/../../../../app/config/'.$filename;
    }

    public function getLegacyConfigPath()
    {
        return dirname(__FILE__).'/../../../../config.php';
    }

    public function applyIf($target, $source)
    {
        foreach ($target as $key => $value) {
            if (array_key_exists($key, $source)) {
                $target[$key] = $source[$key];
            }
        }

        return $target;
    }

    public function generateSecret()
    {
        $secret = '';
        for ($i = 0; $i < self::KEY_LENGTH; $i++) {
            $secret .= chr(65 + rand(0, 16));
        }

        return $secret;
    }

    public function getAuthKey()
    {
        $findText = 'Your auth key is: ';

        $data = file_get_contents($this->getAuthKeyPath());
        $position = strpos($data, $findText);

        return substr($data, $position + strlen($findText), self::KEY_LENGTH);
    }

    public function getAuthKeyPath()
    {
        return dirname(__FILE__).'/../../../../app/authkey.php';
    }
}
