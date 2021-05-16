<?php

namespace PartKeepr\AuthBundle\Action;

// use ApiPlatform\Core\Action\ActionUtilTrait;

use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Returns the tree root node.
 */
class DeletePreferenceAction
{
//    use ActionUtilTrait;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var UserPreferenceService
     */
    private $userPreferenceService;

    public function __construct(
        UserService $userService,
        UserPreferenceService $userPreferenceService
    ) {
        $this->userService = $userService;
        $this->userPreferenceService = $userPreferenceService;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws \Exception                                 If the format is invalid
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="PartKeeprUserPreferenceDelete",
     *     path="/user_preferences",
     *     defaults={"_api_resource_class"=User::class, "_api_item_operation_name"="delete_preference"},
     *     methods={"DELETE"}
     * )
     **/
    public function __invoke(Request $request)
    {
        $user = $this->userService->getUser();

        if ($request->request->has('preferenceKey')) {
            $this->userPreferenceService->deletePreference($user, $request->request->get('preferenceKey'));
        } else {
            throw new \Exception('Invalid format');
        }
    }
}
