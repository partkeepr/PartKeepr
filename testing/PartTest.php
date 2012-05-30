<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;
declare(encoding = 'UTF-8');

include("../src/backend/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\Auth\User;
use de\RaumZeitLabor\PartKeepr\Footprint\Footprint;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager;
use de\RaumZeitLabor\PartKeepr\Category\Category;
use de\RaumZeitLabor\PartKeepr\Category\CategoryManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Part\Part;
use de\RaumZeitLabor\PartKeepr\Part\PartAttachment;
use de\RaumZeitLabor\PartKeepr\PartUnit\PartUnitManager;
use Doctrine\DBAL\Migrations\Migration,
	Doctrine\DBAL\Migrations\Configuration\YamlConfiguration;

PartKeepr::initialize();


$aPartResults[] = array();

$dql = "SELECT pp.quantity, p.id FROM ";
$dql .= "de\RaumZeitLabor\PartKeepr\Project\ProjectPart pp JOIN pp.part p WHERE pp.project = :project";

$query = PartKeepr::getEM()->createQuery($dql);
$query->setParameter("project", 1);
	
foreach ($query->getArrayResult() as $result) {
	$part = Part::loadById($result["id"]);
	
	if (array_key_exists($result["id"], $aPartResults)) {
		$aPartResults[$result["id"]]["quantity"] += $result["quantity"]; 
	} else {
		$aPartResults[$result["id"]] = array(
				"quantity" => $result["quantity"],
				"part" => array("response" => array("totalCount" => 1, "data" => $part->serialize())),
				"storageLocation_name" => $part->getStorageLocation()->getName()
		);
	}
}

print_r($aPartResults);