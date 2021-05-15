<?php

namespace PartKeepr\CategoryBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\IriConverter;
use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\Model\DataProviderInterface;
use PartKeepr\CategoryBundle\Exception\MissingParentCategoryException;
use PartKeepr\CategoryBundle\Exception\RootMayNotBeMovedException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Returns the tree root node.
 */
class MoveAction
{
//    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var ManagerRegistry
     */
    private $registry;

    /**
     * @var IriConverter
     */
    private $iriConverter;

    public function __construct(
        DataProviderInterface $dataProvider,
        IriConverter $iriConverter,
        ManagerRegistry $registry
    ) {
        $this->dataProvider = $dataProvider;
        $this->iriConverter = $iriConverter;
        $this->registry = $registry;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws RuntimeException|RootNodeNotFoundException|RootMayNotBeMovedException|MissingParentCategoryException
     *
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.move"         # Controller
    /**
     * @Route(
     *     name="StorageLocationCategoryMove",
     *     path="/storage_location_categories/{id}/move",
     *     defaults={"_api_resource_class"=PartAttachment::class, "_api_item_operation_name"="move"}
     * )
     * @Method("PUT")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.move"         # Controller
    /**
     * @Route(
     *     name="FootprintCategoryMove",
     *     path="/footprint_categories/{id}/move",
     *     defaults={"_api_resource_class"=FootprintCategory::class, "_api_item_operation_name"="move"}
     * )
     * @Method("PUT")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.category.move"         # Controller
    /**
     * @Route(
     *     name="PartKeeprPartCategoryMove",
     *     path="/part_categories/{id}/move",
     *     defaults={"_api_resource_class"=PartCategory::class, "_api_item_operation_name"="move"}
     * )
     * @Method("PUT")
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        $entity = $this->getItem($this->dataProvider, $resourceType, $id);

        $parentId = $request->request->get('parent');

        $parentEntity = $this->iriConverter->getItemFromIri($parentId);

        if ($parentEntity === null) {
            throw new MissingParentCategoryException($parentId);
        }

        if ($entity->getLevel() === 0) {
            throw new RootMayNotBeMovedException();
        }

        $entity->setParent($parentEntity);

        $this->registry->getManager()->flush();

        return new Response($request->request->get('parent'));
    }
}
