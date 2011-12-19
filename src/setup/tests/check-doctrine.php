<?php
@include_once 'Doctrine/Common/ClassLoader.php';

$installDoctrineError = "Doctrine needs to be installed and in the PHP include_path. You can install doctrine on most unix systems using: <br/><br/><code>pear channel-discover pear.doctrine-project.org<br/>pear install pear.doctrine-project.org/DoctrineORM</code>";

if (!class_exists("\\Doctrine\\Common\ClassLoader")) {
	echo json_encode(array("error" => true, "errormessage" => $installDoctrineError));
	exit;
}

use Doctrine\Common\ClassLoader;
$classLoader = new ClassLoader('Doctrine\ORM');
$classLoader->register(); // register on SPL autoload stack

if (!$classLoader->canLoadClass("Doctrine\\ORM\\Version")) {
	echo json_encode(array("error" => true, "errormessage" => $installDoctrineError));
	exit;
}

if (\Doctrine\ORM\Version::compare("2.1.0") == 1) {
	echo json_encode(array("error" => true, "errormessage" => "DoctrineORM is installed, but needs to be at Version 2.1.0 or higher. Please run pear upgrade-all to bring your packages up-to-date."));
	exit;
}
echo json_encode(array("error" => false));
exit;
