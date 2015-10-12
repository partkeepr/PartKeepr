<?php
namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\SetupBundle\Visitor\LegacyConfigVisitor;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Parser;

class ExistingConfigParserController extends SetupController
{
    /**
     * @Route("/setup/parseExistingConfig")
     */
    public function parseExistingConfigAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $response = $this->handleRequest($request, "/setup/_int_parse_config");

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_parse_config")
     */
    public function intParseExistingConfigAction(Request $request)
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Existing configuration imported successfully",
        );

        try {
            $legacyConfig = $this->legacyConfigParser();

            if (count($legacyConfig) == 0) {
                $response["message"] = "No configuration found";
            } else {
                $config = array(
                    "database" => array()
                );

                if (array_key_exists("partkeepr.database.driver", $legacyConfig)) {
                    $config["database"]["driver"] = $legacyConfig["partkeepr.database.driver"];
                }

                if (array_key_exists("partkeepr.database.host", $legacyConfig)) {
                    $config["database"]["host"] = $legacyConfig["partkeepr.database.host"];
                }

                if (array_key_exists("partkeepr.database.username", $legacyConfig)) {
                    $config["database"]["user"] = $legacyConfig["partkeepr.database.username"];
                }

                if (array_key_exists("partkeepr.database.password", $legacyConfig)) {
                    $config["database"]["password"] = $legacyConfig["partkeepr.database.password"];
                }

                if (array_key_exists("partkeepr.database.dbname", $legacyConfig)) {
                    $config["database"]["name"] = $legacyConfig["partkeepr.database.dbname"];
                }

                if (array_key_exists("partkeepr.database.port", $legacyConfig)) {
                    $config["database"]["port"] = $legacyConfig["partkeepr.database.port"];
                }

                $config["legacyAuth"] = true;
                $response["config"] = $config;
            }

            /*if (file_exists($this->getConfigPath(false))) {
                $yaml = new Parser();
                $data = $yaml->parse(file_get_contents($this->getConfigPath(false)));

                if (array_key_exists("parameters", $data)) {
                    if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["driver"] = $this->getParameter("database_driver");
                }

                if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["host"] = $this->getParameter("database_host");
                }

                if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["port"] = $this->getParameter("database_port");
                }

                if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["dbname"] = $this->getParameter("database_name");
                }

                if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["username"] = $this->getParameter("database_user");
                }

                if (array_key_exists("database_driver", $data["parameters"])) {
                    $config["database"]["password"] = $this->getParameter("database_password");
                }
                }
            }*/



        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Configuration parse error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    protected function legacyConfigParser () {
        if (file_exists($this->getLegacyAuthConfigPath())) {
            $parser = new \PHPParser_Parser(new \PHPParser_Lexer());
            $traverser = new \PHPParser_NodeTraverser();
            $traverser->addVisitor(new LegacyConfigVisitor());
            $statements = $parser->parse(file_get_contents($this->getLegacyAuthConfigPath()));
            $traverser->traverse($statements);

            return LegacyConfigVisitor::getConfigValues();
        }

        return array();
    }

    protected function getLegacyAuthConfigPath () {
        return dirname(__FILE__)."/../../../../config.php";
    }

}
