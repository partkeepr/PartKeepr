<?php
namespace PartKeepr\SiPrefix;

use PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Util\Exceptions\OutOfRangeException,
    Doctrine\ORM\Mapping as ORM;


/** @ORM\Entity **/
class SiPrefix extends BaseEntity {
	/**
	 * The prefix of the Si-Prefix (e.g. yotta, deca, deci, centi)
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $prefix;
	
	/**
	 * The symbol of the Si-Prefix (e.g. m, M, G)
	 * @ORM\Column(type="string",length=2)
	 * @var string
	 */
	private $symbol;
	
	/**
	 * The power of the Si-Prefix (e.g. milli = 10^-3)
	 * @ORM\Column(type="integer")
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
}