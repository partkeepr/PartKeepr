<?php

namespace PartKeepr\ManufacturerBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a manufacturer.
 *
 * @ORM\Entity
 * @TargetService(uri="/api/manufacturers")
 **/
class Manufacturer extends BaseEntity
{
    /**
     * The name of the manufacturer.
     *
     * @ORM\Column(type="string",unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * The address of the manufacturer.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $address;

    /**
     * The URL.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $url;

    /**
     * The email.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $email;

    /**
     * The comment.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $comment;

    /**
     * The phone number.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $phone;

    /**
     * The fax number.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $fax;

    /**
     * All ic logos of this manufacturer.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\ManufacturerBundle\Entity\ManufacturerICLogo",mappedBy="manufacturer",cascade={"persist", "remove"}, orphanRemoval=true)
     *
     * @UploadedFileCollection()
     * @Groups({"default"})
     */
    private $icLogos;

    /**
     * Creates a new manufacturer instance.
     */
    public function __construct()
    {
        $this->icLogos = new ArrayCollection();
    }

    /**
     * Sets the name.
     *
     * @param string $name The name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name.
     *
     * @return string The name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the phone number.
     *
     * @param string $phone The phone number
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * Returns the phone number.
     *
     * @return string The phone number
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Sets the fax number.
     *
     * @param string $fax The fax number
     */
    public function setFax($fax)
    {
        $this->fax = $fax;
    }

    /**
     * Returns the fax number.
     *
     * @return string The fax number
     */
    public function getFax()
    {
        return $this->fax;
    }

    /**
     * Sets the address.
     *
     * @param string $address The address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * Returns the address.
     *
     * @return string The address
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Sets the comment.
     *
     * @param string $comment The comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * Returns the comment.
     *
     * @return string The comment
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Sets the email.
     *
     * @param string $email The email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Returns the email.
     *
     * @return string The email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Sets the URL.
     *
     * @param string $url The URL
     */
    public function setURL($url)
    {
        $this->url = $url;
    }

    /**
     * Returns the URL.
     *
     * @return string The url
     */
    public function getURL()
    {
        return $this->url;
    }

    /**
     * Returns the ic logos.
     *
     * @return ArrayCollection The array with all ic logos
     */
    public function getIcLogos()
    {
        return $this->icLogos;
    }

    /**
     * Adds an IC Logo.
     *
     * @param object $icLogo Either a ManufacturerICLogo or a TempImage
     */
    public function addIcLogo($icLogo)
    {
        if ($icLogo instanceof ManufacturerICLogo) {
            $icLogo->setManufacturer($this);
        }

        $this->icLogos->add($icLogo);
    }

    /**
     * Removes an IC Logo.
     *
     * @param ManufacturerICLogo $icLogo
     */
    public function removeIcLogo(ManufacturerICLogo $icLogo)
    {
        $icLogo->setManufacturer(null);
        $this->icLogos->removeElement($icLogo);
    }
}
