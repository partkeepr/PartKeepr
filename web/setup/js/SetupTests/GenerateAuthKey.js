/**
 * Tests if the most important PHP prerequisites are met (e.g. json_encode).
 */
Ext.define('PartKeeprSetup.GenerateAuthKey', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'generateAuthKey',
    name: "PHP",
    message: "Generating setup auth key"
});
