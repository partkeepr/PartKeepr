<?php

namespace PartKeepr\SystemPreferenceBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
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
