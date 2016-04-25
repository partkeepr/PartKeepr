<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns the tree root node.
 */
class DeletePreferenceAction
{
    use ActionUtilTrait;

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
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
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
