<?php

namespace PartKeepr\PartBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

/**
 * This exception is thrown when a part hasn't got a storage location assigned.
 */
class StorageLocationNotAssignedException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'The part has no storage location assigned';
    }
}
