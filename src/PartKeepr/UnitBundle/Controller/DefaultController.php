<?php

namespace PartKeepr\UnitBundle\Controller;

use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\DoctrineReflectionBundle\Controller\DoctrineRESTQueryController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use JMS\Serializer\Annotation as JMS;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends DoctrineRESTQueryController
{
    protected $targetEntity = "PartKeepr\\UnitBundle\\Entity\\Unit";

    /**
     * Retrieves units
     *
     * @Routing\Route("/unit", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(section="unit",output="array<PartKeepr\UnitBundle\Entity\Unit>")
     *
     * @View()
     *
     * {@inheritdoc}
     */
    public function listAction(ParamFetcher $paramFetcher)
    {
        return parent::listAction($paramFetcher);
    }

    /**
     * Retrieves a single unit
     *
     * @Routing\Route("/unit/{id}", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(section="unit",output="PartKeepr\UnitBundle\Entity\Unit")
     * @View()
     */
    public function getAction ($id) {
        return parent::getAction($id);
    }

    /**
     * Saves a single unit
     *
     * @Routing\Route("/unit/{id}", defaults={"_format" = "json"})
     * @Routing\Method({"PUT"})
     * @ApiDoc(section="unit",input="PartKeepr\UnitBundle\Entity\Unit",output="PartKeepr\UnitBundle\Entity\Unit")
     *
     * @View()
     */
    public function putAction(Request $request, $id)
    {
        return parent::putAction($request, $id);
    }

    /**
     * Creates a single unit
     *
     * @Routing\Route("/unit", defaults={"_format" = "json"})
     * @Routing\Method({"POST"})
     * @ApiDoc(section="unit",input="PartKeepr\UnitBundle\Entity\Unit",output="PartKeepr\UnitBundle\Entity\Unit")
     *
     * @View()
     */
    public function postAction(Request $request)
    {
        return parent::postAction($request);
    }

    /**
     * Deletes a single unit
     *
     * @Routing\Route("/unit/{id}", defaults={"_format" = "json"})
     * @Routing\Method({"DELETE"})
     * @ApiDoc(section="unit")
     *
     * @View()
     */
    public function deleteAction ($id) {
        return parent::deleteAction($id);
    }
}