<?php 
namespace de\RaumZeitLabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

/** @Entity */

class Footprint {
	/** @Id @Column(type="integer") 
	 * @GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @Column(length=64,unique=true) */
	private $footprint;
	
	public function setFootprint ($footprint) {
		$this->footprint = $footprint;
	}
	
	public function getId () {
		return $this->id;
	}
	
	public function getFootprint () {
		return $this->footprint;
	}
	
	public function serialize () {
		return array("id" => $this->id, "footprint" => $this->footprint);
	}
}
?>