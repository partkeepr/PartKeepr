<?php

namespace PartKeepr\AuthBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

/**
 * Is thrown when the configured user limit is reached.
 */
class UserLimitReachedException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'The maximum number of users is reached';
    }
}
