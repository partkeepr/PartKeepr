<?php
@include_once 'Twig/Autoloader.php';

$aWarnings = array();

/**
 * Check if the Doctrine Common classloader can be loaded 
 */
$installTwigError  = "Twig needs to be installed and in the PHP include_path. ";
$installTwigError .= "You can install twig on most unix systems using: <br/>";
$installTwigError .= "<br/><code>pear channel-discover pear.twig-project.org<br/>";
$installTwigError .= "pear install twig/Twig</code><br/>";

if (!class_exists("\\Twig_Autoloader")) {
	$installTwigError .= "<small>Twig_Autoloader was not found</small>";
	echo json_encode(array("error" => true, "message" => $installTwigError));
	exit;
}

\Twig_Autoloader::register();


/*
 * Check for supported twig versions
 */
if (version_compare("1.6.0", \Twig_Environment::VERSION) > 0) {
	$versionInvalidMessage = "Twig is installed, but needs to be at Version 1.6.0 or higher. ";
	$versionInvalidMessage .= "Please run pear upgrade-all to bring your packages up-to-date.";

	echo json_encode(array("error" => true, "message" => $versionInvalidMessage));
	exit;

}
echo json_encode(array("error" => false, "warnings" => $aWarnings));
exit;
