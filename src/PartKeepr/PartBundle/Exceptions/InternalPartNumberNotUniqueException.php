<?php

namespace PartKeepr\PartBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class InternalPartNumberNotUniqueException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'The internal part number is already used';
    }
}
