<?php
namespace de\RaumZeitLabor\PartKeepr\Distributor;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;

/** @Entity **/
class Distributor {
	
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var unknown_type
	 */
	private $id;
	
	/**
	 * @Column(type="string",unique=true)
	 */
	private $name;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $address;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $url;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $phone;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $fax;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $email;
	
	/**
	 * @Column(type="string",nullable=true)
	 */
	private $comment;
		
	public function __construct () {
	}
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function getName () {
		return $this->name;
	}
	
	public function setAddress ($address) {
		$this->address = $address;
	}
	
	public function getAddress () {
		return $this->address;
	}
	
	public function setPhone ($phone) {
		$this->phone = $phone;
	}
	
	public function getPhone () {
		return $this->phone;
	}
	
	public function setFax ($fax) {
		$this->fax = $fax;
	}
	
	public function getFax ($fax) {
		return $this->fax;
	}
	
	
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	public function getComment () {
		return $this->comment;
	}
	
	public function setEmail ($email) {
		$this->email = $email;
	}
	
	public function getEmail () {
		return $this->email;
	}
	
	public function setURL ($url) {
		$this->url = $url;
	}
	
	public function getURL () {
		return $this->url;
	}
	
	public function getICLogos () {
		return $this->icLogos;
	}
	
	public function getId () {
		return $this->id;
	}
	
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"url" => $this->getURL(),
			"address" => $this->getAddress(),
			"email" => $this->getEmail(),
			"comment" => $this->getComment()
		);
	}
	
	public static function loadById ($id) {
    	return PartKeepr::getEM()->find(get_called_class(), $id);
    }
}