<?php
namespace de\RaumZeitLabor\PartDB2\Session;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Auth\User,
	de\RaumZeitLabor\PartDB2\PartDB2;

class SessionManager extends Singleton {
	public static $currentSession = null;
	
	public static function getCurrentSession () {
		return self::$currentSession;
	}
	
	public function startSession (User $user = null) {
		$session = new Session;
		
		if (is_object($user)) {
			$session->setUser($user);
		}
		
		$session->start();
		
		PartDB2::getEM()->persist($session);
		
		self::$currentSession = $session;
		
		return $session;
	}
	
	public function resumeSession ($session) {
		$result = PartDB2::getEM()->find("de\\RaumZeitLabor\\PartDB2\\Session\\Session", $session);

	}
}
?>