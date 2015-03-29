<?php
namespace PartKeepr\Session;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User\User;
use PartKeepr\PartKeepr;

/** @ORM\Entity */
class Session {
	
	/** @ORM\Id @ORM\Column(type="integer")
	 *  @ORM\GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @ORM\Column(length=50) */
	private $sessionid;
	
	/**
     * @var User
	 * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User\User")
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
	
	public function getId(){
		return $this->id;
	}
	
	public function getSessionID () {
		return $this->sessionid;
	}
	
	public function resume () {
		session_id($this->sessionid);
		session_start();
	}

    /**
     * Returns the user object
     * @return User
     */
	public function getUser () {
		return $this->user;
	}
	
	public function setUser (User $user = null) {
		$this->user = $user;
	}
	
}
?>