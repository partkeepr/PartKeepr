<?php
namespace PartKeepr\Printing\PrintingJob;

use PartKeepr\PartKeepr,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\Printing\PrintingJob\PrintingJob,
	PartKeepr\Printing\PrintingJob\PrintingJobManager,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\FilterExtractor,
	PartKeepr\Service\Service,
	PartKeepr\Session\SessionManager;

/**
 * This is the exposed restful service for working with the PrintingJobs.
 */
class PrintingJobService extends Service implements RestfulService {
	/**
	 * Checks the permission and throws an exception if the access is denied.
	 * @throws \Exception
	 */
	private function checkPermission( $job ){
		$user = SessionManager::getInstance()->getCurrentSession()->getUser();
		if( !$user->isAdmin() && $user === $job->getTarget() && $user === $job->getOwner() )
			throw new \Exception("Permission denied!");
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Service\RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			$job = PrintingJobManager::getInstance()->getEntity($this->getParameter("id"));
			$this->checkPermission($job);
			
			return array("data" => $job->serialize());
		} else {				
			$filter = new ManagerFilter($this);
			$filter->setFilterCallback(array($this, "filterCallback"));
			return PrintingJobManager::getInstance()->getList($filter);
		}
	}	
	
	/**
	 * 
	 * @param unknown $queryBuilder
	 */
	public function filterCallback ($queryBuilder) {
		$filter = new FilterExtractor($this);
		
		// Apply access restriction filters here
		$user = SessionManager::getInstance()->getCurrentSession()->getUser();
		
		$queryBuilder->andWhere("(q.target = :sessionuser OR q.owner = :sessionuser)");
		$queryBuilder->setParameter("sessionuser", $user->getId() );
		
		// Apply User filters here
		if ($filter->has("done") && $filter->get("done") != "") {
			$queryBuilder->andWhere("q.done = :done");
			$queryBuilder->setParameter("done", $filter->get("done") );
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Service\RestfulService::create()
	 */
	public function create () {
		throw new \Exception("Creation of printing jobs cannot be done by this service!");
	}
	
	/**
	 * This update method only supports updating the done flag!
	 * @see \PartKeepr\Service\RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("done");
		
		$obj = PrintingJobManager::getInstance()->getEntity($this->getParameter("id"));
		$this->checkPermission($obj);
		
		$obj->setDone( $this->getParameter("done")=='true');		
		PartKeepr::getEM()->flush();
		
		return array("data" => $obj->serialize());		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Service\RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");		
		$id = $this->getParameter("id");
		
		$job = PrintingJobManager::getInstance()->getEntity($id);
		$this->checkPermission($job);
		
		PrintingJobManager::getInstance()->deleteEntity($id);
		
		return array("data" => null);
	}
}