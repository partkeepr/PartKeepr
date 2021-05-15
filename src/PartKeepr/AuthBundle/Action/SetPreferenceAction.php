<?php

namespace PartKeepr\AuthBundle\Action;

use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Api\ResourceInterface;
use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
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
     * @throws \Exception                                 If the format is invalid
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.user_preference.set_preference"         # Controller
    /**
     * @Route(
     *     name="PartKeeprUserPreferenceSet",
     *     path="/user_preferences",
     *     defaults={"_api_resource_class"=User::class, "_api_collection_operation_name"="set_preference"}
     * )
     * @Method("POST")
     **/
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.user_preference.set_preference"         # Controller
    /**
     * @Route(
     *     name="PartKeeprUserPreferenceSet",
     *     path="/user_preferences",
     *     defaults={"_api_resource_class"=User::class, "_api_collection_operation_name"="set_preference"}
     * )
     * @Method("PUT")
     **/
    public function __invoke(Request $request)
    {
        $user = $this->userService->getUser();

        $data = json_decode($request->getContent());

        if (property_exists($data, 'preferenceKey') && property_exists($data, 'preferenceValue')) {
            $preference = $this->userPreferenceService->setPreference(
                $user,
                $data->preferenceKey,
                $data->preferenceValue
            );
        } else {
            throw new \Exception('Invalid format');
        }

        list($resourceType) = $this->extractAttributes($request);

        /*
         * @var ResourceInterface $resourceType
         */

        $serializedData = $this->serializer->normalize(
            $preference,
            'json',
            $resourceType->getNormalizationContext()
        );

        return new JsonResponse($serializedData);
    }
}
