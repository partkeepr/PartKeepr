<?php

namespace PartKeepr\ImportBundle\Configuration;

class OneToManyConfiguration extends Configuration
{
    const IMPORTBEHAVIOUR_IGNORE = "ignore";
    const IMPORTBEHAVIOUR_CREATENEW = "createNew";

    const importBehaviours = [
        self::IMPORTBEHAVIOUR_IGNORE,
        self::IMPORTBEHAVIOUR_CREATENEW,
    ];

    protected $associationName;

    protected $importBehaviour;

    public function parseConfiguration($importConfiguration)
    {
        if (!property_exists($importConfiguration, "importBehaviour")) {
            return false;
        }

        if (!in_array($importConfiguration->importBehaviour, self::importBehaviours)) {
            throw new \Exception("The key importBehaviour contains an invalid value!");
        }

        $this->importBehaviour = $importConfiguration->importBehaviour;

        return parent::parseConfiguration($importConfiguration);
    }

    public function import($row)
    {
        switch ($this->importBehaviour) {
            case self::IMPORTBEHAVIOUR_IGNORE:
                return;
                break;
            case self::IMPORTBEHAVIOUR_CREATENEW:
                $this->log(sprintf("Would create a new entity of type %s for relation %s", $this->baseEntity, $this->getAssociationName()));

                return parent::import($row);
                break;
        }
    }

    /**
     * @return mixed
     */
    public function getAssociationName()
    {
        return $this->associationName;
    }

    /**
     * @param mixed $associationName
     */
    public function setAssociationName($associationName)
    {
        $this->associationName = $associationName;
    }
}
