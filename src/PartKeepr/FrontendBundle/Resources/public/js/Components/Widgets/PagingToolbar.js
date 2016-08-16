Ext.define("PartKeepr.PagingToolbar", {
    extend: "Ext.toolbar.Paging",

    grid: null,

    getPagingItems: function ()
    {
        var items = this.callParent(arguments);

        items.push(Ext.create("PartKeepr.Exporter.GridExporterButton", {
            itemId: 'export',
            tooltip: i18n("Export"),
            iconCls: "fugue-icon application-export",
            disabled: this.store.isLoading()
        }));

        items.push(Ext.create({
            itemId: 'filter',
            xtype: 'button',
            iconCls: 'fugue-icon funnel',
            tooltip: i18n("Reset Filter"),
            hidden: true, handler: function ()
            {
                this.store.getFilters().removeAll();
                this.store.currentPage = 1;
                this.store.load({start: 0});

            },
            scope: this
        }));

        return items;
    }
});
