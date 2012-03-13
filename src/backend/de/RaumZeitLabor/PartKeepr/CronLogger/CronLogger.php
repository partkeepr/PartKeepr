<?php
namespace de\RaumZeitLabor\PartKeepr\CronLogger;

use de\RaumZeitLabor\PartKeepr\UploadedFile\UploadedFile,
	de\RaumZeitLabor\PartKeepr\Util\BaseEntity,
	de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Util\Deserializable;

/**
 * Holds a project attachment
 * @Entity
 **/
class CronLogger extends BaseEntity {
	/**
	 * @Column(type="datetime")
	 * @var \DateTime
	 */
	private $lastRunDate;
	
	/**
	 * @Column(type="string") 
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