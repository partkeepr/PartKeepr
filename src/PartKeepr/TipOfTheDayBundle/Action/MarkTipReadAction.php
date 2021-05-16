<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManager;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDay;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory;
use Symfony\Component\HttpFoundation\Request;

class MarkTipReadAction
{
//    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(
        DataProviderInterface $dataProvider,
        EntityManager $entityManager,
        UserService $userService
    ) {
        $this->dataProvider = $dataProvider;
        $this->entityManager = $entityManager;
        $this->userService = $userService;
    }

    /**
     * Marks a specific tip as read.
     *
     * @param Request $request The request
     * @param int     $id      The ID of the system notice
     *
     * @throws RuntimeException
     *
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="TipMarkRead",
     *     path="/tip_of_the_days/{id}/markTipRead",
     *     defaults={"_api_resource_class"=TipOfTheDay, "_api_item_operation_name"="mark_read"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        $tip = $this->getItem($this->dataProvider, $resourceType, $id);

        /*
         * @var $tip TipOfTheDay
         */
        $tipOfTheDayHistoryItem = new TipOfTheDayHistory();
        $tipOfTheDayHistoryItem->setUser($this->userService->getUser());
        $tipOfTheDayHistoryItem->setName($tip->getName());

        $this->entityManager->persist($tipOfTheDayHistoryItem);
        $this->entityManager->flush();

        return $tip;
    }
}
