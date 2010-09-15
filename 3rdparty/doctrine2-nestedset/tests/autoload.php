<?php

require_once(__DIR__.'/../vendor/doctrine/lib/vendor/doctrine-common/lib/Doctrine/Common/ClassLoader.php');

$loader = new Doctrine\Common\ClassLoader("Doctrine\\Common", __DIR__.'/../vendor/doctrine/lib/vendor/doctrine-common/lib');
$loader->register();

$loader = new Doctrine\Common\ClassLoader("Doctrine\\DBAL", __DIR__.'/../vendor/doctrine/lib/vendor/doctrine-dbal/lib');
$loader->register();

$loader = new Doctrine\Common\ClassLoader("Doctrine\\ORM", __DIR__.'/../vendor/doctrine/lib');
$loader->register();

$loader = new Doctrine\Common\ClassLoader("DoctrineExtensions\\NestedSet\\Tests", __DIR__);
$loader->register();

$loader = new Doctrine\Common\ClassLoader("DoctrineExtensions\\NestedSet", __DIR__."/../lib");
$loader->register();

