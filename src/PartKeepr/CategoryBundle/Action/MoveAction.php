<?php

namespace PartKeepr\CategoryBundle\Action;

use ApiPlatform\Core\Bridge\Symfony\Routing\IriConverter;
use PartKeepr\CategoryBundle\Entity\AbstractCategory;
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
    /**
     * @var ManagerRegistry
     */
    private $registry;

    /**
     * @var IriConverter
     */
    private $iriConverter;

    public function __construct(
        IriConverter $iriConverter,
        ManagerRegistry $registry
    ) {
        $this->iriConverter = $iriConverter;
        $this->registry = $registry;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws RootNodeNotFoundException|RootMayNotBeMovedException|MissingParentCategoryException
     */
    public function __invoke(Request $request, $data)
    {
        /**
         * @var $data AbstractCategory
         */
        $parentId = $request->request->get('parent');
        $parentEntity = $this->iriConverter->getItemFromIri($parentId);

        if ($parentEntity === null) {
            throw new MissingParentCategoryException($parentId);
        }

        if ($data->getLevel() === 0) {
            throw new RootMayNotBeMovedException();
        }

        $data->setParent($parentEntity);

        $this->registry->getManager()->flush();

        return new Response($request->request->get('parent'));
    }
}
