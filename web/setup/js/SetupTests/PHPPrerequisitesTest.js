/**
 * Tests if the most important PHP prerequisites are met (e.g. json_encode).
 */
Ext.define('PartKeeprSetup.PHPPrerequisitesTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check-php-prerequisites.php',
	name: "PHP",
	message: "Testing for PHP prerequisites"
});
