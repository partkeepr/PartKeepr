<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit;

class PartUnitSetup extends AbstractSetup {
	/**
	 * Holds the default unit
	 * @var object
	 */
	private static $defaultUnit;
	
	/**
	 * Sets up the default part unit if none exists
	 */
	public function run () {
		$dql = "SELECT COUNT(p) FROM de\RaumZeitLabor\PartKeepr\Part\PartUnit p WHERE p.is_default = 1";
		$query = $this->entityManager->createQuery($dql);
		
		if ($query->getSingleScalarResult() == 0) {
			$partUnit = new PartUnit();
			$partUnit->setName(PartKeepr::i18n("Pieces"));
			$partUnit->setShortName(PartKeepr::i18n("pcs"));
			$partUnit->setDefault(true);
			
			$this->entityManager->persist($partUnit);
			$this->entityManager->flush();
			
			$this->logMessage("Added default part unit");
		} else {
			$this->logMessage("Skipped adding default part unit, because a default part unit already exists");
		}
	}
}
