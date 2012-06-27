<?php
namespace PartKeepr\Frontend;

use PartKeepr\User\User,
	PartKeepr\Service\ServiceManager,
	PartKeepr\PartKeepr,
	PartKeepr\Session\SessionManager,
	PartKeepr\Util\Configuration;

include("../src/backend/PartKeepr/PartKeepr.php");
include_once 'Twig/Autoloader.php';

PartKeepr::initialize("");

/* Fill parameters with most common options */
$aParameters = array();
$aParameters["doctrine_orm_version"] = \Doctrine\ORM\Version::VERSION;
$aParameters["doctrine_dbal_version"] = \Doctrine\DBAL\Version::VERSION;
$aParameters["doctrine_common_version"] = \Doctrine\Common\Version::VERSION;
$aParameters["php_version"] = phpversion();

/* HTTP auth */
if (Configuration::getOption("partkeepr.auth.http", false) === true) {
	if (!isset($_SERVER["PHP_AUTH_USER"])) {
		// @todo Redirect to permission denied page
		die("Permission denied"); 
	}
	
	try {
		$user = User::loadByName($_SERVER['PHP_AUTH_USER']);
	} catch (\Doctrine\ORM\NoResultException $e) {
		$user = new User;
		$user->setUsername($_SERVER['PHP_AUTH_USER']);
		$user->setPassword("invalid");
		
		PartKeepr::getEM()->persist($user);
		PartKeepr::getEM()->flush();
	}
	

	$session = SessionManager::getInstance()->startSession($user);
	
	$aParameters["autoLoginUsername"] = $user->getUsername();
	$aParameters["auto_start_session"] = $session->getSessionID();
	
	$aPreferences = array();
	
	foreach ($user->getPreferences() as $result) {
		$aPreferences[] = $result->serialize();
	}
	
	$aParameters["userPreferences"] = array("response" => array("data" => $aPreferences));
}

/* Information about maximum upload sizes */
$maxPostSize = PartKeepr::getBytesFromHumanReadable(ini_get("post_max_size"));
$maxFileSize = PartKeepr::getBytesFromHumanReadable(ini_get("upload_max_filesize"));

$aParameters["maxUploadSize"] = min($maxPostSize, $maxFileSize);

/* ImageMagick formats */
$imagick = new \Imagick();
$aParameters["availableImageFormats"] = $imagick->queryFormats();

/* Automatic Login */
if (Configuration::getOption("partkeepr.frontend.autologin.enabled", false) === true) {
	$aParameters["autoLoginUsername"] = Configuration::getOption("partkeepr.frontend.autologin.username");
	$aParameters["autoLoginPassword"] = Configuration::getOption("partkeepr.frontend.autologin.password");
}

/* Load and render the template */
\Twig_Autoloader::register();

$loader = new \Twig_Loader_Filesystem(dirname(__FILE__) . '/templates/');
$twig = new \Twig_Environment($loader);

$template = $twig->loadTemplate("index.tpl");

$renderParams = array();
$renderParams["debug_all"] = Configuration::getOption("partkeepr.frontend.debug_all", false);
$renderParams["debug"] = Configuration::getOption("partkeepr.frontend.debug", false);
$renderParams["parameters"] = $aParameters;

if ($renderParams["debug_all"]) {
	$renderParams["scripts"] = unserialize(file_get_contents(PartKeepr::getRootDirectory() . "/partkeepr.jsfiles"));
}

echo $template->render($renderParams);