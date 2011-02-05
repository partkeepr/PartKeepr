<?php
namespace de\RaumZeitLabor\PartDB2\Part;
declare(encoding = 'UTF-8');

/** @Entity **/
class Part {
	
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var unknown_type
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Category\Category") 
	 */
	private $category;
	
	/**
	 * @Column
	 */
	private $name;

	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Footprint\Footprint")
	 */
	private $footprint;
	
	/**
	 * @Column(type="text")
	 */
	private $comment;

	public function setCategory (\de\RaumZeitLabor\PartDB2\Category\Category $category) {
		$this->category = $category;
	}
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function setFootprint (\de\RaumZeitLabor\PartDB2\Footprint\Footprint $footprint) {
		$this->footprint = $footprint;
	}
	
	public function setComment ($comment) {
		$this->comment = $comment;
	}
}