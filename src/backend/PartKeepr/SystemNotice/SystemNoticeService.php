<?php
namespace PartKeepr\SystemNotice;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\PartKeepr,
	PartKeepr\Manager\ManagerFilter;

class SystemNoticeService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
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
		$queryBuilder->setParameter("acknowledged", false, \PDO::PARAM_BOOL);
	}
	/**
	 * Stub method to fulfill the RestfulService. We don't want to have SystemNotices created by the user, so
	 * we bail out with an exception.
	 * 
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		throw new \Exception("Not implemented");
	}
	
	/**
	 * Stub method to fulfill the RestfulService. We don't want to have SystemNotices updated by the user, so
	 * we bail out with an exception.
	 * 
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		throw new \Exception("Not implemented");
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::destroy()
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
	
	public function hasUnacknowledgedNotices () {
		$dql = "SELECT COUNT(c) FROM PartKeepr\SystemNotice\SystemNotice c WHERE c.acknowledged = :a";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("a", false, \PDO::PARAM_BOOL);
		
		$bRetval = false;
		
		if ($query->getSingleScalarResult() > 0) {
			$bRetval = true;	
		}
		return array("data" => array("unacknowledgedNotices" => $bRetval));
	}
}