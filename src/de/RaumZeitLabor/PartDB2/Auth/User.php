<?php
namespace de\RaumZeitLabor\PartDB2\Auth;
declare(encoding = 'UTF-8');

/** @Entity @Table(name="users") */

class User {
	/** @Id @Column(length=50) */
	private $username;
	
	/** @Column(length=32) */
	private $password;
	
	public function __construct ($username = null, $password = null) {
		if ($username !== null) {
			$this->setUsername($username);
		}
		
		if ($password !== null) {
			$this->setPassword($password);
		}
	}
	/**
	 * Sets the username.
	 * 
	 * Forces the username to have
	 * lowercase a-z characters. 
	 * 
	 * Replaces space with an underscore.
	 * 
	 * @param string $username
	 * @return nothing
	 */
	public function setUsername ($username) {
		$username = strtolower($username);
		
		
		preg_match_all("/[a-z\s]+/", $username, $out);
		$username = implode('', $out[0]);
		
		$username = str_replace(" ", "_", $username);
		
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
	 * Sets the user's password. Automatically
	 * applies md5 hashing.
	 * 
	 * @param string $password
	 */
	public function setPassword ($password) {
		$this->setHashedPassword(md5($password));
	}
	
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
	
	public function comparePassword ($password) {
		return $this->compareHashedPassword(md5($password));
	}
	
	public function compareHashedPassword ($hashedPassword) {
		if ($hashedPassword == $this->password) {
			return true;
		} else {
			return false;
		}
	}
	
}
?>