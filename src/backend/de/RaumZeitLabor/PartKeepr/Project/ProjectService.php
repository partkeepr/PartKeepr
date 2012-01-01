<?php
namespace de\RaumZeitLabor\PartKeepr\Project;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Project\ProjectManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter;

class ProjectService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => ProjectManager::getInstance()->getEntity($this->getParameter("id"))->serialize());
		} else {
			$parameters = new ManagerFilter($this);
			$parameters->setFilterField("name");
			return ProjectManager::getInstance()->getList($parameters);
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$entity = ProjectManager::getInstance()->createEntity($this->getParameters());
		
		return array("data" => $entity->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$entity = ProjectManager::getInstance()->getEntity($this->getParameter("id"));
		$entity->deserialize($this->getParameters());
			
		PartKeepr::getEM()->flush();
		
		return array("data" => $entity->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		ProjectManager::getInstance()->deleteEntity($this->getParameter("id"));
		
		return array("data" => null);
	}
}