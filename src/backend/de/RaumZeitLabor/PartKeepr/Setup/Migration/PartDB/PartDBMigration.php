<?php
namespace de\RaumZeitLabor\PartKeepr\Setup\Migration\PartDB;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Configuration as PartKeeprConfiguration;

class PartDBMigration {
	/**
	 * Specifies if setup runs in console mode.
	 * @var boolean
	 */
	private $console = false;
	
	/**
	 * Runs the setup with all steps
	 */
	public function run () {
		$this->runStep("all");
	}
	
	/**
	 * Sets console mode.
	 *
	 * In this mode, messages are directly written to the console.
	 */
	public function setConsole () {
		$this->console = true;
	}
	
	/**
	 * Runs a specific setup step, or all steps.
	 * @param string $step
	 * @throws \Exception
	 */
	public function runStep ($step) {
		$entityManager = PartKeepr::getEM();
	
		$aSteps = array(
				"distributor" => new DistributorMigration($entityManager),
				"footprint" => new FootprintMigration($entityManager),
				"partcategory" => new PartCategoryMigration($entityManager),
				"storagelocation" => new StorageLocationMigration($entityManager),
				"part" => new PartMigration($entityManager)
		);
	
		if ($step == "all") {
			foreach ($aSteps as $step) {
				$step->setConsole($this->console);
				$step->run();
			}
		} else {
			if (array_key_exists($step, $aSteps)) {
				$aSteps[$step]->run();
			} else {
				throw new \Exception(sprintf("Migration step %s doesn't exist", $step));
			}
		}
	}
	
	/**
	 * Converts strange escpaes in the database to "regular" text.
	 * @param string $string The string to convert
	 * @return string The converted string
	 */
	public static function convertText ($string) {
		$string = stripslashes($string);
		$string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
		$string = str_replace("&#937;", "Ω", $string);
		return $string;
	}
}
