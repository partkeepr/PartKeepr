<?php

namespace PartKeepr\UnitBundle\Controller;

use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\DoctrineReflectionBundle\Controller\DoctrineRESTQueryController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use JMS\Serializer\Annotation as JMS;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;

class DefaultController extends DoctrineRESTQueryController
{
    /**
     * Retrieves SI Prefixes in the database
     *
     * @Routing\Route("/unit", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(output="array<PartKeepr\UnitBundle\Entity\Unit>")
     *
     * @View()
     *
     * {@inheritdoc}
     */
    public function getQueryResponseAction(ParamFetcher $paramFetcher)
    {
        $this->setTargetEntity("PartKeepr\\UnitBundle\\Entity\\Unit");

        return parent::getQueryResponseAction($paramFetcher);
    }
}