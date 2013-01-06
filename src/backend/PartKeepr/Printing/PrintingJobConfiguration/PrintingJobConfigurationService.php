<?php
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfiguration,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfigurationManager,
	PartKeepr\PartKeepr;

class PrintingJobConfigurationService extends Service implements RestfulService {
	
	public function get () {
		if ($this->hasParameter("id")) {
			return  array("data" => PrintingJobConfigurationManager::getInstance()->getObjectById($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return PrintingJobConfigurationManager::getInstance()->getMultipleObjects(
				$this->getParameter("start", $this->getParameter("start", 0)),
				$this->getParameter("limit", $this->getParameter("limit", 25)),
				$this->getParameter("sortby", $aSortParams["property"]),
				$this->getParameter("dir", $aSortParams["direction"]),
				$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("name");
		
		$obj = new PrintingJobConfiguration();
		$obj->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($obj);
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$obj = PrintingJobConfigurationManager::getInstance()->getObjectById($this->getParameter("id"));
		$obj->deserialize($this->getParameters());
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		PrintingJobConfigurationManager::getInstance()->deleteObjectById($this->getParameter("id"));
		
		return array("data" => null);
	}
}