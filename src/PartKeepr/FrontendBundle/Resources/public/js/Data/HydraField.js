/**
 * Adds the config field "byReference" to a field.
 *
 * byReference tells the system not to serialize the whole item but only its reference.
 */
Ext.define('PartKeepr.data.HydraField', {
    override: "Ext.data.field.Field",

    byReference: false,

    constructor: function (config)
    {
        if (config.byReference) {
            this.byReference = config.byReference;
        } else {
            this.byReference = false;
        }
        this.callParent(arguments);
    }
});
