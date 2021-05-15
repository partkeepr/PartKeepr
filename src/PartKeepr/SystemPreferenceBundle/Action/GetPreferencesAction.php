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
class GetPreferencesAction
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
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return JsonResponse
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.system_preference.get_preferences"         # Controller
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceGet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="get_preferences"}
     * )
     * @Method("GET")
     **/
    public function __invoke(Request $request)
    {
        $preferences = $this->systemPreferenceService->getPreferences();

        /**
         * @var ResourceInterface
         */
        list($resourceType) = $this->extractAttributes($request);

        /*
         * @var ResourceInterface $resourceType
         */
        $serializedData = $this->serializer->normalize(
            $preferences,
            'json',
            $resourceType->getNormalizationContext()
        );

        return new JsonResponse($serializedData);
    }
}
