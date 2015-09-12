<?php
namespace PartKeepr\CategoryBundle\Controller;

use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\InvalidArgumentException;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use Gedmo\Tree\Entity\Repository\AbstractTreeRepository;
use PartKeepr\CategoryBundle\Exception\MissingParentCategoryException;
use PartKeepr\CategoryBundle\Exception\RootMayNotBeMovedException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CategoryController extends Controller
{
    /**
     * @var ResourceInterface
     */
    private $resource;
    /**
     * Gets the Resource associated with the current Request.
     * Must be called before manipulating the resource.
     *
     * @param Request $request
     *
     * @return ResourceInterface
     *
     * @throws InvalidArgumentException
     */
    protected function getResource(Request $request)
    {
        if ($this->resource) {
            return $this->resource;
        }
        if (!$request->attributes->has('_resource')) {
            throw new InvalidArgumentException('The current request doesn\'t have an associated resource.');
        }
        $shortName = $request->attributes->get('_resource');
        if (!($this->resource = $this->get('api.resource_collection')->getResourceForShortName($shortName))) {
            throw new InvalidArgumentException(sprintf('The resource "%s" cannot be found.', $shortName));
        }
        return $this->resource;
    }

    /**
     * Finds an object of throws a 404 error.
     *
     * @param ResourceInterface $resource
     * @param string|int        $id
     *
     * @return object
     *
     * @throws NotFoundHttpException
     */
    protected function findOrThrowNotFound(ResourceInterface $resource, $id)
    {
        $item = $this->get('api.data_provider')->getItem($resource, $id, true);
        if (!$item) {
            throw $this->createNotFoundException();
        }
        return $item;
    }

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
        $rootNodes = $repository->getRootNodes();

        if (count($rootNodes) == 0) {
            throw new RootNodeNotFoundException();
        }

        $rootNode = reset($rootNodes);

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
