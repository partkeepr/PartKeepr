<?php
namespace de\RaumZeitLabor\PartKeepr\Foo;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;

include("src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");
// Variable $helperSet is defined inside cli-config.php
$helpers = array();

require __DIR__ . '/cli-config.php';

$cli = new \Symfony\Component\Console\Application('Doctrine Command Line Interface', \Doctrine\Common\Version::VERSION);
$cli->setCatchExceptions(true);
$helperSet = $cli->getHelperSet();
foreach ($helpers as $name => $helper) {
    $helperSet->set($helper, $name);
}
$cli->addCommands(array(
    // DBAL Commands
    new \Doctrine\DBAL\Tools\Console\Command\RunSqlCommand(),
    new \Doctrine\DBAL\Tools\Console\Command\ImportCommand(),

    // ORM Commands
    new \Doctrine\ORM\Tools\Console\Command\ClearCache\MetadataCommand(),
    new \Doctrine\ORM\Tools\Console\Command\ClearCache\ResultCommand(),
    new \Doctrine\ORM\Tools\Console\Command\ClearCache\QueryCommand(),
    new \Doctrine\ORM\Tools\Console\Command\SchemaTool\CreateCommand(),
    new \Doctrine\ORM\Tools\Console\Command\SchemaTool\UpdateCommand(),
    new \Doctrine\ORM\Tools\Console\Command\SchemaTool\DropCommand(),
    new \Doctrine\ORM\Tools\Console\Command\EnsureProductionSettingsCommand(),
    new \Doctrine\ORM\Tools\Console\Command\ConvertDoctrine1SchemaCommand(),
    new \Doctrine\ORM\Tools\Console\Command\GenerateRepositoriesCommand(),
    new \Doctrine\ORM\Tools\Console\Command\GenerateEntitiesCommand(),
    new \Doctrine\ORM\Tools\Console\Command\GenerateProxiesCommand(),
    new \Doctrine\ORM\Tools\Console\Command\ConvertMappingCommand(),
    new \Doctrine\ORM\Tools\Console\Command\RunDqlCommand(),
    new \Doctrine\ORM\Tools\Console\Command\ValidateSchemaCommand(),

));

$cli->addCommands(array(
// ...

// Migrations Commands
new \Doctrine\DBAL\Migrations\Tools\Console\Command\DiffCommand(),
new \Doctrine\DBAL\Migrations\Tools\Console\Command\ExecuteCommand(),
new \Doctrine\DBAL\Migrations\Tools\Console\Command\GenerateCommand(),
new \Doctrine\DBAL\Migrations\Tools\Console\Command\MigrateCommand(),
new \Doctrine\DBAL\Migrations\Tools\Console\Command\StatusCommand(),
new \Doctrine\DBAL\Migrations\Tools\Console\Command\VersionCommand()
));
$cli->run();
