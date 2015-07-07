<?php
namespace PartKeepr\Session;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User\User;
use Symfony\Component\HttpFoundation\Session\Session as SymfonySession;
use PartKeepr\PartKeepr;
use Symfony\Component\HttpFoundation\Session\Storage\MockFileSessionStorage;
/** @ORM\Entity */
class Session {
	
	/** @ORM\Id @ORM\Column(type="integer")
	 *  @ORM\GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @ORM\Column(length=64) */
	private $sessionid;
	
	/**
     * @var User
	 * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User\User")
     */
	private $user;

    private $session;
	
	public function __construct () {
	}
	
	public function start () {
        $this->session = new SymfonySession(new MockFileSessionStorage());
        $this->session->start();
        $this->session->migrate();
        $this->session->invalidate();
        $this->session->start();
		
		$query = PartKeepr::getEM()->createQuery("DELETE FROM PartKeepr\\Session\\Session s WHERE s.sessionid = :session");
		$query->setParameter("session", $this->session->getId());
		$query->execute();
		
		$this->sessionid = $this->session->getId();
	}
	
	public function getId(){
		return $this->id;
	}
	
	public function getSessionID () {
		return $this->sessionid;
	}
	
	public function resume () {
        $this->session = new SymfonySession(new MockFileSessionStorage());
        $this->session->setId($this->sessionid);
        $this->session->start();
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