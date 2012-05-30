<?php
use PartKeepr\PartKeepr;

$helpers = array(
    'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper(PartKeepr::getEM()->getConnection()),
    'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper(PartKeepr::getEM())
);

