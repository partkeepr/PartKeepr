/**
 * Tests is doctrine is installed correctly on the server
 */
Ext.define('PartKeeprSetup.TwigTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check-twig.php',
	name: "PHP",
	message: "Testing for the twig template engine"
});