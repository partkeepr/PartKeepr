<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

interface AssociationPropertyInterface
{
    public function getProperty();

    public function setProperty($property);

    public function getAssociation();

    public function setAssociation($association);
}
