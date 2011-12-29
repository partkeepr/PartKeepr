<?php
namespace de\RaumZeitLabor\PartKeepr\ProjectAttachment;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Project\Project,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class ProjectAttachmentManager extends Singleton {
	/**
	 * Returns a list of project attachments
	 *
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter The project id
	 */
	public function getProjectAttachments ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st")->from("de\RaumZeitLabor\PartKeepr\Project\ProjectAttachment","st")
			->leftJoin('st.project', "fp");

		if ($filter != "") {
			$project = Project::loadById($filter);
			$qb = $qb->where("st.project = :project");
			$qb->setParameter("project", $project);
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);

		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Project\ProjectAttachment","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.project = :project");
			$totalQueryBuilder->setParameter("project", $project);
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		$aData = array();
		foreach ($result as $item) {
			$aData[] = $item->serialize();
		}
		return array("data" => $aData, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Returns a project attachment by id
	 * @param int $id The project attachment id
	 */
	public function getProjectAttachment ($id) {
		return ProjectAttachment::loadById($id);
	}

}