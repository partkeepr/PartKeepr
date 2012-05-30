<?php
namespace PartKeepr\Setup\Migration\PartDB;

use	PartKeepr\PartKeepr,
	PartKeepr\Part\Part,
	PartKeepr\Part\PartAttachment,
	PartKeepr\Part\PartDistributor,
	PartKeepr\Part\PartManager,
	PartKeepr\Stock\StockEntry,
	PartKeepr\Distributor\DistributorManager,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\Footprint\FootprintManager,
	PartKeepr\PartUnit\PartUnitManager,
	PartKeepr\StorageLocation\StorageLocationManager,
	PartKeepr\Setup\AbstractSetup;

class PartMigration extends AbstractSetup {
	/**
	 * Migrates the existing distributors
	 */
	public function run () {
		$count = 0;
		$skipped = 0;
		$fc = 0;
		
		$r = mysql_query("SELECT * FROM parts");
		
		while ($part = mysql_fetch_assoc($r)) {
			$name = PartDBMigration::convertText($part["name"]);
			
			$oPart = new Part();
			$oPart->setName($name);
			$oPart->setComment(PartDBMigration::convertText($part["comment"]));
			
			$oPart->setFootprint($this->getFootprintForPart($part["id"]));
			$oPart->setReviewFlag(true);
			$category = PartCategoryMigration::getMigratedCategory($part["id_category"]);
			
			if ($category === null) {
				PartCategoryManager::getInstance()->getRootNode()->getNode();
			} else {
				$oPart->setCategory($category);
			}
			
			$oPart->setStorageLocation($this->getStorageLocationForPart($part["id"]));
			$oPart->setMinStockLevel($part["mininstock"]);
			$oPart->setPartUnit(PartUnitManager::getInstance()->getDefaultPartUnit());
			
			$partDistributor = new PartDistributor();
			$partDistributor->setPart($oPart);
			$partDistributor->setDistributor($this->getDistributorForPart($part["id"]));
			$partDistributor->setOrderNumber($part["supplierpartnr"]);
			$oPart->getDistributors()->add($partDistributor);
			
			
			/* Add existing datasheets */
			$datasheetQuery = "SELECT datasheeturl FROM datasheets WHERE part_id = ".$part["id"];
			$r3 = mysql_query($datasheetQuery);
			while ($res = mysql_fetch_assoc($r3)) {
				try {
					$attachment = new PartAttachment();
					$attachment->setPart($oPart);
					$attachment->replaceFromURL($res["datasheeturl"]);
					$attachment->setDescription(PartKeepr::i18n("Datasheet"));
					$oPart->getAttachments()->add($attachment);
				} catch (\Exception $e) {
					Setup::progress(" - error with url ".$res["datasheeturl"].". Maybe the datasheet was not found.");
					Setup::progress(" - The exception error was: ".$e->getMessage());
				}
			}
			
			PartKeepr::getEM()->persist($oPart);
			
			$oStock = new StockEntry($oPart, $part["instock"]);
			
			$priceQuery = "SELECT AVG(preis) AS preis FROM preise WHERE part_id = ".$part["id"];
			
			$r2 = mysql_query($priceQuery);
			$res = mysql_fetch_assoc($r2);
			
			if ($res) {
				if ($res["preis"] !== null) {
					$oStock->setPrice(floatval($res["preis"]));
				}
			}
			
			PartKeepr::getEM()->persist($oStock);
			
			$fc++;
			
			// Flush every STEP_SIZE parts
			if ($fc>PartMigration::STEP_SIZE) {
				PartKeepr::getEM()->flush();
				$fc=0;
			}
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Migrated %d parts, skipped %d because they already exist", $count, $skipped));
	}
	
	private function getFootprintForPart ($oldid) {
		$r = mysql_query("SELECT footprints.name FROM footprints, parts WHERE footprints.id = parts.id_footprint AND parts.id = ".intval($oldid));
		
		$data = mysql_fetch_assoc($r);
		
		return FootprintManager::getInstance()->getFootprintByName(PartDBMigration::convertText($data["name"]));
	}
	
	private function getStorageLocationForPart ($oldid) {
		$r = mysql_query("SELECT storeloc.name FROM storeloc, parts WHERE storeloc.id = parts.id_storeloc AND parts.id = ".intval($oldid));
	
		$data = mysql_fetch_assoc($r);
	
		return StorageLocationManager::getInstance()->getStorageLocationByName(PartDBMigration::convertText($data["name"]));
	}
	
	private function getDistributorForPart ($oldid) {
		$r = mysql_query("SELECT suppliers.name FROM suppliers, parts WHERE suppliers.id = parts.id_supplier AND parts.id = ".intval($oldid));
	
		$data = mysql_fetch_assoc($r);
	
		return DistributorManager::getInstance()->getDistributorByName(PartDBMigration::convertText($data["name"]));
	}
	
	/**
	 * Defines the size of the records which are held in memory unless we flush to the DB.
	 * @var int
	 */
	const STEP_SIZE = 100;
}
