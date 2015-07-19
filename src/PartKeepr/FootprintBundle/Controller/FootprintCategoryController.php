<?php
namespace PartKeepr\FootprintBundle\Controller;

use Dunglas\ApiBundle\Controller\ResourceController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use PartKeepr\CategoryBundle\Exception\MissingParentCategoryException;
use PartKeepr\CategoryBundle\Exception\RootMayNotBeMovedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FootprintCategoryController extends ResourceController
{
    /**
     * Moves a node to another node
     *
     * @RequestParam(name="parent",description="The ID of the new parent")
     * @param Request $request The request object
     * @param int     $id      The ID of the node to move
     *
     * @return Response
     *
     * @throws MissingParentCategoryException If the parent category is not specified or invalid
     * @throws RootMayNotBeMovedException If it is attempted to move the root category
     */
    public function moveAction(Request $request, $id)
    {
        $resource = $this->getResource($request);
        $entity = $this->findOrThrowNotFound($resource, $id);
        $parentId = $request->request->get("parent");

        $parentEntity = $this->get("api.iri_converter")->getItemFromIri($parentId);


        if ($parentEntity === null) {
            throw new MissingParentCategoryException($parentId);
        }

        if ($entity->getLevel() === 0) {
            throw new RootMayNotBeMovedException();
        }

        $entity->setParent($parentEntity);

        $this->get("doctrine")->getManager()->flush();

        return new Response($request->request->get("parent"));
    }
}
