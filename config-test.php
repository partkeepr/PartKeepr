<?php
namespace de\RaumZeitLabor\PartKeepr;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

Configuration::setOption("partkeepr.database.username", "partkeepr");
Configuration::setOption("partkeepr.database.password", "partkeepr");
Configuration::setOption("partkeepr.database.hostname", "localhost");
Configuration::setOption("partkeepr.database.dbname", "partkeepr-test");
Configuration::setOption("partkeepr.database.driver", "pdo_mysql");

?>