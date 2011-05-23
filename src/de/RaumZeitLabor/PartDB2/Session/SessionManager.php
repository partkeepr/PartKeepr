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
		$query = PartDB2::getEM()->createQuery("SELECT s FROM de\\RaumZeitLabor\\PartDB2\\Session\\Session s WHERE s.sessionid = :session");
		$query->setParameter("session", $session);
		$query->execute();
		$result = $query->getResult();

		if (is_object($result[0])) {
			self::$currentSession = $result[0];
		} else {
			die("FOO");
		}
	}
}
?>