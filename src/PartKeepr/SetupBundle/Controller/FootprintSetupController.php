<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FootprintSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_create_footprints")
     */
    public function intCreateFootprints(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Default footprints successfully created',
        ];

        try {
            $this->get('partkeepr.setup.footprint_service')->importFootprints();
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Footprint creation error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createFootprints")
     *
     * @param Request $request
     */
    public function createFootprintsAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_create_footprints');

        return new Response($response->getContent());
    }
}
