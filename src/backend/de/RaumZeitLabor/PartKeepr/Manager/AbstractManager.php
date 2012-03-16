<?php
namespace de\RaumZeitLabor\PartKeepr\Manager;

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	Doctrine\ORM\QueryBuilder,
	Doctrine\ORM\Query,
	de\RaumZeitLabor\PartKeepr\Manager\Exceptions\EntityInUseException;

/**
 * The AbstractManager is a very basic helper which
 * implements the mostly used operations on entities:
 * 
 * - Create
 * - Delete
 * - List
 * 
 */
abstract class AbstractManager extends Singleton {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * 
	 * Needs to be implemented by the parent class.
	 * 
	 * @return string The FQCN, e.g. de\RaumZeitLabor\PartKeepr\Part
	 */
	abstract public function getEntityName ();
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * 
	 * This should include all fields required by the frontend.
	 * 
	 * @return array An array of all fields which should be returned
	 */
	abstract public function getQueryFields ();
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	abstract public function getDefaultSortField ();
	
	/**
	 * Loads an entity by id
	 *
	 * @param int $id The entity id
	 */
	public function getEntity ($id) {
		return call_user_func($this->getEntityName()."::loadById", $id);
	}
	
	/**
	 * Removes a specific entity from the system
	 * @param int $id
	 * @throws EntityInUseException Is thrown when the entity is in use
	 */
	public function deleteEntity ($id) {
		$entity = $this->getEntity($id);
		
		try {
			PartKeepr::getEM()->remove($entity);
			PartKeepr::getEM()->flush();	
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				throw new EntityInUseException($entity);
			}
		}
	}
	
	/**
	 * Creates a new entity from an array of parameters
	 * @param array $parameters An array which gets passed to the deserialize method
	 */
	public function createEntity ($parameters) {
		$class = $this->getEntityName();
		$entity = new $class;
		$entity->deserialize($parameters);
		
		PartKeepr::getEM()->persist($entity);
		PartKeepr::getEM()->flush();
		
		return $entity;
	}
	
	/**
	 * Returns a list of entities.
	 * 
	 * @param ManagerFilter $filter The filter settings for this query
	 */
	public function getList (ManagerFilter $filter) {
		$qb = PartKeepr::getEM()->createQueryBuilder();
		
		$qb->select("COUNT(q.id)")->from($this->getEntityName(),"q");
		
		$this->applyFiltering($qb, $filter);
		$this->applyCustomQuery($qb, $filter);
		
		$totalQuery = $qb->getQuery();

		$this->applyResultFields($qb, $filter);
		$this->applyPagination($qb, $filter);
		$this->applySorting($qb, $filter);

		$query = $qb->getQuery();
		
		return array("data" => $this->getResult($query), "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Processes the result after it was retrieved. In the default configuration, it returns an array result, or
	 * if no query fields are specified, it tries to serialize all objects.
	 */
	protected function getResult (Query $query) {
		if (count($this->getQueryFields()) == 0) {
			$aSerializedResult = array();
			foreach ($query->getResult() as $result) {
				$aSerializedResult[] = $result->serialize();
			}	 
			
			return $aSerializedResult;
		} else {
			return $query->getArrayResult();
		}
	}
	
	/**
	 * Applies the result fields to the query.
	 * 
	 * The result fields can be prefixed with the table alias or not; if not prefixed, it is assumed that we'll be
	 * using the specified entity FQCN.
	 * 
	 * Note that the base name will be always "q", so avoid "q" as alias for joined tables.
	 *
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applyResultFields (QueryBuilder $qb, ManagerFilter $filter) {
		if (count($this->getQueryFields()) == 0) {
			$qb->select("q");
		} else {
			// Prepend a prefix to each field
			$aQueryFields = array();
			foreach ($this->getQueryFields() as $field) {
				
				if (strpos($field, ".") === false) {
					// The field is not prefixed, prepend the q. prefix
					$aQueryFields[] = "q.".$field;
				} else {
					// Use as-is
					$aQueryFields[] = $field;
				}
			}
			
			$qb->select($aQueryFields);
		}
	}
	
	/**
	 * Applies filtering to the query and calls back the custom filtering function, if required.
	 *
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applyFiltering (QueryBuilder $qb, ManagerFilter $filter) {
		if ($filter->getFilter() !== null && $filter->getFilterField() !== null) {
			$aOrWhereFields = array();
				
			if (is_array($filter->getFilterField())) {
				foreach ($filter->getFilterField() as $field) {
					$aOrWhereFields[] = "LOWER(q.".$field.") LIKE :filter";
				}
			} else {
				$aOrWhereFields[] = "LOWER(q.".$filter->getFilterField().") LIKE :filter";
			}
				
			foreach ($aOrWhereFields as $or) {
				$qb->orWhere($or);
			}
			
			$qb->setParameter("filter", "%".strtolower($filter->getFilter())."%");
		}
		
		if ($filter->getFilterCallback() !== null) {
			call_user_func($filter->getFilterCallback(), $qb);
		}
	}
	

	/**
	 * Applies a custom query to the QueryBuilder
	 * 
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applyCustomQuery (QueryBuilder $qb, ManagerFilter $filter) {
		
	}
	
	/**
	 * Applies pagination to the query
	 * 
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applyPagination (QueryBuilder $qb, ManagerFilter $filter) {
		if ($filter->getStart() !== null && $filter->getLimit() !== null) {
			$qb->setFirstResult($filter->getStart());
		}
		
		if ($filter->getLimit() !== null) {
			$qb->setMaxResults($filter->getLimit());
		}
	}
	
	/**
	 * Applies record sorting
	 * 
	 * @param QueryBuilder $qb The query builder
	 * @param ManagerFilter $filter The query filter
	 */
	protected function applySorting (QueryBuilder $qb, ManagerFilter $filter) {
		if ($filter->getSortField() !== null && $filter->getSortField() != "q.") {
			$qb->orderBy($filter->getSortField(), $filter->getDir());
		}
	}
} 