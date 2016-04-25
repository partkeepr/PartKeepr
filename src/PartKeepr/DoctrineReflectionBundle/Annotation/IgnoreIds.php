<?php

namespace PartKeepr\DoctrineReflectionBundle\Annotation;

use Doctrine\ORM\Mapping\Annotation;

/**
 * @Annotation
 * @Target("CLASS")
 */
final class IgnoreIds implements Annotation
{
}
