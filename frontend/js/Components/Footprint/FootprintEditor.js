Ext.define('PartDB2.FootprintEditor', {
	extend: 'PartDB2.Editor',
	alias: 'widget.FootprintEditor',
	items: [{
		xtype: 'textfield',
		name: 'footprint',
		fieldLabel: i18n("Footprint")
	}],
	saveText: i18n("Save Footprint"),
	model: 'PartDB2.Footprint'
});