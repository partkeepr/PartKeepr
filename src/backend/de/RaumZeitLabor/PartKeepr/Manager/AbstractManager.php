<?php
namespace de\RaumZeitLabor\PartKeepr\Manager;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manager\Exceptions\EntityInUseException;

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
		
		$qb->select("COUNT(q.id)");
		
		//$qb->where("1");
		
		if ($filter->getFilter() !== null && $filter->getFilterField() !== null) {
			$aOrWhereFields = array();
			
			if (is_array($filter->getFilterField())) {
				foreach ($filter->getFilterField() as $field) {
					$aOrWhereFields[] = "q.".$field." = :filter";
				}
			} else {
				$aOrWhereFields[] = "q.".$filter->getFilterField()." = :filter";
			}
			
			$qb->orWhere($aOrWhereFields);
			$qb->setParameter("filter", "%".$filter->getFilter()."%");
		}
		
		$qb->from($this->getEntityName(),"q");
		
		$totalQuery = $qb->getQuery();

		// Prepend a prefix to each field
		$aQueryFields = array();
		foreach ($this->getQueryFields() as $field) {
			$aQueryFields[] = "q.".$field;
		}
		
		$qb->select($aQueryFields);
		
		
		if ($filter->getStart() !== null && $filter->getLimit() !== null) {
			$qb->setFirstResult($filter->getStart());
		}
		
		if ($filter->getLimit() !== null) {
			$qb->setMaxResults($filter->getLimit());
		}
		
		if ($filter->getSortField() !== null) {
			$qb->orderBy("q.".$filter->getSortField(), $filter->getDir());
		}
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
		
	}
} 