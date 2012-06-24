<?php
namespace PartKeepr\Stock;

use PartKeepr\Manager\AbstractManager,
	Doctrine\ORM\QueryBuilder,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\PartKeepr;

class StockManager extends AbstractManager {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. PartKeepr\Part
	 */
	public function getEntityName () {
		return 'PartKeepr\Stock\StockEntry';
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
		
		// Apply special handling for non-direct fields in relations, where the frontend has no idea about.
		foreach ($filter->getSorters() as $sorter) {
			switch ($sorter->getSortField()) {
				case "q.part_name":
					$qb->join("q.part", "p");
					$sorter->setSortField("p.name");
					break;
				case "q.user_id":
					$qb->leftJoin("q.user", "u");
					$sorter->setSortField("u.username");
					break;
				case "q.direction":
					$sorter->setSortField("q.dateTime");
					break;
				case "q.storageLocation_name":
					$qb->join("q.part", "p")->join("p.storageLocation", "st");
					$sorter->setSortField("st.name");
					break;
				default:
					break;
			}
		}
	}
}