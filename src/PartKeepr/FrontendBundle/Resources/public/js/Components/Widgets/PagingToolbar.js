Ext.define("PartKeepr.PagingToolbar", {
    extend: "Ext.toolbar.Paging",

    grid: null,

    getPagingItems: function () {
        var items = this.callParent(arguments);

        items.push(Ext.create("PartKeepr.Exporter.GridExporterButton", {
            itemId: 'export',
            tooltip: i18n("Export"),
            iconCls: "fugue-icon application-export",
            disabled: this.store.isLoading()
        }));
        return items;
    }
});
