<?php
namespace de\RaumZeitLabor\PartDB2\Unit;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Util\Exceptions\OutOfRangeException,
	de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix;


/**
 * This object represents an unit. Units can be: Volt, Hertz etc. 
 *  
 * @Entity
 **/
class Unit {
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
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
	 * @ManyToMany(targetEntity="de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix")
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
	 * Returns the ID for this object.
	 * @param none
	 * @return int The ID for this object
	 */
	public function getId () {
		return $this->id;
	}
}