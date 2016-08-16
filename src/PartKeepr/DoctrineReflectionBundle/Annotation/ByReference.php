<?php

namespace PartKeepr\DoctrineReflectionBundle\Annotation;

use Doctrine\ORM\Mapping\Annotation;

/**
 * Tells the system to pass the association by reference and not by value
 *
 * @Annotation
 * @Target("PROPERTY")
 */
final class ByReference implements Annotation
{
}
