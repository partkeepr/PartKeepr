<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserLimitReachedException;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Serializer\SerializerInterface;

class PutUserAction
{
    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(
        SerializerInterface $serializer,
        UserService $userService
    ) {
        $this->serializer = $serializer;
        $this->userService = $userService;
    }

    /**
     * Create a new item.
     *
     * @param Request    $request
     * @param string|int $id
     *
     * @throws NotFoundHttpException
     * @throws RuntimeException
     * @throws UserProtectedException
     * @throws UserLimitReachedException
     *
     * @return mixed
     */
    public function __invoke(Request $request, $data)
    {
        /**
         * @var $data User
         */
        if ($data->isProtected()) {
            throw new UserProtectedException();
        }

        if ($data->isActive()) {
            if ($this->userService->checkUserLimit()) {
                throw new UserLimitReachedException();
            }
        }

        $this->userService->syncData($data);
        $data->setNewPassword('');
        $data->setPassword('');
        $data->setLegacy(false);

        return $data;
    }
}
