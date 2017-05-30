<?php

namespace PartKeepr\AuthBundle\Action;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Custom API action deleting an user.
 */
class DeleteUserAction
{
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
     * Returns an item to delete.
     *
     * @Method("DELETE")
     *
     * @throws NotFoundHttpException
     * @throws UserProtectedException
     *
     * @return mixed
     */
    public function __invoke($data)
    {
        /**
         * @var $data User
         */
        if ($data->isProtected()) {
            throw new UserProtectedException();
        }

        $this->userService->deleteFOSUser($data);
        $this->userPreferenceService->deletePreferences($data);

        return $data;
    }
}
