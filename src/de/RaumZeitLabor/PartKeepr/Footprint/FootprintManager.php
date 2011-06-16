<?php
namespace de\raumzeitlabor\PartKeepr\Footprint;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Exceptions\EntityNotFoundException;

class FootprintManager extends Singleton {
	/**
	* Returns a list of footprints.
	*
	* @param int $start Start of the list, default 0
	* @param int $limit Number of users to list, default 10
	* @param string $sort The field to sort by, default "name"
	* @param string $dir The direction to sort (ASC or DESC), default ASC
	* @param string $filter A string to filter the footprint's name by, default empty
	*/
	public function getFootprints ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
		
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("f.id, f.name")->from("de\RaumZeitLabor\PartKeepr\Footprint\Footprint","f");

		if ($filter != "") {
			$qb = $qb->where("f.name LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("f.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(f.id)")->from("de\RaumZeitLabor\PartKeepr\Footprint\Footprint","f");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("f.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Creates a new footprint
	 * 
	 * @param string $footprint The footprint's name
	 * @throws \de\RaumZeitLabor\PartKeepr\Util\SerializableException
	 * @throws PDOException
	 */
	public function addFootprint ($name) {
		$fp = new Footprint();
		$fp->setName($name);
		
		// @todo Port the UniqueEntityValidator from Symfony2 to here.
		try {
			PartKeepr::getEM()->persist($fp);
			PartKeepr::getEM()->flush();
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				$exception = new SerializableException(sprintf(PartKeepr::i18n("Footprint %s already exists!"), $footprint));
				$exception->setDetail(sprintf(PartKeepr::i18n("You tried to add the footprint %s, but a footprint with the same name already exists."), $footprint));
				
				throw $exception;
			} else {
				throw $e;
			}
		}
		
		return $fp;
	}
	
	/**
	 * Deletes the footprint with the given id.
	 * 
	 * @param int $id The footprint id to delete
	 * @throws \de\RaumZeitLabor\PartKeepr\Util\SerializableException
	 */
	public function deleteFootprint ($id) {
		$footprint = Footprint::loadById($id);
		
		try {
			PartKeepr::getEM()->remove($footprint);
			PartKeepr::getEM()->flush();	
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				$exception = new SerializableException(sprintf(PartKeepr::i18n("Footprint %s is in use by some parts!"), $footprint->getName()));
				$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the footprint %s, but there are parts which use this footprint."), $footprint->getName()));
			
				throw $exception;
			}
		}
	}
	
	/**
	 * Finds or creates a footprint by name.
	 * 
	 * @param mixed $footprint Either the ID or the footprint's name to find
	 */
	public function getOrCreateFootprint ($footprint) {
		try {
			$footprint = Footprint::loadById($footprint);
			return $footprint;
		} catch (EntityNotFoundException $e) {}

		$dql = "SELECT f FROM de\RaumZeitLabor\PartKeepr\Footprint\Footprint f WHERE f.name = :name";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("name", $footprint);
			
		try {
			$footprint = $query->getSingleResult();
			return $footprint;
		} catch (\Exception $e) {}
		
		$fp = new Footprint();
		$fp->setName($footprint);

		PartKeepr::getEM()->persist($fp);
			
		return $fp;
	}
}
