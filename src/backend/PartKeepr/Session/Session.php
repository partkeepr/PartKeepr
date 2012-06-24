<?php
namespace PartKeepr\Session;

use PartKeepr\User\User,
	PartKeepr\PartKeepr;

/** @Entity */
class Session {
	
	/** @Id @Column(type="integer") 
	 *  @GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @Column(length=50) */
	private $sessionid;
	
	/**
	 * @ManyToOne(targetEntity="PartKeepr\User\User")
     */
	private $user;
	
	public function __construct () {
		
	}
	
	public function start () {
		session_start();
		session_regenerate_id();
		session_destroy();
		unset($_SESSION);
		session_start();
		
		$query = PartKeepr::getEM()->createQuery("DELETE FROM PartKeepr\\Session\\Session s WHERE s.sessionid = :session");
		$query->setParameter("session", session_id());
		$query->execute();
		
		$this->sessionid = session_id();
	}
	
	public function getSessionID () {
		return $this->sessionid;
	}
	
	public function resume () {
		session_id($this->sessionid);
		session_start();
	}
	
	public function getUser () {
		return $this->user;
	}
	
	public function setUser (User $user = null) {
		$this->user = $user;
	}
	
}
?>