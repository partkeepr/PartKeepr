<?php
namespace PartKeepr\PartBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\Stock\StockEntry;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

/**
 * Removes stock for a given part
 */
class RemoveStockAction
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
     * @var TokenStorage
     */
    private $tokenStorage;

    public function __construct(
        DataProviderInterface $dataProvider,
        TokenStorage $tokenStorage,
        ManagerRegistry $registry
    ) {
        $this->dataProvider = $dataProvider;
        $this->tokenStorage = $tokenStorage;
        $this->registry = $registry;
    }
    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     *
     * @throws RuntimeException|RootNodeNotFoundException
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        $part = $this->getItem($this->dataProvider, $resourceType, $id);

        /**
         * @var $part Part
         */
        $quantity = $request->request->get("quantity");
        $user = $this->tokenStorage->getToken()->getUser();

        $stock = new StockEntry(0 - intval($quantity), $user);
        $part->addStockEntry($stock);

        $this->registry->getManager()->persist($stock);
        $this->registry->getManager()->flush();

        return $part;
    }
}
