<?php

namespace PartKeepr\ImportBundle\Configuration;

use Symfony\Component\PropertyAccess\PropertyAccess;

class Configuration extends BaseConfiguration
{
    /**
     * @var FieldConfiguration[]
     */
    private $fields = [];

    /**
     * @var ManyToOneConfiguration[]
     */
    private $manyToOneAssociations = [];

    /**
     * @var OneToManyConfiguration[]
     */
    private $oneToManyAssociations = [];

    public function parseConfiguration($importConfiguration)
    {
        if (property_exists($importConfiguration, "fields")) {
            foreach ($importConfiguration->fields as $field => $configuration) {
                if ($this->classMetadata->hasField($field)) {
                    $fieldConfiguration = new FieldConfiguration(
                        $this->classMetadata,
                        $this->baseEntity,
                        $this->reflectionService,
                        $this->em,
                        $this->advancedSearchFilter,
                        $this->iriConverter
                    );
                    $fieldConfiguration->setFieldName($field);

                    $fieldConfiguration->setPath($this->getPath($field));
                    if ($fieldConfiguration->parseConfiguration($configuration) !== false) {
                        $this->fields[] = $fieldConfiguration;
                    }
                } else {
                    //throw new \Exception("Field $field not found in ".$this->baseEntity);
                }
            }
        }

        if (property_exists($importConfiguration, "manytoone")) {
            foreach ($importConfiguration->manytoone as $manyToOne => $configuration) {
                if ($this->classMetadata->hasAssociation($manyToOne)) {
                    $targetClass = $this->classMetadata->getAssociationTargetClass($manyToOne);
                    $cm = $this->em->getClassMetadata($targetClass);

                    $manyToOneconfiguration = new ManyToOneConfiguration(
                        $cm,
                        $targetClass,
                        $this->reflectionService,
                        $this->em,
                        $this->advancedSearchFilter,
                        $this->iriConverter
                    );
                    $manyToOneconfiguration->setAssociationName($manyToOne);
                    $manyToOneconfiguration->setPath($this->getPath($manyToOne));

                    if ($manyToOneconfiguration->parseConfiguration($configuration) !== false) {
                        $this->manyToOneAssociations[] = $manyToOneconfiguration;
                    }
                } else {
                    //throw new \Exception("Association $manyToOne not found in ".$this->baseEntity);
                }
            }
        }

        if (property_exists($importConfiguration, "onetomany")) {
            foreach ($importConfiguration->onetomany as $oneToMany => $configuration) {
                if ($this->classMetadata->hasAssociation($oneToMany)) {
                    $targetClass = $this->classMetadata->getAssociationTargetClass($oneToMany);
                    $cm = $this->em->getClassMetadata($targetClass);
                    $oneToManyConfiguration = new OneToManyConfiguration(
                        $cm,
                        $targetClass,
                        $this->reflectionService,
                        $this->em,
                        $this->advancedSearchFilter,
                        $this->iriConverter
                    );
                    $oneToManyConfiguration->setAssociationName($oneToMany);
                    $oneToManyConfiguration->setPath($this->getPath($oneToMany));
                    if ($oneToManyConfiguration->parseConfiguration($configuration) !== false) {
                        $this->oneToManyAssociations[] = $oneToManyConfiguration;
                    }
                } else {
                    //throw new \Exception("Association $oneToMany not found in ".$this->baseEntity);
                }
            }
        }

        return true;
    }

    public function import($row, $obj = null)
    {
        if ($obj === null) {
            $obj = new $this->baseEntity();
            $this->persist($obj);
        }

        $accessor = PropertyAccess::createPropertyAccessor();

        foreach ($this->fields as $field) {
            $name = $field->getFieldName();
            $data = $field->import($row);

            if ($data !== null) {
                $accessor->setValue($obj, $name, $data);
            }
        }

        foreach ($this->manyToOneAssociations as $manyToOneAssociation) {
            $name = $manyToOneAssociation->getAssociationName();
            $data = $manyToOneAssociation->import($row);
            if ($data !== null) {
                $accessor->setValue($obj, $name, $data);
            }
        }

        foreach ($this->oneToManyAssociations as $oneToManyAssociation) {
            $name = $oneToManyAssociation->getAssociationName();
            $data = $oneToManyAssociation->import($row);
            if ($data !== null) {
                $accessor->setValue($obj, $name, [$data]);
            }
        }

        return $obj;
    }
}
