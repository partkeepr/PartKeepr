<?php
namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\FootprintBundle\Entity\Footprint;
use PartKeepr\FootprintBundle\Entity\FootprintCategory;
use PartKeepr\FootprintBundle\Entity\FootprintImage;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Parser;

class FootprintSetupController extends SetupController
{
    const FOOTPRINT_PATH = "@PartKeeprSetupBundle/Resources/setup-data/footprints/";
    const FOOTPRINT_DATA = "footprints.yml";

    /**
     * @Route("/setup/_int_create_footprints")
     */
    public function intCreateFootprints()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Default footprints successfully created",
        );

        $path = $this->get("kernel")->locateResource(self::FOOTPRINT_PATH.self::FOOTPRINT_DATA);

        $skipped = 0;

        try {
            $yaml = new Parser();
            $data = $yaml->parse(file_get_contents($path));

            $entityManager = $this->get("doctrine.orm.default_entity_manager");

            foreach ($data as $footprintName => $footprintData) {
                if ($this->footprintExists($footprintName)) {
                    $skipped++;
                    continue;
                }

                $this->createFootprint($footprintName, $footprintData);
            }

            $entityManager->flush();
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Footprint creation error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/createFootprints")
     */
    public function createFootprintsAction(Request $request)
    {
        $response = $this->handleRequest($request, "/setup/_int_create_footprints");

        return new Response($response->getContent());
    }

    protected function createFootprint($footprintName, $footprintData)
    {
        $fileService = $this->get("partkeepr_uploadedfile_service");

        $footprintCategoryService = $this->get("partkeepr.footprint.category_service");
        $footprintCategoryRootNode = $footprintCategoryService->getRootNode();

        $footprint = new Footprint();
        $footprint->setName($footprintName);

        if (array_key_exists("description", $footprintData)) {
            $footprint->setDescription($footprintData["description"]);
        }

        if (array_key_exists("category", $footprintData)) {
            $footprintCategory = $this->addFootprintCategoryPath(explode("/", $footprintData["category"]),
                $footprintCategoryRootNode);
            $footprint->setCategory($footprintCategory);
        }

        if (array_key_exists("image", $footprintData)) {
            $footprintImage = new FootprintImage();


            $file = $this->get("kernel")->locateResource(self::FOOTPRINT_PATH.$footprintData["image"]);
            $fileService->replaceFromFilesystem($footprintImage, new File($file));

            $footprint->setImage($footprintImage);
        }

        $this->get("doctrine.orm.default_entity_manager")->persist($footprint);
    }

    /**
     * Creates a node structure for the given path
     *
     * @param $path       array The components of the path
     * @param $parentNode FootprintCategory  The parent node
     *
     * @return FootprintCategory
     */
    protected function addFootprintCategoryPath(Array $path, FootprintCategory $parentNode)
    {
        if (count($path) == 0) {
            return $parentNode;
        }
        $name = array_shift($path);

        $category = null;

        foreach ($parentNode->getChildren() as $child) {
            if ($child->getName() == $name) {
                $category = $child;
            }
        }

        if ($category === null) {
            $category = new FootprintCategory();
            $category->setParent($parentNode);
            $category->setName($name);
            $parentNode->getChildren()->add($category);

            $this->get("doctrine.orm.default_entity_manager")->persist($category);
        }

        return $this->addFootprintCategoryPath($path, $category);
    }

    /**
     * Checks if the specified footprint exists
     *
     * @param string $name The footprint name
     */
    protected function footprintExists($name)
    {
        $dql = "SELECT COUNT(fp) FROM PartKeepr\FootprintBundle\Entity\Footprint fp WHERE fp.name = :name";
        $query = $this->get("doctrine.orm.default_entity_manager")->createQuery($dql);
        $query->setParameter("name", $name);

        if ($query->getSingleScalarResult() == 0) {
            return false;
        } else {
            return true;
        }
    }
}
