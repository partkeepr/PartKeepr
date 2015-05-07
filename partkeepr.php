<?php
use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;
use PartKeepr\PartKeepr;

$loader = require_once __DIR__.'/app/bootstrap.php.cache';

require_once __DIR__.'/app/AppKernel.php';


include("src/backend/PartKeepr/PartKeepr.php");

$kernel = new AppKernel('dev', false);
$kernel->loadClassCache();

PartKeepr::initializeClassLoaders();
PartKeepr::initializeConfig();

$cli = new \Symfony\Component\Console\Application('PartKeepr Console', \PartKeepr\PartKeeprVersion::PARTKEEPR_VERSION);
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

} catch (\Exception $e) {

}

$cli->addCommands(array(
					  new \PartKeepr\Console\Commands\MinifyJSCommand(),
					  new \PartKeepr\Console\Commands\ListServicesCommand(),
					  new \PartKeepr\Console\Commands\ListCallsCommand(),
					  new \PartKeepr\Console\Commands\DescribeCallCommand(),
					  new \PartKeepr\Console\Commands\DescribeTypeCommand()
				  ));
$cli->run();