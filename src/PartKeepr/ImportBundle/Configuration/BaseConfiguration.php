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
}
