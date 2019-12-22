<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/25/17
 * Time: 11:45 PM.
 */

namespace PartKeepr\DoctrineReflectionBundle\Exception;

use PartKeepr\CoreBundle\Exceptions\TranslatableException;

class EntityInUseException extends TranslatableException
{
    public $usedBy = [];

    public $entityName;

    public function __construct($entityName, array $usedBy, $code = 0, \Throwable $previous = null)
    {
        $this->usedBy = $usedBy;
        $this->entityName = $entityName;
        $this->{'hydra:title'} = $this->getMessageKey();
        $this->{'hydra:description'} = implode("<br/>", $usedBy);

        parent::__construct($code, $previous);
    }

    public function getMessageKey()
    {
        return sprintf('%s is in use by:', (string) $this->entityName);
    }
}
