<?php
namespace de\RaumZeitLabor\PartKeepr\Manager\Exceptions;
declare(encoding = 'UTF-8');

/**
 * This exception is thrown when an entity should be deleted, but is in use by other entities.
 * @author felicitus
 */
class EntityInUseException extends \Exception {
	
	/**
	 * The entity
	 * @var BaseEntity
	 */
	private $entity;
	
	/**
	 * Constructs the exception
	 * @param BaseEntity $entity
	 */
	public function __construct (\de\RaumZeitLabor\PartKeepr\Util\BaseEntity $entity) {
		parent::__construct(sprintf("Entity %s is referenced by other entities, can't delete", get_class($entity)));
		$this->entity = $entity;
	}
	
	/**
	 * Returns the entity which caused the error
	 */
	public function getEntity () {
		return $this->entity;
	}
}