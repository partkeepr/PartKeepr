/**
 * Tests if the most important PHP prerequisites are met (e.g. json_encode).
 */
Ext.define('PartKeeprSetup.ExistingConfigurationTest', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'parseExistingConfig',
    name: "PHP",
    message: "Retrieving existing configuration",

    onAfterRunTest: function (data) {
        if (data.config) {
            var config = PartKeeprSetup.getApplication().getSetupConfig();

            Ext.apply(config, data.config);
            config.existingConfig = true;
        }
    }
});
