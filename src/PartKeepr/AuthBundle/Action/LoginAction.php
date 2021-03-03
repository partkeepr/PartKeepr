<?php

namespace PartKeepr\AuthBundle\Action;

use PartKeepr\AuthBundle\Services\UserPreferenceService;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
#use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/users/login", name="PartKeeprAuthLogin")
 */
class LoginAction
{
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
