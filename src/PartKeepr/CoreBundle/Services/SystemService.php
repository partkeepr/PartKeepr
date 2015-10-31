<?php
namespace PartKeepr\CoreBundle\Services;

use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\DBAL\Version as DBALVersion;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\SchemaTool;
use Doctrine\ORM\Version as ORMVersion;
use PartKeepr\CoreBundle\System\OperatingSystem;
use PartKeepr\CoreBundle\System\SystemInformationRecord;
use PartKeepr\CronLoggerBundle\Services\CronLoggerService;
use PartKeepr\Util\Configuration;
use Symfony\Component\DependencyInjection\ContainerAware;
use Symfony\Component\DependencyInjection\ContainerInterface;

class SystemService extends ContainerAware
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var VersionService
     */
    private $versionService;

    /**
     * @var CronLoggerService
     */
    private $cronLoggerService;

    public function __construct(
        Registry $doctrine,
        ContainerInterface $container,
        VersionService $versionService,
        CronLoggerService $cronLoggerService
    ) {
        $this->entityManager = $doctrine->getManager();
        $this->setContainer($container);
        $this->versionService = $versionService;
        $this->cronLoggerService = $cronLoggerService;
    }

    /**
     * Returns a list of system information records.
     *
     * Please note that it is not defined which information is returned; the result
     * should be seen as "informational" to the system operator, not for automated purposes.
     *
     * @return SystemInformationRecord[] An array of SystemInformationRecords
     */
    public function getSystemInformation()
    {
        $aData = array();

        $aData[] = new SystemInformationRecord("Doctrine ORM", ORMVersion::VERSION, "Libraries");
        $aData[] = new SystemInformationRecord("Doctrine DBAL", DBALVersion::VERSION, "Libraries");

        $aData[] = new SystemInformationRecord("PHP Version", phpversion(), "System");

        $os = new OperatingSystem();

        $aData[] = new SystemInformationRecord("Operating System Type", $os->getPlatform(), "System");
        $aData[] = new SystemInformationRecord("Operating System Release", $os->getRelease(), "System");

        $aData[] = new SystemInformationRecord("memory_limit", ini_get("memory_limit"), "PHP");
        $aData[] = new SystemInformationRecord("post_max_size", ini_get("post_max_size"), "PHP");
        $aData[] = new SystemInformationRecord("upload_max_filesize", ini_get("upload_max_filesize"), "PHP");
        $aData[] = new SystemInformationRecord("allow_url_fopen", ini_get("allow_url_fopen"), "PHP");
        $aData[] = new SystemInformationRecord("max_execution_time", ini_get("max_execution_time"), "PHP");

        $queryCache = get_class($this->entityManager->getConfiguration()->getQueryCacheImpl());
        $metadataCache = get_class($this->entityManager->getConfiguration()->getMetadataCacheImpl());

        $aData[] = new SystemInformationRecord("Query Cache Implementation", $queryCache, "PHP");
        $aData[] = new SystemInformationRecord("Metadata Cache Implementation", $metadataCache, "PHP");


        $aData[] = new SystemInformationRecord("PartKeepr Version", $this->versionService->getVersion(), "PartKeepr");


        foreach (Configuration::getOptions() as $key => $value) {
            // Hide passwords
            if ($key == "partkeepr.database.password" || $key == "partkeepr.migration.partdb.password") {
                $value = "<hidden>";
            }

            $aData[] = new SystemInformationRecord($key, $value, "PartKeepr Configuration Information");
        }

        return $aData;
    }

    /**
     * Returns the database schema status.
     *
     * This method is usuall called once the user logs in, and alerts him if the schema is not up-to-date.
     *
     * Returns either status incomplete if the schema is not up-to-date, or complete if everything is OK.
     */
    public function getSystemStatus()
    {
        if ($this->container->getParameter("partkeepr.cronjob_check")) {
            $inactiveCronjobs = $this->cronLoggerService->getInactiveCronjobs(
                $this->container->getParameter("partkeepr.required_cronjobs")
            );
        } else {
            // Skip cronjob tests
            $inactiveCronjobs = array();
        }

        return array(
            "inactiveCronjobCount" => count($inactiveCronjobs),
            "inactiveCronjobs" => $inactiveCronjobs,
            "schemaStatus" => $this->getSchemaStatus(),
        );
    }

    /**
     * Checks if the schema is up-to-date. If yes, it returns "complete", if not, it returns "incomplete".
     *
     * @param none
     *
     * @return string Either "complete" or "incomplete"
     */
    protected function getSchemaStatus()
    {
        $metadatas = $this->entityManager->getMetadataFactory()->getAllMetadata();

        $schemaTool = new SchemaTool($this->entityManager);

        $queries = $schemaTool->getUpdateSchemaSql($metadatas, true);

        if (count($queries) > 0) {
            return "incomplete";
        } else {
            return "complete";
        }
    }

    /**
     * Returns the available disk space for the configured data_dir.
     *
     * @return float
     */
    public function getFreeDiskSpace () {
        return disk_free_space($this->container->getParameter("data_dir"));
    }

    public function getTotalDiskSpace () {
        if ($this->container->getParameter("quota") === false) {
            return disk_total_space($this->container->getParameter("data_dir"));
        } else {
            return $this->container->getParameter("quota");
        }
    }

    /**
     * Returns the used disk space occupied by attachments etc.
     *
     * Does not count temporary files.
     *
     * @return int
     */
    public function getUsedDiskSpace () {
        if ($this->container->getParameter("quota") === false) {
            return $this->getTotalDiskSpace() - $this->getFreeDiskSpace();
        }

        $fileEntities = array(
            'PartKeepr\FootprintBundle\Entity\FootprintAttachment',
            'PartKeepr\FootprintBundle\Entity\FootprintImage',
            'PartKeepr\ManufacturerBundle\Entity\ManufacturerICLogo',
            'PartKeepr\PartBundle\Entity\PartAttachment',
            'PartKeepr\ProjectBundle\Entity\ProjectAttachment',
            'PartKeepr\StorageLocationBundle\Entity\StorageLocationImage'
        );

        $size = 0;
        foreach ($fileEntities as $fileEntity) {
            $qb = $this->container->get("doctrine.orm.default_entity_manager")->createQueryBuilder();
            $qb->select("SUM(a.size)")->from($fileEntity, "a");

            $size += $qb->getQuery()->getSingleScalarResult();
        }

        return $size;
    }
}
