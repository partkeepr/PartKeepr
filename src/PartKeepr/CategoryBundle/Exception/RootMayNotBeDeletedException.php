<?php

namespace PartKeepr\CategoryBundle\Exception;

class RootMayNotBeDeletedException extends \Exception
{
    public function __construct($message = '', $code = 0, \Exception $previous = null)
    {
        parent::__construct('The root node may not be deleted', $code, $previous);
    }
}
