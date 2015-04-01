<?php

namespace PartKeepr\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use PartKeepr\User\User,
    PartKeepr\Service\ServiceManager,
    PartKeepr\PartKeepr,
    PartKeepr\Session\SessionManager,
    PartKeepr\Util\Configuration;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class IndexController extends Controller
{
    /**
     * This is basically a copy of the PartKeepr's legacy index.php
     * @Route("/")
     */
    public function indexAction()
    {
        PartKeepr::initialize("");

        $this->legacyAuthStuff();

        $aParameters = array();
        $aParameters["doctrine_orm_version"] = \Doctrine\ORM\Version::VERSION;
        $aParameters["doctrine_dbal_version"] = \Doctrine\DBAL\Version::VERSION;
        $aParameters["doctrine_common_version"] = \Doctrine\Common\Version::VERSION;
        $aParameters["php_version"] = phpversion();

        $maxPostSize = PartKeepr::getBytesFromHumanReadable(ini_get("post_max_size"));
        $maxFileSize = PartKeepr::getBytesFromHumanReadable(ini_get("upload_max_filesize"));

        $aParameters["maxUploadSize"] = min($maxPostSize, $maxFileSize);

        if (!class_exists("Imagick")) {
            // @todo This check is deprecated and shouldn't be done here. Sf2 should automatically take care of this
            $template = $twig->loadTemplate("error.tpl");
            echo $template->render(array(
                    "title" => PartKeepr::i18n("ImageMagick is not installed"),
                    "error" => PartKeepr::i18n("You are missing the ImageMagick extension. Please install it and restart the setup to verify that the library was installed correctly.")
                ));
            exit;
        }

        /* ImageMagick formats */
        $imagick = new \Imagick();
        $aParameters["availableImageFormats"] = $imagick->queryFormats();

        /* Automatic Login */
        if (Configuration::getOption("partkeepr.frontend.autologin.enabled", false) === true) {
            $aParameters["autoLoginUsername"] = Configuration::getOption("partkeepr.frontend.autologin.username");
            $aParameters["autoLoginPassword"] = Configuration::getOption("partkeepr.frontend.autologin.password");
        }

        if (Configuration::getOption("partkeepr.frontend.motd", false) !== false) {
            $aParameters["motd"] = Configuration::getOption("partkeepr.frontend.motd");
        }

        $renderParams = array();
        $renderParams["debug_all"] = Configuration::getOption("partkeepr.frontend.debug_all", false);
        $renderParams["debug"] = Configuration::getOption("partkeepr.frontend.debug", false);
        $renderParams["parameters"] = $aParameters;

        if ($renderParams["debug_all"]) {
            $renderParams["scripts"] = unserialize(file_get_contents(PartKeepr::getRootDirectory() . "/partkeepr.jsfiles"));
        }

        if (isset($_SERVER['HTTPS'])) {
            $renderParams["https"] = true;
        } else {
            $renderParams["https"] = false;
        }
        return $this->render('PartKeeprFrontendBundle::index.html.twig', $renderParams);
    }

    protected function legacyAuthStuff () {
        /* HTTP auth */
        if (Configuration::getOption("partkeepr.auth.http", false) === true) {
            if (!isset($_SERVER["PHP_AUTH_USER"])) {
                // @todo Redirect to permission denied page
                die("Permission denied");
            }

            try {
                $user = User::loadByName($_SERVER['PHP_AUTH_USER']);
            } catch (\Doctrine\ORM\NoResultException $e) {
                $user = new User;
                $user->setUsername($_SERVER['PHP_AUTH_USER']);
                $user->setPassword("invalid");

                PartKeepr::getEM()->persist($user);
                PartKeepr::getEM()->flush();
            }


            $session = SessionManager::getInstance()->startSession($user);

            $aParameters["autoLoginUsername"] = $user->getUsername();
            $aParameters["auto_start_session"] = $session->getSessionID();

            $aPreferences = array();

            foreach ($user->getPreferences() as $result) {
                $aPreferences[] = $result->serialize();
            }

            $aParameters["userPreferences"] = array("response" => array("data" => $aPreferences));
        }

    }
}