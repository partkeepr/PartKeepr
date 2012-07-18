<?php
namespace PartKeepr\Console;

use PartKeepr\PartKeepr;

include("src/backend/PartKeepr/PartKeepr.php");

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
					  new \PartKeepr\Console\Commands\MinifyJSCommand()

				  ));
$cli->run();