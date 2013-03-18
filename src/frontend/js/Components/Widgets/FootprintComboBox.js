Ext.define("PartKeepr.FootprintComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.FootprintComboBox',
    initComponent: function () {
		this.store = PartKeepr.getApplication().getFootprintStore();
		this.callParent();
    }
});

