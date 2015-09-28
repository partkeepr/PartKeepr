<?php


namespace PartKeepr\AuthBundle\Action;


use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;

class LoginAction
{
    use ActionUtilTrait;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct(
        UserService $userService,
        Serializer $serializer
    ) {
        $this->userService = $userService;
        $this->serializer = $serializer;
    }

    public function __invoke (Request $request) {
        $user = $this->userService->getUser();

        return $user;
    }
}
