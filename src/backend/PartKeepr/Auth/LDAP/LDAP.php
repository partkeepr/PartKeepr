<?php
namespace PartKeepr\Auth\LDAP;

use PartKeepr\PartKeepr,
	PartKeepr\Util\Configuration as PartKeeprConfiguration;

class LDAP {
	private $connection;

	public function __construct () {
		$this->connection = ldap_connect( PartKeeprConfiguration::getOption("partkeepr.ldap.host"), PartKeeprConfiguration::getOption("partkeepr.ldap.port") );

		// Set some ldap options for talking to
		ldap_set_option($this->connection, LDAP_OPT_PROTOCOL_VERSION, 3);
		ldap_set_option($this->connection, LDAP_OPT_REFERRALS, 0);
	}

	public function authenticate ($username, $password) {
		if ($this->connection) {

			$ldapUsername = $username.'@'.PartKeeprConfiguration::getOption("partkeepr.ldap.domain");

			// Don't allow empty passwords
			if (!$password == "") {

				// Binding to ldap server
	        	$ldapBind = @ldap_bind($this->connection, $ldapUsername, $password);
	        	
	        	return $ldapBind;
	        } else {
	        	return false;
	        }
		}

	}

}