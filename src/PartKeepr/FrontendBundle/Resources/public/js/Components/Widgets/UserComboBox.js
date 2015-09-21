Ext.define("PartKeepr.UserComboBox", {
    extend: "PartKeepr.ReloadableComboBox",
    alias: 'widget.UserComboBox',
    displayField: "username",

    initComponent: function ()
    {
        this.store = PartKeepr.getApplication().getUserStore();
        this.callParent();
    }
});
