Ext.define("PartKeepr.Exporter.GridExporterButton", {
    extend: "Ext.button.Button",

    genericExporter: true,

    initComponent: function ()
    {
        this.menu = [
            {
                text: i18n("Export Grid"),
                menu: [
                    {
                        text: i18n("CSV"),
                        handler: "onCSVExport",
                        scope: this
                    }, {
                        text: i18n("Excel 2007 and later"),
                        handler: "onExcelExport",
                        scope: this
                    }
                ]
            }
        ];

        if (this.genericExporter) {
            this.menu.push({
                text: i18n("Custom Export…"),
                handler: "onCustomExport",
                scope: this
            });
        }
        this.callParent(arguments);
    },
    onCSVExport: function ()
    {
        var gridPanel = this.up("gridpanel");
        var exporter = Ext.create("PartKeepr.Exporter.GridExporter", gridPanel, "text/comma-separated-values", "csv");
        exporter.exportGrid();
    },
    onExcelExport: function ()
    {
        var gridPanel = this.up("gridpanel");
        var exporter = Ext.create("PartKeepr.Exporter.GridExporter", gridPanel,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx");
        exporter.exportGrid();
    },
    onCustomExport: function () {
        var j = Ext.create("Ext.window.Window", {
            items: Ext.create("PartKeepr.Exporter.Exporter", {
                model: this.up("gridpanel").getStore().getModel()
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
