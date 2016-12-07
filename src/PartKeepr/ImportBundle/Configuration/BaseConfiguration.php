<?php


namespace PartKeepr\ImportBundle\Configuration;


use Doctrine\Common\Persistence\Mapping\ClassMetadata;
use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;

class BaseConfiguration
{
    protected $baseEntity;

    protected $classMetadata;

    protected $reflectionService;

    protected $em;

    protected $advancedSearchFilter;

    protected $iriConverter;

    static $logs = [];

    static $persistEntities = [];

    public function __construct(ClassMetadata $classMetadata, $baseEntity, ReflectionService $reflectionService, EntityManager $em, AdvancedSearchFilter $advancedSearchFilter, IriConverter $iriConverter)
    {
        $this->classMetadata = $classMetadata;
        $this->baseEntity = $baseEntity;
        $this->reflectionService = $reflectionService;
        $this->em = $em;
        $this->advancedSearchFilter = $advancedSearchFilter;
        $this->iriConverter = $iriConverter;
    }

    public function import ($row) {

    }

    public function persist ($entity) {
        self::$persistEntities[] = $entity;
    }

    public function getPersistEntities () {
        return self::$persistEntities;
    }


    public function log ($message) {
        self::$logs[] = $message;
    }

    public function getLog () {
        return self::$logs;
    }

    public function clearLog () {
        self::$logs = [];
    }
}
