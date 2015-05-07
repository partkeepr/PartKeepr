<?php
namespace PartKeepr\Distributor;

use PartKeepr\Util\Singleton,
	PartKeepr\Distributor\Distributor,
	PartKeepr\PartKeepr,
	PartKeepr\Category\CategoryManager,
	PartKeepr\Distributor\Exceptions\DistributorNotFoundException;

class DistributorManager extends Singleton {
	/**
	 * Returns a list of distributors.
	 *  
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter A string to filter the distributor's name by, default empty
	 */
	public function getDistributors ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address, st.skuurl")->from("PartKeepr\Distributor\Distributor","st");

		if ($filter != "") {
			$qb = $qb->where("LOWER(st.name) LIKE :filter");
			$qb->setParameter("filter", "%".strtolower($filter)."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\Distributor\Distributor","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.name) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Returns a distributor by ID.
	 * 
	 * @param int $id The distributor id
	 * @return Distributor The distributor
	 * @throws EntityNotFoundException If no distributor with the ID was found
	 */
	public function getDistributor ($id) {
		return Distributor::loadById($id);
	}
	
	/**
	 * Creates a new distributor with the given name.
	 * @param string $name The name of the distributor
	 * @return Distributor The new distributor object
	 */
	public function addDistributor ($name) {
		$distributor = new Distributor();
		$distributor->setName($name);
		
		PartKeepr::getEM()->persist($distributor);
		PartKeepr::getEM()->flush();
		
		return $distributor;
	}
	
	/**
	 * Deletes a distributor by id
	 * 
	 * @param int $id The ID of the distributor to delete
	 */
	public function deleteDistributor ($id) {
		$distributor = $this->getDistributor($id);
		
		PartKeepr::getEM()->remove($distributor);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Retrieves a distributor by its name.
	 *
	 * @param string $name The name of the distributor to retrieve
	 * @throws Doctrine\ORM\NoResultException If the distributor was not found
	 */
	public function getDistributorByName ($name) {
		$dql = "SELECT d FROM PartKeepr\Distributor\Distributor d WHERE d.name = :name";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("name", $name);
	
		return $query->getSingleResult();
	}
}
