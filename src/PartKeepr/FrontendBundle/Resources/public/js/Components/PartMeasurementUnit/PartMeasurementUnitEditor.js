Ext.define('PartKeepr.PartMeasurementUnitEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.PartMeasurementUnitEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Measurement Unit Name")
	},{
		xtype: 'textfield',
		name: 'shortName',
		fieldLabel: i18n("Short Name")
	}],
	saveText: i18n("Save Part Measurement Unit")
});
