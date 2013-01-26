<?php
namespace PartKeepr\EventNotification;

use PartKeepr\Util\Exceptions\ObjectNotFoundException;

use PartKeepr\EventNotification\Event;
use PartKeepr\PartKeepr;
use PartKeepr\Util\Singleton;

/**
 * This is a manager class for working with the event system. This manager
 * is responsible for the Event.
 *
 */
class EventManager extends Singleton{
	/**
	 * Retrieve an event by name. If the entity does not exists, one will
	 * be created.
	 * @param string $name Name of the event
	 */
	public function getOrCreateByName( $name ){		
		$obj = PartKeepr::getEM()->getRepository('PartKeepr\EventNotification\Event')->findOneByName($name);
		if (!$obj){
			$obj = new Event( $name );
			PartKeepr::getEM()->persist($obj);
			PartKeepr::getEM()->flush();
		}

		return $obj;
	}
	
	/**
	 * Gets an existing event by its name.
	 * @param unknown $name
	 */
	public function getByName( $name ){
		$obj = PartKeepr::getEM()->getRepository('PartKeepr\EventNotification\Event')->findOneByName($name);		
		if (!$obj){
			throw new ObjectNotFoundException('PartKeepr\EventNotification\Event', "name=$name");
		}
		return $obj;
	}
}
