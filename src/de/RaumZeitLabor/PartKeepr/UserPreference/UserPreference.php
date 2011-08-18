<?php
namespace de\RaumZeitLabor\PartKeepr\UserPreference;

use de\RaumZeitLabor\PartKeepr\Util\Serializable;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\User\User;
use de\RaumZeitLabor\PartKeepr\Util\Configuration;
use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

/**
 * Represents a user preference entry.
 * 
 * User preferences are a simple key => value mechanism, where the developer can
 * specify the key and value himself.
 * 
 * Note that values are stored internally as JSON to keep their type.
 * 
 * @Entity
 **/
class UserPreference implements Serializable {
	/**
	 * Defines the key of the user preference
	 * @Column(type="string",length=255)
	 * @Id
	 * @var string
	 */
	private $preferenceKey;
	
	/**
	 * Defines the value. Note that the value is internally stored as a serialized string.
	 * @Column(type="text") 
	 * @var mixed
	 */
	private $preferenceValue;
	
	/**
	 * Defines the user
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\User\User")
	 * @Id
	 * @var User
	 */
	private $user;
	
	
	/**
	 * Sets the user for this entry
	 * @param User $user
	 */
	public function setUser (User $user) {
		$this->user = $user;
	}
	
	/**
	 * Returns the user associated with this entry
	 * @return \de\RaumZeitLabor\PartKeepr\User\User
	 */
	public function getUser () {
		return $this->user;
	}
	
	/**
	 * Sets the key for this user preference
	 * @param string $key The key name
	 */
	public function setKey ($key) {
		$this->preferenceKey = $key;
	}
	
	/**
	 * Returns the key of this entry
	 * @return string
	 */
	public function getKey () {
		return $this->preferenceKey;
	}
	
	/**
	 * Sets the value for this entry
	 * @param mixed $value
	 */
	public function setValue ($value) {
		$this->preferenceValue = serialize($value);
	}
	
	/**
	 * Returns the value for this entry
	 * @return mixed The value
	 */
	public function getValue () {
		return unserialize($this->preferenceValue);
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
			"key" => $this->getKey(),
			"value" => $this->getValue()
		);
	}
	
	/**
	 * Creates or updates a preference for a given user.
	 * 
	 * @param User $user The user to set the preference for
	 * @param string $key	The key to set
	 * @param string $value The value to set
	 */
	public static function setPreference (User $user, $key, $value) {
		$dql = "SELECT up FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user AND ";
		$dql .= "up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		$query->setParameter("key", $key);
		
		try {
			$up = $query->getSingleResult();
		} catch (\Exception $e) {
			$up = new UserPreference();
			$up->setUser($user);
			$up->setKey($key);
			
			PartKeepr::getEM()->persist($up);
		}
		
		$up->setValue($value);
		
		PartKeepr::getEM()->flush();
		
		return $up;
	}
	
	/**
	 * Removes a specific setting for a specific user.
	 * 
	 * @param User $user	The user to delete the preference for
	 * @param string $key	The key to delete
	 */
	public static function deletePreference (User $user, $key) {
		$dql = "DELETE FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user AND ";
		$dql .= "up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		$query->setParameter("key", $key);
		
		$query->execute();
	}
	
}