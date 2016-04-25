<?php

namespace PartKeepr\PartBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\StockBundle\Entity\StockEntry;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

/**
 * Adds stock to a given part.
 */
class AddStockAction
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
     * @var UserService
     */
    private $userService;

    public function __construct(
        DataProviderInterface $dataProvider,
        UserService $userService,
        ManagerRegistry $registry
    ) {
        $this->dataProvider = $dataProvider;
        $this->userService = $userService;
        $this->registry = $registry;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request The request
     * @param int     $id      The ID of the part
     *
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        $part = $this->getItem($this->dataProvider, $resourceType, $id);

        /*
         * @var $part Part
         */
        $quantity = $request->request->get('quantity');
        $user = $this->userService->getUser();

        $stock = new StockEntry();
        $stock->setUser($user);
        $stock->setStockLevel(intval($quantity));

        if ($request->request->has('price') && $request->request->get('price') !== null) {
            $stock->setPrice(floatval($request->request->get('price')));
        }

        if ($request->request->has('comment') && $request->request->get('comment') !== null) {
            $stock->setComment($request->request->get('comment'));
        }

        $part->addStockLevel($stock);
        $this->registry->getManager()->persist($stock);
        $this->registry->getManager()->flush();

        return $part;
    }
}
