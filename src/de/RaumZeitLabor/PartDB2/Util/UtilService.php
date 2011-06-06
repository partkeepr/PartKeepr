<?php
namespace de\raumzeitlabor\PartDB2\Util;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\AnonService;

class UtilService extends AnonService {
	public function clearCache () {
		apc_clear_cache();
		apc_clear_cache("user");
		
		return array("status" => "ok");
	}
}