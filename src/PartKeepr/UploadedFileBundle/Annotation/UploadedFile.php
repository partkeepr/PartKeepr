<?php

namespace PartKeepr\UploadedFileBundle\Annotation;

use Doctrine\ORM\Mapping\Annotation;

/**
 * @Annotation
 * @Target("PROPERTY")
 *
 * Use this annotation on any property to replace any temporary images with their concrete implementation.
 */
final class UploadedFile implements Annotation
{
}
