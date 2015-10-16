<?php


namespace PartKeepr\PartBundle\Action;

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

        $decodedData = json_decode($data);

        $localTreeExists = false;
        if (property_exists($decodedData,"category") && $decodedData->category == "@local-tree-root") {
            $localTreeExists = true;

        }

        if (property_exists($decodedData,"category") && is_object($decodedData->category) && property_exists($decodedData->category, "@id") && $decodedData->category->{"@id"} == "@local-tree-root") {
            $localTreeExists = true;
        }

        if ($localTreeExists === true) {
            $root = $this->categoryService->getRootNode();
            $iri = $this->iriConverter->getIriFromItem($root);

            $decodedData->category = $iri;
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
