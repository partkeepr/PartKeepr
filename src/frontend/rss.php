<?php
namespace PartKeepr\Frontend;

use PartKeepr\PartKeepr,
	PartKeepr\Util\Configuration;

include("../src/backend/PartKeepr/PartKeepr.php");

header("Content-Type: text/xml; charset=UTF-8");

PartKeepr::initialize("");

echo file_get_contents(Configuration::getOption("partkeepr.files.path")."/feed.rss");