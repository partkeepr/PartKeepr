<?php
namespace de\RaumZeitLabor\PartKeepr\Project;

use de\RaumZeitLabor\PartKeepr\Part\Part,
	de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Util\Deserializable,
	de\RaumZeitLabor\PartKeepr\Util\BaseEntity;
	
/**
 * Represents a part in the database. The heart of our project. Handle with care!
 * @Entity **/
class ProjectPart extends BaseEntity implements Serializable, Deserializable {
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part")
	 */
	private $part;
	
	/**
	 * Specifies the amount of parts
	 * @Column(type="integer")
	 */
	private $quantity;
	
	/**
	 * Specifies the project which belongs to this project part
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part")
	 */
	private $project;
	
	/**
	 * Specifies the remarks for this entry
	 * @Column(type="string",nullable=true)
	 */
	private $remarks;
	
	/**
	 * Sets the part which belongs to this entry
	 * @param Part $part
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	/**
	 * Returns the part which belongs to this entry
	 * @return Part
	 */
	public function getPart () {
		return $this->part;
	}
	
	/**
	 * Sets the quantity for this entry
	 * @param int $quantity
	 */
	public function setQuantity ($quantity) {
		$this->quantity = intval($quantity);
	}
	
	/**
	 * Returns the quantity for this project
	 * @return int the amount of parts needed
	 */
	public function getQuantity () {
		return $this->quantity;
	}
	
	/**
	 * Sets the project assigned to this entry
	 * @param Project $project
	 */
	public function setProject (Project $project) {
		$this->project = $project;
	}
	
	/**
	 * Returns the project assigned to this entry
	 * @return Project
	 */
	public function getProject () {
		return $this->project;
	}
	
	/**
	 * Sets the remarks for this entry
	 * @param string $remarks
	 */
	public function setRemarks ($remarks) {
		$this->remarks = $remarks;
	}
	
	/**
	 * Returns the remarks for this entry
	 * @return string
	 */
	public function getRemarks () {
		return $this->remarks;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"quantity" => $this->getQuantity(),
				"part_id" => is_object($this->getPart()) ? $this->getPart()->getId() : 0,
				"part_name" => is_object($this->getPart()) ? $this->getPart()->getName() : 0,
				"project_id" => $this->getProject()->getId(),
				"remarks" => $this->getRemarks()
		);
	}
	
	/**
	 * Deserializes the project
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "remarks":
					$this->setRemarks($value);
					break;
				case "quantity":
					$this->setQuantity($value);
					break;
				case "part_id":
					$part = Part::loadById($value);
					$this->setPart($part);
					break;
			}
		}
	}
	
}