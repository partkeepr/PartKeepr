<?php

namespace PartKeepr\PartBundle\Exceptions;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class MinStockLevelOutOfRangeException extends TranslatableException
{
    public function getMessageKey()
    {
        return 'Minimum Stock Level is out of range. The minimum stock level must be 0 or higher';
    }
}
