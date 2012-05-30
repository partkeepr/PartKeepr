<?php
namespace PartKeepr\Project;

use PartKeepr\Manager\AbstractManager,
	PartKeepr\Project\Project,
	PartKeepr\PartKeepr;

class ProjectManager extends AbstractManager {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. PartKeepr\Part
	 */
	public function getEntityName () {
		return 'PartKeepr\Project\Project';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array("id", "name", "description");
	}
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	public function getDefaultSortField () {
		return "name";
	}
}