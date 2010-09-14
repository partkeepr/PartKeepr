<?php 
namespace de\RaumZeitLabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

/** @Entity @Table(name="footprints") */

class Footprint {
	/** @Id @Column(type="integer") 
	 * @GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @Column(length=64) */
	private $footprint;
	
	public function setFootprint ($footprint) {
		$this->footprint = $footprint;
	}
	
	public function serialize () {
		return array("id" => $this->id, "footprint" => $this->footprint);
	}
}
?>