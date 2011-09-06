Ext.define('PartKeepr.UserPreferencePanel', {
	extend: 'Ext.tab.Panel',
	title: i18n("User Preferences"),
	tabPosition: 'bottom',
	//bodyStyle: 'background:#DBDBDB;padding: 10px;',
	initComponent: function () {
		
		this.passwordChangePanel = Ext.create("PartKeepr.UserPasswordChangePanel");
		
		this.items = [ this.passwordChangePanel ];
		this.callParent();
	}
});