<?php

namespace PartKeepr\SystemPreferenceBundle\Action;

use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\SystemPreferenceBundle\Service\SystemPreferenceService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;

/**
 * Returns the tree root node.
 */
class SetPreferenceAction
{
    use ActionUtilTrait;

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
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.system_preference.set_preference"         # Controller
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceSet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"}
     * )
     * @Method("POST")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.system_preference.set_preference"         # Controller
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceSet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"}
     * )
     * @Method("PUT")
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
        list($resourceType) = $this->extractAttributes($request);

        $serializedData = $this->serializer->normalize(
            $preference,
            'json',
            $resourceType->getNormalizationContext()
        );

        return new JsonResponse($serializedData);
    }
}
