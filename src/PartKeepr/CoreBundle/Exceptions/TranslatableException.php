<?php
namespace PartKeepr\CoreBundle\Exceptions;


abstract class TranslatableException extends \Exception
{
    /**
     * Returns the translatable message
     * @return mixed
     */
    abstract public function getMessageKey();
}
