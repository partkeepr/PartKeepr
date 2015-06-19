<?php
namespace PartKeepr\FootprintAttachment;

use PartKeepr\Util\Singleton,
	\PartKeepr\FootprintBundle\Entity\Footprint,
	PartKeepr\PartKeepr;

class FootprintAttachmentManager extends Singleton {
	/**
	 * Returns a list of footprint attachments
	 *
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter The footprint id
	 */
	public function getFootprintAttachments ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st")->from("PartKeepr\Footprint\FootprintAttachment","st")
			->leftJoin('st.footprint', "fp");

		if ($filter != "") {
			$footprint = Footprint::loadById($filter);
			$qb = $qb->where("st.footprint = :footprint");
			$qb->setParameter("footprint", $footprint);
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);

		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\Footprint\FootprintAttachment","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.footprint = :footprint");
			$totalQueryBuilder->setParameter("footprint", $footprint);
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		$aData = array();
		foreach ($result as $item) {
			$aData[] = $item->serialize();
		}
		return array("data" => $aData, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Returns a footprint attachment by id
	 * @param int $id The footprint attachment id
	 */
	public function getFootprintAttachment ($id) {
		return FootprintAttachment::loadById($id);
	}

}