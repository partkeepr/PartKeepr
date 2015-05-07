<?php
namespace PartKeepr\User;

use PartKeepr\UserPreference\UserPreference;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\Table;

/** @ORM\Entity @ORM\Table(name="PartKeeprUser") */
class User extends BaseEntity implements Serializable, Deserializable {
	/** @ORM\Column(length=50,unique=true) */
	private $username;
	
	/** @ORM\Column(length=32) */
	private $password;
	
	/** @ORM\Column(type="boolean") */
	private $admin;
	
	/** @ORM\Column(type="datetime",nullable=true) */
	private $lastSeen;
	
	/**
	 * Creates a new user object.
	 * 
	 * @param string $username		The username to set (optional)
	 * @param string $password		The password to set (optional)
	 */
	public function __construct ($username = null, $password = null) {
		if ($username !== null) {
			$this->setUsername($username);
		}
		
		if ($password !== null) {
			$this->setPassword($password);
		}
		
		$this->setAdmin(false);
	}
	
	/**
	 * Sets the username.
	 *
	 * @param string $username	The username to set.
	 * @return nothing
	 */
	public function setUsername ($username) {
		$this->username = $username;
	}
	
	/**
	 * Sets the raw username, without replacing any special chars.
	 * 
	 * This method should only be used for building a temporary user
	 * for login checks.
	 *
	 * @param string $username	The raw username
	 * @return nothing
	 */
	public function setRawUsername ($username) {
		$this->username = $username;
	}
	
	/**
	 * Returns the username.
	 * @param none
	 * @return string The username
	 */
	public function getUsername () {
		return $this->username;
	}
	
	/**
	 * Sets the admin flag
	 * @param boolean $bAdmin True if the user is an admin, false otherwise
	 */
	public function setAdmin ($bAdmin) {
		$this->admin = (boolean)$bAdmin;
	}
	
	/**
	 * Returns the admin flag
	 * @return boolean True if the user is an admin
	 */
	public function isAdmin () {
		return $this->admin;
	}
	
	/**
	 * Sets the user's password. Automatically
	 * applies md5 hashing.
	 * 
	 * @param string $password
	 */
	public function setPassword ($password) {
		$this->setHashedPassword(md5($password));
	}
	
	/**
	 * Returns the user's md5-hashed password.
	 * @param none
	 * @return string The md5-hashed password
	 */
	public function getHashedPassword () {
		return $this->password;
	}
	
	/**
	 * Sets the user's password. Expects a hash
	 * and does not apply md5 hasing.
	 * 
	 * @param string $hashedPassword
	 */
	public function setHashedPassword ($hashedPassword) {
		$this->password = $hashedPassword;
	}
	
	/**
	 * Compares the given un-hashed password with the
	 * object's hashed password.
	 * 
	 * 
	 * @param string	$password	The unhashed password
	 * @return boolean	true if the passwords match, false otherwise
	 */
	public function comparePassword ($password) {
		return $this->compareHashedPassword(md5($password));
	}
	
	/**
	 * Compares the given hashed password with the object's
	 * hashed password.
	 *
	 * @param string	$hashedPassword	The md5-hashed password
	 * @return boolean	true if the passwords match, false otherwise
	 */
	public function compareHashedPassword ($hashedPassword) {
		if ($hashedPassword == $this->password) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Updates the last seen field to the current time.
	 */
	public function updateSeen() {
		$this->lastSeen = new \DateTime("now");
	}
	
	/**
	 * Retrieve the last seen flag for a user.
	 * @return \DateTime
	 */
	public function getLastSeen() {
		return $this->lastSeen;
	}
	
	/**
	 * Serializes the user object and returns it as array, suitable
	 * to process via json_encode.
	 * @param none
	 * @return array An array containing the object information
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"username" => $this->getUsername()
		);
	}
	
	/**
	 * Deserializes the user
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "username":
					$this->setUsername($value);
					break;
				case "password":
					if ($value !== "") {
						$this->setPassword($value);
					}
					break;
			}
		}
	}

	/**
	 * Sets a user preference
	 * 
	 * @param string $preferenceKey 	The preference key
	 * @param string $preferenceValue 	The preference value
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public function setPreference ($preferenceKey, $preferenceValue) {
		return UserPreference::setPreference($this, $preferenceKey, $preferenceValue);
	}
	
	/**
	 * Returns a given preference object
	 * 
	 * @param string $preferenceKey The preference key
	 * @return UserPreference The user preference object
	 * @throws UserPreferenceNotFoundException If the preference key was not found
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public function getPreference ($preferenceKey) {
		return UserPreference::getPreference($this, $preferenceKey);
	}
	
	/**
	 * Returns a given preference value
	 * 
	 * @param string $preferenceKey The preference key
	 * @return UserPreference The user preference object
	 * @throws UserPreferenceNotFoundException If the preference key was not found
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public function getPreferenceValue ($preferenceKey) {
		return UserPreference::getPreferenceValue($this, $preferenceKey);
	}
	
	/**
	 * Deletes the given preference
	 *
	 * @param string $preferenceKey The preference key
	 * @return UserPreference The user preference object
	 * @throws UserPreferenceNotFoundException If the preference key was not found
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public function deletePreference ($preferenceKey) {
		UserPreference::deletePreference($this, $preferenceKey);
	}
	
	/**
	 * Returns all user preferences for this user
	 * 
	 * @param none
	 * @return Array An array of UserPreference objects
	 * @throws EntityNotPersistantException		Thrown if the entity is not persistant
	 */
	public function getPreferences () {
		return UserPreference::getPreferences($this);
	}
	/**
	 * Loads a user by name.
	 * 
	 * @param $username string The username to query
	 * @return User A user object
	 * @throws Doctrine\ORM\NoResultException If no user was found
	 */
	public static function loadByName ($username) {
		$dql = "SELECT u FROM PartKeepr\User\User u WHERE u.username = :username";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("username", $username);
		
		return $query->getSingleResult();
	}
}