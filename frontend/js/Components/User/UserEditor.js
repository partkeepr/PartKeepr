Ext.define('PartKeepr.UserEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.UserEditor',
	items: [{
		xtype: 'textfield',
		name: 'username',
		fieldLabel: i18n("User")
	},{
		xtype: 'textfield',
		inputType: "password",
		name: 'password',
		fieldLabel: i18n("Password")
	}],
	saveText: i18n("Save User"),
	model: 'PartKeepr.User'
});
