/**
 * A minimalistic PHP check to make sure PHP is installed on the server and activated as PHP module.
 */
Ext.define('PartKeeprSetup.PHPSettingsTest', {
	extend: 'PartKeeprSetup.BaseSetupTest',
	url: 'tests/check-php-settings.php',
	name: "PHP",
	message: "Testing for correct PHP settings"
});