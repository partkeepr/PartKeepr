<?php

namespace PartKeepr\SiPrefixBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\Manager\ManagerFilter;
use PartKeepr\SiPrefix\SiPrefixManager;
use Symfony\Component\Routing\Annotation\Route;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;

class DefaultController extends FOSRestController {
    /**
     * @Route("/siprefix/get/", defaults={"method" = "get"})
     * @ApiDoc(description="Retrieves all SI Prefixes in the database")
     * @View()
     */
    public function getSiPrefixesAction () {
        $siPrefixes = SiPrefixManager::getInstance()->getList(new ManagerFilter());

        $data = array();

        foreach ($siPrefixes["data"] as $siPrefix) {
            $data[] = SiPrefixManager::getInstance()->getEntity($siPrefix["id"]);
        }
       return $data;
    }

}