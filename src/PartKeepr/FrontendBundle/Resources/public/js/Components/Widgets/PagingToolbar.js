Ext.define("PartKeepr.PagingToolbar", {
    extend: "Ext.toolbar.Paging",

    grid: null,

    getPagingItems: function () {
        var items = this.callParent(arguments);

        items.push({
            itemId: 'export',
            tooltip: i18n("Export"),
            iconCls: "fugue-icon application-export",
            disabled: this.store.isLoading(),
            handler: this.doExport,
            scope: this
        });
        return items;
    },
    doExport: function ()
    {
        var j = Ext.create("Ext.window.Window", {
            items: Ext.create("PartKeepr.Exporter.Exporter", {
                model: this.store.getModel()
            }),
            title: i18n("Export"),
            width: "80%",
            height: "80%",
            layout: 'fit',
            maximizable: true,
            closeAction: 'destroy'

        });
        j.show();

    }
});
