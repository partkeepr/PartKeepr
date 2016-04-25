<?php

namespace PartKeepr\AuthBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * @Target({"PROPERTY", "METHOD", "ANNOTATION"})
 */
class PasswordMD5Hash extends Constraint
{
    public $message = 'The password must be an MD5 hash of exactly 32 characters in length';
}
