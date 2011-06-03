Ext.define('PartDB2.MenuBar', {
	extend: 'Ext.toolbar.Toolbar',
	initComponent: function () {
		
		this.menu = Ext.create('Ext.menu.Menu', {
			items: [
			        {
			        	text: i18n('Edit Footprints'),
			        	handler: this.editFootprints
			        },{
			        	text: i18n('Edit Manufacturers'),
			        	handler: this.editManufacturers
			        },{
			        	text: i18n('Edit Storage Locations'),
			        	handler: this.editStorageLocations
			        }]
		});
		
		this.items = [{
			text: 'Menu',
			menu: this.menu 
		}];
		
		
		
		this.callParent();
	},
	editStorageLocations: function () {
		var j = Ext.create("PartDB2.StorageLocationEditorComponent", {
			title: i18n("Storage Locations"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	},
	editManufacturers: function () {
		var j = Ext.create("PartDB2.ManufacturerEditorComponent", {
			title: i18n("Manufacturers"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	},
	editFootprints: function () {
		var j = Ext.create("PartDB2.FootprintEditorComponent", {
			title: i18n("Footprints"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	}
});
	