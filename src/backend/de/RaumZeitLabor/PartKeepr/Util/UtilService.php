<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

use de\RaumZeitLabor\PartKeepr\Service\AnonService;

class UtilService extends AnonService {
	public function clearCache () {
		apc_clear_cache();
		apc_clear_cache("user");
		
		return array("status" => "ok");
	}
}