<?php 
namespace de\RaumZeitLabor\PartKeepr\Tests\Part;

use de\RaumZeitLabor\PartKeepr\Distributor\DistributorService;

use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\Part\PartService,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\Part,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationManager,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationService;

class PartServiceTest extends \PHPUnit_Framework_TestCase {
	protected $backupGlobals = false;
	
	private static $storageLocation;
	
	public static function setUpBeforeClass () {
		// Create a storage location for testing
		$storageLocation = array("name" => "PartServiceTest");

		$service = new StorageLocationService($storageLocation);
		$result = $service->create();
		
		self::$storageLocation = $result["data"]["id"];
	}
	
	/**
     * @expectedException de\RaumZeitLabor\PartKeepr\Part\Exceptions\CategoryNotAssignedException
     */
	public function testCreatePartWithoutCategory () {
		$partName = "testCreatePartWithoutCategory";
		
		$part = array(
					"name" => $partName,
					"storageLocation" => self::$storageLocation
				);
		
		$service = new PartService($part);
		$service->create();
	}
	
	/**
	 * Tests if a part can be found by its order number.
	 */
	public function testPartSearchByOrderNumber () {
		$partName = "testPartSearchByOrderNumber";

		/* Create a distributor */
		$distributor = array(
			"name" => $partName
		);
		
		$service = new DistributorService($distributor);
		$distributor = $service->create();
		
		/* Create a part with a distributor and a specific order number */
		$part = array(
				"name" => $partName,
				"category" => 1,
				"distributors" => array(
					array(
							"distributor_id" => $distributor["data"]["id"],
							"orderNumber" => $partName // Re-use $partName as orderNumber
							)),
				"storageLocation" => self::$storageLocation
		);
		
		$service = new PartService($part);
		$service->create();
		
		PartKeepr::getEM()->flush();
		
		$service = new PartService(array("distributorOrderNumber" => $partName));
		
		$response = $service->get();
		
		$this->assertEquals(1, $response["totalCount"], "The resultset totalCount is wrong.");
	}
	
	/**
	 * Tests if a part with an initial stock level > 0 is created correctly.
	 * 
	 * This was fixed with 
	 */
	public function testCreatePartWithInitialStockLevel () {
		$partName = "testCreatePartWithInitialStockLevel";
	
		$part = array(
				"name" => $partName,
				"initialStockLevel" => 1,
				"category" => 1,
				"initialStockLevelUser" => 1,
				"storageLocation" => self::$storageLocation
		);
	
		$service = new PartService($part);
		$service->create();
	}
	
	/**
	 * @expectedException de\RaumZeitLabor\PartKeepr\Part\Exceptions\StorageLocationNotAssignedException
	 */
	public function testCreatePartWithoutStorageLocation () {
		$partName = "testCreatePartWithoutStorageLocation";
	
		$part = array(
				"name" => $partName,
				"category" => 1
		);
	
		$service = new PartService($part);
		$service->create();
	}
	
	/**
	 * Verifies that querying for a part works correctly.
	 * 
	 * There was a bug where only lower-case strings matched against parts, fixed 2012-03-16.
	 */
	public function testPartNameQuerying () {
		$partName = "testPartNameQuerying";
		
		
		$part = new Part();
		$part->setName($partName);
		$part->setCategory(PartCategoryManager::getInstance()->getRootNode()->getNode());
		$part->setStorageLocation(StorageLocationManager::getInstance()->getStorageLocation(self::$storageLocation));
		
		PartKeepr::getEM()->persist($part);
		PartKeepr::getEM()->flush();
		
		$service = new PartService(array("query" => $partName));
		
		$response = $service->get();
		
		$this->assertEquals(1, $response["totalCount"], "The resultset totalCount is wrong.");
		$this->assertEquals($response["data"][0]["name"], $part->getName());
	}
}
