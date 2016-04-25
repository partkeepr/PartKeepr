<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminUserSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/createUser")
     */
    public function createUserAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $response = $this->handleRequest($request, '/setup/_int_create_user', $data['adminuser']);

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_create_user")
     */
    public function intCreateUserAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $data = json_decode($request->getContent(), true);
        if (!array_key_exists('authKey', $data) || !$this->verifyAuthKey($data['authKey'])) {
            $response['success'] = false;
            $response['message'] = 'Invalid Authentication Key';
            $response['errors'] = [];

            return new JsonResponse($response);
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Admin user successfully created',
        ];

        try {
            $manager = $this->get('fos_user.user_manager');
            $user = $manager->findUserByUsername($request->query->get('username'));

            if ($user === null) {
                $manipulator = $this->get('fos_user.util.user_manipulator');
                $manipulator->create($request->query->get('username'), $request->query->get('password'),
                    $request->query->get('email'), true, true);
            }
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'User creation error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }
}
