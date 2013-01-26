<?php 
namespace PartKeepr\Printing\PrintingJob;

use PartKeepr\EventNotification\EventManager;
use	PartKeepr\Session\SessionManager,
	PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\User\User,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable;
/**
 * This is a single job waiting for beeing processed.
 * 
 * @Entity @HasLifecycleCallbacks
 */
class PrintingJob extends BaseEntity implements Serializable {
	/**
	 * The timestamp when the job was created.
	 * @Column(type="datetime") 
	 */
	private $created;
	
	/**
	 * Will be set if the job was processed successfully by somebody and is marked
	 * as done.
	 * @Column(type="boolean")
	 */
	private $done;
		
	/**
	 * This is the user which has created this printing job.
	 * @ManyToOne(targetEntity="PartKeepr\User\User")
	 */
	private $owner;
	
	/**
	 * Target user the printing job is for. This is mostly the printer or output queue
	 * which should be used to process this job.
	 * @ManyToOne(targetEntity="PartKeepr\User\User")
	 */
	private $target;
	
	/**
	 * Holds the data which was rendered for printing.
	 * @OneToOne(targetEntity="PartKeepr\UploadedFile\TempUploadedFile")
	 */
	private $data;
	
	public function __construct () {
		$this->created = new \DateTime();
		$this->done = false;
		$this->owner = SessionManager::getInstance()->getCurrentSession()->getUser();
	}
	
	/** 
	 * This method is a callback for the PostPersist event. We will add it to our database
	 * dependent eventNotification.
	 * 
	 * @PostPersist @PostUpdate
	 */
	public function onPostPersist(){
		if (!$this->done) {
			EventManager::getInstance()->getOrCreateByName("Printing.pendingJob")->emit();
		}
	}
	
	public function getCreated(){
		return $this->created;
	}
	
	public function setDone( $done ){
		$this->done = $done;
	}
	
	public function getDone(){
		return $this->done;
	}
	
	public function setData( TempUploadedFile $data ){
		$this->data = $data;
	}
	
	public function getData(  ){
		return $this->data;
	}
	
	public function setOwner( User $user ) {
		$this->owner = $user;
	} 
	
	public function getOwner() {
		return $this->owner;
	}
	
	public function setTarget( User $user ){
		$this->target = $user;
	}
	
	public function getTarget() {
		return $this->target;
	}
	
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"created" => $this->getCreated(),
				"done" => $this->getDone(),
				"owner" => $this->getOwner()->getId(),
				"target" => $this->getTarget()->getId(),
				"data" => $this->getData()->getId()
		);
	}
}
