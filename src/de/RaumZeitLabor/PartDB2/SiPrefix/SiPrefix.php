<?php
namespace de\RaumZeitLabor\PartDB2\SiPrefix;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Util\Exceptions\OutOfRangeException;


/** @Entity **/
class SiPrefix {
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * The prefix of the Si-Prefix (e.g. yotta, deca, deci, centi)
	 * @Column(type="string")
	 * @var string
	 */
	private $prefix;
	
	/**
	 * The symbol of the Si-Prefix (e.g. m, M, G)
	 * @Column(type="string",length=2)
	 * @var string
	 */
	private $symbol;
	
	/**
	 * The power of the Si-Prefix (e.g. milli = 10^-3)
	 * @Column(type="integer")
	 * @var int
	 */
	private $power;
	
	/**
	 * Sets the prefix name.
	 * @param string $prefix
	 */
	public function setPrefix ($prefix) {
		$this->prefix = $prefix;
	}
	
	/**
	 * Returns the prefix name
	 * @return string The prefix name
	 */
	public function getPrefix () {
		return $this->prefix;
	}
	
	/**
	 * Sets the symbol for the prefix
	 * @param string $symbol The symbol
	 */
	public function setSymbol ($symbol) {
		$this->symbol = $symbol;
	}
	
	/**
	 * Returns the symbol for the prefix
	 * @return string The symbol
	 */
	public function getSymbol () {
		return $this->symbol;
	}
	
	/**
	 * Sets the power in a 10^n power (n=power)
	 * @param int $power The 10^power
	 */
	public function setPower ($power) {
		$this->power = $power;
	}
	
	/**
	 * Returns the power (10^n)
	 * @return int The power
	 */
	public function getPower () {
		return $this->power;
	}
	
	/**
	 * Returns the ID for this object.
	 * @param none
	 * @return int The ID for this object
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Serializes the object into an array format.
	 * @return array the object in serialized format.
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"symbol" => $this->getSymbol(),
			"prefix" => $this->getPrefix(),
			"power" => $this->getPower());
	}
	
	/**
	 * Loads a prefix by ID
	 * @param int $id The ID to load
	 */
	public static function loadById ($id) {
    	return PartDB2::getEM()->find(get_called_class(), $id);
    }
}