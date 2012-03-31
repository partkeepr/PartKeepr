<?php
@include_once 'Doctrine/Common/ClassLoader.php';

$aWarnings = array();

/**
 * Check if the Doctrine Common classloader can be loaded 
 */
$installDoctrineError  = "Doctrine needs to be installed and in the PHP include_path. ";
$installDoctrineError .= "You can install doctrine on most unix systems using: <br/>";
$installDoctrineError .= "<br/><code>pear channel-discover pear.symfony.com<br/>";
$installDoctrineError .= "pear channel-discover pear.doctrine-project.org<br/>";
$installDoctrineError .= "pear install pear.doctrine-project.org/DoctrineORM</code><br/>";

if (!class_exists("\\Doctrine\\Common\ClassLoader")) {
	$installDoctrineError .= "<small>Doctrine\\Common\\ClassLoader was not found</small>";
	echo json_encode(array("error" => true, "message" => $installDoctrineError));
	exit;
}

/**
 * Register the DoctrineORM classloader
 */
use Doctrine\Common\ClassLoader;

$ormClassLoader = new ClassLoader('Doctrine\ORM');
$ormClassLoader->register();

$commonClassLoader = new ClassLoader('Doctrine\Common');
$commonClassLoader->register();

$sfClassLoader = new ClassLoader('Symfony');
$sfClassLoader->register();

$doctrineClassLoader = new ClassLoader('Doctrine');
$doctrineClassLoader->register();


/**
 * Check if we can load the Doctrine\ORM\Version class. If we can't load the class, then something is wrong;
 * the most likely cause is that the user has DoctrineCommon installed, but is missing DoctrineORM.
 */
if (!$ormClassLoader->canLoadClass("Doctrine\\ORM\\Version")) {
	$installDoctrineError .= "<small>The classloader can't load Doctrine\\ORM\\Version</small>";
	echo json_encode(array("error" => true, "message" => $installDoctrineError));
	exit;
}

/**
 * Check for the correct DoctrineORM version. We only support Doctrine 2.1.0 or higher.
 */
if (\Doctrine\ORM\Version::compare("2.2.0") > 0) {
	$versionInvalidMessage = "DoctrineORM is installed, but needs to be at Version 2.2.0 or higher. ";
	$versionInvalidMessage .= "Please run pear upgrade-all to bring your packages up-to-date.";
	
	echo json_encode(array("error" => true, "message" => $versionInvalidMessage));
	exit;
	
}

if (\Doctrine\ORM\Version::compare("2.3.0") <= 0) {
	$aWarnings[] = 	sprintf(	"You are using Doctrine %s, which PartKeepr isn't tested against. If you encounter any ".
								"problems, please report them.",
								\Doctrine\ORM\Version::VERSION);
}

/**
 * Check for the Symfony YAML component. This component is required to parse YAML files and is used during installation
 * of footprints.
 */

if (!$doctrineClassLoader->canLoadClass("Doctrine\\Symfony\\Component\\Yaml\\Yaml")) {
	
	$yamlErrorMessage = "The YAML component of symfony is not installed. This component is required; please install ";
	$yamlErrorMessage .= "it using:<br/><br/>";
	$yamlErrorMessage .= "<code>pear install pear.doctrine-project.org/DoctrineSymfonyYaml</code><br/><br/>";
	$yamlErrorMessage .= "If you are getting the error:<br/><br/><code>doctrine/DoctrineSymfonyYaml is already ";
	$yamlErrorMessage .= "installed and is the same as the released version</code><br/><br/>";
	$yamlErrorMessage .= "please REINSTALL the package using<br/><br/><code>pear uninstall ";
	$yamlErrorMessage .= "doctrine/DoctrineSymfonyYaml<br/>pear install doctrine/DoctrineSymfonyYaml</code>";	
	
	echo json_encode(array("error" => true, "message" => $yamlErrorMessage));
	exit;
}

echo json_encode(array("error" => false, "warnings" => $aWarnings));
exit;
