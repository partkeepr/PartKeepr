<?php

namespace PartKeepr\UploadedFileBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class DiskSpaceExhaustedException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'Not enough disk space or quota exhausted';
    }
}
