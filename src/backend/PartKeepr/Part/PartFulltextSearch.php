<?php
namespace PartKeepr\Part;

use PartKeepr\FulltextSearch\FulltextSearch;

/**
 * Implements the part fulltext search
 */
class PartFulltextSearch extends FulltextSearch {
	/**
	 * Returns the FQDN of the part entity
	 * 
	 * (non-PHPdoc)
	 * @see PartKeepr\FulltextSearch.FulltextSearch::getEntityName()
	 */
	protected function getEntityName () {
		return 'PartKeepr\PartBundle\Entity\Part';
	}
	
	/**
	 * Returns the fields to be searched in
	 * 
	 * (non-PHPdoc)
	 * @see PartKeepr\FulltextSearch.FulltextSearch::getFields()
	 */
	protected function getFields () {
		return array("comment", "name", "description", "internalPartNumber");
	}
}
