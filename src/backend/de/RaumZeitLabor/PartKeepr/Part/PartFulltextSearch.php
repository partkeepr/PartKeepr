<?php
namespace de\RaumZeitLabor\PartKeepr\Part;

use de\RaumZeitLabor\PartKeepr\FulltextSearch\FulltextSearch;

/**
 * Implements the part fulltext search
 */
class PartFulltextSearch extends FulltextSearch {
	/**
	 * Returns the FQDN of the part entity
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\FulltextSearch.FulltextSearch::getEntityName()
	 */
	protected function getEntityName () {
		return 'de\RaumZeitLabor\PartKeepr\Part\Part';
	}
	
	/**
	 * Returns the fields to be searched in
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\FulltextSearch.FulltextSearch::getFields()
	 */
	protected function getFields () {
		return array("comment", "name", "internalPartNumber");
	}
}