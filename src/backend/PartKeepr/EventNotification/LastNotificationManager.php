<?php
namespace PartKeepr\EventNotification;

use PartKeepr\EventNotification\LastNotification;
use PartKeepr\PartKeepr;
use PartKeepr\Session\SessionManager;
use PartKeepr\Util\Singleton;

/**
 * This is a manager class for working with the event system. This manager
 * is responsible for the Event.
 *
 */
class LastNotificationManager extends Singleton{
	/**
	 * Creates or retrieves a LastNotification entity by its event name.
	 * 
	 * @param string $name Name of the event to retrive the record.
	 */
	private function getOrCreateByEventName( $name ){
		$event = EventManager::getInstance()->getByName($name);
		$session = SessionManager::getCurrentSession();
		
		$obj = PartKeepr::getEM()->getRepository('PartKeepr\EventNotification\LastNotification')
			->findOneBy(array('event' => $event->getId(), 'session' => $session->getId() ));
		
		if (!$obj){
			$obj = new LastNotification($event, $session);
			PartKeepr::getEM()->persist($obj);
			PartKeepr::getEM()->flush();
		}
		
		return $obj;
	}
	
	/**
	 * Starts listeneing to the event with the given name.
	 */
	public function startListeningToEvent( $name ){
		$notify = $this->getOrCreateByEventName( $name );
	}

	/**
	 * Ends listening to the event and destroy the record of the listener.
	 */
	public function stopListeningToEvent( $name ){
		$notify = $this->getOrCreateByEventName( $name );		
		PartKeepr::getEM()->remove($notify);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Get all entries which are notified by the event.
	 */
	public function getNotifiedListeners(){
		$session = SessionManager::getCurrentSession();
		$query = PartKeepr::getEM()->createQuery("SELECT l FROM PartKeepr\EventNotification\LastNotification l JOIN l.session s JOIN l.event e WHERE s.id = ?1 AND e.lastOccured > l.lastNotify");
		$query->setParameter(1,$session->getId());
		
		return $query->getResult();
	}
}


