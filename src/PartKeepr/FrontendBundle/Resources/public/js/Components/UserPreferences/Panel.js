Ext.define('PartKeepr.Components.UserPreferences.Panel', {
    extend: 'PartKeepr.Components.Preferences.Panel',
    title: i18n("System Preferences"),

    getSettingClasses: function ()
    {
        return [
            "PartKeepr.Components.UserPreferences.Preferences.TipOfTheDayConfiguration",
            "PartKeepr.Components.UserPreferences.Preferences.FormattingConfiguration",
            "PartKeepr.Components.UserPreferences.Preferences.DisplayConfiguration",
            "PartKeepr.Components.UserPreferences.Preferences.StockConfiguration",
            "PartKeepr.Components.UserPreferences.Preferences.PasswordConfiguration",
            "PartKeepr.Components.UserPreferences.Preferences.OctoPartConfiguration"
        ];
    },
    statics: {
        iconCls: 'fugue-icon gear',
        title: i18n('User Preferences'),
        closable: true,
        menuPath: [{text: i18n("System")}]
    }
});
