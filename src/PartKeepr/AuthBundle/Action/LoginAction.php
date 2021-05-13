<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;

class LoginAction
{
    use ActionUtilTrait;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var Serializer
     */
    private $serializer;

    /**
     * @var UserPreferenceService
     */
    private $userPreferenceService;

    public function __construct(
        UserService $userService,
        Serializer $serializer,
        UserPreferenceService $userPreferenceService
    ) {
        $this->userService = $userService;
        $this->serializer = $serializer;
        $this->userPreferenceService = $userPreferenceService;
    }

    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.auth.login"         # Controller
    /**
     * @Route(
     *     name="PartKeeprAuthLogin",
     *     path="/users/login",
     *     defaults={"_api_resource_class"=User::class, "_api_item_operation_name"="login"}
     * )
     * @Method("POST")
     **/
    public function __invoke(Request $request)
    {
        $user = $this->userService->getUser();

        $userPreferences = $this->userPreferenceService->getPreferences($user);

        $arrayUserPreferences = [];

        foreach ($userPreferences as $userPreference) {
            $arrayUserPreferences[] = [
                'preferenceKey'   => $userPreference->getPreferenceKey(),
                'preferenceValue' => $userPreference->getPreferenceValue(),
            ];
        }

        $user->setInitialUserPreferences(json_encode($arrayUserPreferences));

        return $user;
    }
}
