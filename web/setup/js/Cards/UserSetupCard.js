/**
 * This card creates the user
 */
Ext.define('PartKeeprSetup.UserSetupCard', {
    extend: 'PartKeeprSetup.AbstractTestCard',

    breadCrumbTitle: 'Setup (2/2)',
    rerunTestText: "Re-run setup",
    /**
     * Sets up the tests
     */
    setupTests: function ()
    {
        this.tests.push(new PartKeeprSetup.AdminUserSetup());
        this.tests.push(new PartKeeprSetup.ConfigSetup());
        this.tests.push(new PartKeeprSetup.FileMigrationSetup());
        this.tests.push(new PartKeeprSetup.WarmupCacheSetup());
    }
});
