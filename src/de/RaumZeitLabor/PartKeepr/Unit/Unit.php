<?php
namespace de\RaumZeitLabor\PartKeepr\Unit;
use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Exceptions\OutOfRangeException,
	de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix;


/**
 * This object represents an unit. Units can be: Volt, Hertz etc. 
 *  
 * @Entity
 **/
class Unit extends BaseEntity implements Serializable {
	/**
	 * The name of the unit (e.g. Volts, Ampere, Farad, Metres)
	 * @Column(type="string")
	 * @var string
	 */
	private $name;
	
	/**
	 * The symbol of the unit (e.g. V, A, F, m)
	 * @Column(type="string")
	 * @var string
	 */
	private $symbol;
	
	/**
	 * Defines the allowed SiPrefixes for this parameter unit
	 * @ManyToMany(targetEntity="de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix")
	 * @JoinTable(name="UnitSiPrefixes",
	 * 			joinColumns={@JoinColumn(name="unit_id", referencedColumnName="id")},
	 * 			inverseJoinColumns={@JoinColumn(name="siprefix_id", referencedColumnName="id")}
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
}