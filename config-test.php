<?php
namespace de\RaumZeitLabor\PartKeepr;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

Configuration::setOption("partkeepr.database.dbname", "partkeepr-test");
Configuration::setOption("partkeepr.database.driver", "pdo_sqlite");
