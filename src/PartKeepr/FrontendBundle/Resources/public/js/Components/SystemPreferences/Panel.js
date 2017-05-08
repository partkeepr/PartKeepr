Ext.define('PartKeepr.Components.SystemPreferences.Panel', {
    extend: 'PartKeepr.Components.Preferences.Panel',
    title: i18n("System Preferences"),

    getSettingClasses: function () {
         return [
            "PartKeepr.Components.SystemPreferences.Preferences.FulltextSearch",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartFields",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartManufacturerFields",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartDistributorFields",
            "PartKeepr.Components.SystemPreferences.Preferences.BarcodeScannerConfiguration",
            "PartKeepr.Components.SystemPreferences.Preferences.ActionsConfiguration"
        ];
    },
    statics: {
        iconCls: 'fugue-icon gear',
        title: i18n('System Preferences'),
        closable: true,
        menuPath: [{text: i18n("System")}]
    }

});
