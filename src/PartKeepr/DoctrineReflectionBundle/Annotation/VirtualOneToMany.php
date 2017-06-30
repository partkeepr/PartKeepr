<?php

namespace PartKeepr\DoctrineReflectionBundle\Annotation;

use Doctrine\ORM\Mapping\Annotation;

/**
 * Defines a virtual one to many association, that is, an association which
 * is not persisted into the database.
 *
 * @Annotation
 * @Target("PROPERTY")
 */
final class VirtualOneToMany implements Annotation
{
    /**
     * @var string
     */
    public $target;
}
