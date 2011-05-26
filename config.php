<?php
namespace de\RaumZeitLabor\PartDB2;

use de\RaumZeitLabor\PartDB2\Util\Configuration;

Configuration::setOption("partdb2.database.username", "partdb2");
Configuration::setOption("partdb2.database.password", "partdb2");
Configuration::setOption("partdb2.database.hostname", "localhost");
Configuration::setOption("partdb2.database.dbname", "partdb2");
Configuration::setOption("partdb2.database.driver", "pdo_mysql");

Configuration::setOption("partdb2.images.path", __DIR__."/data/images/");
Configuration::setOption("partdb2.images.cache", Configuration::getOption("partdb2.images.path")."cache/");
