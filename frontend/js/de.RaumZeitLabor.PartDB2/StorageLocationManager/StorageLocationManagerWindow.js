Ext.ns("de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow");

de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	title: "$[de.RaumZeitLabor.PartDB2.StorageLocationManager.manage]",
	width: 600,
	height: 400,
	layout: 'border',
	defaults: {
		collapsible: false,
		split: false
	},
	initComponent: function () {
	
		this.storageLocationList = new de.RaumZeitLabor.PartDB2.StorageLocationListGrid({
			region: 'west',
			id: 'storagelocation-list',
			width: 250
		});
		
		this.storageLocationDetails = new de.RaumZeitLabor.PartDB2.StorageLocationManagerDetails({
			region: 'center'
		});
		
		this.items = [
		              this.storageLocationList,
		              this.storageLocationDetails 
		              ];
		
		de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow.superclass.initComponent.call(this);
	}
});

de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow.handler = function () {
	var storageLocationManager = new de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow();
	storageLocationManager.show();
}

