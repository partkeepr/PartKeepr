Ext.application({
    name: 'PartKeepr',
    launch: function() {
    	
    	this.createLayout();
    	
    	var tests = new Array();
    	
    	
    	var j = Ext.create("PartKeeprSetup.PHPTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.PHPPrequisitesTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var j = Ext.create("PartKeeprSetup.DoctrineTest");
    	j.callback = this.testResultPanel;
    	tests.push(j);
    	
    	var tr = Ext.create("PartKeeprSetup.TestRunner");
    	tr.run(tests);
    	
    	//j.on("complete", function () { this.testResultPanel.appendTestResult(this); }, j);
    },
    /**
     * Creates the main viewport
     */
    createLayout: function () {
    	this.testResultPanel = Ext.create("PartKeeprSetup.TestResultPanel");
    	
    	Ext.create('Ext.container.Viewport', {
    		layout: 'fit',
    		items: [this.testResultPanel]
    		
        });   
    }
});