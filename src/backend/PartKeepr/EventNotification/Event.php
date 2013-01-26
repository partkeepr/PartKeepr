<?php 
namespace PartKeepr\EventNotification;

use PartKeepr\Util\BaseEntity;

/**
 * The event notification conecpt implements the main concept of notifying a 
 * client on a special event he has registered for.
 * The EventNotification is used to carry events from one request to a
 * process which is polling for this event using a long poll or a complete
 * different kind of service (like a Websocket if possible).
 * 
 * The Event class itself represents a type of event we
 * can signal.
 * 
 *  @Entity
 */
class Event extends BaseEntity{
	/**
	 * Name of the event
	 * @Column(length=64,unique=true)
	 * @var string
	 */
	private $name;
	
	/**
	 * This is a counter which counts up, everytime the event is issued.
	 * @Column(type="datetime")
	 * @var datetime
	 */
	private $lastOccured;
	
	public function __construct( $name ){
		$this->name = $name;
		$this->lastOccured = new \DateTime("now");
	}	
	
	public function setName( $name ){
		$this->name = $name;
	}
	
	public function getName(){
		return $this->name;
	}
	
	/**
	 * Sets the event to be emitted now.
	 */
	public function emit(){
		$this->lastOccured = new \DateTime("now");
	}
	
	/**
	 *  Retrieve the timestamp this event has occured.
	 */
	public function getLastOccured(){
		return $this->lastOccured;
	}
	
} 