Ext.define("PartKeepr.Exporter.Exporter", {
    extend: "PartKeepr.Widgets.EntityQueryPanel",

    initComponent: function ()
    {
        this.callParent(arguments);

        this.down("#grid").setTitle(i18n("Preview"));

        this.formatStore = Ext.create("Ext.data.Store", {
            fields: ['format', 'extension', 'mimetype'],
            data: [
                {
                    "format": i18n("CSV"),
                    "extension": "csv",
                    "mimetype": "text/comma-separated-values"
                },
                {
                    "format": i18n("Excel 2007 and later"),
                    "extension": "xlsx",
                    "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                }
            ]
        });

        this.formats = Ext.create("Ext.form.field.ComboBox", {
            store: this.formatStore,
            queryMode: "local",
            displayField: "format",
            forceSelection: true,
            returnObject: true,
            itemId: 'formatSelector',
            value: this.formatStore.getAt(0)
        });

        this.bottomToolbar = Ext.create("Ext.toolbar.Paging", {
            store: this.store,
            enableOverflow: true,
            dock: 'bottom',
            displayInfo: false
        });

        this.bottomToolbar.add([
            '-',
            this.formats,
            {
                xtype: 'button',
                iconCls: 'fugue-icon application-export',
                handler: "doExport",
                scope: this
            }
        ]);

        this.down("#grid").addDocked(this.bottomToolbar);

        this.down("#grid").reconfigure(this.store, this.columns);
    },
    /**
     * Triggers the export. As we cannot force file downloads via XMLHttpRequest,
     * we need to process the response in a callback.
     */
    doExport: function ()
    {
        var options = {
            headers: {}
        };

        Ext.apply(options.headers, this.store.getProxy().getHeaders());
        options.headers["Accept"] = this.down("#formatSelector").getValue().get("mimetype");
        options.url = this.store.getProxy().getUrl() + "?" + Ext.Object.toQueryString(this.getParams());
        options.callback = Ext.bind(this.onExportSuccessful, this);
        Ext.Ajax.request(options);
    },
    /**
     * Callback for when the export is complete. Creates a client-side blob object and forces
     * download of it.
     */
    onExportSuccessful: function (options, success, response)
    {
        var blob = new Blob([response.responseText], {type: this.down("#formatSelector").getValue().get("mimetype")});
        saveAs(blob, "export." + this.down("#formatSelector").getValue().get("extension"));
    }
});
