Ext.define('PartKeepr.StorageLocationEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.StorageLocationEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Storage Location")
	}],
	saveText: i18n("Save Storage Location"),
	model: 'PartKeepr.StorageLocation'
});