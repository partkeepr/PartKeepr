<?php
namespace de\raumzeitlabor\PartKeepr\Util;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\AnonService;

class UtilService extends AnonService {
	public function clearCache () {
		apc_clear_cache();
		apc_clear_cache("user");
		
		return array("status" => "ok");
	}
}