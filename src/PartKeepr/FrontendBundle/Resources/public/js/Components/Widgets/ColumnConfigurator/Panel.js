Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.Panel", {
    extend: "Ext.panel.Panel",

    layout: 'border',
    grid: null,

    originalColumnConfigurations: [],

    viewModel: {
        data: {
            column: null
        },
        formulas: {
            isFlex: function (get)
            {

                return get("column.widthMode") === "flex";
            }
        }
    },

    initComponent: function ()
    {
        this.columnListGrid = Ext.create("PartKeepr.Components.Widgets.ColumnConfigurator.ColumnListGrid", {
            region: 'west',
            width: 400,
            split: true
        });

        this.columnProperties = Ext.create("PartKeepr.Components.Widgets.ColumnConfigurator.ColumnProperties", {
                region: 'center',
                sourceModel: this.grid.getStore().getModel()
            }
        );

        this.items = [
            this.columnListGrid,
            this.columnProperties
        ];

        this.callParent();

        this.columnListGrid.on("select", this.onColumnSelect, this);
        this.columnListGrid.getStore().on("add", this.onAdd, this);
        this.down("#restoreDefaults").on("click", this.restoreDefaults, this);
        this.columnListGrid.getStore().on("datachanged", this.preview, this);
        this.columnListGrid.getStore().on("update", this.preview, this);

        this.down("#gridPresetCombo").getStore().addFilter({
            property: "grid",
            operator: "=",
            value: this.grid.$className
        });

        this.down("#gridPresetCombo").on("selectPreset", this.onPresetSelect, this);
        this.down("#gridPresetCombo").on("markAsDefault", this.onMarkAsDefault, this);
        this.down("#gridPresetCombo").setAdditionalFields([
            {
                fieldName: "grid",
                value: this.grid.$className
            }
        ]);

        this.down("#renderers").on("change", this.preview, this);

        this.autoPreviewTask = new Ext.util.DelayedTask(this.doPreview, this, null, true);
    },
    restoreDefaults: function ()
    {
        if (this.grid instanceof PartKeepr.BaseGrid)
        {
            this.grid.reconfigure(this.grid.store, this.grid.getDefaultColumnConfiguration());
            this.applyColumnConfigurationFromGrid();
        }
    },
    onMarkAsDefault: function (gridPreset) {
        gridPreset.callPutAction("markAsDefault", {}, Ext.bind(this.onMarkedAsDefault, this));
    },
    onMarkedAsDefault: function () {
        this.down("#gridPresetCombo").getStore().load();
    },
    onPresetSelect: function (configuration)
    {
        this.grid.reconfigure(this.grid.store, configuration);
        this.applyColumnConfigurationFromGrid();

        this.down("#gridPresetCombo").setConfiguration(configuration);
    },
    onColumnSelect: function (grid, record)
    {
        this.editData(record);
    },
    onAdd: function (store, records)
    {
        if (records.length === 1)
        {
            this.editData(records[0]);
        }
    },
    editData: function (record)
    {
        this.columnProperties.loadRecord(record);
    },
    preview: function ()
    {
        this.down("#gridPresetCombo").setConfiguration(this.getColumnConfigurations());
        this.autoPreviewTask.delay(200);
    },
    doPreview: function ()
    {
        this.grid.reconfigure(this.grid.store, this.getColumnConfigurations());
    },
    getColumnConfigurations: function ()
    {
        var i, j, rtype;

        var config = {}, columnConfigurations = [], fieldsToCopy = this.getFieldsToCopy();

        var data = this.columnListGrid.getStore().getData();

        for (i = 0; i < data.getCount(); i++)
        {
            config = {};
            for (j = 0; j < fieldsToCopy.length; j++)
            {
                config[fieldsToCopy[j]] = data.getAt(i).get(fieldsToCopy[j]);
            }

            if (data.getAt(i).get("widthMode") === "flex")
            {
                delete config.width;
            } else
            {
                delete config.flex;
            }

            config.renderers = [];

            for (j = 0; j < data.getAt(i).renderers().getCount(); j++)
            {

                rtype = data.getAt(i).renderers().getAt(j).get("rtype");

                if (typeof(PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(rtype)) !== "undefined")
                {
                    config.renderers.push({
                        rtype: rtype,
                        rendererConfig: Ext.decode(data.getAt(i).renderers().getAt(j).get("config"))
                    });
                }
            }
            columnConfigurations.push(config);

        }

        return columnConfigurations;
    },
    applyColumnConfigurationFromGrid: function ()
    {
        var columns = this.grid.getColumns();
        var i, j;
        var columnRecord;
        this.originalColumnConfigurations = [];
        var startColumn = 0;
        var columnConfig;
        var fieldsToCopy = this.getFieldsToCopy();

        this.columnListGrid.getStore().removeAll();

        // In case we have a row expander which adds an additional column, skip the first column
        if (this.grid.findPlugin("metapartrowexpander"))
        {
            startColumn++;
        }

        for (i = startColumn; i < columns.length; i++)
        {
            columnRecord = Ext.create("PartKeepr.Models.ColumnConfiguration");
            columnConfig = {};

            for (j = 0; j < fieldsToCopy.length; j++)
            {
                columnRecord.set(fieldsToCopy[j], columns[i][fieldsToCopy[j]]);
                columnConfig[fieldsToCopy[j]] = columns[i][fieldsToCopy[j]];
            }

            if (columnConfig["flex"] > 0)
            {
                columnRecord.set("widthMode", "flex");
            } else
            {
                columnRecord.set("widthMode", "width");
            }

            columnConfig["renderers"] = columns[i]["renderers"];
            this.originalColumnConfigurations.push(columnConfig);
            columnRecord.set("index", i);

            if (columns[i].renderers instanceof Array)
            {
                for (j = 0; j < columns[i].renderers.length; j++)
                {
                    columnRecord.renderers().add(Ext.create("PartKeepr.Models.ColumnRendererConfiguration", {
                        rtype: columns[i].renderers[j].rtype,
                        config: Ext.encode(columns[i].renderers[j].rendererConfig)
                    }));
                }
            }

            columnRecord.renderers().on("datachanged", this.preview, this);
            columnRecord.renderers().on("update", this.preview, this);

            this.columnListGrid.getStore().add(columnRecord);
        }
    },
    getFieldsToCopy: function ()
    {
        return ["dataIndex", "text", "hidden", "flex", "width", "tooltip"];
    }
});
