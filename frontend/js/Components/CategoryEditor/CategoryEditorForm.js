Ext.define('PartKeepr.CategoryEditorForm', {
	extend: 'Ext.form.Panel',
	layout: 'anchor',
	border: false,
	frame: false,
	bodyStyle: 'background:#DFE8F6;padding: 10px;',
	items: [{
		xtype: 'textfield',
		name: 'name',
		anchor: '100%',
		fieldLabel: i18n("Name")
	},{
		xtype: 'textarea',
		name: 'description',
		anchor: '100%',
		fieldLabel: i18n("Description")
	}]
});