Ext.define('PartKeepr.UserPreferencePanel', {
	extend: 'Ext.tab.Panel',
	title: i18n("User Preferences"),
	tabPosition: 'bottom',
	//bodyStyle: 'background:#DBDBDB;padding: 10px;',
	initComponent: function () {
		
		this.passwordChangePanel = Ext.create("PartKeepr.UserPasswordChangePanel");
		this.tipsPanel = Ext.create("PartKeepr.TipOfTheDayPreferencesPanel");
		this.formattingPanel = Ext.create("PartKeepr.FormattingPreferencesPanel");
		this.categoryTreePanel = Ext.create("PartKeepr.CategoryTreePreferencesPanel");
		this.stockPanel = Ext.create("PartKeepr.StockPreferencesPanel");
		this.items = [ this.tipsPanel, this.formattingPanel, this.categoryTreePanel, this.passwordChangePanel, this.stockPanel ];
		this.callParent();
	}
});

