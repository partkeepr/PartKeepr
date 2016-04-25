<?php

namespace PartKeepr\PartBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\PartBundle\Exceptions\PartLimitExceededException;
use PartKeepr\PartBundle\Services\PartService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class PostAction
{
    use ActionUtilTrait;

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
     *
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        /*
         * @var $resourceType ResourceInterface
         */
        if ($this->partService->checkPartLimit()) {
            throw new PartLimitExceededException();
        }

        list($resourceType, $format) = $this->extractAttributes($request);

        return $this->serializer->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $resourceType->getDenormalizationContext()
        );
    }
}
