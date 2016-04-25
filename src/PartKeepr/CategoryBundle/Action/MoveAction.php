<?php

namespace PartKeepr\CategoryBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\IriConverter;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
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
    use ActionUtilTrait;

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
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

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
