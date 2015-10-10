<?php


namespace PartKeepr\CategoryBundle\Exception;


class OnlySingleRootNodeAllowedException extends \Exception
{
    public function __construct($message = "", $code = 0, \Exception $previous = null)
    {
        $message = "There may be only one root node";
        parent::__construct($message, $code, $previous);
    }
}
