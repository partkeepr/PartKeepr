<?php
namespace PartKeepr\EventNotification;

use PartKeepr\Service\Service;
use PartKeepr\EventNotification\LastNotificationManager;

/**
 * This service can be used to register to events. This registration is
 * done on aper session base and if the session is recreated all registrations
 * will go away.
 * Once the session has registered a listener to an event, he will be able to
 * poll for occurance of this event. If this happens the user of this service
 * can react on it.  
 */
class EventNotificationService extends Service{
	/**
	 * Registers a listener to an event.
	 */
	public function registerListener(){
		$this->requireParameter("event");
		$eventName = $this->getParameter("event");
		
		LastNotificationManager::getInstance()->startListeningToEvent( $eventName );	
		return array('data'=>'');	
	}
	
	/**
	 * Deregisters listening to event.
	 */
	public function deregisterListener(){
		$this->requireParameter("event");
		$eventName = $this->getParameter("event");
		
		LastNotificationManager::getInstance()->stopListeningToEvent( $eventName );
		return array('data'=>'');	
	}
	
	/**
	 * Check if we were notified. This method sets all events to confirmed after they
	 * have been sent to the user.
	 * 
	 * This servcice call additional supports a long polling mechanism with the parameters:
	 *   long: Set this to 1 to activate the long polling mode
	 *   timeout: Optional, use this to define a user defined timeout if a shortre timeout
	 *            than the default timeout is needed. 
	 */
	public function isNotified(){
		$longPollingMode = $this->getParameter("long",false);

		// The maximum time we will try to fetch a notify until we will return.
		// For correct usage, also have a look at the maximum execution time.
		$maxTimeInSeconds = max( $this->getParameter("timeout",15), 15 );
		
		$listeners = array();

		$time_start = microtime(true);
		do
		{
			$listeners = LastNotificationManager::getInstance()->getNotifiedListeners();
			usleep(250000);
		}while( $longPollingMode !== false 
				&& count( $listeners ) == 0 
				&& (microtime(true) - $time_start) < $maxTimeInSeconds );
		
		$data = array();
		
		foreach( $listeners as $listener ){
			$data[] = $listener->getEvent()->getName();
			$listener->confirm();
		}
		
		return array('data'=> $data);
	}
}