<?php

namespace PartKeepr\AuthBundle\Action;

<<<<<<< HEAD
use Partkeepr\AuthBundle\Entity\User;
=======
//use Dunglas\ApiBundle\Action\ActionUtilTrait;
>>>>>>> 88002e0e118dd92f0c8ad054bce098947c3e13b4
use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;

class LoginAction
{
<<<<<<< HEAD
=======
    //   use ActionUtilTrait;

>>>>>>> 88002e0e118dd92f0c8ad054bce098947c3e13b4
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

    /**
     * @Route(
     *     name="user_login",
     *     path="/user/login",
     *     defaults={"_api_resource_class"=User::class, "_api_item_operation_name"="PartKeeprAuthLogin"}
     * )
     * @Method("POST")
     */
    public function __invoke($data)
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
