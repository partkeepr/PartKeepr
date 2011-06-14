<?php
namespace de\RaumZeitLabor\PartKeepr\SiPrefix;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class SiPrefixService extends Service implements RestfulService {
		public function get () {
			$query = PartKeepr::getEM()->createQuery("SELECT si.id, si.prefix, si.symbol, si.power FROM de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix si");
			
			return array("data" => $query->getArrayResult());
	}
	
	public function create () {
		throw new \Exception("Not yet implemented");
	}
	
	public function update () {
		throw new \Exception("Not yet implemented");
	}
	
	public function destroy () {
		throw new \Exception("Not yet implemented");
	}
}
