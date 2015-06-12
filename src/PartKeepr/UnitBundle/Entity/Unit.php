<?php
namespace PartKeepr\UnitBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\ExclusionPolicy;
use	PartKeepr\Util\BaseEntity,
	PartKeepr\SiPrefixBundle\Entity\SiPrefix,
    Doctrine\ORM\Mapping as ORM,
	JMS\Serializer\Annotation\Type,
	PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;

/**
 * This object represents an unit. Units can be: Volt, Hertz etc. 
 *  
 * @ORM\Entity
 * @TargetService(uri="/unit")
 * @ExclusionPolicy("none")
 **/
class Unit {
	/**
	 * @ORM\Id @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;

	/**
	 * Returns the ID of this object.
	 *
	 * @param none
	 *
	 * @return int The ID of this object
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * The name of the unit (e.g. Volts, Ampere, Farad, Metres)
	 * @ORM\Column(type="string")
	 * @Type("string")
	 *
	 * @var string
	 */
	private $name;
	
	/**
	 * The symbol of the unit (e.g. V, A, F, m)
	 * @ORM\Column(type="string")
	 * @Type("string")
	 * @var string
	 */
	private $symbol;
	
	/**
	 * Defines the allowed SiPrefixes for this parameter unit
	 * @ORM\ManyToMany(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
	 * @ORM\JoinTable(name="UnitSiPrefixes",
	 * 			joinColumns={@ORM\JoinColumn(name="unit_id", referencedColumnName="id")},
	 * 			inverseJoinColumns={@ORM\JoinColumn(name="siprefix_id", referencedColumnName="id")}
	 * 			)
	 * @Type("ArrayCollection<PartKeepr\SiPrefixBundle\Entity\SiPrefix>")
	 * @var ArrayCollection
	 */
	private $prefixes;
	
	/**
	 * Creates a new Unit.
	 */
	public function __construct () {
		$this->prefixes = new \Doctrine\Common\Collections\ArrayCollection();
	}
	
	/**
	 * Sets the name for this unit
	 * @param string $name the name for this unit
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name for this unit
	 * @return string The unit name
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the symbol for this unit
	 * @param string $symbol The symbol
	 */
	public function setSymbol ($symbol) {
		$this->symbol = $symbol;
	}
	
	/**
	 * Returns the symbol for this unit
	 * @return string The symbol
	 */
	public function getSymbol () {
		return $this->symbol;
	}
	
	/**
	 * Returns the si-prefix list for this unit 
	 * @return array An array of SiPrefix objects
	 */
	public function getPrefixes () {
		return $this->prefixes;
	}
}