<?php

namespace PartKeepr\SiPrefixBundle\Controller;

use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\DoctrineReflectionBundle\Controller\DoctrineRESTQueryController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use JMS\Serializer\Annotation as JMS;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;

class DefaultController extends DoctrineRESTQueryController
{
    protected $targetEntity = "PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix";

    /**
     * Retrieves SI Prefixes in the database
     *
     * @Routing\Route("/siprefix", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(section="siprefix",output="array<PartKeepr\SiPrefixBundle\Entity\SiPrefix>")
     *
     * @View()
     *
     * {@inheritdoc}
     */
    public function listAction(ParamFetcher $paramFetcher)
    {
        return parent::listAction($paramFetcher);
    }
}