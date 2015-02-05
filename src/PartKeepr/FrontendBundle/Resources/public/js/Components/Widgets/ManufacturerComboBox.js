Ext.define("PartKeepr.ManufacturerComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.ManufacturerComboBox',
    initComponent: function () {
		this.store = PartKeepr.getApplication().getManufacturerStore();
		this.callParent();
    }
});
