<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GetTipHistoryCollectionAction
{
//    use ActionUtilTrait;

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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="TipHistoriesGet",
     *     path="/tip_of_the_day_histories",
     *     defaults={"_api_resource_class"=TipOfTheDayHistory::class, "_api_collection_operation_name"="custom_get"},
     *     methods={"GET"}
     * )
     **/
    public function __invoke(Request $request)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

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
