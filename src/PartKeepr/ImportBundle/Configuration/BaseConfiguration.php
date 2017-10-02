<?php

namespace PartKeepr\ImportBundle\Configuration;

use Doctrine\Common\Persistence\Mapping\ClassMetadata;
use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;

class BaseConfiguration
{
    public static $logs = [];
    public static $persistEntities = [];
    protected $baseEntity;
    protected $classMetadata;
    protected $reflectionService;
    protected $em;
    protected $advancedSearchFilter;
    protected $iriConverter;
    private $path = [];

    public function __construct(
        ClassMetadata $classMetadata,
        $baseEntity,
        ReflectionService $reflectionService,
        EntityManager $em,
        AdvancedSearchFilter $advancedSearchFilter,
        IriConverter $iriConverter
    ) {
        $this->classMetadata = $classMetadata;
        $this->baseEntity = $baseEntity;
        $this->reflectionService = $reflectionService;
        $this->em = $em;
        $this->advancedSearchFilter = $advancedSearchFilter;
        $this->iriConverter = $iriConverter;
    }

    /**
     * Returns the path of this configuration node with an optional suffix.
     *
     * @param bool|string $suffix Set to any string to return an additional suffix, or false to skip
     *
     * @return array The individual path components
     */
    public function getPath($suffix = false)
    {
        if ($suffix !== false) {
            $path = $this->path;
            $path[] = $suffix;

            return $path;
        } else {
            return $this->path;
        }
    }

    /**
     * Sets a path for this configuration node.
     *
     * @param array $path
     */
    public function setPath($path)
    {
        $this->path = $path;
    }

    public function import($row)
    {
    }

    public function persist($entity)
    {
        self::$persistEntities[] = $entity;
    }

    public function getPersistEntities()
    {
        return self::$persistEntities;
    }

    public function log($message)
    {
        self::$logs[] = $message;
    }

    public function getLog()
    {
        return self::$logs;
    }

    public function clearLog()
    {
        self::$logs = [];
    }
}
