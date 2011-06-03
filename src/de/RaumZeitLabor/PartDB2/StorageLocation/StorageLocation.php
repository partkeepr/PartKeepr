<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation;
declare(encoding = 'UTF-8');

/** @Entity **/
class StorageLocation {
	
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
	
	public function getName () {
		return $this->name;
	}
	public function getId () {
		return $this->id;
	}
	
	public function serialize () {
		return array("id" => $this->id, "name" => $this->name);
	}
}