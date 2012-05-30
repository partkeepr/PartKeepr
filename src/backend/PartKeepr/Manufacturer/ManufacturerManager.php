<?php
namespace PartKeepr\Manufacturer;

use PartKeepr\Util\Singleton,
	PartKeepr\Manufacturer\Manufacturer,
	PartKeepr\PartKeepr,
	PartKeepr\Category\CategoryManager,
	PartKeepr\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerManager extends Singleton {
	/**
	 * Returns a list of manufacturers.
	 *
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter A string to filter the manufacturer's name by, default empty
	 */
	public function getManufacturers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address")->from("PartKeepr\Manufacturer\Manufacturer","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\Manufacturer\Manufacturer","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.name) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Adds a new manufacturer by name
	 * 
	 * @param string $name The manufacturer name
	 */
	public function addManufacturer ($name) {
		$manufacturer = new Manufacturer();
		$manufacturer->setName($name);
		
		PartKeepr::getEM()->persist($manufacturer);
		PartKeepr::getEM()->flush();
		
		return $manufacturer;
	}
	
	/**
	 * Loads a manufacturer by id
	 * 
	 * @param int $id The manufacturer id
	 */
	public function getManufacturer ($id) {
		return Manufacturer::loadById($id);
	}
	
	/**
	 * Deletes the manufacturer by id
	 * @param int $id The manufacturer's id
	 */
	public function deleteManufacturer ($id) {
		$manufacturer = Manufacturer::loadById($id);
		
		PartKeepr::getEM()->remove($manufacturer);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Retrieves a manufacturer by its name.
	 * 
	 * @param string $name The name of the manufacturer to retrieve
	 * @throws Doctrine\ORM\NoResultException If the manufacturer was not found
	 */
	public function getManufacturerByName ($name) {
		$dql = "SELECT m FROM PartKeepr\Manufacturer\Manufacturer m WHERE m.name = :name";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("name", $name);
		
		return $query->getSingleResult();
	}
}