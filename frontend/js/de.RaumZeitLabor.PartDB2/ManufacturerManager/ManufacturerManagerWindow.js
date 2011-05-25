Ext.ns("de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow");

de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	title: "$[de.RaumZeitLabor.PartDB2.ManufacturerManager.manage]",
	width: 600,
	height: 400,
	layout: 'border',
	defaults: {
		collapsible: false,
		split: false
	},
	initComponent: function () {
	
		this.manufacturerList = new de.RaumZeitLabor.PartDB2.ManufacturerListGrid({
			region: 'west',
			id: 'storagelocation-list',
			width: 250
		});
		
		this.manufacturerDetails = new de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails({
			region: 'center'
		});
		
		this.items = [
		              this.manufacturerList,
		              this.manufacturerDetails 
		              ];
		
		de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow.superclass.initComponent.call(this);
	}
});

de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow.handler = function () {
	var manufacturerManager = new de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow();
	manufacturerManager.show();
}

