<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;
declare(encoding = 'UTF-8');

include("../src/backend/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\Auth\User;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Util\SerializableException;
use de\RaumZeitLabor\PartKeepr\Auth\UserManager;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;
use de\RaumZeitLabor\PartKeepr\Service\ServiceManager;

PartKeepr::initialize();

/*class User {
	public $username;
	public $password;
}*/

//class Service {
	
//}
/*class UserService extends Service {
	
	public function createUser (User $user) {
		return new SoapVar($user, SOAP_ENC_OBJECT, "", "http://www.w3.org/2001/XMLSchema", "", "http://www.w3.org/2001/XMLSchema");
	}
}*/

/*$server = new SoapServer("test.wsdl", array("cache_wsdl" => WSDL_CACHE_NONE, "classmap" => array("User" => "User")));
$server->setClass("UserService");
$server->handle();*/








$callStruct = array(
	"service" 	=> "de.RaumZeitLabor.PartKeepr.Auth.AuthManagerService",
	"call"		=> "login",
	"parameters"	=> array(
		"username" => "2test",
		"password" => "098f6bcd4621d373cade4e832627b4f6"
					)
);

ServiceManager::call($callStruct);





PartKeepr::getEM()->flush();
?>