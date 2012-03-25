<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;

use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\User\User;

include(dirname(__DIR__). "/src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("test");

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
$classes = PartKeepr::getClassMetaData();

$tool->dropSchema($classes);
$tool->createSchema($classes);

/* Some very basic installation things */ 
PartCategoryManager::getInstance()->ensureRootExists();

/* Create a blank admin user */
$user = new User();
$user->setUsername("admin");
$user->setPassword("admin");
$user->setAdmin(true);

PartKeepr::getEM()->persist($user);


PartKeepr::getEM()->flush();