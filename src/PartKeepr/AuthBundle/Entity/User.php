<?php
namespace PartKeepr\AuthBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;

/**
 * @ORM\Entity
 * @ORM\Table(name="PartKeeprUser")
 * @TargetService(uri="/api/users")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
}