<?php

namespace PartKeepr\SetupBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\ManufacturerBundle\Entity\Manufacturer;
use PartKeepr\ManufacturerBundle\Entity\ManufacturerICLogo;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Yaml\Parser;

class ManufacturerSetupService
{
    const MANUFACTURER_PATH = '@PartKeeprSetupBundle/Resources/setup-data/manufacturers/';
    const MANUFACTURER_DATA = 'manufacturers.yml';

    /**
     * @var EntityManager
     */
    private $entityManager;

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
        UploadedFileService $uploadedFileService,
        KernelInterface $kernel
    ) {
        $this->entityManager = $entityManager;
        $this->uploadedFileService = $uploadedFileService;
        $this->kernel = $kernel;
    }

    /**
     * Imports manufacturers.
     *
     * @return array An array with the keys "skipped" and "imported" which contain the number of manufacturers skipped and imported
     */
    public function importManufacturers()
    {
        $path = $this->kernel->locateResource(self::MANUFACTURER_PATH.self::MANUFACTURER_DATA);

        $skipped = 0;
        $count = 0;
        $yaml = new Parser();
        $data = $yaml->parse(file_get_contents($path));

        foreach ($data as $manufacturerName => $manufacturerData) {
            if ($this->manufacturerExists($manufacturerName)) {
                $skipped++;
                continue;
            }

            $this->createManufacturer($manufacturerName, $manufacturerData);
            $count++;
        }

        $this->entityManager->flush();

        return ['skipped' => $skipped, 'imported' => $count];
    }

    protected function createManufacturer($manufacturerName, $manufacturerData)
    {
        $manufacturer = new Manufacturer();
        $manufacturer->setName($manufacturerName);

        if (array_key_exists('iclogos', $manufacturerData)) {
            foreach ($manufacturerData['iclogos'] as $icLogo) {
                $manufacturerIcLogo = new ManufacturerICLogo();

                $file = $this->kernel->locateResource(self::MANUFACTURER_PATH.$icLogo);
                $this->uploadedFileService->replaceFromFilesystem($manufacturerIcLogo, new File($file));

                $manufacturer->addIcLogo($manufacturerIcLogo);
            }
        }

        $this->entityManager->persist($manufacturer);
    }

    /**
     * Checks if the specified manufacturer exists.
     *
     * @param string $name The manufacturer name
     *
     * @return true if the manufacturer exists, false otherwise
     */
    protected function manufacturerExists($name)
    {
        $dql = "SELECT COUNT(m) FROM PartKeepr\ManufacturerBundle\Entity\Manufacturer m WHERE m.name = :name";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('name', $name);

        if ($query->getSingleScalarResult() == 0) {
            return false;
        } else {
            return true;
        }
    }
}
