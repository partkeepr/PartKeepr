<?php

namespace PartKeepr\FrontendBundle\Controller;

use Doctrine\Common\Version as DoctrineCommonVersion;
use Doctrine\DBAL\Version as DBALVersion;
use Doctrine\ORM\Version as ORMVersion;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends Controller
{
    /**
     * This is basically a copy of the PartKeepr's legacy index.php.
     *
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('PartKeeprFrontendBundle::index.html.twig', $this->getRenderParameters());
    }

    public function getRenderParameters()
    {
        if ($this->getParameter('partkeepr.maintenance') !== false) {
            $renderParams['maintenanceTitle'] = $this->getParameter('partkeepr.maintenance.title');
            $renderParams['maintenanceMessage'] = $this->getParameter('partkeepr.maintenance.message');

            return $this->render('@PartKeeprFrontend/maintenance.html.twig', $renderParams);
        }

        $aParameters = [];
        $aParameters['doctrine_orm_version'] = ORMVersion::VERSION;
        $aParameters['doctrine_dbal_version'] = DBALVersion::VERSION;
        $aParameters['doctrine_common_version'] = DoctrineCommonVersion::VERSION;
        $aParameters['php_version'] = phpversion();
        $aParameters['auto_start_session'] = true;

        $maxPostSize = $this->get('partkeepr_systemservice')->getBytesFromHumanReadable(ini_get('post_max_size'));
        $maxFileSize = $this->get('partkeepr_systemservice')->getBytesFromHumanReadable(ini_get('upload_max_filesize'));

        $aParameters['maxUploadSize'] = min($maxPostSize, $maxFileSize);

        if ($this->getParameterWithDefault('partkeepr.upload.limit', false) !== false) {
            $aParameters['maxUploadSize'] = $this->getParameterWithDefault('partkeepr.upload.limit', false);
        }

        if ($this->getParameterWithDefault('partkeepr.octopart.apikey', "") !== "") {
            $aParameters['isOctoPartAvailable'] = true;
        } else {
            $aParameters['isOctoPartAvailable'] = false;
        }

        // @todo Hardcoded for now due to GD, see #445
        $aParameters['availableImageFormats'] = ['JPG', 'GIF', 'PNG'];

        /* Automatic Login */
        if ($this->getParameterWithDefault('partkeepr.frontend.auto_login.enabled', false) === true) {
            $aParameters['autoLoginUsername'] = $this->getParameter('partkeepr.frontend.auto_login.username');
            $aParameters['autoLoginPassword'] = $this->getParameter('partkeepr.frontend.auto_login.password');
        }

        if ($this->getParameterWithDefault('partkeepr.frontend.motd', false) !== false) {
            $aParameters['motd'] = $this->getParameterWithDefault('partkeepr.frontend.motd', false);
        }

        $aParameters['max_users'] = $this->getParameterWithDefault('partkeepr.auth.max_users', 'unlimited');

        $aParameters['authentication_provider'] = $this->getParameter('partkeepr.authentication_provider');
        $aParameters['tip_of_the_day_uri'] = $this->getParameter('partkeepr.tip_of_the_day_uri');

        $aParameters['password_change'] = $this->getParameterWithDefault('partkeepr.auth.allow_password_change', true);
        $aParameters["patreonStatus"] = $this->get("partkeepr_systemservice")->getPatreonStatus();

        $aParameters["defaultGridPresets"] = json_encode($this->get("partkeepr.gridpresetservice")->getDefaultPresets());
        $renderParams = [];
        $renderParams['parameters'] = $aParameters;
        $renderParams['debug'] = $this->get('kernel')->isDebug();
        $renderParams['baseUrl'] = $this->getBaseURL();

        return $renderParams;
    }

    /**
     * Returns the base_url, either from the router (default) or overridden by the
     * partkeepr.frontend.base_url parameter.
     *
     * @return string
     */
    public function getBaseURL()
    {
        $baseUrl = $this->getParameterWithDefault('partkeepr.frontend.base_url', false);

        if ($baseUrl !== false) {
            return $baseUrl;
        }

        return $this->container->get('router')->getContext()->getBaseUrl();
    }

    public function getParameterWithDefault($name, $default)
    {
        if ($this->container->hasParameter($name)) {
            return $this->container->getParameter($name);
        } else {
            return $default;
        }
    }
}
