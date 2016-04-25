<?php

namespace PartKeepr\SetupBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ExistingUserSetupController extends SetupBaseController
{
    /**
     * Checks if there are existing userds in the database.
     *
     * @Route("/setup/testExistingUsers")
     */
    public function testExistingUsersAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $this->dumpConfig($request);

        $response = $this->handleRequest($request, '/setup/_int_test_existing_users');

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_test_existing_users")
     */
    public function intTestExistingUsersAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $legacyUsersDQL = "SELECT COUNT(u) FROM PartKeepr\AuthBundle\Entity\User u WHERE u.legacy = true";

        $legacyUsersQuery = $this->get('doctrine.orm.default_entity_manager')->createQuery($legacyUsersDQL);

        $totalUsersDQL = "SELECT COUNT(u) FROM PartKeepr\AuthBundle\Entity\User u";

        $totalUsersQuery = $this->get('doctrine.orm.default_entity_manager')->createQuery($totalUsersDQL);

        $response = [
            'success'     => true,
            'legacyUsers' => (int) $legacyUsersQuery->getSingleScalarResult(),
            'totalUsers'  => (int) $totalUsersQuery->getSingleScalarResult(),
            'errors'      => [],
            'message'     => 'No existing users found',
        ];

        if ($totalUsersQuery->getSingleScalarResult() > 0) {
            $response['message'] = 'Existing users found';
        }

        return new JsonResponse($response);
    }
}
