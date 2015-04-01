<?php
namespace PartKeepr\Manufacturer;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;

/**
 * Represents a manufacturer
 * @ORM\Entity **/
class Manufacturer extends BaseEntity implements Serializable, Deserializable {
	/**
	 * The name of the manufacturer
	 * @ORM\Column(type="string",unique=true)
	 * @var string
	 */
	private $name;
	
	/**
	 * The address of the manufacturer
	 * @ORM\Column(type="text",nullable=true)
	 * @var string
	 */
	private $address;
	
	/**
	 * The URL
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $url;
	
	/**
	 * The email
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $email;
	
	/**
	 * The comment
	 * @ORM\Column(type="text",nullable=true)
	 * @var string
	 */
	private $comment;
	
	/**
	 * The phone number
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $phone;
	
	/**
	 * The fax number
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $fax;
	
	/**
	 * All ic logos of this manufacturer
	 * @ORM\OneToMany(targetEntity="PartKeepr\Manufacturer\ManufacturerICLogo",mappedBy="manufacturer",cascade={"persist", "remove"})
	 */
	private $icLogos;
	
	/**
	 * Creates a new manufacturer instance
	 */
	public function __construct () {
		$this->icLogos = new \Doctrine\Common\Collections\ArrayCollection();
	}
	
	/**
	 * Sets the name
	 * @param string $name The name
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name
	 * @return string The name
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the phone number
	 * @param string $phone The phone number
	 */
	public function setPhone ($phone) {
		$this->phone = $phone;
	}
	
	/**
	 * Returns the phone number
	 * @return string The phone number
	 */
	public function getPhone () {
		return $this->phone;
	}
	
	/**
	 * Sets the fax number
	 * @param string $fax The fax number
	 */
	public function setFax ($fax) {
		$this->fax = $fax;
	}
	
	/**
	 * Returns the fax number
	 * @return string The fax number
	 */
	public function getFax () {
		return $this->fax;
	}
	
	/**
	 * Sets the address
	 * @param string $address The address
	 */
	public function setAddress ($address) {
		$this->address = $address;
	}
	
	/**
	 * Returns the address
	 * @return string The address
	 */
	public function getAddress () {
		return $this->address;
	}
	
	/**
	 * Sets the comment
	 * @param string $comment The comment
	 */
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	/**
	 * Returns the comment
	 * @return string The comment
	 */
	public function getComment () {
		return $this->comment;
	}
	
	/**
	 * Sets the email
	 * @param string $email The email
	 */
	public function setEmail ($email) {
		$this->email = $email;
	}
	
	/**
	 * Returns the email
	 * @return string The email
	 */
	public function getEmail () {
		return $this->email;
	}
	
	/**
	 * Sets the URL
	 * @param string $url The URL
	 */
	public function setURL ($url) {
		$this->url = $url;
	}
	
	/**
	 * Returns the URL
	 * @return string The url
	 */
	public function getURL () {
		return $this->url;
	}
	
	/**
	 * Returns the ic logos
	 * @return ArrayCollection The array with all ic logos
	 */
	public function getICLogos () {
		return $this->icLogos;
	}
	
	/**
	 * Returns this manufacturer in serialized form
	 * @return array The serialized manufacturer
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"url" => $this->getURL(),
			"address" => $this->getAddress(),
			"email" => $this->getEmail(),
			"comment" => $this->getComment(),
			"phone" => $this->getPhone(),
			"fax" => $this->getFax(),
			"iclogos" => $this->serializeChildren($this->getICLogos())
		);
	}
	
	/**
	 * Deserializes the manufacturer
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "url":
					$this->setURL($value);
					break;
				case "comment":
					$this->setComment($value);
					break;
				case "email":
					$this->setEmail($value);
					break;
				case "fax":
					$this->setFax($value);
					break;
				case "phone":
					$this->setPhone($value);
					break;
				case "address":
					$this->setAddress($value);
					break;
				case "iclogos":
					$this->deserializeChildren($value, $this->getICLogos(), "PartKeepr\Manufacturer\ManufacturerICLogo");
					foreach ($this->getICLogos() as $iclogo) {
						$iclogo->setManufacturer($this);
					}
					break;
			}
		}
	} 
}