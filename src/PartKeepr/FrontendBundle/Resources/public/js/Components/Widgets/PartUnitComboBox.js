Ext.define("PartKeepr.PartUnitComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.PartUnitComboBox',
    initComponent: function () {
		this.store = PartKeepr.getApplication().getPartUnitStore();
		this.callParent();
    }
});
