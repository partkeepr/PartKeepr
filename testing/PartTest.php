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
use de\RaumZeitLabor\PartKeepr\Part\PartAttachment;

PartKeepr::initialize();

$test = new PartAttachment();
$test->replaceFromURL("http://www.datasheetcatalog.org/datasheet/motorola/MCT7809BD2T.pdf");
