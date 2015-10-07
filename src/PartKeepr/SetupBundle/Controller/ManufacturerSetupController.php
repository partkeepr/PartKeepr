<?php
namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\ManufacturerBundle\Entity\Manufacturer;
use PartKeepr\ManufacturerBundle\Entity\ManufacturerICLogo;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Parser;

class ManufacturerSetupController extends SetupController
{
    const MANUFACTURER_PATH = "@PartKeeprSetupBundle/Resources/setup-data/manufacturers/";
    const MANUFACTURER_DATA = "manufacturers.yml";

    /**
     * @Route("/setup/_int_create_manufacturers")
     */
    public function intCreateManufacturersAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Default manufacturers successfully created",
        );

        $path = $this->get("kernel")->locateResource(self::MANUFACTURER_PATH.self::MANUFACTURER_DATA);

        $skipped = 0;

        try {
            $yaml = new Parser();
            $data = $yaml->parse(file_get_contents($path));

            $entityManager = $this->get("doctrine.orm.default_entity_manager");

            foreach ($data as $manufacturerName => $manufacturerData) {
                if ($this->manufacturerExists($manufacturerName)) {
                    $skipped++;
                    continue;
                }

                $this->createManufacturer($manufacturerName, $manufacturerData);
            }

            $entityManager->flush();
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Manufacturers creation error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createManufacturers")
     */
    public function createManufacturersAction(Request $request)
    {
        $response = $this->handleRequest($request, "/setup/_int_create_manufacturers");

        return new Response($response->getContent());
    }

    protected function createManufacturer($manufacturerName, $manufacturerData)
    {
        $fileService = $this->get("partkeepr_uploadedfile_service");

        $manufacturer = new Manufacturer();
        $manufacturer->setName($manufacturerName);

        if (array_key_exists("iclogos", $manufacturerData)) {

            foreach ($manufacturerData["iclogos"] as $icLogo) {
                $manufacturerIcLogo = new ManufacturerICLogo();

                $file = $this->get("kernel")->locateResource(self::MANUFACTURER_PATH.$icLogo);
                $fileService->replaceFromFilesystem($manufacturerIcLogo, new File($file));

                $manufacturer->addIcLogo($manufacturerIcLogo);
            }
        }

        $this->get("doctrine.orm.default_entity_manager")->persist($manufacturer);
    }


    /**
     * Checks if the specified manufacturer exists
     *
     * @param string $name The manufacturer name
     */
    protected function manufacturerExists($name)
    {
        $dql = "SELECT COUNT(m) FROM PartKeepr\ManufacturerBundle\Entity\Manufacturer m WHERE m.name = :name";
        $query = $this->get("doctrine.orm.default_entity_manager")->createQuery($dql);
        $query->setParameter("name", $name);

        if ($query->getSingleScalarResult() == 0) {
            return false;
        } else {
            return true;
        }
    }
}
