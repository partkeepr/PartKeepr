<?php

namespace PartKeepr\AuthBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Custom API action deleting an user.
 */
class DeleteUserAction
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

    /**
     * @var UserPreferenceService
     */
    private $userPreferenceService;

    public function __construct(
        DataProviderInterface $dataProvider,
        UserService $userService,
        UserPreferenceService $userPreferenceService
    ) {
        $this->dataProvider = $dataProvider;
        $this->userService = $userService;
        $this->userPreferenceService = $userPreferenceService;
    }

    /**
     * Returns an item to delete.
     *
     * @param Request    $request
     * @param string|int $id
     *
     * @throws NotFoundHttpException
     * @throws RuntimeException
     * @throws UserProtectedException
     *
     * @return mixed
     */
    /**
     * @Route(
     *     name="PartKeeprUserDelete",
     *     path="/users/{id}",
     *     defaults={"_api_resource_class"=User::class, "_api_item_operation_name"="delete_custom"},
     *     methods={"DELETE"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        /**
         * @var User
         */
        $item = $this->getItem($this->dataProvider, $resourceType, $id);

        if ($item->isProtected()) {
            throw new UserProtectedException();
        }

        $this->userService->deleteFOSUser($item);
        $this->userPreferenceService->deletePreferences($item);

        return $item;
    }
}
