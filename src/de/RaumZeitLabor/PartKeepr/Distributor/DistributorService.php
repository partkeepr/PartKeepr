<?php
namespace de\RaumZeitLabor\PartKeepr\Distributor;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class DistributorService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return DistributorManager::getInstance()->getDistributor($this->getParameter("id"))->serialize();
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
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$distributor = new Distributor;
		
		$this->setDistributorData($distributor);
		
		PartKeepr::getEM()->persist($distributor);
		PartKeepr::getEM()->flush();
		
		return array("data" => $distributor->serialize());
	}
	
	/**
	 * Sets the data for the distributor.
	 * @param Distributor $distributor The distributor to process
	 */
	private function setDistributorData (Distributor $distributor) {
		$distributor->setName($this->getParameter("name"));
		$distributor->setComment($this->getParameter("comment", ""));
		$distributor->setAddress($this->getParameter("address", ""));
		$distributor->setURL($this->getParameter("url", ""));
		$distributor->setEmail($this->getParameter("email", ""));
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$distributor = DistributorManager::getInstance()->getDistributor($this->getParameter("id"));

		$this->setDistributorData($distributor);
		PartKeepr::getEM()->flush();
		
		return array("data" => $distributor->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		DistributorManager::getInstance()->deleteDistributor($this->getParameter("id"));
		
		return array("data" => null);
	}
}