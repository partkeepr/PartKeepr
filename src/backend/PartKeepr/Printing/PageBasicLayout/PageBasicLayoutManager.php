<?php
namespace PartKeepr\Printing\PageBasicLayout;

use PartKeepr\PartKeepr,
	PartKeepr\Printing\PageBasicLayout\PrintingPageBasicLayout,
	PartKeepr\Util\Singleton,
	PartKeepr\Util\Exceptions\ObjectNotFoundException;

class PageBasicLayoutManager extends Singleton {
	public function getMultipleObjects ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name")->from("PartKeepr\Printing\PageBasicLayout\PageBasicLayout","st");
	
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
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\Printing\PageBasicLayout\PageBasicLayout","st");
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.name) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
	
		$totalQuery = $totalQueryBuilder->getQuery();
	
		return array("data" => $result, "start" => $start, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getObjectById ($id) {
		$obj = PartKeepr::getEM()->find("PartKeepr\Printing\PageBasicLayout\PageBasicLayout", $id);
		if ($obj) {
			return $obj;
		} else {
			throw new ObjectNotFoundException("PartKeepr\Printing\PageBasicLayout\PageBasicLayout", $id);
		}
	}
	public function deleteObjectById ($id) {
		$obj = $this->getObjectById($id);

		PartKeepr::getEM()->remove($obj);
		PartKeepr::getEM()->flush();
	}
}