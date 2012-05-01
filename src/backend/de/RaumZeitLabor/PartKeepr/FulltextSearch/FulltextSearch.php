<?php
namespace de\RaumZeitLabor\PartKeepr\FulltextSearch;

use de\RaumZeitLabor\PartKeepr\PartKeepr;

abstract class FulltextSearch {
	
	/**
	 * Creates a new fulltext search based on the given query.
	 * 
	 * The query can contain different query strings, separated by space. The query returns only results which contain
	 * all query strings in any fields.
	 * 
	 * If the query is "100 ohm", it would only consider entities which have both "100" and "ohm", no matter which field
	 * the value is in.
	 * 
	 * @param string $query The query to search for
	 */
	public function __construct ($query) {
		$this->query = explode(" ", $query);
	}
	
	/**
	 * Fires the query and returns the results.
	 * 
	 * @param none
	 * @return array An array with all IDs which match the query
	 */
	public function query () {
		return $this->fallbackSearch();
	}
	
	/**
	 * A fallback search in case no fulltext search engine is available. This directly queries the database, which is
	 * slow. 
	 */
	protected function fallbackSearch () {
		$qb = PartKeepr::getEM()->createQueryBuilder();
		
		$qb	->select("q.id")
			->from($this->getEntityName(), "q")
			->where("1=1");
		
		$dqlChunks = array();
		
		foreach ($this->query as $id => $queryString) {
			$partDqlChunks = array();
			foreach ($this->getFields() as $field) {
				$partDqlChunks[] = "LOWER(q." . $field.") LIKE :filter".$id;
			}
				
			$dqlChunks[] = "(".implode(" OR ", $partDqlChunks).")";
				
			$qb->setParameter("filter".$id, "%".str_replace("%", "\\%", strtolower($queryString))."%");
		}
		
		$qb->andWhere(implode(" AND " ,$dqlChunks));
		
		$query = $qb->getQuery();
		
		
		
		$result = $query->getArrayResult();
		
		if (count($result) > 0) {
			$results = array();
				
			foreach ($result as $value) {
				$results[] = $value["id"];
			}
				
			return $results;
		} else {
			return array(0);
		}
	}
	
	/**
	 * Returns the FQDN name of the entity. This needs to be overridden in child classes.
	 * 
	 * @param none
	 * @return string the FQDN of the entity to query, e.g. de\RaumZeitLabor\PartKeepr\Part\Part
	 */
	abstract protected function getEntityName ();
	
	/**
	 * Returns the fields in which the fulltext search should search in.
	 * 
	 * @param none
	 * @return array An array of field names, e.g. array("name", "description")
	 */
	abstract protected function getFields ();
	
}