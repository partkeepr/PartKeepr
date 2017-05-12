Ext.define('PartKeepr.Components.UserPreferences.Preferences.TipOfTheDayConfiguration', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {
        this.displayTipsOnLoginCheckbox = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Display tips on login")
        });

        if (PartKeepr.getApplication().getUserPreference("partkeepr.tipoftheday.showtips") === false) {
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
    },
    onSave: function ()
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.tipoftheday.showtips",
            this.displayTipsOnLoginCheckbox.getValue());
    },
    statics: {
        iconCls: 'fugue-icon light-bulb',
        title: i18n('Tip of the Day'),
        menuPath: [{iconCls: 'fugue-icon ui-scroll-pane-image', text: i18n("User Interface")}]
    }
});
