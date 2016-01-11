<?php
namespace PartKeepr\PartBundle\Action;


use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\AuthBundle\Exceptions\UserLimitReachedException;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Serializer\SerializerInterface;

class PartPutAction
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

    public function __construct(
        DataProviderInterface $dataProvider,
        SerializerInterface $serializer
    ) {
        $this->dataProvider = $dataProvider;
        $this->serializer = $serializer;
    }

    /**
     * Create a new item.
     *
     * @param Request $request
     * @param string|int $id
     *
     * @return mixed
     *
     * @throws NotFoundHttpException
     * @throws RuntimeException
     * @throws UserProtectedException
     * @throws UserLimitReachedException
     * @throws \Exception If a stockLevels attribute is found in the request
     */
    public function __invoke(Request $request, $id)
    {
         /**
         * @var $resourceType ResourceInterface
         */
        list($resourceType, $format) = $this->extractAttributes($request);

        /**
         * Workaround to ensure stockLevels are not overwritten in a PUT request.
         * @see https://github.com/partkeepr/PartKeepr/issues/551
         */
        $data = json_decode($request->getContent());

        if (property_exists($data, "stockLevels")) {
            throw new \Exception("stockLevels may not be written in a PUT request!");
        }

        $data = $this->getItem($this->dataProvider, $resourceType, $id);

        $context = $resourceType->getDenormalizationContext();
        $context['object_to_populate'] = $data;

        $data = $this->serializer->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $context
        );

        return $data;
    }
}
