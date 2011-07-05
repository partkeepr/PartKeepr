<?php
use de\RaumZeitLabor\PartKeepr\PartKeepr;

include_once("src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");	// Classloaders are initialized here

$em = PartKeepr::getEM();

$classes = PartKeepr::getEntityClasses(); // Seems to be necessary for the doctrine CLI

$cli = new \Symfony\Component\Console\Application('Doctrine Command Line Interface', Doctrine\Common\Version::VERSION);

$cli->addCommands(array(
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\DiffCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\ExecuteCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\GenerateCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\MigrateCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\StatusCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\VersionCommand()
));

$helperSet = new \Symfony\Component\Console\Helper\HelperSet(array(
    'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper($em->getConnection()),
    'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper($em)
));

$cli->run();
