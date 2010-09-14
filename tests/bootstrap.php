<?php
namespace de\RaumZeitLabor\PartDB2\Tests;
declare(encoding = 'UTF-8');

use de\raumzeitlabor\PartDB2\PartDB2;

include(dirname(__DIR__). "/src/de/RaumZeitLabor/PartDB2/PartDB2.php");

PartDB2::initialize("test");

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartDB2::getEM());
$classes = array(
  PartDB2::getEM()->getClassMetadata('de\RaumZeitLabor\PartDB2\Auth\User')
);
$tool->dropSchema($classes);
$tool->createSchema($classes);

?>