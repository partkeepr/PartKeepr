<?php
namespace de\RaumZeitLabor\PartKeepr\SystemNotice;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Manager\AbstractManager,
	de\RaumZeitLabor\PartKeepr\Project\Project,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class SystemNoticeManager extends AbstractManager {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. de\RaumZeitLabor\PartKeepr\Part
	 */
	public function getEntityName () {
		return 'de\RaumZeitLabor\PartKeepr\SystemNotice\SystemNotice';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array("id", "title", "date");
	}
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	public function getDefaultSortField () {
		return "date";
	}
}