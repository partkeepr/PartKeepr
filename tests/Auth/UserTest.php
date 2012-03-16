<?php 
namespace de\RaumZeitLabor\PartKeepr\Tests\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\User\User;

class UserTest extends \PHPUnit_Framework_TestCase {
	public function testBasics () {
		$user = new User;
		
		$user->setUsername("felicitus");
		$this->assertEquals($user->getUsername(), "felicitus");
		
		$user->setUsername("Timo A. Hummel");
		
		$this->assertEquals($user->getUsername(), "timo_a_hummel");
		
		$user->setPassword("foobar");
		$hashedPassword = "3858f62230ac3c915f300c664312c63f";
		
		$this->assertEquals($user->comparePassword("foobar"), true, "Error comparing passwords: PasswordTest01");
		$this->assertEquals($user->compareHashedPassword($hashedPassword), true, "Error comparing passwords: PasswordTest02");

		$user->setHashedPassword($hashedPassword);
		$this->assertEquals($user->comparePassword("foobar"), true, "Error comparing passwords: PasswordTest03");
		$this->assertEquals($user->compareHashedPassword($hashedPassword), true, "Error comparing passwords: PasswordTest04");
	}
}
