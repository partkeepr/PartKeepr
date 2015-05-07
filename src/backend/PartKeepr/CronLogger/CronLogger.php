<?php
namespace PartKeepr\CronLogger;

use PartKeepr\UploadedFile\UploadedFile,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\Deserializable,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a project attachment
 * @ORM\Entity
 **/
class CronLogger extends BaseEntity {
	/**
	 * @ORM\Column(type="datetime")
	 * @var \DateTime
	 */
	private $lastRunDate;
	
	/**
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $cronjob;
	
	/**
	 * Sets the last run date and time for this entry
	 * @param \DateTime $date The date and time
	 */
	public function setLastRunDate (\DateTime $date) {
		$this->lastRunDate = $date;
	}
	
	/**
	 * Returns the date and time for this entry
	 * 
	 * @return \DateTime the date and time for this entry
	 */
	public function getLastRunDate () {
		return $this->lastRunDate;
	}
	
	/**
	 * Sets the cronjob for this entry
	 * @param string $cronjob the title for this entry
	 */
	public function setCronjob ($cronjob) {
		$this->cronjob = $cronjob;
	}
	
	/**
	 * Returns the cronjob for this entry
	 * @return string the title
	 */
	public function getCronjob () {
		return $this->cronjob;
	}
}