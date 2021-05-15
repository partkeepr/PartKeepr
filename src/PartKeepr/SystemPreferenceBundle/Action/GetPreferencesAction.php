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
class GetPreferencesAction
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
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return JsonResponse
     */
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceGet",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="get_preferences"},
     *     methods={"GET"}
     * )
     **/
    public function __invoke(Request $request)
    {
        $preferences = $this->systemPreferenceService->getPreferences();

        /**
         * @var ResourceInterface
         */
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

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
