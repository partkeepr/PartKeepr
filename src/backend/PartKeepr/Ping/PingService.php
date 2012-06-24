<?php
namespace PartKeepr\Ping;
use PartKeepr\Service\AnonService;

use PartKeepr\Service\Service,
	PartKeepr\PartKeepr;

class PingService extends AnonService {
	/**
	 * Simple test call to verify if the service layer is reachable.
	 * 
	 * This is used for the PartKeeprMobile client to verify if the URL
	 * is entered correctly.
	 */
	public function ping () {
		return "pong";
	}
	
}