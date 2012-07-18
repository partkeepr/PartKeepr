<?php
namespace PartKeepr\Console;

use PartKeepr\PartKeepr,
	PartKeepr\Util\Configuration as PartKeeprConfiguration;

include("src/backend/PartKeepr/PartKeepr.php");

PartKeepr::initializeClassLoaders();
PartKeepr::initializeConfig();

$cli = new \Symfony\Component\Console\Application('PartKeepr Doctrine Console', \PartKeepr\PartKeeprVersion::PARTKEEPR_VERSION);
$cli->setCatchExceptions(true);

try {
	PartKeepr::initializeDoctrine();

	$helperSet = $cli->getHelperSet();

	$helpers = array(
		'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper(PartKeepr::getEM()->getConnection()),
		'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper(PartKeepr::getEM())
	);

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
					// Migrations Commands
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\DiffCommand(),
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\ExecuteCommand(),
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\GenerateCommand(),
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\MigrateCommand(),
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\StatusCommand(),
						  new \Doctrine\DBAL\Migrations\Tools\Console\Command\VersionCommand()
					  ));

} catch (\Exception $e) {
	// Inject fake connection
	PartKeeprConfiguration::setOption("partkeepr.database.driver", "pdo_sqlite");

	PartKeepr::initializeDoctrine();

	$helperSet = $cli->getHelperSet();

	$helpers = array(
		'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper(PartKeepr::getEM()->getConnection()),
		'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper(PartKeepr::getEM())
	);

	foreach ($helpers as $name => $helper) {
		$helperSet->set($helper, $name);
	}

	echo "\n";
	echo "======================================================================================\n";
	echo "Warning: Couldn't find a database configuration - disabling database-related commands.\n";
	echo "======================================================================================\n\n";
}
$cli->addCommands(array(
					  new \Doctrine\ORM\Tools\Console\Command\GenerateProxiesCommand(),

				  ));
$cli->run();
