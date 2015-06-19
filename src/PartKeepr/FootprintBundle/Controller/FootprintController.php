<?php

namespace PartKeepr\FootprintBundle\Controller;

use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\DoctrineReflectionBundle\Controller\DoctrineRESTQueryController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use JMS\Serializer\Annotation as JMS;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Component\HttpFoundation\Request;

class FootprintController extends DoctrineRESTQueryController
{
    protected $targetEntity = "PartKeepr\\FootprintBundle\\Entity\\Footprint";

    /**
     * Retrieves footprint
     *
     * @Routing\Route("/footprint", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(section="footprint",output="array<PartKeepr\FootprintBundle\Entity\Footprint>")
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
     * Retrieves a single footprint
     *
     * @Routing\Route("/footprint/{id}", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"GET"})
     * @ApiDoc(section="footprint",output="PartKeepr\FootprintBundle\Entity\Footprint")
     * @View()
     */
    public function getAction($id)
    {
        return parent::getAction($id);
    }

    /**
     * Saves a single footprint
     *
     * @Routing\Route("/footprint/{id}", defaults={"_format" = "json"})
     * @Routing\Method({"PUT"})
     * @ApiDoc(section="footprint",input="PartKeepr\FootprintBundle\Entity\Footprint",output="PartKeepr\FootprintBundle\Entity\Footprint")
     *
     * @View()
     */
    public function putAction(Request $request, $id)
    {
        return parent::putAction($request, $id);
    }

    /**
     * Creates a single footprint
     *
     * @Routing\Route("/footprint", defaults={"_format" = "json"})
     * @Routing\Method({"POST"})
     * @ApiDoc(section="footprint",input="PartKeepr\FootprintBundle\Entity\Footprint",output="PartKeepr\FootprintBundle\Entity\Footprint")
     *
     * @View()
     */
    public function postAction(Request $request)
    {
        return parent::postAction($request);
    }

    /**
     * Deletes a single footprint
     *
     * @Routing\Route("/footprint/{id}", defaults={"_format" = "json"})
     * @Routing\Method({"DELETE"})
     * @ApiDoc(section="footprint")
     *
     * @View()
     */
    public function deleteAction($id)
    {
        return parent::deleteAction($id);
    }
}