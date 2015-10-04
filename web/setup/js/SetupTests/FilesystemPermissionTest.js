/**
 * Tests if the filesystem permissions are OK
 */
Ext.define('PartKeeprSetup.FilesystemPermissionTest', {
	extend: 'PartKeeprSetup.AbstractTest',
	url: 'tests/check-permissions.php',
	name: "Filesystem",
	message: "Testing for proper filesystem permissions"
});