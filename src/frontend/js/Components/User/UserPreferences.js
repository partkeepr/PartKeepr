Ext.define('PartKeepr.UserPreferencePanel', {
	extend: 'Ext.tab.Panel',
	title: i18n("User Preferences"),
	tabPosition: 'bottom',
	//bodyStyle: 'background:#DBDBDB;padding: 10px;',
	initComponent: function () {
		
		this.passwordChangePanel = Ext.create("PartKeepr.UserPasswordChangePanel");
		this.tipsPanel = Ext.create("PartKeepr.TipOfTheDayPreferencesPanel");
        this.stockPanel = Ext.create("PartKeepr.StockPreferencesPanel");
		this.items = [ this.tipsPanel, this.passwordChangePanel, this.stockPanel ];
		this.callParent();
	}
});