Ext.define('PartDB2.UserEditor', {
	extend: 'PartDB2.Editor',
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
	model: 'PartDB2.User'
});
