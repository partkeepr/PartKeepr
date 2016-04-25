<?php

namespace PartKeepr\SetupBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Yaml\Parser;

class SiPrefixSetupService
{
    const SIPREFIX_PATH = '@PartKeeprSetupBundle/Resources/setup-data/';
    const SIPREFIX_DATA = 'siprefixes.yml';

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var KernelInterface
     */
    private $kernel;

    /**
     * SiPrefixSetupService constructor.
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
     * Imports or updates the existing si prefixes.
     *
     * @return array An array with the keys "skipped" and "imported" which contain the number of si prefixes skipped and imported
     */
    public function importSiPrefixes()
    {
        $path = $this->kernel->locateResource(self::SIPREFIX_PATH.self::SIPREFIX_DATA);

        $yaml = new Parser();
        $data = $yaml->parse(file_get_contents($path));

        $count = 0;
        $updated = 0;

        foreach ($data as $prefixName => $prefixData) {
            $prefix = $this->getSiPrefix($prefixName);

            if ($prefix === null) {
                $prefix = new SiPrefix();
                $prefix->setPrefix($prefixName);
                $this->entityManager->persist($prefix);
                $count++;
            }

            $prefix->setExponent($prefixData['exponent']);
            $prefix->setSymbol($prefixData['symbol']);
            $prefix->setBase($prefixData['base']);

            $updated++;
        }
        $this->entityManager->flush();

        return ['updated' => $updated - $count, 'imported' => $count];
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
