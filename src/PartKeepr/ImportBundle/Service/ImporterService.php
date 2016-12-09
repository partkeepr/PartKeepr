<?php
namespace PartKeepr\ImportBundle\Service;


use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\UnitOfWork;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;
use PartKeepr\ImportBundle\Configuration\Configuration;
use Symfony\Component\PropertyAccess\PropertyAccessor;

class ImporterService
{
    /** @var EntityManager */
    protected $em;

    protected $reflectionService;

    protected $importData;

    protected $baseEntity;

    protected $importConfiguration;

    protected $advancedSearchFilter;

    protected $iriConverter;

    public function __construct(
        Registry $doctrine,
        ReflectionService $reflectionService,
        AdvancedSearchFilter $advancedSearchFilter,
    IriConverter $iriConverter
    ) {
        $this->em = $doctrine->getManager();
        $this->reflectionService = $reflectionService;
        $this->advancedSearchFilter = $advancedSearchFilter;
        $this->iriConverter = $iriConverter;
    }

    /**
     * @param mixed $baseEntity
     */
    public function setBaseEntity($baseEntity)
    {
        $this->baseEntity = $this->reflectionService->convertExtJSToPHPClassName($baseEntity);
    }

    /**
     * @param mixed $importConfiguration
     */
    public function setImportConfiguration($importConfiguration)
    {
        $this->importConfiguration = $importConfiguration;
    }

    public function setImportData($importData)
    {
        $this->importData = $importData;
    }

    public function import()
    {
        $entities = [];
        $logs = [];

        $configuration = $this->parseConfiguration();

        foreach ($this->importData as $row) {
            $entity = $configuration->import($row);
            $entities[] = $entity;
            $logs[] = implode("<br/>",
                [ "data" => implode(",",$row), '<p style="text-indent: 50px;">', "log" => "   ".implode("<br/>   ", $configuration->getLog() ), '</p>']);

            $configuration->clearLog();
        }

        return [$configuration->getPersistEntities(), implode("<br/>", $logs)];
    }

    public function parseConfiguration()
    {
        $cm = $this->em->getClassMetadata($this->baseEntity);

        $configuration = new Configuration($cm, $this->baseEntity, $this->reflectionService, $this->em,
            $this->advancedSearchFilter, $this->iriConverter);
        $configuration->parseConfiguration($this->importConfiguration);

        return $configuration;
    }

    public function describe($entity)
    {
        $accessor = new PropertyAccessor();

        $description = [];

        switch ($this->em->getUnitOfWork()->getEntityState($entity)) {
            case UnitOfWork::STATE_NEW:
                $description["title"] = "Would create a new entity of type ".get_class($entity);

                $cm = $this->em->getClassMetadata(get_class($entity));
                foreach ($cm->getFieldNames() as $fieldName) {
                    $description["fields"][$fieldName] = $accessor->getValue($entity, $fieldName);
                }

                foreach ($cm->getAssociationNames() as $associationMapping) {
                    $foo = $accessor->getValue($entity, $associationMapping);

                    if ($foo !== null) {
                        $description["associations"][$associationMapping] = $foo->getId();
                    } else {
                        $description["error"] = "Would stop import because a mapping was not found";
                    }
                }
                break;
        }

        $descriptions[] = $description;

        return $description;
    }
}
