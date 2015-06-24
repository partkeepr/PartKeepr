<?php
namespace PartKeepr\Setup;

use	PartKeepr\PartKeepr,
	PartKeepr\PartBundle\Entity\PartMeasurementUnit;

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
		$dql = "SELECT COUNT(p) FROM PartKeepr\PartBundle\Entity\PartMeasurementUnit p WHERE p.is_default = :default";
		$query = $this->entityManager->createQuery($dql);
		$query->setParameter("default", true);
		
		if ($query->getSingleScalarResult() == 0) {
			$partUnit = new PartMeasurementUnit();
			$partUnit->setName(PartKeepr::i18n("Pieces"));
			$partUnit->setShortName(PartKeepr::i18n("pcs"));
			$partUnit->setIsDefault(true);
			
			$this->entityManager->persist($partUnit);
			$this->entityManager->flush();
			
			$this->logMessage("Added default part unit");
		} else {
			$this->logMessage("Skipped adding default part unit, because a default part unit already exists");
		}
	}
}
