<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ManufacturerSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_create_manufacturers")
     */
    public function intCreateManufacturersAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Default manufacturers successfully created',
        ];

        try {
            $this->get('partkeepr.setup.manufacturer_service')->importManufacturers();
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Manufacturers creation error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createManufacturers")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createManufacturersAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_create_manufacturers');

        return new Response($response->getContent());
    }
}
