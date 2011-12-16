<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Configuration;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

header("Content-Type: text/xml; charset=UTF-8");

PartKeepr::initialize("");

echo file_get_contents(Configuration::getOption("partkeepr.files.path")."/feed.rss");