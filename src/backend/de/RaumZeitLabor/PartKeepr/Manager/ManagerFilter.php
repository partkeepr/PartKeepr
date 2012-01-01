<?php
namespace de\RaumZeitLabor\PartKeepr\Manager;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;

class ManagerFilter {
	/**
	 * Specifies the record index at which to start
	 * @var integer
	 */
	protected $start = 0;
	
	/**
	 * Specifies the number of records to retrieve
	 * @var integer
	 */
	protected $limit = null;
	
	/**
	 * Specifies a string to filter for. Can either be a string
	 * or null if no filter is wanted
	 * @var string
	 */
	protected $filter = null;
	
	/**
	 * Specifies the field (or a list of fields) to apply the filter on
	 * @var mixed null if disabled, a string for a single field or an array of fields
	 */
	protected $filterField = null;
	
	/**
	 * Specifies the field to sort by
	 * @var string
	 */
	protected $sortField = null;
	
	/**
	 * Specifies the direction (either ASC or DESC)
	 * @var string
	 */
	protected $direction = "asc";
	
	/**
	 * A callback which is called when creating the filter
	 * @var function The callback
	 */
	protected $callback = null;
	
	/**
	 * Sets the start position
	 * @param int $start
	 */
	public function setStart ($start) {
		$this->start = intval($start);
	}
	
	/**
	 * Returns the start position
	 * @return int
	 */
	public function getStart () {
		if ($this->start === null) {
			return 0;	
		} else {
			return $this->start;
		}
	}
	
	/**
	 * Sets the number of records to retrieve
	 * @param mixed $limit Either a positive integer, or null/-1 for no limit
	 */
	public function setLimit ($limit) {
		if ($limit === null || $limit == -1) {
			$this->limit = null;
		} else {
			$this->limit = intval($limit);
		}
	}
	
	/**
	 * Returns the number of records to retrieve
	 * @return int
	 */
	public function getLimit () {
		return $this->limit;
	}
	
	/**
	 * Sets the filter. Specify null if no filter is wanted.
	 * @param mixed $filter A string to filter for, or null to disable
	 */
	public function setFilter ($filter) {
		$this->filter = $filter;
	}
	
	/**
	 * Returns the filter.
	 * @return mixed Either a string to filter for, or null if disabled
	 */
	public function getFilter () {
		return $this->filter;
	}
	
	/**
	 * Sets the direction to order by
	 * @param string $direction Either "asc" or "desc".
	 */
	public function setDirection ($direction) {
		switch (strtolower($direction)) {
			case "desc":
				$this->direction = "desc";
				break;
			case "asc":
			default:
				$this->direction = "asc";
				break;
		}
	}
	
	/**
	 * Sets the direction to order by. Shorthand function for setDirection().
	 * @param string $dir The direction, either "asc" or "desc"
	 */
	public function setDir ($dir) {
		$this->setDirection($dir);	
	}
	
	/**
	 * Returns the direction to order by.
	 * @return either "asc" or "desc".
	 */
	public function getDirection () {
		return $this->direction;
	}
	
	/**
	 * Shorthand function for getDirection().
	 * @see getDirection
	 */
	public function getDir () {
		return $this->getDirection();
	}
	
	/**
	 * Sets the field to sort by
	 * @param string $sortField The sort field
	 */
	public function setSortField ($sortField) {
		$this->sortField = $sortField;
	}
	
	/**
	 * Returns the sort field
	 * @return string the field to sort by
	 */
	public function getSortField () {
		return $this->sortField;
	}
	
	/**
	 * Sets the field(s) to filter for.
	 * 
	 * If multiple fields are specified, they will be combined using an "OR" clause.
	 * 
	 * @param mixed $field Either null to disable, a single string to specify a field, or an array of string fields
	 */
	public function setFilterField ($field) {
		$this->filterField = $field;
	}
	
	/**
	 * Returns the field(s) to filter for
	 * @return mixed See setFilterField
	 */
	public function getFilterField () {
		return $this->filterField;
	}
	
	/**
	 * Sets the filter callback
	 * @param function $callback A function which is called when creating a filter. The callback function receives the
	 * 							 query builder as first argument.
	 */
	public function setFilterCallback ($callback) {
		$this->callback = $callback;
	}
	
	/**
	 * Returns the filter callback
	 * @return function The callback function
	 */
	public function getFilterCallback () {
		return $this->callback;
	}
	
	/**
	 * Constructs a new filter set.
	 * 
	 * If a service is passed, the constructor automatically extracts the parameters from the service
	 * 
	 * @todo Document which parameters we have
	 * 
	 * @param Service $service A service to extract the information from, or null
	 */
	public function __construct (Service $service = null) {
		if (is_object($service)) {
			if ($service->hasParameter("start")) {
				$this->setStart($service->getParameter("start", null));
			}
			
			if ($service->hasParameter("limit")) {
				$this->setLimit($service->getParameter("limit", null));
			}
			
			if ($service->hasParameter("sort")) {
				$tmp = json_decode($service->getParameter("sort"), true);
			
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
						"property" => null,
						"direction" => "ASC");
			}
			
			$this->setSortField("q.".$aSortParams["property"]);
			$this->setDirection($aSortParams["direction"]);
			
			if ($service->hasParameter("query")) {
				$this->setFilter($service->getParameter("query"));
			}
		}
	}
}