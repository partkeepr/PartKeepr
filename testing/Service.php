<?php
namespace de\RaumZeitLabor\PartDB2\Tests;
declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

use de\RaumZeitLabor\PartDB2\Auth\User;
use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Util\SerializableException;
use de\RaumZeitLabor\PartDB2\Auth\UserManager;
use de\RaumZeitLabor\PartDB2\Session\SessionManager;
use de\RaumZeitLabor\PartDB2\Service\ServiceManager;

PartDB2::initialize();

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
	"service" 	=> "de.RaumZeitLabor.PartDB2.Auth.AuthManagerService",
	"call"		=> "login",
	"parameters"	=> array(
		"username" => "2test",
		"password" => "098f6bcd4621d373cade4e832627b4f6"
					)
);

ServiceManager::call($callStruct);





PartDB2::getEM()->flush();
?>