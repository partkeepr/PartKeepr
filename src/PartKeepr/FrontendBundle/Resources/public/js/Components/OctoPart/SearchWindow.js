Ext.define("PartKeepr.Components.OctoPart.SearchWindow", {
    extend: "Ext.window.Window",
    title: i18n("Octopart Search"),
    iconCls: "partkeepr-icon octopart",
    width: 750,
    height: 300,
    layout: 'fit',
    modal: true,
    items: [
        {
            xtype: "octopartSearchPanel",
            itemId: 'octopartSearchPanel'
        }
    ],
    initComponent: function ()
    {
        this.callParent(arguments);
        this.down("#octopartSearchPanel").on("refreshData", function ()
        {
            this.fireEvent("refreshData");
        }, this);
    },
    startSearch: function (query)
    {
        this.down("#octopartSearchPanel").startSearch(query);
    },
    setPart: function (part)
    {
        this.down("#octopartSearchPanel").setPart(part);
    }
});
