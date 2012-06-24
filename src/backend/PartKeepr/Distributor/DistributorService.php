<?php
namespace PartKeepr\Distributor;
use PartKeepr\Service\RestfulService;

use PartKeepr\Service\Service,
	PartKeepr\Part\PartManager,
	PartKeepr\Stock\StockEntry,
	PartKeepr\PartKeepr,
	PartKeepr\Session\SessionManager;

class DistributorService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return  array("data" => DistributorManager::getInstance()->getDistributor($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return DistributorManager::getInstance()->getDistributors(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$distributor = new Distributor;
		$distributor->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($distributor);
		PartKeepr::getEM()->flush();
		
		return array("data" => $distributor->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$distributor = Distributor::loadById($this->getParameter("id"));
		$distributor->deserialize($this->getParameters());
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $distributor->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		DistributorManager::getInstance()->deleteDistributor($this->getParameter("id"));
		
		return array("data" => null);
	}
}