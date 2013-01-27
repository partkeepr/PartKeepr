<?php
namespace PartKeepr\Printing\PageBasicLayout;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayout,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayoutManager,
	PartKeepr\PartKeepr;

class PageBasicLayoutService extends Service implements RestfulService {
	
	public function get () {
		if ($this->hasParameter("id")) {
			return  array("data" => PageBasicLayoutManager::getInstance()->getObjectById($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return PageBasicLayoutManager::getInstance()->getMultipleObjects(
				$this->getParameter("start", $this->getParameter("start", 0)),
				$this->getParameter("limit", $this->getParameter("limit", 25)),
				$this->getParameter("sortby", $aSortParams["property"]),
				$this->getParameter("dir", $aSortParams["direction"]),
				$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("name");
		
		$obj = new PageBasicLayout();
		$obj->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($obj);
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$obj = PageBasicLayoutManager::getInstance()->getObjectById($this->getParameter("id"));
		$obj->deserialize($this->getParameters());
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		PageBasicLayoutManager::getInstance()->deleteObjectById($this->getParameter("id"));
		
		return array("data" => null);
	}
}