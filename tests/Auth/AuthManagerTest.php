<?php 
namespace de\RaumZeitLabor\PartDB2\Tests\Auth;

use de\RaumZeitLabor\PartDB2\Auth\AuthManager;

class AuthManagerTest extends \PHPUnit_Framework_TestCase {
	public function testBasics () {
		$authManager = AuthManager::getInstance();
		
		if (!$authManager instanceof AuthManager) {
			$this->fail('$authManager is not an instance of de\RaumZeitLabor\PartDB2\Auth\AuthManager');
		}
	}
}

?>