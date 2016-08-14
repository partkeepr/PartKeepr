Ext.define("PartKeepr.Grid.AppliedFiltersToolbar", {
    extend: "Ext.grid.Panel",
    store: {
        fields: ['name', 'filter']
    },
    hideHeaders: true,
    targetStore: null,

    initComponent: function ()
    {
        this.columns = [
            {
                dataIndex: "name",
                flex: 1
            }, {
                xtype: 'actioncolumn',
                width: 25,
                items: [
                    {
                        iconCls: 'fugue-icon funnel--minus',
                        tooltip: i18n("Remove filter"),
                        handler: function (grid, rowIndex, colIndex, item, e, record)
                        {
                            this.targetStore.getFilters().remove(record.get("filter"));
                            this.updateFilters(this.targetStore.getFilters());

                        },
                        scope: this
                    }
                ]
            }
        ];

        this.callParent(arguments);

    },
    updateFilters: function (filters)
    {
        var i;

        this.store.removeAll();

        for (i = 0; i < filters.getCount(); i++) {
            this.store.add({
                name: filters.getAt(i).getFilterDescription(),
                filter: filters.getAt(i)
            });
        }

    }
});
