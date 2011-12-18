/**
 * A minimalistic PHP check to make sure PHP is installed on the server and activated as PHP module.
 */
Ext.define('PartKeeprSetup.PHPPrequisitesTest', {
	extend: 'PartKeeprSetup.BaseSetupTest',
	url: 'check-php-prequisites.php',
	name: "PHP",
	message: "Testing for PHP prequisites"
});