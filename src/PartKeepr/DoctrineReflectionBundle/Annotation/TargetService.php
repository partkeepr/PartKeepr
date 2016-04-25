<?php

namespace PartKeepr\DoctrineReflectionBundle\Annotation;

use Doctrine\ORM\Mapping\Annotation;

/**
 * @Annotation
 * @Target("CLASS")
 */
final class TargetService implements Annotation
{
    /**
     * @var string
     */
    public $uri;
}
