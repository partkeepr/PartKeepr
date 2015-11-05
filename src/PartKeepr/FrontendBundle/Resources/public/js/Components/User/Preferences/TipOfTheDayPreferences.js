Ext.define('PartKeepr.TipOfTheDayPreferencesPanel', {
    extend: 'Ext.form.FormPanel',
    title: i18n("Tip of the Day"),
    bodyStyle: 'background:#DBDBDB;padding: 10px;',
    initComponent: function ()
    {
        this.displayTipsOnLoginCheckbox = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Display tips on login"),
            handler: Ext.bind(this.showTipsHandler, this)
        });

        if (PartKeepr.getApplication().getUserPreference("partkeepr.tipoftheday.showtips") == false) {
            this.displayTipsOnLoginCheckbox.setValue(false);
        } else {
            this.displayTipsOnLoginCheckbox.setValue(true);
        }


        this.resetTipsButton = Ext.create("Ext.button.Button", {
            text: i18n("Mark all tips unread"),
            handler: this.onMarkAllTipsUnreadClick,
            scope: this
        });

        this.items = [
            this.displayTipsOnLoginCheckbox,
            this.resetTipsButton
        ];

        this.callParent();
    },
    /**
     * Handler when the "show tips" checkbox was clicked.
     */
    showTipsHandler: function (checkbox, checked)
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.tipoftheday.showtips", checked);
    },
    /**
     * Marks all tips as unread
     */
    onMarkAllTipsUnreadClick: function ()
    {
        PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay.callPostCollectionAction("markAllTipsAsUnread", {}, function ()
            {
                var msg = i18n("All tips have been marked as unread");
                Ext.Msg.alert(msg, msg);
            }
        );
    }
});
