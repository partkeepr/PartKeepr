<?php

namespace PartKeepr\SetupBundle\Controller;

use Doctrine\DBAL\Exception\DriverException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_test_connectivity")
     */
    public function intTestConnectivityAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Connection successful',
        ];

        try {
            $this->get('doctrine.dbal.default_connection')->connect();
        } catch (DriverException $e) {
            $response['success'] = false;
            $response['message'] = 'Connection Error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/_int_test_dbversion")
     */
    public function intTestDBVersionAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Connection successful',
        ];

        try {
            $db = $this->get('doctrine.dbal.default_connection');
            $db->connect();
        } catch (DriverException $e) {
            $response['success'] = false;
            $response['message'] = 'Connection Error';
            $response['errors'] = [$e->getMessage()];

            return new JsonResponse($response);
        }

        $retArr = $db->fetchArray("SELECT version();");
        $version = $retArr[0];

        if (preg_match('/^([0-9]*)\.([0-9]*)\.([0-9]*)-mariadb.*/i', $version, $matches)) {
            // We are running mariadb. This could cause problems.
            $major = $matches[1];
            $minor = $matches[2];
            if ($major == 10 && $minor >= 2) {
                $response['success'] = false;
                $response['message'] = 'Incompatible MariaDB version';
                $response['errors'] = ['Current dependency Symfony is incompatible with MariaDB >= 10.2.'];

                return new JsonResponse($response);
            }
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/testDBVersion")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function testDBVersionAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, '/setup/_int_test_dbversion');

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/testConnectivity")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function testConnectivityAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, '/setup/_int_test_connectivity');

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/saveConfig")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function saveConfigAction(Request $request)
    {
        $this->dumpConfig($request, false);

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Configuration saved successful',
        ];

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/webserverTest")
     */
    public function webserverTestAction()
    {
        $response = [
            'success' => true,
            'message' => 'Web Server configuration OK',
            'errors'  => [],
        ];

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/generateAuthKey")
     */
    public function generateAuthKeyAction()
    {
        $response = [
            'success' => true,
            'message' => 'Auth key successfully generated',
            'errors'  => [],
        ];

        $parameters = [
            'authkey' => $this->get('partkeepr.setup.config_service')->generateSecret(),
        ];

        $contents = $this->container->get('templating')->render('PartKeeprSetupBundle::authkey.php.twig', $parameters);
        file_put_contents($this->get('partkeepr.setup.config_service')->getAuthKeyPath(), $contents);

        return new JsonResponse($response);
    }
}
