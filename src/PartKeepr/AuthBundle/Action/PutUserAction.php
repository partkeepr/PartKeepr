<?php

namespace PartKeepr\AuthBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserLimitReachedException;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;

class PutUserAction
{
//    use ActionUtilTrait;

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
    /**
     * @Route(
     *     name="PartKeeprUserPut",
     *     path="/users/{id}",
     *     defaults={"_api_resource_class"=User::class, "_api_item_operation_name"="put_custom"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = RequestAttributesExtractor::extractAttributes($request);

        /**
         * @var User
         */
        $data = $this->getItem($this->dataProvider, $resourceType, $id);

        $context = $resourceType->getDenormalizationContext();
        $context['object_to_populate'] = $data;

        if ($data->isProtected()) {
            throw new UserProtectedException();
        }

        $data = $this->serializer->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $context
        );

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
