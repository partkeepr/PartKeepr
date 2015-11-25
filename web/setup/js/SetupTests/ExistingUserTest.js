/**
 * Tests if an user already exists
 */
Ext.define('PartKeeprSetup.ExistingUserTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'testExistingUsers',
    name: "Database",
    message: "Checking for existing users",

    onAfterRunTest: function (data)
    {
        var config = PartKeeprSetup.getApplication().getSetupConfig();

        config.existingUsers = data.totalUsers;
        config.legacyUsers = data.legacyUsers;

        if (config.existingUsers > 0) {
            config.createUser = false;
        } else {
            config.createUser = true;
        }
    }
});
