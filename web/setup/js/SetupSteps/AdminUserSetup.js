/**
 * Creates the administrative user
 */
Ext.define('PartKeeprSetup.AdminUserSetup', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'createUser',
    name: "Database",
    message: "Setting up the admin user",
});
