<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SiPrefixSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_create_si_prefixes")
     */
    public function intCreateSiPrefixes(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'SI Prefixes successfully created/updated',
        ];

        try {
            $this->get('partkeepr.setup.si_prefix_service')->importSiPrefixes();
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'SI Prefix creation error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createSiPrefixes")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function createSiPrefixesAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_create_si_prefixes');

        return new Response($response->getContent());
    }
}
