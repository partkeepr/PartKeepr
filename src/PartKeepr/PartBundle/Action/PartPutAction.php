<?php

namespace PartKeepr\PartBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Exceptions\UserLimitReachedException;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Exceptions\InternalPartNumberNotUniqueException;
use PartKeepr\PartBundle\Services\PartService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Serializer\SerializerInterface;

class PartPutAction
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
     * @var PartService
     */
    private $partService;

    public function __construct(
        DataProviderInterface $dataProvider,
        SerializerInterface $serializer,
        PartService $partService
    ) {
        $this->dataProvider = $dataProvider;
        $this->serializer = $serializer;
        $this->partService = $partService;
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
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.part.put"        # Controller
    /**
     * @Route(
     *     name="PartPut",
     *     path="/parts/{id}",
     *     defaults={"_api_resource_class"=Part::class, "_api_item_operation_name"="custom_put"}
     * )
     * @Method("PUT")
     **/
    public function __invoke(Request $request, $id)
    {
        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = RequestAttributesExtractor::extractAttributes($request);

        /*
         * Workaround to ensure stockLevels are not overwritten in a PUT request.
         * @see https://github.com/partkeepr/PartKeepr/issues/551
         */
        $data = json_decode($request->getContent(), true);

        if (array_key_exists('stockLevels', $data)) {
            unset($data['stockLevels']);
        }

        $requestData = json_encode($data);

        $data = $this->getItem($this->dataProvider, $resourceType, $id);

        $context = $resourceType->getDenormalizationContext();
        $context['object_to_populate'] = $data;

        /**
         * @var Part
         */
        $part = $this->serializer->deserialize(
            $requestData,
            $resourceType->getEntityClass(),
            $format,
            $context
        );

        if (!$this->partService->isInternalPartNumberUnique($part->getInternalPartNumber(), $part)) {
            throw new InternalPartNumberNotUniqueException();
        }

        return $part;
    }
}
