<?php 
namespace PartKeepr\Printing\PrintingJob;

use PartKeepr\EventNotification\EventManager;
use	PartKeepr\Session\SessionManager,
	PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\User\User,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
    Doctrine\ORM\Mapping as ORM;

/**
 * This is a single job waiting for beeing processed.
 * 
 * @ORM\Entity @ORM\HasLifecycleCallbacks
 */
class PrintingJob extends BaseEntity implements Serializable {
	/**
	 * The timestamp when the job was created.
	 * @ORM\Column(type="datetime")
	 */
	private $created;
	
	/**
	 * Will be set if the job was processed successfully by somebody and is marked
	 * as done.
	 * @ORM\Column(type="boolean")
	 */
	private $done;
		
	/**
	 * This is the user which has created this printing job.
	 * @ORM\ManyToOne(targetEntity="PartKeepr\User\User")
	 */
	private $owner;
	
	/**
	 * Target user the printing job is for. This is mostly the printer or output queue
	 * which should be used to process this job.
	 * @ORM\ManyToOne(targetEntity="PartKeepr\User\User")
	 */
	private $target;
	
	/**
	 * Holds the data which was rendered for printing.
	 * @ORM\OneToOne(targetEntity="PartKeepr\UploadedFile\TempUploadedFile")
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
	 * @ORM\PostPersist @ORM\PostUpdate
	 */
	public function onPostPersist(){
		if (!$this->done) {
			EventManager::getInstance()->getOrCreateByName("Printing.pendingJob")->emit();
		}
	}
	
	/**
	 * Retrieve created field.
	 */
	public function getCreated(){
		return $this->created;
	}
	
	/**
	 * Sets done to new value.
	 * @param boolean $done
	 */
	public function setDone( $done ){
		$this->done = $done;
	}
	
	/**
	 * Retrieve done field.
	 * @return boolean
	 */
	public function getDone(){
		return $this->done;
	}
	
	/**
	 * Sets data field to a file.
	 * @param TempUploadedFile $data
	 */
	public function setData( TempUploadedFile $data ){
		$this->data = $data;
	}
	
	/**
	 * Retrieve data file.
	 * @return TempUploadedFile
	 */
	public function getData(  ){
		return $this->data;
	}
	
	/**
	 * Sets the owner of this job.
	 * @param User $user
	 */
	public function setOwner( User $user ) {
		$this->owner = $user;
	} 
	
	/**
	 * Retrieves owner of this job.
	 * @return User
	 */
	public function getOwner() {
		return $this->owner;
	}
	
	/**
	 * Sets the target of this job.
	 * @param User $user
	 */
	public function setTarget( User $user ){
		$this->target = $user;
	}
	
	/**
	 * Retrieve target for this job.
	 * @return User
	 */
	public function getTarget() {
		return $this->target;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Util\Serializable::serialize()
	 */
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
