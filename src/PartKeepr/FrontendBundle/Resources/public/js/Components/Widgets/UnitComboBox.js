Ext.define("PartKeepr.UnitComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.UnitComboBox',
    initComponent: function () {
		this.store = PartKeepr.getApplication().getUnitStore();
		this.callParent();
    }
});
