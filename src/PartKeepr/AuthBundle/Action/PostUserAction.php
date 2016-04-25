<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserLimitReachedException;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Serializer\SerializerInterface;

class PostUserAction
{
    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(
        DataProviderInterface $dataProvider,
        SerializerInterface $serializer,
        UserService $userService
    ) {
        $this->dataProvider = $dataProvider;
        $this->serializer = $serializer;
        $this->userService = $userService;
    }

    /**
     * Create a new item.
     *
     * @param Request $request
     *
     * @throws NotFoundHttpException
     * @throws RuntimeException
     * @throws UserLimitReachedException
     *
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = $this->extractAttributes($request);

        if ($this->userService->checkUserLimit() === true) {
            throw new UserLimitReachedException();
        }
        /**
         * @var User
         */
        $data = $this->serializer->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $resourceType->getDenormalizationContext()
        );

        $data->setProvider($this->userService->getBuiltinProvider());
        $data->setLegacy(false);
        $this->userService->syncData($data);

        $data->setNewPassword('');
        $data->setPassword('');

        return $data;
    }
}
