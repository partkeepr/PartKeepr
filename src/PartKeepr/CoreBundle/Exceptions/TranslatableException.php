<?php

namespace PartKeepr\CoreBundle\Exceptions;

abstract class TranslatableException extends \Exception
{
    public function __construct($code = 0, \Throwable $previous = null)
    {
        parent::__construct($this->getMessageKey());
    }

    /**
     * Returns the translatable message.
     *
     * @return mixed
     */
    abstract public function getMessageKey();
}
