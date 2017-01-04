<?php

namespace PartKeepr\SystemPreferenceBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

/**
 * Is thrown when the system preference could not be found.
 */
class SystemPreferenceNotFoundException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'The requested system preference was not found';
    }
}
