Ext.define('PartKeepr.CategoryEditorForm', {
	extend: 'Ext.form.Panel',
	layout: 'anchor',
	border: false,
	frame: false,
	bodyStyle: 'background:#DBDBDB;padding: 10px;',
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