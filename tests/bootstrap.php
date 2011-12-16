<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;
declare(encoding = 'UTF-8');

use de\raumzeitlabor\PartKeepr\PartKeepr;

include(dirname(__DIR__). "/src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("test");

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
$classes = PartKeepr::getClassMetaData();

$tool->dropSchema($classes);
$tool->createSchema($classes);

?>