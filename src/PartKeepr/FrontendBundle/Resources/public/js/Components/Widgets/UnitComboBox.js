Ext.define("PartKeepr.UnitComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.UnitComboBox',
    forceSelection: true,
    allowBlank: true,
    emptyText: i18n("Unit"),
    initComponent: function () {
		this.store = PartKeepr.getApplication().getUnitStore();
		this.callParent();
    }
});
