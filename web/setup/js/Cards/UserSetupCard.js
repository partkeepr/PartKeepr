/**
 * This card creates the user
 */
Ext.define('PartKeeprSetup.UserSetupCard', {
    extend: 'PartKeeprSetup.AbstractTestCard',

    cardMessage: "Admin user is being created",
    breadCrumbTitle: 'User Setup',
    rerunTestText: "Re-run setup",
    /**
     * Sets up the tests
     */
    setupTests: function ()
    {
        this.tests.push(new PartKeeprSetup.AdminUserSetup());
        this.tests.push(new PartKeeprSetup.ConfigSetup());
        this.tests.push(new PartKeeprSetup.WarmupCacheSetup());
    }
});
