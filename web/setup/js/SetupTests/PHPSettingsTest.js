/**
 * Tests if the PHP configuration is OK.
 */
Ext.define('PartKeeprSetup.PHPSettingsTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check.php',
	name: "PHP",
	message: "Testing for correct PHP settings"
});
