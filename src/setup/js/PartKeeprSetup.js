Ext.application({
    name: 'PartKeeprSetup',
    launch: function() {
    	this.createLayout();
    },
    /**
     * Creates the main viewport
     */
    createLayout: function () {
    	var wizard = Ext.create("PartKeeprSetup.SetupWizard");
    	wizard.show();
    }
});