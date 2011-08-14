Ext.define('PartKeepr.MenuBar', {
	extend: 'Ext.toolbar.Toolbar',
	initComponent: function () {
		
		this.menu = Ext.create('Ext.menu.Menu', {
			items: [
			        {
			        	text: i18n('Footprints'),
			        	icon: 'resources/fugue-icons/icons/fingerprint.png',
			        	handler: this.editFootprints
			        },{
			        	text: i18n('Manufacturers'),
			        	icon: 'resources/silkicons/building.png',
			        	handler: this.editManufacturers
			        },{
			        	text: i18n('Storage Locations'),
			        	icon: 'resources/fugue-icons/icons/wooden-box.png',
			        	handler: this.editStorageLocations
			        },{
			        	text: i18n('Distributors'),
			        	icon: 'resources/silkicons/lorry.png',
			        	handler: this.editDistributors
			        },{
			        	text: i18n('Users'),
			        	id: 'edit-users',
			        	handler: this.editUsers,
			        	icon: "resources/silkicons/user.png"
			        },{
			        	text: i18n('Part Measure Units'),
			        	handler: this.editPartUnits,
			        	icon: "resources/fugue-icons/icons/ruler.png"
			        },{
			        	text: i18n("Statistics"),
			        	handler: this.showStatistics,
			        	icon: 'resources/silkicons/chart_bar.png'
			        },{
			        	text: i18n("Units"),
			        	handler: this.editUnits,
			        	icon: 'resources/icons/unit.png'
			        },{
			        	text: i18n("System Information"),
			        	handler: this.showSystemInformation,
			        	icon: 'resources/fugue-icons/icons/system-monitor.png'
			        }]
		});
		
		this.items = [{
			text: 'Menu',
			menu: this.menu 
		}];
		
		
		
		this.callParent();
	},
	/**
	 * Shows the system information window
	 */
	showSystemInformation: function () {
		var j = Ext.create("PartKeepr.SystemInformationGrid", {
			title: i18n("System Information"),
			closable: true,
			padding: "5 5 5 5"
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStatistics: function () {
		var j = Ext.create("PartKeepr.CurrentStatisticsPanel", {
			closable: true
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editStorageLocations: function () {
		var j = Ext.create("PartKeepr.StorageLocationEditorComponent", {
			title: i18n("Storage Locations"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUnits: function () {
		var j = Ext.create("PartKeepr.UnitEditorComponent", {
			title: i18n("Units"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editManufacturers: function () {
		var j = Ext.create("PartKeepr.ManufacturerEditorComponent", {
			title: i18n("Manufacturers"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editFootprints: function () {
		var j = Ext.create("PartKeepr.FootprintEditorComponent", {
			title: i18n("Footprints"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editDistributors: function () {
		var j = Ext.create("PartKeepr.DistributorEditorComponent", {
			title: i18n("Distributors"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUsers: function () {
		var j = Ext.create("PartKeepr.UserEditorComponent", {
			title: i18n("Users"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editPartUnits: function () {
		var j = Ext.create("PartKeepr.PartUnitEditorComponent", {
			title: i18n("Part Measurement Units"),
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	}
});
	