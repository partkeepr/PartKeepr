<?php
namespace PartKeepr\Project;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Project\ProjectManager,
	PartKeepr\PartKeepr,
	PartKeepr\Manager\ManagerFilter;

class ProjectService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
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
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$entity = ProjectManager::getInstance()->createEntity($this->getParameters());
		
		return array("data" => $entity->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::update()
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
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		ProjectManager::getInstance()->deleteEntity($this->getParameter("id"));
		
		return array("data" => null);
	}
}