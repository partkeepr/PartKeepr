<?php 

namespace PartKeepr\Service;

use PartKeepr\Service\Service;

/**
 * This class can be used to extract the filter parameters from requests.
 */
class FilterExtractor{
	private $filters;
	
	public function construct__( Service $service ){
		$this->filters = array();
		
		if ($service->hasParameter("filter")) {
			$tmp = json_decode($service->getParameter("filter"), true);
		
			foreach ($tmp as $item) {
				if (array_key_exists("property", $item)) {
					if (array_key_exists("value", $item)) {
						$this->filter[ $item['property'] ] = $item["value"];
					}
				}
			}
		}
	}
	
	public function get( $property ){
		return $this->filters[$property];
	}
	
	public function has( $property ){
		return empty( $this->filters );
	}
}

$filter = "";
	
