<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

class Sorter implements AssociationPropertyInterface
{
    use AssociationPropertyTrait;

    /**
     * @var string
     */
    private $direction;

    /**
     * @return string
     */
    public function getDirection()
    {
        return $this->direction;
    }

    /**
     * @param string $direction
     */
    public function setDirection($direction)
    {
        $this->direction = $direction;
    }
}
