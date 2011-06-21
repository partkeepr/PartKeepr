Ext.define('PartKeepr.DistributorEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.DistributorEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Distributor")
	},{
		xtype: 'textarea',
		name: 'address',
		fieldLabel: i18n("Address")
	},{
		xtype: 'textfield',
		name: 'url',
		fieldLabel: i18n("Website")
	},{
		xtype: 'textfield',
		name: 'email',
		fieldLabel: i18n("Email")
	},{
		xtype: 'textfield',
		name: 'phone',
		fieldLabel: i18n("Phone")
	},{
		xtype: 'textfield',
		name: 'fax',
		fieldLabel: i18n("Fax")
	},{
		xtype: 'textarea',
		name: 'comment',
		fieldLabel: i18n("Comment")
	}],
	saveText: i18n("Save Distributor")
});
