<?php
namespace de\RaumZeitLabor\PartDB2\Manufacturer;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;

/** @Entity **/
class Manufacturer {
	
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
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo",mappedBy="manufacturer",cascade={"persist", "remove"})
	 */
	private $icLogos;
	
	public function __construct () {
		$this->icLogos = new \Doctrine\Common\Collections\ArrayCollection();
	}
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function getICLogos () {
		return $this->icLogos;
	}
	
	public function getId () {
		return $this->id;
	}
	
	public function serialize () {
		return array("id" => $this->id, "name" => $this->name);
	}
	
	public static function loadById ($id) {
    	return PartDB2::getEM()->find(get_called_class(), $id);
    }
}