<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

trait AssociationPropertyTrait
{
    /**
     * @var string
     */
    private $property;
    /**
     * @var string
     */
    private $association;

    /**
     * @return string
     */
    public function getProperty()
    {
        return $this->property;
    }

    /**
     * @param string $property
     */
    public function setProperty($property)
    {
        $this->property = $property;
    }

    /**
     * @return string
     */
    public function getAssociation()
    {
        return $this->association;
    }

    /**
     * @param string $association
     */
    public function setAssociation($association)
    {
        $this->association = $association;
    }
}
