<?php

namespace PartKeepr\FrontendBundle\Controller;

use Doctrine\Common\Version as DoctrineCommonVersion;
use Doctrine\DBAL\Version as DBALVersion;
use Doctrine\ORM\Version as ORMVersion;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\PartKeepr;
use PartKeepr\Util\Configuration;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
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

        if (!class_exists("Imagick")) {
            // @todo This check is deprecated and shouldn't be done here. Sf2 should automatically take care of this

            return $this->render('PartKeeprFrontendBundle::error.html.twig',
                array(
                    "title" => PartKeepr::i18n("ImageMagick is not installed"),
                    "error" => PartKeepr::i18n(
                        "You are missing the ImageMagick extension. Please install it and restart the setup to verify that the library was installed correctly."
                    ),
                )
            );
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


        $renderParams["models"] = $this->copyModels();

        return $this->render('PartKeeprFrontendBundle::index.html.twig', $renderParams);
    }

    /**
     * Copies all generated models to the frontend directory
     *
     * @todo Refactor to auto-generate models to the correct directory. This is a workaround.
     */
    protected function copyModels()
    {
        $cacheDir = $this->get("kernel")->getCacheDir();

        $target = $this->get("kernel")->getRootDir()."/../web/bundles/doctrinereflection/";
        @mkdir($target, 0777, true);

        $finder = new Finder();
        $finder->files()->in($cacheDir."/doctrinereflection/");

        $models = array();

        foreach ($finder as $file) {
            /** @var SplFileInfo $file */
            copy($file->getRealPath(), $target.$file->getBasename());
            $models[] = "bundles/doctrinereflection/".$file->getBasename();
        }

        return $models;
    }
}
