<?php

namespace PartKeepr\DoctrineReflectionBundle\Services;

use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Common\Annotations\Reader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Mapping\ClassMetadataInfo;
use Symfony\Component\Templating\EngineInterface;

class ReflectionService
{
    /** @var EntityManager */
    protected $em;

    protected $templateEngine;

    protected $reader;

    public function __construct(Registry $doctrine, EngineInterface $templateEngine, Reader $reader)
    {
        $this->templateEngine = $templateEngine;
        $this->em = $doctrine->getManager();
        $this->reader = $reader;
    }

    /**
     * Returns a list of all registered entities, converted to the ExtJS naming scheme (. instead of \).
     *
     * @return array
     */
    public function getEntities()
    {
        $entities = [];

        $meta = $this->em->getMetadataFactory()->getAllMetadata();

        foreach ($meta as $m) {
            /* @var ClassMetadata $m */
            $entities[] = $this->convertPHPToExtJSClassName($m->getName());
        }

        return $entities;
    }

    /**
     * Returns the ExtJS Model contents for a given entity.
     *
     * @param $entity string The ExtJS class name
     *
     * @return string The ExtJS model code
     */
    public function getEntity($entity)
    {
        $bTree = false;

        $parentClass = 'PartKeepr.data.HydraModel';

        $entity = $this->convertExtJSToPHPClassName($entity);

        $cm = $this->em->getClassMetadata($entity);

        if ($cm->getReflectionClass()->isSubclassOf("PartKeepr\CategoryBundle\Entity\AbstractCategory")) {
            $parentClass = 'PartKeepr.data.HydraTreeModel';
            $bTree = true;
        }

        $fieldMappings = [];

        $fieldMappings = array_merge($fieldMappings, $this->getVirtualFieldMappings($cm));
        $fieldMappings = array_merge($fieldMappings, $this->getDatabaseFieldMappings($cm));

        $associationMappings = $this->getDatabaseAssociationMappings($cm, $bTree);

        $renderParams = [
            'fields'       => $fieldMappings,
            'associations' => $associationMappings,
            'className'    => $this->convertPHPToExtJSClassName($entity),
            'parentClass'  => $parentClass,
        ];

        $targetService = $this->reader->getClassAnnotation(
            $cm->getReflectionClass(),
            "PartKeepr\DoctrineReflectionBundle\Annotation\TargetService"
        );

        if ($targetService !== null) {
            $renderParams['uri'] = $targetService->uri;
        }

        $ignoreIds = $this->reader->getClassAnnotation(
            $cm->getReflectionClass(),
            "PartKeepr\DoctrineReflectionBundle\Annotation\IgnoreIds"
        );

        if ($ignoreIds !== null) {
            $renderParams['ignoreIds'] = true;
        } else {
            $renderParams['ignoreIds'] = false;
        }

        return $this->templateEngine->render('PartKeeprDoctrineReflectionBundle::model.js.twig', $renderParams);
    }

    /**
     * Returns association mapping for a given entity.
     *
     * @param ClassMetadata $cm
     * @param bool|false    $bTree
     *
     * @return array
     */
    protected function getDatabaseAssociationMappings(ClassMetadata $cm, $bTree = false)
    {
        $associations = $cm->getAssociationMappings();

        $associationMappings = [];

        foreach ($associations as $association) {
            $getterPlural = false;
            $associationType = $association['type'];

            switch ($association['type']) {
                case ClassMetadataInfo::MANY_TO_MANY:
                    $associationType = 'MANY_TO_MANY';
                    $getterPlural = true;
                    break;
                case ClassMetadataInfo::MANY_TO_ONE:
                    $associationType = 'MANY_TO_ONE';
                    $getterPlural = false;
                    break;
                case ClassMetadataInfo::ONE_TO_MANY:
                    $associationType = 'ONE_TO_MANY';
                    $getterPlural = true;
                    break;
                case ClassMetadataInfo::ONE_TO_ONE:
                    $associationType = 'ONE_TO_ONE';
                    $getterPlural = false;
                    break;
            }

            $getter = 'get'.ucfirst($association['fieldName']);
            $getterField = lcfirst($cm->getReflectionClass()->getShortName()).str_replace(
                    '.',
                    '',
                    $this->convertPHPToExtJSClassName($association['targetEntity'])
                );

            if ($getterPlural) {
                $getterField .= 's';
            }

            // The self-referencing association may not be written for trees, because ExtJS can't load all nodes
            // in one go.
            if (!($bTree && $association['targetEntity'] == $cm->getName())) {
                $associationMappings[$associationType][] = [
                    'name'        => $association['fieldName'],
                    'target'      => $this->convertPHPToExtJSClassName($association['targetEntity']),
                    'getter'      => $getter,
                    'getterField' => $getterField,
                ];
            }
        }

        return $associationMappings;
    }

