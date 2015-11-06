<?php

namespace PartKeepr\FrontendBundle\Controller;

use Doctrine\Common\Version as DoctrineCommonVersion;
use Doctrine\DBAL\Version as DBALVersion;
use Doctrine\ORM\Version as ORMVersion;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\PartKeepr;
use PartKeepr\Util\Configuration;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends Controller
{
    /**
     * This is basically a copy of the PartKeepr's legacy index.php
     * @Route("/")
     */
    public function indexAction()
    {
        PartKeepr::initialize("");

        $aParameters = array();
        $aParameters["doctrine_orm_version"] = ORMVersion::VERSION;
        $aParameters["doctrine_dbal_version"] = DBALVersion::VERSION;
        $aParameters["doctrine_common_version"] = DoctrineCommonVersion::VERSION;
        $aParameters["php_version"] = phpversion();
        $aParameters["auto_start_session"] = true;

        $maxPostSize = PartKeepr::getBytesFromHumanReadable(ini_get("post_max_size"));
        $maxFileSize = PartKeepr::getBytesFromHumanReadable(ini_get("upload_max_filesize"));

        $aParameters["maxUploadSize"] = min($maxPostSize, $maxFileSize);

        // @todo Hardcoded for now due to GD, see #445
        $aParameters["availableImageFormats"] = array("JPG", "GIF", "PNG");

        /* Automatic Login */

        if ($this->getParameterWithDefault("partkeepr.frontend.auto_login.enabled", false) === true) {
            $aParameters["autoLoginUsername"] = $this->getParameter("partkeepr.frontend.auto_login.username");
            $aParameters["autoLoginPassword"] = $this->getParameter("partkeepr.frontend.auto_login.password");
        }

        if (Configuration::getOption("partkeepr.frontend.motd", false) !== false) {
            $aParameters["motd"] = Configuration::getOption("partkeepr.frontend.motd");
        }

        $aParameters["max_users"] = $this->getParameter("max_users");

        $aParameters["authentication_provider"] = $this->getParameter("partkeepr.authentication_provider");
        $aParameters["tip_of_the_day_uri"] = $this->getParameter("partkeepr.tip_of_the_day_uri");

        $renderParams = array();
        $renderParams["debug_all"] = Configuration::getOption("partkeepr.frontend.debug_all", false);
        $renderParams["debug"] = Configuration::getOption("partkeepr.frontend.debug", false);
        $renderParams["parameters"] = $aParameters;

        if (isset($_SERVER['HTTPS'])) {
            $renderParams["https"] = true;
        } else {
            $renderParams["https"] = false;
        }


        return $this->render('PartKeeprFrontendBundle::index.html.twig', $renderParams);
    }

    public function getParameterWithDefault ($name, $default) {
        if ($this->container->hasParameter($name)) {
            return $this->container->getParameter($name);
        } else {
            return $default;
        }
    }
}
