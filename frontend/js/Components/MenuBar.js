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
			        },{
			        	text: i18n('Edit Distributors'),
			        	handler: this.editDistributors
			        },{
			        	text: i18n('Edit Users'),
			        	handler: this.editUsers,
			        	icon: "resources/silkicons/user.png"
			        },{
			        	text: i18n('Edit Part Units'),
			        	handler: this.editPartUnits,
			        	icon: "resources/silkicons/table.png"
			        },{
			        	text: i18n("Statistics"),
			        	handler: this.showStatistics,
			        	icon: 'resources/silkicons/chart_bar.png'
			        },{
			        	text: i18n("Units"),
			        	handler: this.editUnits,
			        	icon: 'resources/silkicons/lightbulb.png'
			        }]
		});
		
		this.items = [{
			text: 'Menu',
			menu: this.menu 
		}];
		
		
		
		this.callParent();
	},
	showStatistics: function () {
		var j = Ext.create("PartDB2.CurrentStatisticsDialog");
		j.show();
	},
	editStorageLocations: function () {
		var j = Ext.create("PartDB2.StorageLocationEditorComponent", {
			title: i18n("Storage Locations"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	},
	editUnits: function () {
		var j = Ext.create("PartDB2.UnitEditorComponent", {
			title: i18n("Units"),
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
	},
	editDistributors: function () {
		var j = Ext.create("PartDB2.DistributorEditorComponent", {
			title: i18n("Distributors"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	},
	editUsers: function () {
		var j = Ext.create("PartDB2.UserEditorComponent", {
			title: i18n("Users"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	},
	editPartUnits: function () {
		var j = Ext.create("PartDB2.PartUnitEditorComponent", {
			title: i18n("Part Units"),
			closable: true
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
	}
});
	