<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PartUnitSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/createPartUnits")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createPartUnitsAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_create_part_units');

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_create_part_units")
     */
    public function intCreatePartUnitsAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Default part unit successfully created',
        ];

        try {
            $this->get('partkeepr.setup.part_unit_service')->setupDefaultPartUnit();
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Part unit setup error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }
}
