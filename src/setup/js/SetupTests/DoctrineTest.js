/**
 * Tests is doctrine is installed correctly on the server
 */
Ext.define('PartKeeprSetup.DoctrineTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check-doctrine.php',
	name: "PHP",
	message: "Testing for Doctrine ORM"
});