Ext.define('PartKeepr.FootprintEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.FootprintEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Footprint")
	}],
	saveText: i18n("Save Footprint"),
	model: 'PartKeepr.Footprint'
});