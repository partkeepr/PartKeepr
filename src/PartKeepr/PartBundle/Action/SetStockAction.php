<?php

namespace PartKeepr\PartBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\StockBundle\Entity\StockEntry;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Sets the stock for a given part.
 */
class SetStockAction
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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="PartSetStock",
     *     path="/parts/{id}/setStock",
     *     defaults={"_api_resource_class"=Part::class, "_api_item_operation_name"="set_stock"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        $part = $this->getItem($this->dataProvider, $resourceType, $id);

        /*
         * @var $part Part
         */
        $quantity = $request->request->get('quantity');
        $user = $this->userService->getUser();

        $oldQuantity = $part->getStockLevel();
        $correctionQuantity = $quantity - $oldQuantity;

        if ($correctionQuantity != 0) {
            $stock = new StockEntry();
            $stock->setStockLevel($correctionQuantity);
            $stock->setUser($user);

            if ($request->request->has('comment') && $request->request->get('comment') !== null) {
                $stock->setComment($request->request->get('comment'));
            }

            $part->addStockLevel($stock);
            $this->registry->getManager()->persist($stock);
            $this->registry->getManager()->flush();
        }

        return $part;
    }
}
