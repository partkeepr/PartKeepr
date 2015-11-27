/**
 * This card tests the database connectivity for the MySQL database.
 *
 * Basically this submits all connection settings to a special PHP script,
 * which then attempts to establish the database connection.
 */
Ext.define('PartKeeprSetup.DatabaseSetupCard', {
    extend: 'PartKeeprSetup.AbstractTestCard',

    cardMessage: "PartKeepr is now being set-up.",
    breadCrumbTitle: 'Setup (1/2)',
    rerunTestText: "Re-run setup",
    /**
     * Sets up the tests
     */
    setupTests: function ()
    {
        this.tests.push(new PartKeeprSetup.DatabaseConnectivityTest());
        this.tests.push(new PartKeeprSetup.SchemaSetup());
        this.tests.push(new PartKeeprSetup.SchemaMigration());
        this.tests.push(new PartKeeprSetup.PartUnitSetup());
        this.tests.push(new PartKeeprSetup.FootprintSetup());
        this.tests.push(new PartKeeprSetup.SiPrefixSetup());
        this.tests.push(new PartKeeprSetup.UnitSetup());
        this.tests.push(new PartKeeprSetup.ManufacturerSetup());
        this.tests.push(new PartKeeprSetup.ExistingUserTest());
    }
});
