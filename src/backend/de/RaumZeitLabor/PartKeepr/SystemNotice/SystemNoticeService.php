<?php
namespace de\RaumZeitLabor\PartKeepr\SystemNotice;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter;

class SystemNoticeService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => SystemNoticeManager::getInstance()->getEntity($this->getParameter("id"))->serialize());
		} else {
			$parameters = new ManagerFilter($this);
			$parameters->setFilterCallback(array($this, "filterCallback"));
			
			return SystemNoticeManager::getInstance()->getList($parameters);
		}
	}
	
	public function filterCallback ($queryBuilder) {
		$queryBuilder->andWhere("q.acknowledged = :acknowledged");
		$queryBuilder->setParameter("acknowledged", false);
	}
	/**
	 * Stub method to fulfill the RestfulService. We don't want to have SystemNotices created by the user, so
	 * we bail out with an exception.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		throw new \Exception("Not implemented");
	}
	
	/**
	 * Stub method to fulfill the RestfulService. We don't want to have SystemNotices updated by the user, so
	 * we bail out with an exception.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		throw new \Exception("Not implemented");
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		SystemNoticeManager::getInstance()->deleteEntity($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	public function acknowledge () {
		$this->requireParameter("id");
		
		$entity = SystemNoticeManager::getInstance()->getEntity($this->getParameter("id"));
		$entity->setAcknowledgedFlag();
	}
}