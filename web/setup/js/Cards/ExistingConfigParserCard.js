/**
 * This card runs the prequisites test to make sure basic things like PHP and Doctrine are installed and configured.
 */
Ext.define('PartKeeprSetup.ExistingConfigParserCard', {
    extend: 'PartKeeprSetup.AbstractTestCard',

    cardMessage: "Setup now checks if a configuration exists",
    breadCrumbTitle: 'Existing Configuration',
    /**
     * Sets up all tests
     */
    setupTests: function ()
    {
        this.tests.push(new PartKeeprSetup.ExistingConfigurationTest());
    }
});
