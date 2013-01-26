<?php
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\PartKeepr,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfiguration,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfigurationManager,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\FilterExtractor,
	PartKeepr\Service\Service;

class PrintingJobConfigurationService extends Service implements RestfulService {
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => PrintingJobConfigurationManager::getInstance()->getEntity($this->getParameter("id"))->serialize());
		} else {				
			$filter = new ManagerFilter($this);
			$filter->setFilterCallback(array($this, "filterCallback"));
				
			return PrintingJobConfigurationManager::getInstance()->getList($filter);
		}
	}	
	
	/**
	 * Advanced filtering for the list
	 * @param QueryBuilder The $queryBuilder
	 */
	public function filterCallback ($queryBuilder) {
		$filter = new FilterExtractor($this);
		
		if ($filter->has("objectType") && $filter->get("objectType") != "") {	
			$queryBuilder->andWhere("q.objectType = :objtype");
			$queryBuilder->setParameter("objtype", $filter->get("objectType") );
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
		$obj = PrintingJobConfigurationManager::getInstance()->getEntity($this->getParameter("id"));
		$obj->deserialize($this->getParameters());
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		PrintingJobConfigurationManager::getInstance()->deleteEntity($this->getParameter("id"));
		
		return array("data" => null);
	}
}