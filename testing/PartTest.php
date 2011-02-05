<?php
namespace de\RaumZeitLabor\PartDB2\Tests;
declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

use de\RaumZeitLabor\PartDB2\Auth\User;
use de\RaumZeitLabor\PartDB2\Footprint\Footprint;
use de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;
use de\RaumZeitLabor\PartDB2\Category\Category;
use de\RaumZeitLabor\PartDB2\Category\CategoryManager;
use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Part\Part;

PartDB2::initialize();

$category = CategoryManager::getInstance()->getCategory(2);
$footprint = FootprintManager::getInstance()->getFootprint(2);

$part = new Part();
$part->setFootprint($footprint);
$part->setCategory($category->getNode());
$part->setName("Tolles Bauteil");
$part->setComment("0815 zeugs");

PartDB2::getEM()->persist($part);
PartDB2::getEM()->flush();