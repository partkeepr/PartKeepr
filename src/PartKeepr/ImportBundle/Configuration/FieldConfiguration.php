<?php
namespace PartKeepr\ImportBundle\Configuration;


class FieldConfiguration extends BaseConfiguration
{
    const FIELDCONFIGURATION_IGNORE = "ignore";
    const FIELDCONFIGURATION_COPYFROM = "copyFrom";
    const FIELDCONFIGURATION_FIXEDVALUE = "fixedValue";

    const fieldConfigurationModes = [
        self::FIELDCONFIGURATION_COPYFROM,
        self::FIELDCONFIGURATION_FIXEDVALUE,
        self::FIELDCONFIGURATION_IGNORE,
    ];

    private $fieldConfiguration;

    private $fieldName;

    /**
     * @return mixed
     */
    public function getFieldName()
    {
        return $this->fieldName;
    }

    private $fixedValue;

    private $copyFromField;

    public function setFieldName($fieldName)
    {
        $this->fieldName = $fieldName;
    }

    public function parseConfiguration($configuration)
    {
        if (!property_exists($configuration, "fieldConfiguration")) {
            return false;
            throw new \Exception("The key fieldConfiguration does not exist!");
        }

        if (!in_array($configuration->fieldConfiguration, self::fieldConfigurationModes)) {
            throw new \Exception("The key fieldConfiguration contains an invalid value!");
        }

        $this->fieldConfiguration = $configuration->fieldConfiguration;

        switch ($this->fieldConfiguration) {
            case self::FIELDCONFIGURATION_FIXEDVALUE:
                if (!property_exists($configuration, "setToValue")) {
                    throw new \Exception("The key setToValue does not exist for mode fixedValue!");
                }

                $this->fixedValue = $configuration->setToValue;
                break;
            case self::FIELDCONFIGURATION_COPYFROM:
                if (!property_exists($configuration, "copyFromField")) {
                    throw new \Exception("The key copyFromField does not exist for mode copyFrom!");
                }

                $this->copyFromField = $configuration->copyFromField;
                break;
            default:
                break;
        }

        return true;
    }

    public function import($row)
    {
        switch ($this->fieldConfiguration) {
            case self::FIELDCONFIGURATION_FIXEDVALUE:
                $this->log(sprintf("Would set field %s to fixed value %s", $this->fieldName, $this->fixedValue));
                return $this->fixedValue;
            break;
            case self::FIELDCONFIGURATION_COPYFROM:
                $this->log(sprintf("Would set field %s to value %s (import column %s)", $this->fieldName, $row[$this->copyFromField], $this->copyFromField));
                return $row[$this->copyFromField];
            break;
            default:
                return null;
        }
    }
}