    /**
     * Returns all virtual field mappings.
     *
     * @param ClassMetadata $cm
     *
     * @return array
     */
    protected function getVirtualFieldMappings(ClassMetadata $cm)
    {
        $fieldMappings = [];

        foreach ($cm->getReflectionClass()->getProperties() as $property) {
            $virtualFieldAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'PartKeepr\DoctrineReflectionBundle\Annotation\VirtualField'
            );

            if ($virtualFieldAnnotation !== null) {
                $fieldMappings[] = [
                    'name' => $property->getName(),
                    'type' => $this->getExtJSFieldMapping($virtualFieldAnnotation->type),
                ];
            }
        }

        return $fieldMappings;
    }

    /**
     * Returns database field mappings.
     *
     * @param ClassMetadata $cm
     *
     * @throws \Doctrine\ORM\Mapping\MappingException
     *
     * @return array
     */
    protected function getDatabaseFieldMappings(ClassMetadata $cm)
    {
        $fieldMappings = [];
        $fields = $cm->getFieldNames();

        foreach ($fields as $field) {
            $currentMapping = $cm->getFieldMapping($field);

            if ($currentMapping['fieldName'] == 'id') {
                $currentMapping['fieldName'] = '@id';
                $currentMapping['type'] = 'string';
            }

            $fieldMappings[] = [
                'name' => $currentMapping['fieldName'],
                'type' => $this->getExtJSFieldMapping($currentMapping['type']),
            ];
        }

        return $fieldMappings;
    }

    /**
     * Converts a doctrine/PHP type to the ExtJS type.
     *
     * @param $type string the PHP/doctrine type
     *
     * @return string The ExtJS type
     */
    protected function getExtJSFieldMapping($type)
    {
        switch ($type) {
            case 'integer':
                return 'int';
                break;
            case 'string':
                return 'string';
                break;
            case 'text':
                return 'string';
                break;
            case 'datetime':
                return 'date';
                break;
            case 'boolean':
                return 'boolean';
                break;
            case 'float':
                return 'number';
                break;
            case 'decimal':
                return 'number';
                break;
            case 'array':
                return 'array';
                break;
        }

        return 'undefined';
    }

    /**
     * Converts a PHP class name with namespaces to an ExtJS class name with namespaces.
     *
     * @param $className
     *
     * @return string
     */
    protected function convertPHPToExtJSClassName($className)
    {
        return str_replace('\\', '.', $className);
    }

    /**
     * Converts an ExtJS class name with namespaces to a PHP class name with namespaces.
     *
     * @param $className
     *
     * @return string
     */
    protected function convertExtJSToPHPClassName($className)
    {
        return str_replace('.', '\\', $className);
    }

    public function createCache($cacheDir)
    {
        @mkdir($cacheDir, 0777, true);

        $entities = $this->getEntities();

        foreach ($entities as $entity) {
            $model = $this->getEntity($entity);

            $this->writeCacheFile($cacheDir.'/'.$entity.'.js', $model);
        }
    }

    protected function writeCacheFile($file, $content)
    {
        $tmpFile = tempnam(dirname($file), basename($file));
        if (false !== @file_put_contents($tmpFile, $content) && @rename($tmpFile, $file)) {
            @chmod($file, 0666 & ~umask());

            return;
        }

        throw new \RuntimeException(sprintf('Failed to write cache file "%s".', $file));
    }
}
