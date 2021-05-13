<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
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
     * @var UserService
     */
    private $userService;

    /**
     * @var UserPreferenceService
     */
    private $userPreferenceService;

    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct(
        UserService $userService,
        UserPreferenceService $userPreferenceService,
        Serializer $serializer
    ) {
        $this->userService = $userService;
        $this->userPreferenceService = $userPreferenceService;
        $this->serializer = $serializer;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.user_preference.get_preferences"         # Controller
    /**
     * @Route(
     *     name="PartKeeprUserPreferenceGet",
     *     path="/user_preferences",
     *     defaults={"_api_resource_class"=User::class, "_api_collection_operation_name"="get_preferences"}
     * )
     * @Method("GET")
     **/
    public function __invoke(Request $request)
    {
        $user = $this->userService->getUser();

        $preferences = $this->userPreferenceService->getPreferences($user);

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
