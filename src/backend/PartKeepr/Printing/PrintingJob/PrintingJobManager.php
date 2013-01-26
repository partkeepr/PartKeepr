<?php
namespace PartKeepr\Printing\PrintingJob;

use Doctrine\ORM\Query,
	Doctrine\ORM\QueryBuilder,
	PartKeepr\Manager\AbstractManager,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\PartKeepr,
	PartKeepr\Printing\PrintingJob\PrintingJob,
	PartKeepr\Util\Singleton,
	PartKeepr\Util\Exceptions\ObjectNotFoundException;

class PrintingJobManager extends AbstractManager {
	public function getEntityName () {
		return 'PartKeepr\Printing\PrintingJob\PrintingJob';
	}
	
	public function getQueryFields () {
		return array("id","created","done","ow.id AS owner","ta.id AS target","da.id AS data");
	}

	public function getDefaultSortField () {
		return "created";
	}	
	
	protected function applyCustomQuery (QueryBuilder $qb, ManagerFilter $filter) {
		/**
		 * Pull in additional tables
		 */
		$qb	->leftJoin("q.target", "ta")
		->leftJoin("q.owner", "ow")
		->leftJoin("q.data", "da");
	}
}