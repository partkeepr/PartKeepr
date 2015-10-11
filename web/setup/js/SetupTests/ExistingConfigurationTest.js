/**
 * Tests if the most important PHP prerequisites are met (e.g. json_encode).
 */
Ext.define('PartKeeprSetup.ExistingConfigurationTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'parseExistingConfig',
    name: "PHP",
    message: "Retrieving existing configuration",

    onAfterRunTest: function (data) {
        var config = PartKeeprSetup.getApplication().getSetupConfig();

        Ext.apply(config, data.config);

        console.log(PartKeeprSetup.getApplication().getSetupConfig());

    }
});
