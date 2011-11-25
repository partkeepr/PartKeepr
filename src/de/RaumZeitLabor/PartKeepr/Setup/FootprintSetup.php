<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager,
	de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategoryManager,
	de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategory,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\Footprint\FootprintImage,
	de\RaumZeitLabor\PartKeepr\Footprint\FootprintAttachment,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Setup\Setup;

class FootprintSetup {
	/**
	 * Holds the migrated footprints
	 * @var array
	 */
	private static $migratedFootprints = array();
	
	const FOOTPRINT_PATH = "../setup-data/footprints";
	const FOOTPRINT_FILE = "../setup-data/footprints/footprints.yaml";
	
	/**
	 * Creates the root node for the footprints
	 */
	public static function setupRootNode () {
		FootprintCategoryManager::getInstance()->ensureRootExists();
	}
	
	/**
	 * Returns a footprint by it's partdb id
	 * @param int $id The footprint id from the old partdb
	 */
	public static function getFootprintForOldId ($id) {
		return FootprintSetup::$migratedFootprints[$id];
	}
	
	/**
	 * Creates a node structure for the given path
	 * 
	 * @param $path array The components of the path
	 * @param $node Node  The parent node
	 */
	public static function addFootprintPath (Array $path, $node) {
		if (count($path) == 0) {
			return $node;
		}
		$name = array_shift($path);
	
		$childNode = null;
	
		foreach ($node->getChildren() as $child) {
			if ($child->getNode()->getName() == $name) {
				$childNode = $child;
			}
		}
	
		if ($childNode === null) {
			$category = new FootprintCategory();
			$category->setParent($node->getNode()->getId());
			$category->setName($name);
			$childNode = FootprintCategoryManager::getInstance()->addCategory($category);
		}
	
		return FootprintSetup::addFootprintPath($path, $childNode);
	}
	
	/**
	 * Migrates the existing footprints from the PartDB.
	 */
	public static function migrateFootprints () {
		Setup::progress("Migrating footprints...");
		$r = mysql_query("SELECT * FROM footprints");
		
		while ($sFootprint = mysql_fetch_assoc($r)) {
			Setup::progress(" - Migrating footprint ".$sFootprint["name"], true);
			
			$footprint = new Footprint();
			$footprint->setName(Setup::convertText($sFootprint["name"]));
		
	
			$footprintCategory = FootprintSetup::addFootprintPath(explode("/", "Imported Footprints"), FootprintCategoryManager::getInstance()->getRootNode());
			$footprint->setCategory($footprintCategory->getNode());
		
			PartKeepr::getEM()->persist($footprint);
		
			FootprintSetup::$migratedFootprints[$sFootprint["id"]] = $footprint;
		}
	}
	/**
	 * Imports the footprints
	 * @throws \Exception
	 */
	public static function importFootprintData () {
		Setup::progress("Adding predefined footprints...");
		
		/* Import pre-defined footprints */
		$data = Setup::loadYAML(self::FOOTPRINT_FILE);
		
		foreach ($data as $footprintName => $footprintData) {
			Setup::progress(" - Adding footprint ".$footprintName, true);
			$footprint = new Footprint();
			$footprint->setName($footprintName);
		
			if (array_key_exists("description", $footprintData)) {
				$footprint->setDescription($footprintData["description"]);
			}
		
			if (array_key_exists("category", $footprintData)) {
				$footprintCategory = FootprintSetup::addFootprintPath(explode("/", $footprintData["category"]), FootprintCategoryManager::getInstance()->getRootNode());
				$footprint->setCategory($footprintCategory->getNode());
			}
		
			if (array_key_exists("image", $footprintData)) {
				$footprintImage = new FootprintImage();
				$footprintImage->setFootprint($footprint);
				$footprintImage->replace(self::FOOTPRINT_PATH . $footprintData["image"]);
		
				$footprint->setImage($footprintImage);
			}
		
			if (array_key_exists("attachments", $footprintData) && is_array($footprintData["attachments"])) {
				foreach ($footprintData["attachments"] as $attachment) {
					if (!is_array($attachment)) {
						throw new \Exception("Error: The property 'attachments' of $footprintName is not an array!");
					}
					if (array_key_exists("url", $attachment)) {
						try {
							$footprintAttachment = new FootprintAttachment();
							$footprintAttachment->setFootprint($footprint);
							$footprintAttachment->replaceFromURL($attachment["url"]);
							if (array_key_exists("description", $attachment)) {
								$footprintAttachment->setDescription($attachment["description"]);
							}
		
							$footprint->getAttachments()->add($footprintAttachment);
						} catch (\Exception $e) {
							echo "error with url ".$attachment["url"]."\n";
						}
		
		
		
					}
						
				}
			}
		
			PartKeepr::getEM()->persist($footprint);
		}
	}
}
