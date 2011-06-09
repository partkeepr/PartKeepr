<?php
namespace de\RaumZeitLabor\PartDB2\SiPrefix;
use de\RaumZeitLabor\PartDB2\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class SiPrefixService extends Service implements RestfulService {
		public function get () {
			$query = PartDB2::getEM()->createQuery("SELECT si.id, si.prefix, si.symbol, si.power FROM de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix si");
			
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
