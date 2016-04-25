<?php

namespace PartKeepr\CategoryBundle\Exception;

class RootNodeNotFoundException extends \Exception
{
    public function __construct($message = '', $code = 0, \Exception $previous = null)
    {
        $message = 'Root Category not found';
        parent::__construct($message, $code, $previous);
    }
}
