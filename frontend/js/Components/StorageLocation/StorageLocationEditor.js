Ext.define('PartDB2.StorageLocationEditor', {
	extend: 'PartDB2.Editor',
	alias: 'widget.StorageLocationEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Storage Location")
	}],
	saveText: i18n("Save Storage Location"),
	model: 'PartDB2.StorageLocation'
});