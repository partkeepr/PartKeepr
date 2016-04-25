<?php

namespace PartKeepr\PartBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class PackagingUnitOutOfRangeException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'Packaging Unit is out of range. It must be 1 or higher.';
    }
}
