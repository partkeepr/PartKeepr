Ext.define("PartKeepr.Actions.LogoutAction", {
    extend: "PartKeepr.Actions.BaseAction",

    execute: function ()
    {
        PartKeepr.getApplication().getLoginManager().logout();
    },
    statics: {
        iconCls: 'web-icon disconnect',
        title: i18n('Disconnect'),
        closable: true,
        menuPath: [{text: i18n("System")}]
    }
});
