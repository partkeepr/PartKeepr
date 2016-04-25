<?php

namespace PartKeepr\AuthBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class UserProtectedException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'User is protected against changes';
    }
}
