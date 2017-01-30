<?php

namespace PartKeepr\PartBundle\Exceptions;

class NotAMetaPartException extends \RuntimeException
{
    public function __construct()
    {
        parent::__construct("Attempted to retrieve parts for a meta part, but the given part is not a meta part!");
    }
}
