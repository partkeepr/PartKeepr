<?php
namespace PartKeepr\Distributor;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;

/**
 * Represents a distributor
 * @ORM\Entity **/
class Distributor extends BaseEntity implements Serializable, Deserializable {
	/**
	 * Holds the name of the distributor
	 * @ORM\Column(type="string",unique=true)
	 * @var string
	 */
	private $name;
	
	/**
	 * Holds the address of the distributor
	 * @ORM\Column(type="text",nullable=true)
	 * @var string
	 */
	private $address;
	
	/**
	 * Holds the URL of the distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $url;
	
	/**
	 * Holds the phone number of the distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $phone;
	
	/**
	 * Holds the fax number of the distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $fax;
	
	/**
	 * Holds the email of the distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $email;
	
	/**
	 * Holds a comment for the distributor
	 * @ORM\Column(type="text",nullable=true)
	 * @var string
	 */
	private $comment;
	
	/**
	 * Holds the SKU lookup URL of the distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $skuurl;
		
	/**
	 * Sets the name for the distributor
	 * 
	 * @param string $name The distributor's name
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name of the distributor
	 * @return string The distributor's name
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the address of this distributor
	 * 
	 * @param string $address The address of the distributor
	 */
	public function setAddress ($address) {
		$this->address = $address;
	}
	
	/**
	 * Returns the address of this distributor
	 * @return string The address of this distributor
	 */
	public function getAddress () {
		return $this->address;
	}
	
	/**
	 * Sets the phone number for this distributor
	 * 
	 * @param string $phone The phone number of this distributor
	 */
	public function setPhone ($phone) {
		$this->phone = $phone;
	}
	
	/**
	 * Returns the phone number of this distributor
	 * @return string The phone number
	 */
	public function getPhone () {
		return $this->phone;
	}
	
	/**
	 * Sets the fax number for this distributor
	 * 
	 * @param string $fax The fax number
	 */
	public function setFax ($fax) {
		$this->fax = $fax;
	}
	
	/**
	 * Returns the fax number for this distributor
	 * 
	 * @return string $fax The fax number
	 */
	public function getFax () {
		return $this->fax;
	}
	
	/**
	 * Sets the comment for this distributor
	 * 
	 * @param string $comment The comment for this distributor
	 */
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	/**
	 * Returns the comment for this distributor
	 * 
	 * @return string The comment
	 */
	public function getComment () {
		return $this->comment;
	}
	
	/**
	 * Sets the email for this distributor
	 * 
	 * @param string $email The email for this distributor
	 */
	public function setEmail ($email) {
		$this->email = $email;
	}
	
	/**
	 * Returns the email for this distributor
	 * @return string The email
	 */
	public function getEmail () {
		return $this->email;
	}
	
	/**
	 * Sets the URL for this distributor
	 * 
	 * @param string $url The URL for this distributor
	 */
	public function setURL ($url) {
		$this->url = $url;
	}
	
	/**
	 * Returns the URL for this distributor
	 * @return string The URL
	 */
	public function getURL () {
		return $this->url;
	}
	
	/**
	 * Sets the SKU lookup URL for this distributor
	 * 
	 * @param string $skuurl The SKU lookup URL for this distributor
	 */
	public function setSKUURL ($skuurl) {
		$this->skuurl = $skuurl;
	}
	
	/**
	 * Returns the SKU lookup URL for this distributor
	 * @return string The SKU lookup URL
	 */
	public function getSKUURL () {
		return $this->skuurl;
	}

	/**
	 * Returns the distributor in serialized form.
	 * @return array The serialized distributor
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
			"skuurl" => $this->getSKUURL()
		);
	}
	
	/**
	 * Deserializes the distributor
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
				case "fax":
					$this->setFax($value);
					break;
				case "phone":
					$this->setPhone($value);
					break;
				case "email":
					$this->setEmail($value);
					break;
				case "address":
					$this->setAddress($value);
					break;
				case "skuurl":
					$this->setSKUURL($value);
					break;
			}
		}
	} 
}
