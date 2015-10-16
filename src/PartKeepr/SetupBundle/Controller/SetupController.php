<?php
namespace PartKeepr\SetupBundle\Controller;

use Doctrine\DBAL\Exception\DriverException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SetupController extends Controller
{
    const KEY_LENGTH = 32;

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
     */
    public function testConnectivityAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, "/setup/_int_test_connectivity");

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/saveConfig")
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
     * @Route("/setup/generateAuthKey")
     */
    public function generateAuthKeyAction()
    {
        $response  = array(
            "success" => true,
            "message" => "Auth key successfully generated",
            "errors" => array()
        );

        $parameters = array(
            "authkey" => $this->generateSecret()
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

    protected function generateSecret () {
        $secret = "";
        for ($i = 0; $i < self::KEY_LENGTH; $i++) {
            $secret .= chr(65 + rand(0, 16));
        }
        return  $secret;


    }

    protected function verifyAuthKey ($givenKey) {
        $findText = "Your auth key is: ";

        $data = file_get_contents($this->getAuthKeyPath());
        $position = strpos($data, $findText);

        $key = substr($data, $position + strlen($findText), self::KEY_LENGTH);

        if ($key === $givenKey) {
            return true;
        }

        return false;
    }

    protected function dumpConfig(Request $request, $test = true)
    {
        $data = json_decode($request->getContent(), true);

        $parameters = array();
        $parameters["database"] = array(
            "driver" => null,
            "host" => null,
            "user" => null,
            "password" => null,
            "name" => null,
            "port" => 3306,
        );

        $parameters["mailer"] = array(
            "transport" => null,
            "host" => null,
            "port" => null,
            "encryption" => null,
            "username" => null,
            "password" => null,
            "auth_mode" => null,
        );

        $parameters["ldap"] = array(
            "enabled" => "false",
            "host" => "127.0.0.1",
            "port" => null,
            "username" => null,
            "password" => null,
            "bindrequiresdn" => false,
            "basedn" => "",
            "ssl" => null,
            "starttls" => null,
            "user_basedn" => "dc=blabla,dc=com",
            "user_filter" => null,
            "user_username" => null,
            "user_name" => null,
            "user_email" => null,
        );

        $parameters["legacyAuth"] = false;

        $secret = "";
        for ($i = 0; $i < 32; $i++) {
            $secret .= chr(65 + rand(0, 16));
        }
        $parameters["secret"] = $this->generateSecret();


        if (array_key_exists("database", $data)) {
            $parameters["database"] = $this->applyIf($parameters["database"], $data["database"]);
        }

        if (array_key_exists("mailer", $data)) {
            $parameters["mailer"] = $this->applyIf($parameters["mailer"], $data["mailer"]);
        }

        if (array_key_exists("ldap", $data)) {
            $parameters["ldap"] = $this->applyIf($parameters["ldap"], $data["ldap"]);
        }

        if (array_key_exists("legacyAuth", $data)) {
            $parameters["legacyAuth"] = $data["legacyAuth"];
        }

        array_walk_recursive($parameters, function (&$item, $key) { $item = var_export($item, true); });


        $contents = $this->container->get('templating')->render('PartKeeprSetupBundle::parameters.php.twig', $parameters);

        file_put_contents($this->getConfigPath($test), $contents);
    }

    private function applyIf($target, $source)
    {
        foreach ($target as $key => $value) {
            if (array_key_exists($key, $source)) {
                $target[$key] = $source[$key];
            }
        }

        return $target;
    }

    private function getAuthKeyPath () {
        return dirname(__FILE__)."/../../../../app/authkey.php";
    }

    protected function getConfigPath ($test) {
        if ($test) {
            $filename = "parameters_setup.php";
        } else {
            $filename = "parameters.php";
        }
        return dirname(__FILE__)."/../../../../app/config/".$filename;
    }

}
