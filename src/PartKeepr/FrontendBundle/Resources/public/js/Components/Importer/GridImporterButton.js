Ext.define("PartKeepr.Importer.GridImporterButton", {
    extend: "Ext.button.Button",

    initComponent: function ()
    {
        this.handler = this.onImport;
        this.callParent(arguments);
    },
    onImport: function () {
        var j = Ext.create("Ext.window.Window", {
            items: Ext.create("PartKeepr.Importer.Importer", {
                model: this.up("gridpanel").getStore().getModel()
            }),
            title: i18n("Import"),
            width: "80%",
            height: "80%",
            layout: 'fit',
            maximizable: true,
            closeAction: 'destroy'

        });
        j.show();
    }
});
