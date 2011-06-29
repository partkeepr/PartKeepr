<?php
namespace de\RaumZeitLabor\PartKeepr\Session;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Session\Exceptions\SessionNotFoundException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class SessionManager extends Singleton {
	public static $currentSession = null;
	
	public static function getCurrentSession () {
		return self::$currentSession;
	}
	
	/**
	 * Invalidates the given session.
	 * @param string $sessionid The session id
	 */
	public function invalidateSession ($sessionid) {
		$query = PartKeepr::getEM()->createQuery("DELETE FROM de\RaumZeitLabor\PartKeepr\Session\Session s WHERE s.sessionid = :sessionid");
		$query->setParameter("sessionid", $sessionid);
		
		$query->execute();
	}
	
	public function startSession (User $user = null) {
		if (is_object($user)) {
			try {
			$query = PartKeepr::getEM()->createQuery("SELECT s FROM de\\RaumZeitLabor\\PartKeepr\\Session\\Session s WHERE s.user = :user");
			$query->setParameter("user", $user);
			$query->execute();
			
			$session = $query->getSingleResult();
			$session->resume();
			} catch (\Exception $e) {
				$session = new Session;	
				$session->setUser($user);
				$session->start();
				PartKeepr::getEM()->persist($session);
			} 
		} else {
			$session = new Session;
			$session->setUser($user);
			$session->start();
			PartKeepr::getEM()->persist($session);
		}
		
		self::$currentSession = $session;
		
		return $session;
	}
	
	public function resumeSession ($session) {
		$query = PartKeepr::getEM()->createQuery("SELECT s FROM de\\RaumZeitLabor\\PartKeepr\\Session\\Session s WHERE s.sessionid = :session");
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