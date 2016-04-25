<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class SetupBaseController extends Controller
{
    /**
     * Handles the given request by setting up a setup_test environment.
     *
     * @param Request $request
     * @param         $uri
     * @param array   $parameters
     * @param string  $environment
     *
     * @return JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    protected function handleRequest(Request $request, $uri, $parameters = [], $environment = 'setup_test')
    {
        $data = json_decode($request->getContent(), true);
        if (!array_key_exists('authKey', $data) || !$this->verifyAuthKey($data['authKey'])) {
            $response['success'] = false;
            $response['message'] = 'Invalid Authentication Key';
            $response['errors'] = [];

            return new JsonResponse($response);
        }

        $parameters['authKey'] = $data['authKey'];

        try {
            $kernel = new \AppKernel($environment, true);

            $internalRequest = Request::create($uri, 'GET', $parameters);

            return $kernel->handle($internalRequest);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Generic Error';
            $response['errors'] = [$e->getMessage()];

            return new JsonResponse($response);
        }
    }

    protected function ensureAuthKey(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (!is_array($data) || !array_key_exists('authKey', $data) || !$this->verifyAuthKey($data['authKey'])) {
            if ($request->query->has('authKey') && $this->verifyAuthKey($request->query->get('authKey'))) {
                return true;
            }

            return false;
        } else {
            return true;
        }
    }

    protected function getAuthKeyErrorResponse()
    {
        $response['success'] = false;
        $response['message'] = 'Invalid Authentication Key';
        $response['errors'] = [];

        return new JsonResponse($response);
    }

    protected function verifyAuthKey($givenKey)
    {
        $key = $this->get('partkeepr.setup.config_service')->getAuthKey();

        if ($key === $givenKey) {
            return true;
        }

        return false;
    }

    protected function dumpConfig(Request $request, $test = true)
    {
        $data = json_decode($request->getContent(), true);

        $configService = $this->get('partkeepr.setup.config_service');

        $config = $configService->getConfig($data['values']);

        file_put_contents($configService->getConfigPath($test), $config);
    }
}
