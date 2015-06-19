<?php
namespace PartKeepr\Setup;

use \PartKeepr\FootprintBundle\Entity\FootprintManager,
	\PartKeepr\FootprintBundle\Entity\FootprintCategoryManager,
	\PartKeepr\FootprintBundle\Entity\FootprintCategory,
	\PartKeepr\FootprintBundle\Entity\Footprint,
	\PartKeepr\FootprintBundle\Entity\FootprintImage,
	\PartKeepr\FootprintBundle\Entity\FootprintAttachment,
	PartKeepr\PartKeepr,
	PartKeepr\Setup\Setup;

class FootprintSetup extends AbstractSetup {
	/**
	 * Holds the migrated footprints
	 * @var array
	 */
	private static $migratedFootprints = array();
	
	const FOOTPRINT_PATH = "../setup-data/footprints/";
	const FOOTPRINT_FILE = "../setup-data/footprints/footprints.yaml";
	
	/**
	 * Creates the root node for the footprints
	 */
	public function setupRootNode () {
		FootprintCategoryManager::getInstance()->ensureRootExists();
	}
	
	public function run () {
		$this->setupRootNode();
		$this->importFootprintData();
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
	public function addFootprintPath (Array $path, $node) {
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
	
		return $this->addFootprintPath($path, $childNode);
	}
	
	/**
	 * Checks if the specified footprint exists
	 * @param string $name The footprint name
	 */
	public function footprintExists ($name) {
		$dql = "SELECT COUNT(fp) FROM PartKeepr\Footprint\Footprint fp WHERE fp.name = :name";
		$query = $this->entityManager->createQuery($dql);
		$query->setParameter("name", $name);
		
		if ($query->getSingleScalarResult() == 0) {
			return false;
		} else {
			return true;
		}
	}
	
	/**
	 * Imports the footprints
	 * @throws \Exception
	 */
	public function importFootprintData () {
		$count = 0;
		$skipped = 0;
		
		/* Import pre-defined footprints */
		$data = Setup::loadYAML(self::FOOTPRINT_FILE);
		
		foreach ($data as $footprintName => $footprintData) {
			/* Check if the footprint with the name already exists. If yes, skip the import for the single footprint */
			if ($this->footprintExists($footprintName)) {
				$skipped++;
				continue;
			}
			$footprint = new Footprint();
			$footprint->setName($footprintName);
		
			if (array_key_exists("description", $footprintData)) {
				$footprint->setDescription($footprintData["description"]);
			}
		
			if (array_key_exists("category", $footprintData)) {
				$footprintCategory = $this->addFootprintPath(explode("/", $footprintData["category"]), FootprintCategoryManager::getInstance()->getRootNode());
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
							//echo "error with url ".$attachment["url"]."\n";
						}
					}
						
				}
			}
		
			$this->entityManager->persist($footprint);
			$count++;
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Imported %d footprints, skipped %d because they already existed", $count, $skipped));
	}
}
