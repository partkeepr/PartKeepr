<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;
declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\Auth\User;
use de\RaumZeitLabor\PartKeepr\Footprint\Footprint;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager;
use de\RaumZeitLabor\PartKeepr\Category\Category;
use de\RaumZeitLabor\PartKeepr\Category\CategoryManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Part\Part;

PartKeepr::initialize();

$category = CategoryManager::getInstance()->getCategory(2);
$footprint = FootprintManager::getInstance()->getFootprint(2);

$part = new Part();
$part->setFootprint($footprint);
$part->setCategory($category->getNode());
$part->setName("Tolles Bauteil");
$part->setComment("0815 zeugs");

PartKeepr::getEM()->persist($part);
PartKeepr::getEM()->flush();