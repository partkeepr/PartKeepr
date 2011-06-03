<?php
use de\RaumZeitLabor\PartDB2\Service\ServiceManager;
use de\RaumZeitLabor\PartDB2\PartDB2;
use Doctrine\Common\ClassLoader;

include("src/de/RaumZeitLabor/PartDB2/PartDB2.php");
PartDB2::initialize("");

$em = PartDB2::getEM();

$classes = PartDB2::getEntityClasses();


$helperSet = new \Symfony\Component\Console\Helper\HelperSet(array(
    'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper($em->getConnection()),
    'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper($em)
));