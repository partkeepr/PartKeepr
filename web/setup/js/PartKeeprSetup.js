Ext.application({
    name: 'PartKeeprSetup',
    launch: function() {
    	this.createLayout();
    },
    /**
     * Creates the main viewport
     */
    createLayout: function () {
        var win = Ext.create("Ext.window.Window", {
            layout: "fit",
            items: Ext.create("PartKeeprSetup.SetupWizard")
        });

    	win.show();
    }
});
