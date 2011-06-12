<?php
namespace de\RaumZeitLabor\PartDB2\Session;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Auth\User,
	de\RaumZeitLabor\PartDB2\Session\Exceptions\SessionNotFoundException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class SessionManager extends Singleton {
	public static $currentSession = null;
	
	public static function getCurrentSession () {
		return self::$currentSession;
	}
	
	public function startSession (User $user = null) {
		if (is_object($user)) {
			try {
			$query = PartDB2::getEM()->createQuery("SELECT s FROM de\\RaumZeitLabor\\PartDB2\\Session\\Session s WHERE s.user = :user");
			$query->setParameter("user", $user);
			$query->execute();
			
			$session = $query->getSingleResult();
			$session->resume();
			} catch (\Exception $e) {
				$session = new Session;	
				$session->setUser($user);
				$session->start();
				PartDB2::getEM()->persist($session);
			} 
		} else {
			$session = new Session;
			$session->setUser($user);
			$session->start();
			PartDB2::getEM()->persist($session);
		}
		
		self::$currentSession = $session;
		
		return $session;
	}
	
	public function resumeSession ($session) {
		$query = PartDB2::getEM()->createQuery("SELECT s FROM de\\RaumZeitLabor\\PartDB2\\Session\\Session s WHERE s.sessionid = :session");
		$query->setParameter("session", $session);
		$query->execute();
		try {
			self::$currentSession = $query->getSingleResult();
			return self::$currentSession;
		} catch (\Doctrine\ORM\NonUniqueResultException $e) {
			throw new \Exception("Fatal error: Multiple sessions with id $session found.");
		} catch (\Doctrine\ORM\NoResultException $e) {
			throw new SessionNotFoundException($session);
		}
		
	}
}
?>