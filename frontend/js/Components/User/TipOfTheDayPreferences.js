Ext.define('PartKeepr.TipOfTheDayPreferencesPanel', {
	extend: 'Ext.form.FormPanel',
	title: i18n("Tip of the Day"),
        bodyStyle: 'background:#DBDBDB;padding: 10px;',
        initComponent: function () {
            this.displayTipsOnLoginCheckbox = Ext.create("Ext.form.field.Checkbox", {
                boxLabel: i18n("Display tips on login"),
                handler: Ext.bind(this.showTipsHandler, this)
            });
            
            this.resetTipsButton = Ext.create("Ext.button.Button", {
                text: i18n("Mark Tips at ")
            });
            
            this.items = [ this.displayTipsOnLoginCheckbox,
                           this.resetTipsButton ];
                   
            this.callParent();
        },
        /**
	 * Handler when the "show tips" checkbox was clicked. 
	 */
	showTipsHandler: function (checkbox, checked) {
		PartKeepr.getApplication().setUserPreference("partkeepr.tipoftheday.showtips", checked);
	}
});
        