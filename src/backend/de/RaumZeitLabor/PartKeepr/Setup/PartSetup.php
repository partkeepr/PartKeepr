<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\Part,
	de\RaumZeitLabor\PartKeepr\Part\PartAttachment,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup,
	de\RaumZeitLabor\PartKeepr\Part\PartDistributor,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\Part\PartManufacturer;

class PartSetup {
	/**
	 * Defines the size of the records which are held in memory unless we flush to the DB.
	 * @var int
	 */
	const STEP_SIZE = 100;
	
	/**
	 * Migrates the parts from partdb
	 */
	public static function migrateParts () {
		$r = mysql_query("SELECT COUNT(*) AS count FROM parts");
		$cntArray = mysql_fetch_assoc($r);
		
		$count = $cntArray["count"];
		
		$r = mysql_query("SELECT * FROM parts");
		
		Setup::progress("Migrating parts...");
		$fc=0;
		$cnt=0;
		
		while ($part = mysql_fetch_assoc($r)) {
			$cnt++;
			Setup::progress(" - Adding part ".$cnt."/".$count." ".Setup::convertText($part["name"]), true);
			$oPart = new Part();
			$oPart->setName(Setup::convertText($part["name"]));
			$oPart->setComment(Setup::convertText($part["comment"]));
			$oPart->setFootprint(FootprintSetup::getFootprintForOldId($part["id_footprint"]));
			$oPart->setReviewFlag(true);
			$category = PartCategorySetup::getMigratedCategory($part["id_category"]);
			
			if ($category === null) {
				PartCategoryManager::getInstance()->getRootNode()->getNode();
			} else {
				$oPart->setCategory($category);
			}
			
			$oPart->setStorageLocation(StorageLocationSetup::getMigratedStorageLocation($part["id_storeloc"]));
			$oPart->setMinStockLevel($part["mininstock"]);
			$oPart->setPartUnit(PartUnitSetup::getDefaultPartUnit());
		
			$partDistributor = new PartDistributor();
			$partDistributor->setPart($oPart);
			$partDistributor->setDistributor(DistributorSetup::getMigratedDistributor($part["id_supplier"]));
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
			if ($fc>PartSetup::STEP_SIZE) {
				PartKeepr::getEM()->flush();
				$fc=0;
			}
		
		
		}
	}
}
