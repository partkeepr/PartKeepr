<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use Doctrine\ORM\EntityManager;

/**
 * Represents a basic setup step
 */
abstract class AbstractSetup {
	/**
	 * Represents the Doctrine Entity Manager
	 * @var Doctrine\ORM\EntityManager
	 */
	protected $entityManager;
	
	/**
	 * Represents all messages which are logged during setup
	 * @var array
	 */
	private $messages = array();
	
	/**
	 * Constructs the setup step.
	 * @param EntityManager $em	The entity manager
	 */
	public function __construct (EntityManager $em) {
		$this->entityManager = $em;
	}
	
	abstract public function run ();
	
	public function logMessage ($message) {
		//echo "- ".$message."\n";
		$this->messages[] = $message;
	}
}