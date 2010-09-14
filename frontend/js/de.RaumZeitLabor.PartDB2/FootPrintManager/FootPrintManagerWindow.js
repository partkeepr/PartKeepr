Ext.ns("de.RaumZeitLabor.PartDB2.FootPrintManagerWindow");

de.RaumZeitLabor.PartDB2.FootPrintManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	
	initComponent: function () {
	
		this.footPrintManagerList = new de.RaumZeitLabor.PartDB2.FootPrintManagerList();
		
		Ext.apply(this.footPrintManagerList, {
		    region:'west',
		    margins: '0 0 0 0',
		    cmargins: '0 0 0 0',
		    padding: '0 0 0 0',
		    width: 250
		});
		
		this.footPrintManagerDetails = new de.RaumZeitLabor.PartDB2.FootPrintManagerDetails();
		
		
		Ext.apply(this.footPrintManagerDetails, {
		    region:'center',
		    collapsible: false,
		    margins: '0 0 0 0'
		 });
		
		Ext.apply(this, {
			width: 600,
			height: 400,
			title: "$[de.RaumZeitLabor.PartDB2.FootPrintManager.manage]",
			layout:'border',
			defaults: {
			    collapsible: false,
			    split: false
			},
			items: [
			        this.footPrintManagerList,
			        this.footPrintManagerDetails]
		});
		de.RaumZeitLabor.PartDB2.FootPrintManagerWindow.superclass.initComponent.call(this);
	}
});

de.RaumZeitLabor.PartDB2.FootPrintManagerWindow.handler = function () {
	var footPrintManager = new de.RaumZeitLabor.PartDB2.FootPrintManagerWindow();
	footPrintManager.show();
}

