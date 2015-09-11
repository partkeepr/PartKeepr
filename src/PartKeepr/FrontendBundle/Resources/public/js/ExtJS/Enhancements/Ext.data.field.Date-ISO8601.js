/**
 * Overrides the Date field to return the date in ISO 8601 format by default
 */
Ext.define("PartKeepr.data.field.Date", {
    override: "Ext.data.field.Date",

    serialize: function (value)
    {
        return value.toISOString();
    }
});
