<?php

namespace PartKeepr\CategoryBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Gedmo\Tree\Entity\Repository\AbstractTreeRepository;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns the tree root node.
 */
class GetRootNodeAction
{
    use ActionUtilTrait;

    /**
     * @var ManagerRegistry
     */
    private $manager;

    public function __construct(ManagerRegistry $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.get_root_node"         # Controller
    /**
     * @Route(
     *     name="StorageLocationCategoryGetRoot",
     *     path="/storage_location_categories/getExtJSRootNode",
     *     defaults={"_api_resource_class"=StorageLocationCategory::class, "_api_collection_operation_name"="get_root"}
     * )
     * @Method("GET")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.get_root_node"         # Controller
    /**
     * @Route(
     *     name="PartKeeprFootprintCategoryGetRootNode",
     *     path="/footprint_categories/getExtJSRootNode",
     *     defaults={"_api_resource_class"=FootprintCategory::class, "_api_collection_operation_name"="get_root"}
     * )
     * @Method("GET")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.get_root_node"         # Controller
    /**
     * @Route(
     *     name="PartKeeprPartCategoryGetRootNode",
     *     path="/part_categories/getExtJSRootNode",
     *     defaults={"_api_resource_class"=PartCategory::class, "_api_collection_operation_name"="get_root"}
     * )
     * @Method("GET")
     **/
    public function __invoke(Request $request)
    {
        list($resourceType) = $this->extractAttributes($request);

        /*
         * @var ResourceInterface $resourceType
         */
        $repository = $this->manager->getRepository($resourceType->getEntityClass());

        /*
         * @var $repository AbstractTreeRepository
         */
        $rootNodes = $repository->getRootNodes();

        if (count($rootNodes) == 0) {
            throw new RootNodeNotFoundException();
        }

        $rootNode = reset($rootNodes);

        return $rootNode;
    }
}
