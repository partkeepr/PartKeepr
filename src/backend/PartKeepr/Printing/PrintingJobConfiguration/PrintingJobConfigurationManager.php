<?php
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\Manager\AbstractManager,
	PartKeepr\PartKeepr,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingPrintingJobConfiguration,
	PartKeepr\Util\Singleton,
	PartKeepr\Util\Exceptions\ObjectNotFoundException;

/**
 * This is the manager for our printing job configurations.
 */
class PrintingJobConfigurationManager extends AbstractManager {
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Manager\AbstractManager::getEntityName()
	 */
	public function getEntityName () {
		return 'PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfiguration';
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Manager\AbstractManager::getQueryFields()
	 */
	public function getQueryFields () {
		return array("id", "name", "comment", "objectType", "exportRenderer", "rendererConfiguration");
	}

	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Manager\AbstractManager::getDefaultSortField()
	 */
	public function getDefaultSortField () {
		return "name";
	}	
	
	/**
	 * Removes a configuration with the given id from the database.
	 * @param unknown $id
	 */
	public function deleteConfiguration ($id) {
		$part = PartManager::getInstance()->getConfiguration($id);
	
		PartKeepr::getEM()->remove($part);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Get configuration by its id.
	 * @param unknown $id
	 * @return unknown
	 */
	public function getConfiguration ($id) {
		$part = PartKeepr::getEM()->find(getEntityName(), $id);
	
		return $part;
	}
}