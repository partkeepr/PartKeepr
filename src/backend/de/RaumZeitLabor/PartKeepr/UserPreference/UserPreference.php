<?php
namespace de\RaumZeitLabor\PartKeepr\UserPreference;

use de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Util\BaseEntity,
	de\RaumZeitLabor\PartKeepr\UserPreference\Exceptions\UserPreferenceNotFoundException,
	de\RaumZeitLabor\PartKeepr\Util\Exceptions\EntityNotPersistantException,
	Doctrine\ORM\NoResultException;

/**
 * Represents a user preference entry.
 * 
 * User preferences are a simple key => value mechanism, where the developer can
 * specify the key and value himself.
 * 
 * Note that values are stored internally as serialized PHP values to keep their type.
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
			"value" => $this->getValue(),
			"user_id" => $this->getUser()->getId()
		);
	}
	
	/**
	 * Creates or updates a preference for a given user.
	 * 
	 * @param User $user The user to set the preference for
	 * @param string $key	The key to set
	 * @param string $value The value to set
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public static function setPreference (User $user, $key, $value) {
		if (!PartKeepr::getEM()->contains($user)) {
			throw new EntityNotPersistantException();
		}
		
		$dql = "SELECT up FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user AND ";
		$dql .= "up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		$query->setParameter("key", $key);
		
		try {
			$userPreference = $query->getSingleResult();
		} catch (\Exception $e) {
			$userPreference = new UserPreference();
			$userPreference->setUser($user);
			$userPreference->setKey($key);
			
			PartKeepr::getEM()->persist($userPreference);
		}
		
		$userPreference->setValue($value);
		
		PartKeepr::getEM()->flush();
		
		return $userPreference;
	}
	
	/**
	 * Returns a specific preference value for the given user
	 * 
	 * @param User $user 	The user to retrieve the preference for
	 * @param string $key	The preference key to retrieve
	 * @return string		The preference string
	 * @throws UserPreferenceNotFoundException	Thrown if the preference key was not found
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public static function getPreferenceValue (User $user, $key) {
		$userPreference = self::getPreference($user, $key);
		
		return $userPreference->getValue();
	}
	
	/**
	 * Returns a specific preference object for the given user
	 *
	 * @param User $user		The user to retrieve the preference for
	 * @param string $key		The preference key to retrieve
	 * @return UserPreference	The preference object
	 * @throws UserPreferenceNotFoundException	Thrown if the preference key was not found
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public static function getPreference (User $user, $key) {
		if (!PartKeepr::getEM()->contains($user)) {
			throw new EntityNotPersistantException();
		}
		
		$dql = "SELECT up FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user AND ";
		$dql .= "up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		$query->setParameter("key", $key);
		
		try {
			$up = $query->getSingleResult();
			return $up;
		} catch (NoResultException $e) {
			throw new UserPreferenceNotFoundException($user, $key);
		}
	}
	
	/**
	 * Removes a specific setting for a specific user.
	 * 
	 * @param User $user	The user to delete the preference for
	 * @param string $key	The key to delete
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public static function deletePreference (User $user, $key) {
		if (!PartKeepr::getEM()->contains($user)) {
			throw new EntityNotPersistantException();
		}
		
		$dql = "DELETE FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user AND ";
		$dql .= "up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		$query->setParameter("key", $key);
		
		$query->execute();
	}
	
}