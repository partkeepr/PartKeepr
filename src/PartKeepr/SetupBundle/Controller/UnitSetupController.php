<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UnitSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_create_units")
     */
    public function intCreateUnitsAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Default units successfully created/updated',
        ];

        try {
            $this->get('partkeepr.setup.unit_service')->importUnits();
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Unit creation error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createUnits")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createUnitAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_create_units');

        return new Response($response->getContent());
    }
}
