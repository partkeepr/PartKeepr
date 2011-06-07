<?php
namespace de\RaumZeitLabor\PartDB2\Cronjobs;

declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Statistic\StatisticSnapshotManager;
PartDB2::initialize();



StatisticSnapshotManager::getInstance()->createSnapshot();