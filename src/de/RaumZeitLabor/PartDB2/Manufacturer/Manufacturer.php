<?php
namespace de\RaumZeitLabor\PartDB2\Manufacturer;
declare(encoding = 'UTF-8');

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
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function serialize () {
		return array("id" => $this->id, "name" => $this->name);
	}
}