<?php

namespace PartKeepr\PartBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Exceptions\InternalPartNumberNotUniqueException;
use PartKeepr\PartBundle\Exceptions\PartLimitExceededException;
use PartKeepr\PartBundle\Services\PartService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;

class PartPostAction
{
//    use ActionUtilTrait;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var PartService
     */
    private $partService;

    public function __construct(
        SerializerInterface $serializer,
        PartService $partService
    ) {
        $this->serializer = $serializer;
        $this->partService = $partService;
    }

    /**
     * Injects the specific root node ID if "@local-tree-root" was specified.
     *
     * @param Request $request
     *
     * @throws RuntimeException
     * @throws PartLimitExceededException
     * @throws InternalPartNumberNotUniqueException
     *
     * @return mixed
     */
    /**
     * @Route(
     *     name="PartPost",
     *     path="/parts",
     *     defaults={"_api_resource_class"=Part::class, "_api_collection_operation_name"="custom_post"},
     *     methods={"POST"}
     * )
     **/
    public function __invoke(Request $request)
    {
        if ($this->partService->checkPartLimit()) {
            throw new PartLimitExceededException();
        }

        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = RequestAttributesExtractor::extractAttributes($request);

        /**
         * @var Part
         */
        $part = $this->serializer->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $resourceType->getDenormalizationContext()
        );

        if (!$this->partService->isInternalPartNumberUnique($part->getInternalPartNumber())) {
            throw new InternalPartNumberNotUniqueException();
        }

        return $part;
    }
}
