<?php

namespace PartKeepr\DistributorBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a distributor.
 *
 * @ORM\Entity
 * @TargetService(uri="/api/distributors")
 **/
class Distributor extends BaseEntity
{
    /**
     * Holds the name of the distributor.
     *
     * @ORM\Column(type="string",unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Holds the address of the distributor.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $address;

    /**
     * Holds the URL of the distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $url;

    /**
     * Holds the phone number of the distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $phone;

    /**
     * Holds the fax number of the distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $fax;

    /**
     * Holds the email of the distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $email;

    /**
     * Holds a comment for the distributor.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $comment;

    /**
     * Holds the SKU lookup URL of the distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $skuurl;

    /**
     * Sets the name for the distributor.
     *
     * @param string $name The distributor's name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of the distributor.
     *
     * @return string The distributor's name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the address of this distributor.
     *
     * @param string $address The address of the distributor
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * Returns the address of this distributor.
     *
     * @return string The address of this distributor
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Sets the phone number for this distributor.
     *
     * @param string $phone The phone number of this distributor
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * Returns the phone number of this distributor.
     *
     * @return string The phone number
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Sets the fax number for this distributor.
     *
     * @param string $fax The fax number
     */
    public function setFax($fax)
    {
        $this->fax = $fax;
    }

    /**
     * Returns the fax number for this distributor.
     *
     * @return string $fax The fax number
     */
    public function getFax()
    {
        return $this->fax;
    }

    /**
     * Sets the comment for this distributor.
     *
     * @param string $comment The comment for this distributor
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * Returns the comment for this distributor.
     *
     * @return string The comment
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Sets the email for this distributor.
     *
     * @param string $email The email for this distributor
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Returns the email for this distributor.
     *
     * @return string The email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Sets the URL for this distributor.
     *
     * @param string $url The URL for this distributor
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }

    /**
     * Returns the URL for this distributor.
     *
     * @return string The URL
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Sets the SKU lookup URL for this distributor.
     *
     * @param string $skuurl The SKU lookup URL for this distributor
     */
    public function setSkuurl($skuurl)
    {
        $this->skuurl = $skuurl;
    }

    /**
     * Returns the SKU lookup URL for this distributor.
     *
     * @return string The SKU lookup URL
     */
    public function getSkuurl()
    {
        return $this->skuurl;
    }
}
