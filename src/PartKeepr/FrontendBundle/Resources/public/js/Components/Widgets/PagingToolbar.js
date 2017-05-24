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
            overflowText: i18n("Export"),
            disabled: this.store.isLoading()
        }));

        items.push(Ext.create("PartKeepr.Importer.GridImporterButton", {
            itemId: 'import',
            tooltip: i18n("Import"),
            overflowText: i18n("Import"),
            iconCls: "fugue-icon database-import",
            disabled: this.store.isLoading()
        }));

        items.push({
            itemId: 'addFilter',
            xtype: 'button',
            tooltip: i18n("Add Filter"),
            overflowText: i18n("Add Filter"),
            iconCls: "fugue-icon funnel--plus",
            disabled: this.store.isLoading(),
            handler: this.onAddFilterClick,
            scope: this
        });

        items.push(Ext.create("PartKeepr.Components.Grid.GridPresetButton", {
            grid: this.grid
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
    },
    onAddFilterClick: function ()
    {
        this.addFilterWindow = Ext.create("PartKeepr.Widgets.FilterExpressionWindow", {

            sourceModel: this.getStore().getModel(),
            listeners: {
                "applyfilter": this.onAddFilter,
                scope: this
            }
        });
        this.addFilterWindow.show();
    },
    onAddFilter: function (filter)
    {
        this.getStore().addFilter(filter);
        this.addFilterWindow.close();
    }
});
