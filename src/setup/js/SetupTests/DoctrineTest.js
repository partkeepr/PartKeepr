/**
 * A minimalistic PHP check to make sure PHP is installed on the server and activated as PHP module.
 */
Ext.define('PartKeeprSetup.DoctrineTest', {
	extend: 'PartKeeprSetup.BaseSetupTest',
	url: 'tests/check-doctrine.php',
	name: "PHP",
	message: "Testing for Doctrine ORM"
});