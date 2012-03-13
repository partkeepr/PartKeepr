<?php
namespace de\RaumZeitLabor\PartKeepr\Stock;

use de\RaumZeitLabor\PartKeepr\Manager\AbstractManager,
	Doctrine\ORM\QueryBuilder,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class StockManager extends AbstractManager {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. de\RaumZeitLabor\PartKeepr\Part
	 */
	public function getEntityName () {
		return 'de\RaumZeitLabor\PartKeepr\Stock\StockEntry';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array();
	}
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	public function getDefaultSortField () {
		return "dateTime";
	}
	
	/**
	 * Applies a custom query to the QueryBuilder
	 * 
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applyCustomQuery (QueryBuilder $qb, ManagerFilter $filter) {
		switch ($filter->getSortField()) {
			case "q.part_name":
				$qb->join("q.part", "p");
				$filter->setSortField("p.name");
				break;
			case "q.user_id":
				$qb->leftJoin("q.user", "u");
				$filter->setSortField("u.username");
				break;
			case "q.direction":
				$filter->setSortField("q.dateTime");
				break;
			case "q.storageLocation_name":
				$qb->join("q.part", "p")->join("p.storageLocation", "st");
				$filter->setSortField("st.name");
				break;
		}
	}
}