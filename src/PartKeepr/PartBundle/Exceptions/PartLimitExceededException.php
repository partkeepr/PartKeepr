<?php

namespace PartKeepr\PartBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class PartLimitExceededException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'The maximum number of parts is reached';
    }
}
