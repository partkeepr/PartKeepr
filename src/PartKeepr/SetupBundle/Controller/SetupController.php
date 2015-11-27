<?php
namespace PartKeepr\SetupBundle\Controller;

use Doctrine\DBAL\Exception\DriverException;
use PartKeepr\SetupBundle\Visitor\ConfigVisitor;
use PartKeepr\SetupBundle\Visitor\LegacyConfigVisitor;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SetupController extends Controller
{
    /**
     * The authentification key length
     */
    const KEY_LENGTH = 32;

    /**
     * @Route("/setup/_int_test_connectivity")
     */
    public function intTestConnectivityAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Connection successful",
        );

        try {
            $this->get("doctrine.dbal.default_connection")->connect();
        } catch (DriverException $e) {
            $response["success"] = false;
            $response["message"] = "Connection Error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }


    /**
     * @Route("/setup/testConnectivity")
     * @param Request $request
     */
    public function testConnectivityAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, "/setup/_int_test_connectivity");

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/saveConfig")
     * @param Request $request
     */
    public function saveConfigAction(Request $request)
    {
        $this->dumpConfig($request, false);


        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Configuration saved successful",
        );
        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/webserverTest")
     */
    public function webserverTestAction()
    {
        $response  = array(
            "success" => true,
            "message" => "Web Server configuration OK",
            "errors" => array()
        );

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/generateAuthKey")
     */
    public function generateAuthKeyAction()
    {
        $response  = array(
            "success" => true,
            "message" => "Auth key successfully generated",
            "errors" => array()
        );

        $parameters = array(
            "authkey" => $this->generateSecret()
        );

        $contents = $this->container->get('templating')->render('PartKeeprSetupBundle::authkey.php.twig', $parameters);
        file_put_contents($this->getAuthKeyPath(), $contents);

        return new JsonResponse($response);
    }


    protected function handleRequest(Request $request, $uri, $parameters = array(), $environment = "setup_test")
    {
        $data = json_decode($request->getContent(), true);
        if (!array_key_exists("authKey", $data) || !$this->verifyAuthKey($data["authKey"])) {
            $response["success"] = false;
            $response["message"] = "Invalid Authentication Key";
            $response["errors"] = array();

            return new JsonResponse($response);
        }

        try {
            $kernel = new \AppKernel($environment, true);
            $internalRequest = Request::create($uri, "GET", $parameters);

            return $kernel->handle($internalRequest);
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Generic Error";
            $response["errors"] = [$e->getMessage()];

            return new JsonResponse($response);
        }
    }

    protected function generateSecret () {
        $secret = "";
        for ($i = 0; $i < self::KEY_LENGTH; $i++) {
            $secret .= chr(65 + rand(0, 16));
        }
        return  $secret;


    }

    protected function verifyAuthKey ($givenKey) {
        $findText = "Your auth key is: ";

        $data = file_get_contents($this->getAuthKeyPath());
        $position = strpos($data, $findText);

        $key = substr($data, $position + strlen($findText), self::KEY_LENGTH);

        if ($key === $givenKey) {
            return true;
        }

        return false;
    }

    protected function dumpConfig(Request $request, $test = true)
    {
        $data = json_decode($request->getContent(), true);

        $parameters = array(
            "database_driver" => null,
            "database_host" => null,
            "database_port" => null,
            "database_name" => null,
            "database_password" => null,

            "mailer_transport" => null,
            "mailer_host" => null,
            "mailer_port" => null,
            "mailer_encryption" => null,
            "mailer_user" => null,
            "mailer_password" => null,
            "mailer_auth_mode" => null,

            "authentication_provider" => "PartKeepr.Auth.HTTPBasicAuthenticationProvider",

            "locale" => "en",

            "secret" => $this->generateSecret(),

            "fr3d_ldap.driver.host" => "127.0.0.1",
            "fr3d_ldap.driver.port" => null,
            "fr3d_ldap.driver.username" => null,
            "fr3d_ldap.driver.password" => null,
            "fr3d_ldap.driver.bindRequiresDn" => false,
            "fr3d_ldap.driver.baseDn" => "",
            "fr3d_ldap.driver.accountFilterFormat" => null,
            "fr3d_ldap.driver.optReferrals" => null,
            "fr3d_ldap.driver.useSsl" => null,
            "fr3d_ldap.driver.useStartTls" => null,
            "fr3d_ldap.driver.accountCanonicalForm" => null,
            "fr3d_ldap.driver.accountDomainName" => null,
            "fr3d_ldap.driver.accountDomainNameShort" => null,
            "fr3d_ldap.user.enabled" => false,
            "fr3d_ldap.user.baseDn" => "dc=example,dc=com",
            "fr3d_ldap.user.filter" => null,
            "fr3d_ldap.user.attribute.username" => null,
            "fr3d_ldap.user.attribute.name" => null,
            "fr3d_ldap.user.attribute.email" => null,

            "partkeepr.filesystem.data_directory" => "%kernel.root_dir%/../data/",
            "partkeepr.cronjob.check" => true,
            "partkeepr.filesystem.quota" => false,
            "partkeepr.auth.max_users" => "unlimited",
            "partkeepr.category.path_separator" => " ➤ "
        );

        $this->applyIf($parameters, $data["values"]);

        $parameters = array_merge($parameters, $data["values"]);
        array_walk_recursive($parameters, function (&$item, $key) { $item = var_export($item, true); });

        ksort($parameters);

        $contents = $this->container->get('templating')->render('PartKeeprSetupBundle::parameters.php.twig', array("parameters" => $parameters));

        file_put_contents($this->getConfigPath($test), $contents);
    }

    private function applyIf($target, $source)
    {
        foreach ($target as $key => $value) {
            if (array_key_exists($key, $source)) {
                $target[$key] = $source[$key];
            }
        }

        return $target;
    }

    private function getAuthKeyPath () {
        return dirname(__FILE__)."/../../../../app/authkey.php";
    }

    protected function getConfigPath ($test) {
        if ($test) {
            $filename = "parameters_setup.php";
        } else {
            $filename = "parameters.php";
        }
        return dirname(__FILE__)."/../../../../app/config/".$filename;
    }

    protected function legacyConfigParser()
    {
        if (file_exists($this->getLegacyConfigPath())) {
            $parser = new \PHPParser_Parser(new \PHPParser_Lexer());
            $traverser = new \PHPParser_NodeTraverser();
            $traverser->addVisitor(new LegacyConfigVisitor());
            $statements = $parser->parse(file_get_contents($this->getLegacyConfigPath()));
            $traverser->traverse($statements);

            return LegacyConfigVisitor::getConfigValues();
        }

        return array();
    }

    protected function configParser()
    {
        if (file_exists($this->getConfigPath(false))) {
            $parser = new \PHPParser_Parser(new \PHPParser_Lexer());
            $traverser = new \PHPParser_NodeTraverser();
            $traverser->addVisitor(new ConfigVisitor());
            $statements = $parser->parse(file_get_contents($this->getConfigPath(false)));
            $traverser->traverse($statements);

            return ConfigVisitor::getConfigValues();
        }

        return array();
    }

    protected function getLegacyConfigPath()
    {
        return dirname(__FILE__)."/../../../../config.php";
    }

}
