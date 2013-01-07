<?php
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\Manager\AbstractManager,
	PartKeepr\PartKeepr,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingPrintingJobConfiguration,
	PartKeepr\Util\Singleton,
	PartKeepr\Util\Exceptions\ObjectNotFoundException;

class PrintingJobConfigurationManager extends AbstractManager {
	public function getEntityName () {
		return 'PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfiguration';
	}
	
	public function getQueryFields () {
		return array("id", "name", "comment", "objectType", "exportRenderer", "rendererConfiguration");
	}

	public function getDefaultSortField () {
		return "name";
	}	
	
	public function deleteConfiguration ($id) {
		$part = PartManager::getInstance()->getConfiguration($id);
	
		PartKeepr::getEM()->remove($part);
		PartKeepr::getEM()->flush();
	}
	
	public function getConfiguration ($id) {
		$part = PartKeepr::getEM()->find(getEntityName(), $id);
	
		return $part;
	}
}