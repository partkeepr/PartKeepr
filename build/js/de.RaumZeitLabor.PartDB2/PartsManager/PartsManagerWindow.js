Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerWindow");

de.RaumZeitLabor.PartDB2.PartsManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	
	initComponent: function () {
	
		this.partsManagerTree = new de.RaumZeitLabor.PartDB2.PartsManagerTree();
		
		Ext.apply(this.partsManagerTree, {
		    region:'west',
		    margins: '0 0 0 0',
		    cmargins: '0 0 0 0',
		    padding: '0 0 0 0',
		    width: 250
		});
		
		this.partsManagerDetails = new de.RaumZeitLabor.PartDB2.CategoryEditor();
		
		
		Ext.apply(this.partsManagerDetails, {
		    region:'center',
		    collapsible: false,
		    margins: '0 0 0 0'
		 });
		
		Ext.apply(this, {
			width: 600,
			height: 400,
			title: "$[de.RaumZeitLabor.PartDB2.PartsManager.manage]",
			layout:'border',
			defaults: {
			    collapsible: false,
			    split: false
			},
			items: [
			        this.partsManagerTree,
			        this.partsManagerDetails]
		});
		de.RaumZeitLabor.PartDB2.PartsManagerWindow.superclass.initComponent.call(this);
	}
});

de.RaumZeitLabor.PartDB2.PartsManagerWindow.handler = function () {
	var partsManager = new de.RaumZeitLabor.PartDB2.PartsManagerWindow();
	partsManager.show();
}

