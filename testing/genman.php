<?php
include("../src/backend/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr;

//include("/usr/share/php/Doctrine/Symfony/Component/Yaml/Yaml.php");
//include("/usr/share/php/Doctrine/Symfony/Component/Yaml/Dumper.php");
//include("/usr/share/php/Doctrine/Symfony/Component/Yaml/Inline.php");
PartKeepr::initialize();

$dom = new DOMDocument();
$dom->loadHTMLFile("manufacturers.html");

$list = $dom->getElementsByTagName("tr");

$manufacturers = array();

foreach ($list as $node) {
	$sub = $node->firstChild;
	
	$img = $sub->firstChild;
	
	$sub = $node->lastChild;

	$manName = trim($sub->textContent);
	
	if (!array_key_exists($manName, $manufacturers)) {
		$manufacturers[$manName] = array();	
	}
	
	$manufacturers[$manName][] = str_replace("../tools/iclogos/", "", $img->getAttribute("src"));
	
}

file_put_contents("../data/manufacturers/manufacturers.yaml", \Symfony\Component\Yaml\Yaml::dump($manufacturers));
