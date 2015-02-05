Ext.define("PartKeepr.UserComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.UserComboBox',
    initComponent: function () {
		this.store = PartKeepr.getApplication().getUserStore();
		this.callParent();
    }
});
