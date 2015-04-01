<?php

namespace PartKeepr\SiPrefixBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\Manager\ManagerFilter;
use PartKeepr\SiPrefix\SiPrefixManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use JMS\Serializer\Annotation as JMS;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;

class DefaultController extends FOSRestController
{
    /**
     * @Routing\Route("/siprefix", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(
     *  description="Retrieves all SI Prefixes in the database"
     * )
     * )
     *
     * @View()
     *
     */
    public function getSiPrefixesAction()
    {
        $siPrefixes = SiPrefixManager::getInstance()->getList(new ManagerFilter());

        $data = array();

        foreach ($siPrefixes["data"] as $siPrefix) {
            $data[] = SiPrefixManager::getInstance()->getEntity($siPrefix["id"]);
        }
        return $data;
    }
}