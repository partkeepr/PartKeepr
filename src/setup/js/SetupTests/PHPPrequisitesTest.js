/**
 * Tests if the most important PHP prequisites are met (e.g. json_encode).
 */
Ext.define('PartKeeprSetup.PHPPrequisitesTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'check-php-prequisites.php',
	name: "PHP",
	message: "Testing for PHP prequisites"
});