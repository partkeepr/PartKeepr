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

    public function parseConfiguration($importConfiguration)
    {
        if (property_exists($importConfiguration, "fields")) {
            foreach ($importConfiguration->fields as $field => $configuration) {
                if ($this->classMetadata->hasField($field)) {

                    $fieldConfiguration = new FieldConfiguration($this->classMetadata, $this->baseEntity,
                        $this->reflectionService, $this->em, $this->advancedSearchFilter, $this->iriConverter);
                    $fieldConfiguration->setFieldName($field);
                    if ($fieldConfiguration->parseConfiguration($configuration) !== false) {
                        $this->fields[] = $fieldConfiguration;
                    }
                } else {
                    throw new \Exception("Field $field not found in ".$this->baseEntity);
                }
            }
        }

        if (property_exists($importConfiguration, "manytoone")) {
            foreach ($importConfiguration->manytoone as $manyToOne => $configuration) {
                if ($this->classMetadata->hasAssociation($manyToOne)) {
                    $targetClass = $this->classMetadata->getAssociationTargetClass($manyToOne);
                    $cm = $this->em->getClassMetadata($targetClass);
                    $manyToOneconfiguration = new ManyToOneConfiguration($cm, $targetClass,
                        $this->reflectionService, $this->em, $this->advancedSearchFilter, $this->iriConverter);
                    $manyToOneconfiguration->setAssociationName($manyToOne);

                    if ($manyToOneconfiguration->parseConfiguration($configuration) !== false) {
                        $this->manyToOneAssociations[] = $manyToOneconfiguration;
                    }
                } else {
                    throw new \Exception("Association $manyToOne not found in ".$this->baseEntity);
                }
            }
        }

        return true;
    }

    public function import ($row) {
        $logs = [];

        $obj = new $this->baseEntity;
        $accessor = PropertyAccess::createPropertyAccessor();

        foreach ($this->fields as $field) {
            $name = $field->getFieldName();
            list($data, $log) = $field->import($row);

            $logs[] = $log;

            if ($data !== null) {
                $accessor->setValue($obj, $name, $data);
            }
        }

        foreach ($this->manyToOneAssociations as $manyToOneAssociation) {
            $name = $manyToOneAssociation->getAssociationName();
            list($data, $log) = $manyToOneAssociation->import($row);
            $logs[] = $log;
            if ($data !== null) {
                $accessor->setValue($obj, $name, $data);
            }
        }

        return [$obj, $logs];
    }
}
