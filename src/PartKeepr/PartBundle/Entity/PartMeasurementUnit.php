<?php
namespace PartKeepr\PartBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\Util\BaseEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * This entity represents a part measurement unit. Typical measurement units are pieces, centimeters etc.
 *
 * @ORM\Entity
 * @ORM\Table(name="PartUnit")
 * @TargetService(uri="/api/part_measurement_units")
 **/
class PartMeasurementUnit extends BaseEntity {
	/**
	 * Defines the name of the unit
	 *
	 * @ORM\Column(type="string")
	 * @Groups({"default"})
	 *
	 * @Assert\Type(type="string")
	 * @Assert\NotBlank(message="partMeasurementUnit.name.not_blank")
	 *
	 * @var string
	 */
	private $name;
	
	/**
	 * Defines the short name of the unit
	 *
	 * @ORM\Column(type="string")
	 * @Groups({"default"})
	 *
	 * @Assert\Type(type="string")
	 * @Assert\NotBlank(message="partMeasurementUnit.shortName.not_blank")
	 *
	 * @var string
	 */
	private $shortName;
	
	/**
	 * Defines if the unit is default or not. Note that this property may not be set directly.
	 *
	 * @ORM\Column(type="boolean", name="is_default")
	 * @Groups({"default"})
	 *
	 * @var boolean
	 */
	private $isDefault;
	
	/**
	 * The parts used by this PartMeasurementUnit
	 *
	 * @ORM\OneToMany(targetEntity="PartKeepr\Part\Part",mappedBy="partUnit")
	 */
	private $parts;
	
	
	/**
	 * Creates a new part unit.
	 * 
	 * Sets the default to false.
	 */
	public function __construct () {
		$this->parts = new ArrayCollection();
		$this->setIsDefault(false);
	}
	
	/**
	 * Sets the name for this unit
	 * @param string $name The name for this unit
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name for this unit
	 * @param none
	 * @return string The name for this unit
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the short name for this unit.
	 * 
	 * Short names are used for list views (e.g. if your unit name is "metres", your short name could be "m")
	 * @param string $shortName The short name
	 */
	public function setShortName ($shortName) {
		$this->shortName = $shortName;
	}
	
	/**
	 * Returns the short name for this unit
	 * @param none
	 * @return string The short name for this unit
	 */
	public function getShortName () {
		return $this->shortName;
	}
	
	/**
	 * Defines if the unit is default or not.
	 * @param boolean $default True if the unit is default, false otherwise
	 */
	public function setIsDefault ($default) {
		$this->isDefault = (bool)$default;
	}
	
	/**
	 * Returns if the unit is default or not
	 * @param none
	 * @return boolean True if the unit is default, false for not
	 */
	public function getIsDefault () {
		return $this->isDefault;
	}

	/**
	 * Returns the parts for this PartUnit
	 * @return ArrayCollection
	 */
	public function getParts () {
		return $this->parts;
	}
}
	