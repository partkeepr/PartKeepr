<?php
namespace PartKeepr\DoctrineReflectionBundle\Sorter;

/**
 * Represents a sorter
 *
 * This allows the developer to specify multiple sorters. One sorter contains a sort field and a sort direction.
 */
class Sorter {
	/**
	 * The FQDN target entity to sort
	 * @var string
	 */

	private $targetEntity;
	/**
	 * The field to sort by
	 * @var string
	 */
	private $sortField = null;
	
	/**
	 * The direction to sort by
	 * @var string
	 */
	private $sortDirection = null;

	/**
	 * Constructs a new sorter.
	 * 
	 * @param string $field The field to sort by
	 * @param string $direction The direction, either "asc" or "desc"
	 */
	public function __construct ($targetEntity, $field = null, $direction = null) {
		$this->targetEntity = $targetEntity;

		if ($field !== null) {
			$this->setSortField($field);
		}
		
		if ($direction !== null) {
			$this->setSortDirection($direction);
		}
	}
	
	/**
	 * Sets the sort field for this sorter
	 * @param string $field The field to sort by
	 */
	public function setSortField ($field) {
		$this->sortField = $field;
	}
	
	/**
	 * Sets the sort direction for this sorter
	 * @param string $direction Either "asc" or "desc"
	 */
	public function setSortDirection ($direction) {
		switch (strtolower($direction)) {
			case "desc":
			case "d":
				$this->sortDirection = "desc";
				break;
			case "asc":
			case "a":
			default:
				$this->sortDirection = "asc";
				break;
		}
	}

	/**
	 * Returns the target entity to sort
	 * @return string
	 */
	public function getTargetEntity () {
		return $this->targetEntity;
	}

	/**
	 * Returns the sort field for this sorter
	 * @return string The field name
	 */
	public function getSortField () {
		return $this->sortField;
	}
	
	/**
	 * Returns the sort order for this sorter
	 * @return string Either "asc" or "desc"
	 */
	public function getSortDirection () {
		return $this->sortDirection;
	}
}