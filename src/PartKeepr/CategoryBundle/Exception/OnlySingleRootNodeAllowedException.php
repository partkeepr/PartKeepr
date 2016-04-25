<?php

namespace PartKeepr\CategoryBundle\Exception;

class OnlySingleRootNodeAllowedException extends \Exception
{
    public function __construct($message = '', $code = 0, \Exception $previous = null)
    {
        parent::__construct('There may be only one root node', $code, $previous);
    }
}
