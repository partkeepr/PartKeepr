<?php 
namespace de\RaumZeitLabor\PartKeepr\Tests\Auth;

use de\RaumZeitLabor\PartKeepr\Auth\AuthManager;

class AuthManagerTest extends \PHPUnit_Framework_TestCase {
	public function testBasics () {
		$authManager = AuthManager::getInstance();
		
		if (!$authManager instanceof AuthManager) {
			$this->fail('$authManager is not an instance of de\RaumZeitLabor\PartKeepr\Auth\AuthManager');
		}
	}
}

?>