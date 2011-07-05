<?php
use de\RaumZeitLabor\PartKeepr\Service\ServiceManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use Doctrine\Common\ClassLoader;

include("src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");
PartKeepr::initialize("");

$em = PartKeepr::getEM();

$classes = PartKeepr::getEntityClasses();


$helperSet = new \Symfony\Component\Console\Helper\HelperSet(array(
    'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper($em->getConnection()),
    'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper($em)
));