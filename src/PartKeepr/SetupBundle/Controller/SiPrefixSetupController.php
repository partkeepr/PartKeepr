<?php


namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Parser;

class SiPrefixSetupController extends SetupController
{
    const SIPREFIX_PATH = "@PartKeeprSetupBundle/Resources/setup-data/";
    const SIPREFIX_DATA = "siprefixes.yml";

    /**
     * @Route("/setup/_int_create_si_prefixes")
     */
    public function intCreateSiPrefixes()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "SI Prefixes successfully created/updated",
        );

        $path = $this->get("kernel")->locateResource(self::SIPREFIX_PATH.self::SIPREFIX_DATA);

        try {
            $yaml = new Parser();
            $data = $yaml->parse(file_get_contents($path));

            $entityManager = $this->get("doctrine.orm.default_entity_manager");

            foreach ($data as $prefixName => $prefixData) {
                $prefix = $this->getSiPrefix($prefixName);

                if ($prefix === null) {
                    $prefix = new SiPrefix();
                    $prefix->setPrefix($prefixName);
                    $entityManager->persist($prefix);
                }

                $prefix->setExponent($prefixData["exponent"]);
                $prefix->setSymbol($prefixData["symbol"]);
                $prefix->setBase($prefixData["base"]);


            }
            $entityManager->flush();
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "SI Prefix creation error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createSiPrefixes")
     */
    public function createSiPrefixesAction(Request $request)
    {
        $response = $this->handleRequest($request, "/setup/_int_create_si_prefixes");

        return new Response($response->getContent());
    }

    /**
     * Finds an SI Prefix by name
     *
     * @param string $name The SI Prefix name
     * @return SiPrefix|null
     */
    protected function getSiPrefix($name)
    {
        $repository = $this->get("doctrine.orm.default_entity_manager")->getRepository("PartKeeprSiPrefixBundle:SiPrefix");
        return $repository->findOneBy(array("prefix" => $name));
    }
}
