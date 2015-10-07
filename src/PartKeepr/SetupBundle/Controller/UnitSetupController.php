<?php


namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use PartKeepr\UnitBundle\Entity\Unit;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Parser;

class UnitSetupController extends SetupController
{
    const UNIT_PATH = "@PartKeeprSetupBundle/Resources/setup-data/";
    const UNIT_DATA = "units.yml";

    /**
     * @Route("/setup/_int_create_units")
     */
    public function intCreateUnitsAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Default units successfully created/updated",
        );

        $path = $this->get("kernel")->locateResource(self::UNIT_PATH.self::UNIT_DATA);

        try {
            $yaml = new Parser();
            $data = $yaml->parse(file_get_contents($path));

            $entityManager = $this->get("doctrine.orm.default_entity_manager");

            foreach ($data as $unitName => $unitData) {
                $unit = $this->getUnit($unitName);

                if ($unit === null) {
                    $unit = new Unit();
                    $unit->setName($unitName);
                    $unit->setSymbol($unitData["symbol"]);

                    if (array_key_exists("prefixes", $unitData)) {
                        if (!is_array($unitData["prefixes"])) {
                            throw new \Exception($unitName." doesn't contain a prefix list, or the prefix list is not an array.");
                        }

                        foreach ($unitData["prefixes"] as $name) {
                            $prefix = $this->getSiPrefix($name);
                            if ($prefix === null) {
                                throw new \Exception("Unable to find SI Prefix ".$name);
                            }

                            $unit->getPrefixes()->add($prefix);
                        }
                    }
                    $entityManager->persist($unit);
                    $entityManager->flush();
                }
            }

        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Unit creation error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createUnits")
     */
    public function createUnitAction(Request $request)
    {
        $response = $this->handleRequest($request, "/setup/_int_create_units");

        return new Response($response->getContent());
    }

    /**
     * Checks if the specified SI Prefix
     *
     * @param string $name The footprint name
     */
    protected function getUnit($name)
    {
        $repository = $this->get("doctrine.orm.default_entity_manager")->getRepository("PartKeeprUnitBundle:Unit");

        return $repository->findOneBy(array("name" => $name));
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
