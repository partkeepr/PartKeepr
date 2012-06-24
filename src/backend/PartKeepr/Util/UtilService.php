<?php
namespace PartKeepr\Util;

use PartKeepr\Service\AnonService;

class UtilService extends AnonService {
	public function clearCache () {
		apc_clear_cache();
		apc_clear_cache("user");
		
		return array("status" => "ok");
	}
}