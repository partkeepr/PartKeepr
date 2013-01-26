<?php 
namespace PartKeepr\EventNotification;

use PartKeepr\EventNotification\Event;
use PartKeepr\Session\Session;
use PartKeepr\Util\BaseEntity;

/**
 * This entity is used to store the last notification of
 * an event.
 * 
 * @Entity
 */
class LastNotification extends BaseEntity{
	/**
	 * This is the associated event.
	 * @ManyToOne(targetEntity="PartKeepr\EventNotification\Event")
	 */
	private $event;

	/**
	 * @ManyToOne(targetEntity="PartKeepr\Session\Session")
	 * @JoinColumn(onDelete="CASCADE")
	 */
	private $session;
	
	/**
	 * This is the last timestamp, the user was notified about
	 * an occured event.
	 * 
	 * @Column(type="datetime")
	 * @var datetime
	 */
	private $lastNotify;
	
	
	public function __construct ( Event $event, Session $session ) {
		$this->event = $event;
		$this->session = $session;
		$this->lastNotify = new \DateTime("now");
	}
	
	/**
	 * Checks if this class is notified by its event.
	 */
	public function isNotified(){
		return $lastNotify < $event->getLastOccured();
	}

	/**
	 * Confirms the notify and resets the notified state to false.
	 */
	public function confirm(){
		$this->lastNotify = new \DateTime("now");
	}
	
	/**
	 * Retrieves the event.
	 * @return Event
	 */
	public function getEvent(){
		return $this->event;
	}
	
}
