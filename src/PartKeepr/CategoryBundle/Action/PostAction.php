<?php
namespace PartKeepr\CategoryBundle\Action;


use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\IriConverterInterface;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\CategoryBundle\Services\CategoryService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class PostAction
{
    use ActionUtilTrait;

    /**
     * @var CategoryService
     */
    private $categoryService;

    /**
     * @var IriConverterInterface
     */
    private $iriConverter;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    public function __construct(
        CategoryService $categoryService,
        IriConverterInterface $iriConverter,
        SerializerInterface $serializer
    ) {
        $this->categoryService = $categoryService;
        $this->iriConverter = $iriConverter;
        $this->serializer = $serializer;
    }

    /**
     * Injects the specific root node ID if "@local-tree-root" was specified
     *
     * @param Request $request
     *
     * @return mixed
     *
     * @throws RuntimeException
     */
    public function __invoke(Request $request)
    {
        /**
         * @var $resourceType ResourceInterface
         */
        list($resourceType, $format) = $this->extractAttributes($request);

        $data = $request->getContent();

        if (is_a($resourceType->getEntityClass(), $this->categoryService->getEntityClass(), true)) {
            $decodedData = json_decode($data);

            if (property_exists($decodedData, "parent") && $decodedData->parent == "@local-tree-root") {
                $root = $this->categoryService->getRootNode();
                $iri = $this->iriConverter->getIriFromItem($root);

                $decodedData->parent = $iri;
            }

            $data = json_encode($decodedData);
        }

        return $this->serializer->deserialize(
            $data,
            $resourceType->getEntityClass(),
            $format,
            $resourceType->getDenormalizationContext()
        );

    }
}
