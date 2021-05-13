<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDay;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory;
use Symfony\Component\HttpFoundation\Request;

class MarkTipReadAction
{
    use ActionUtilTrait;

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
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.tip_of_the_day.mark_read"         # Controller
    /**
     * @Route(
     *     name="TipMarkRead",
     *     path="/tip_of_the_days/{id}/markTipRead",
     *     defaults={"_api_resource_class"=TipOfTheDay, "_api_item_operation_name"="mark_read"}
     * )
     * @Method("PUT")
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

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
