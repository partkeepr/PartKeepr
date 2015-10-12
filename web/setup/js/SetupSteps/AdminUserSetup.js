/**
 * Creates the administrative user
 */
Ext.define('PartKeeprSetup.AdminUserSetup', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'createUser',
    name: "Database",
    message: "Setting up the admin user",

    onBeforeRunTest: function () {
        this.callParent(arguments);

        if (PartKeeprSetup.getApplication().getSetupConfig().existingConfig) {
            this.skip = true;
        }
    }
});
