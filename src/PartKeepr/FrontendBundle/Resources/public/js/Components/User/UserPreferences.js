Ext.define('PartKeepr.UserPreferencePanel', {
    extend: 'Ext.tab.Panel',
    title: i18n("User Preferences"),
    tabPosition: 'bottom',
    //bodyStyle: 'background:#DBDBDB;padding: 10px;',
    initComponent: function ()
    {

        this.passwordChangePanel = Ext.create("PartKeepr.UserPasswordChangePanel");
        this.tipsPanel = Ext.create("PartKeepr.TipOfTheDayPreferencesPanel");
        this.formattingPanel = Ext.create("PartKeepr.FormattingPreferencesPanel");
        this.displayPreferencesPanel = Ext.create("PartKeepr.DisplayPreferencesPanel");
        this.stockPanel = Ext.create("PartKeepr.StockPreferencesPanel");
        this.items = [
            this.tipsPanel,
            this.formattingPanel,
            this.displayPreferencesPanel,
            this.passwordChangePanel,
            this.stockPanel
        ];

        if (PartKeepr.getApplication().getParameter("password_change") === false) {
            Ext.Array.remove(this.items, this.passwordChangePanel);
        }
        this.callParent();
    },
    statics: {
        iconCls: 'fugue-icon gear',
        title: i18n('User Preferences'),
        closable: true,
        menuPath: [{text: i18n("System")}]
    }

});

