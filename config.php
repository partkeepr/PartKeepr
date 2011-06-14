<?php
namespace de\RaumZeitLabor\PartKeepr;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

Configuration::setOption("partkeepr.database.username", "partkeepr");
Configuration::setOption("partkeepr.database.password", "partkeepr");
Configuration::setOption("partkeepr.database.hostname", "localhost");
Configuration::setOption("partkeepr.database.dbname", "partkeepr");
Configuration::setOption("partkeepr.database.driver", "pdo_mysql");

Configuration::setOption("partkeepr.images.path", __DIR__."/data/images/");
Configuration::setOption("partkeepr.images.cache", Configuration::getOption("partkeepr.images.path")."cache/");
