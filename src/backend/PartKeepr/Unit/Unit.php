<?php
namespace PartKeepr\Unit;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Util\Exceptions\OutOfRangeException,
	PartKeepr\SiPrefixBundle\Entity\SiPrefix,
    Doctrine\ORM\Mapping as ORM;


/**
 * This object represents an unit. Units can be: Volt, Hertz etc. 
 *  
 * @ORM\Entity
 **/
class Unit extends BaseEntity implements Serializable, Deserializable {
	/**
	 * The name of the unit (e.g. Volts, Ampere, Farad, Metres)
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $name;
	
	/**
	 * The symbol of the unit (e.g. V, A, F, m)
	 * @ORM\Column(type="string")
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

	/**
	 * Serializes the user object and returns it as array, suitable
	 * to process via json_encode.
	 * @param none
	 * @return array An array containing the object information
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"symbol" => $this->getSymbol(),
			"prefixes" => $this->serializeChildren($this->getPrefixes())
		);
	}
	
	/**
	 * Deserializes the unit
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "symbol":
					$this->setSymbol($value);
					break;
				case "prefixes":
					$prefixes = $this->getPrefixes();
					$prefixes->clear();
					
					foreach ($value as $prefix) {
						$prefix = SiPrefix::loadById($prefix["id"]);
						$prefixes->add($prefix);
					}
					break;
			}
		}
	} 
}