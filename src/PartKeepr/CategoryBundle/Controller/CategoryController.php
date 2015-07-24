<?php
namespace PartKeepr\CategoryBundle\Controller;

use Dunglas\ApiBundle\Controller\ResourceController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use Gedmo\Tree\Entity\Repository\AbstractTreeRepository;
use PartKeepr\CategoryBundle\Exception\MissingParentCategoryException;
use PartKeepr\CategoryBundle\Exception\RootMayNotBeMovedException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends ResourceController
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

    /**
     * Returns the tree's root node wrapped in a virtual root node.
     *
     * This is required as ExtJS cannot replace the ID of their root node and cannot read in data one level below
     * root.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function getExtJSRootNodeAction(Request $request)
    {
        $resource = $this->getResource($request);

        $repository = $this->getDoctrine()->getManager()->getRepository($resource->getEntityClass());

        /**
         * @var $repository AbstractTreeRepository
         */
        $rootNode = $repository->getRootNodes()[0];

        $data = $this->get('serializer')->normalize(
            $rootNode,
            'json-ld',
            $resource->getNormalizationContext()
        );

        $responseData = array("children" => $data);

        return new JsonResponse(
            $responseData
        );

    }
}
