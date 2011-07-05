<?php
use de\RaumZeitLabor\PartKeepr\PartKeepr;

include_once("cli-config.php");

return PartKeepr::getEM()->getConnection()->getParams();
