<?php

namespace PartKeepr\SetupBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\CategoryBundle\Services\CategoryService;
use PartKeepr\FootprintBundle\Entity\Footprint;
use PartKeepr\FootprintBundle\Entity\FootprintCategory;
use PartKeepr\FootprintBundle\Entity\FootprintImage;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Yaml\Parser;

class FootprintSetupService
{
    const FOOTPRINT_PATH = '@PartKeeprSetupBundle/Resources/setup-data/footprints/';
    const FOOTPRINT_DATA = 'footprints.yml';

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var CategoryService
     */
    private $footprintCategoryService;

    /**
     * @var UploadedFileService
     */
    private $uploadedFileService;

    /**
     * @var KernelInterface
     */
    private $kernel;

    public function __construct(
        EntityManager $entityManager,
        CategoryService $categoryService,
        UploadedFileService $uploadedFileService,
        KernelInterface $kernel
    ) {
        $this->entityManager = $entityManager;
        $this->footprintCategoryService = $categoryService;
        $this->uploadedFileService = $uploadedFileService;
        $this->kernel = $kernel;
    }

    /**
     * Imports the existing footprints. Skips existing footprints.
     *
     * @return array An array with the keys "skipped" and "imported" which contain the number of footprints skipped and imported
     */
    public function importFootprints()
    {
        $path = $this->kernel->locateResource(self::FOOTPRINT_PATH.self::FOOTPRINT_DATA);

        $skipped = 0;
        $count = 0;

        $yaml = new Parser();
        $data = $yaml->parse(file_get_contents($path));

        foreach ($data as $footprintName => $footprintData) {
            if ($this->footprintExists($footprintName)) {
                $skipped++;
                continue;
            }

            $this->createFootprint($footprintName, $footprintData);
            $count++;
        }

        $this->entityManager->flush();

        return ['skipped' => $skipped, 'imported' => $count];
    }

    protected function createFootprint($footprintName, $footprintData)
    {

        /**
         * @var FootprintCategory
         */
        $footprintCategoryRootNode = $this->footprintCategoryService->getRootNode();

        $footprint = new Footprint();
        $footprint->setName($footprintName);

        if (array_key_exists('description', $footprintData)) {
            $footprint->setDescription($footprintData['description']);
        }

        if (array_key_exists('category', $footprintData)) {
            $footprintCategory = $this->addFootprintCategoryPath(explode('/', $footprintData['category']),
                $footprintCategoryRootNode);
            $footprint->setCategory($footprintCategory);
        }

        if (array_key_exists('image', $footprintData)) {
            $footprintImage = new FootprintImage();

            $file = $this->kernel->locateResource(self::FOOTPRINT_PATH.$footprintData['image']);
            $this->uploadedFileService->replaceFromFilesystem($footprintImage, new File($file));

            $footprint->setImage($footprintImage);
        }

        $this->entityManager->persist($footprint);
    }

    /**
     * Creates a node structure for the given path.
     *
     * @param $path       array The components of the path
     * @param $parentNode FootprintCategory  The parent node
     *
     * @return FootprintCategory
     */
    protected function addFootprintCategoryPath(array $path, FootprintCategory $parentNode)
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

            $this->entityManager->persist($category);
        }

        return $this->addFootprintCategoryPath($path, $category);
    }

    /**
     * Checks if the specified footprint exists.
     *
     * @param string $name The footprint name
     *
     * @return bool true if the footprints exists, false otherwise
     */
    protected function footprintExists($name)
    {
        $dql = "SELECT COUNT(fp) FROM PartKeepr\FootprintBundle\Entity\Footprint fp WHERE fp.name = :name";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('name', $name);

        if ($query->getSingleScalarResult() == 0) {
            return false;
        } else {
            return true;
        }
    }
}
