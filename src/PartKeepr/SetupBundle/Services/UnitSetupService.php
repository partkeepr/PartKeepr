<?php

namespace PartKeepr\SetupBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use PartKeepr\UnitBundle\Entity\Unit;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Yaml\Parser;

class UnitSetupService
{
    const UNIT_PATH = '@PartKeeprSetupBundle/Resources/setup-data/';
    const UNIT_DATA = 'units.yml';

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var KernelInterface
     */
    private $kernel;

    /**
     * UnitSetupService constructor.
     *
     * @param EntityManager   $entityManager
     * @param KernelInterface $kernel
     */
    public function __construct(EntityManager $entityManager, KernelInterface $kernel)
    {
        $this->entityManager = $entityManager;
        $this->kernel = $kernel;
    }

    /**
     * Imports units.
     *
     * @throws \Exception If an error occured
     *
     * @return array An array with the keys "skipped" and "imported" which contain the number of units skipped and imported
     */
    public function importUnits()
    {
        $path = $this->kernel->locateResource(self::UNIT_PATH.self::UNIT_DATA);

        $yaml = new Parser();
        $data = $yaml->parse(file_get_contents($path));

        $count = 0;
        $skipped = 0;

        foreach ($data as $unitName => $unitData) {
            $unit = $this->getUnit($unitName);

            if ($unit === null) {
                $unit = new Unit();
                $unit->setName($unitName);
                $unit->setSymbol($unitData['symbol']);

                if (array_key_exists('prefixes', $unitData)) {
                    if (!is_array($unitData['prefixes'])) {
                        throw new \Exception($unitName." doesn't contain a prefix list, or the prefix list is not an array.");
                    }

                    foreach ($unitData['prefixes'] as $name) {
                        $prefix = $this->getSiPrefix($name);
                        if ($prefix === null) {
                            throw new \Exception('Unable to find SI Prefix '.$name);
                        }

                        $unit->getPrefixes()->add($prefix);
                    }
                }
                $this->entityManager->persist($unit);
                $this->entityManager->flush();
                $count++;
            } else {
                $skipped++;
            }
        }

        return ['imported' => $count, 'skipped' => $skipped];
    }

    /**
     * Checks if the specified SI Prefix.
     *
     * @param string $name The footprint name
     *
     * @return Unit|null
     */
    protected function getUnit($name)
    {
        $repository = $this->entityManager->getRepository('PartKeeprUnitBundle:Unit');

        return $repository->findOneBy(['name' => $name]);
    }

    /**
     * Finds an SI Prefix by name.
     *
     * @param string $name The SI Prefix name
     *
     * @return SiPrefix|null
     */
    protected function getSiPrefix($name)
    {
        $repository = $this->entityManager->getRepository('PartKeeprSiPrefixBundle:SiPrefix');

        return $repository->findOneBy(['prefix' => $name]);
    }
}
