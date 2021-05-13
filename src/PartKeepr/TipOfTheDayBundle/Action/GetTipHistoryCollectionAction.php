<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory;
use Symfony\Component\HttpFoundation\Request;

class GetTipHistoryCollectionAction
{
    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(DataProviderInterface $dataProvider, UserService $userService)
    {
        $this->dataProvider = $dataProvider;
        $this->userService = $userService;
    }

    /**
     * Retrieves a filtered tip of the day history list. Filters by the currently logged in user by default.
     *
     * @param Request $request
     *
     * @throws RuntimeException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.tip_of_the_day_history.collection_get"         # Controller
    /**
     * @Route(
     *     name="TipHistoriesGet",
     *     path="/tip_of_the_day_histories",
     *     defaults={"_api_resource_class"=TipOfTheDayHistory::class, "_api_collection_operation_name"="custom_get"}
     * )
     * @Method("GET")
     **/
    public function __invoke(Request $request)
    {
        list($resourceType) = $this->extractAttributes($request);

        $collection = $this->dataProvider->getCollection($resourceType);
        $user = $this->userService->getUser();

        $resultCollection = [];

        foreach ($collection as $item) {
            /**
             * @var TipOfTheDayHistory
             */
            if ($item->getUser() == $user) {
                $resultCollection[] = $item;
            }
        }

        return $resultCollection;
    }
}
