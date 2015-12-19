<?php
namespace PartKeepr\SetupBundle\Controller;

use Doctrine\DBAL\Exception\DriverException;
use PartKeepr\SetupBundle\Services\ConfigSetupService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SetupController extends Controller
{
    /**
     * @Route("/setup/_int_test_connectivity")
     */
    public function intTestConnectivityAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Connection successful",
        );

        try {
            $this->get("doctrine.dbal.default_connection")->connect();
        } catch (DriverException $e) {
            $response["success"] = false;
            $response["message"] = "Connection Error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }


    /**
     * @Route("/setup/testConnectivity")
     * @param Request $request
     *
     * @return Response
     */
    public function testConnectivityAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, "/setup/_int_test_connectivity");

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/saveConfig")
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function saveConfigAction(Request $request)
    {
        $this->dumpConfig($request, false);


        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Configuration saved successful",
        );

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/webserverTest")
     */
    public function webserverTestAction()
    {
        $response = array(
            "success" => true,
            "message" => "Web Server configuration OK",
            "errors" => array(),
        );

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/generateAuthKey")
     */
    public function generateAuthKeyAction()
    {
        $response = array(
            "success" => true,
            "message" => "Auth key successfully generated",
            "errors" => array(),
        );

        $parameters = array(
            "authkey" => $this->get("partkeepr.setup.config_service")->generateSecret()
        );

        $contents = $this->container->get('templating')->render('PartKeeprSetupBundle::authkey.php.twig', $parameters);
        file_put_contents($this->getAuthKeyPath(), $contents);

        return new JsonResponse($response);
    }


    protected function handleRequest(Request $request, $uri, $parameters = array(), $environment = "setup_test")
    {
        $data = json_decode($request->getContent(), true);
        if (!array_key_exists("authKey", $data) || !$this->verifyAuthKey($data["authKey"])) {
            $response["success"] = false;
            $response["message"] = "Invalid Authentication Key";
            $response["errors"] = array();

            return new JsonResponse($response);
        }

        try {
            $kernel = new \AppKernel($environment, true);
            $internalRequest = Request::create($uri, "GET", $parameters);

            return $kernel->handle($internalRequest);
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Generic Error";
            $response["errors"] = [$e->getMessage()];

            return new JsonResponse($response);
        }
    }

    protected function verifyAuthKey($givenKey)
    {
        $findText = "Your auth key is: ";

        $data = file_get_contents($this->getAuthKeyPath());
        $position = strpos($data, $findText);

        $key = substr($data, $position + strlen($findText), ConfigSetupService::KEY_LENGTH);

        if ($key === $givenKey) {
            return true;
        }

        return false;
    }

    protected function dumpConfig(Request $request, $test = true)
    {
        $data = json_decode($request->getContent(), true);

        $configService = $this->get("partkeepr.setup.config_service");

        $config = $configService->getConfig($data["values"]);

        file_put_contents($configService->getConfigPath($test), $config);
    }

    private function getAuthKeyPath()
    {
        return dirname(__FILE__)."/../../../../app/authkey.php";
    }


}
