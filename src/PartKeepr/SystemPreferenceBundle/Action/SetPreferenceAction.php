<?php

namespace PartKeepr\SystemPreferenceBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\SystemPreferenceBundle\Service\SystemPreferenceService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Returns the tree root node.
 */
class SetPreferenceAction
{
//    use ActionUtilTrait;

    /**
     * @var SystemPreferenceService
     */
    private $systemPreferenceService;

    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct(
        SystemPreferenceService $systemPreferenceService,
        Serializer $serializer
    ) {
        $this->systemPreferenceService = $systemPreferenceService;
        $this->serializer = $serializer;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws \Exception                                 If the format is invalid
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return JsonResponse
     */
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceSet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"},
     *     methods={"POST"}
     * )
     **/
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceSet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request)
    {
        $data = json_decode($request->getContent());

        if (property_exists($data, 'preferenceKey') && property_exists($data, 'preferenceValue')) {
            $preference = $this->systemPreferenceService->setSystemPreference(
                $data->preferenceKey,
                $data->preferenceValue
            );
        } else {
            throw new \Exception('Invalid format');
        }

        /**
         * @var ResourceInterface
         */
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        $serializedData = $this->serializer->normalize(
            $preference,
            'json',
            $resourceType->getNormalizationContext()
        );

        return new JsonResponse($serializedData);
    }
}
