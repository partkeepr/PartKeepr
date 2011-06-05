<?php
namespace de\RaumZeitLabor\PartDB2\Distributor;
use de\RaumZeitLabor\PartDB2\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class DistributorService extends Service implements RestfulService {
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
	
	public function create () {
		$this->requireParameter("name");
		
		$distributor = new Distributor;
		
		$this->setDistributorData($distributor);
		
		PartDB2::getEM()->persist($distributor);
		PartDB2::getEM()->flush();
		
		return array("data" => $distributor->serialize());
	}
	
	private function setDistributorData (Distributor $distributor) {
		$distributor->setName($this->getParameter("name"));
		$distributor->setComment($this->getParameter("comment", ""));
		$distributor->setAddress($this->getParameter("address", ""));
		$distributor->setURL($this->getParameter("url", ""));
		$distributor->setEmail($this->getParameter("email", ""));
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$distributor = DistributorManager::getInstance()->getDistributor($this->getParameter("id"));

		$this->setDistributorData($distributor);
		PartDB2::getEM()->flush();
		
		return array("data" => $distributor->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		DistributorManager::getInstance()->deleteDistributor($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	
	// Old stuff below
	public function getDistributors() {
		return DistributorManager::getInstance()->getDistributors(
			$this->getParameter("start", 0),
			$this->getParameter("limit", 10),
			$this->getParameter("sortby", "name"),
			$this->getParameter("dir", "asc"),
			$this->getParameter("filter", ""));
	}

	public function addDistributor () {
		$this->requireParameter("name");
		
		DistributorManager::getInstance()->addDistributor($this->getParameter("name"));
	}
	
	public function deleteDistributor () {
		$this->requireParameter("id");
		
		DistributorManager::getInstance()->deleteDistributor($this->getParameter("id"));
	}
	
	public function deleteDistributorLogo () {
		$this->requireParameter("id");
		
		$logo = DistributorICLogo::loadById($this->getParameter("id"));
		
		PartDB2::getEM()->remove($logo);
		PartDB2::getEM()->flush();
	}
	
	public function getDistributorLogos () {
		$this->requireParameter("id");
		$distributor = DistributorManager::getInstance()->getDistributor($this->getParameter("id"));
		
		$aData = array();
		
		foreach ($distributor->getICLogos() as $logo) {
			$aData[] = array("id" => $logo->getId());
		}
		
		return array("logos" => $aData);
			
	}
	
	public function getDistributor () {
		$this->requireParameter("id");
		
		return DistributorManager::getInstance()->getDistributor($this->getParameter("id"))->serialize();
	}
	
	public function saveDistributor () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$Distributor = DistributorManager::getInstance()->getDistributor($this->getParameter("id"));
		
		$Distributor->setName($this->getParameter("name"));
		
		PartDB2::getEM()->flush();
		
		return $Distributor->serialize();
	}
}