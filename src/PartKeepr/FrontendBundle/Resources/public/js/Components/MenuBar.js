Ext.define('PartKeepr.MenuBar', {
	extend: 'Ext.toolbar.Toolbar',
	initComponent: function () {
		this.ui = "mainmenu";
		
		// @todo this is an ugly list of configurations. Refactor this in a cleaner way.
		
		this.editMenu = Ext.create('Ext.menu.Menu', {
			items: [{
						text: i18n('Projects'),
						iconCls: 'fugue-icon drill',
						handler: this.editProjects
					},
			        {
			        	text: i18n('Footprints'),
			        	iconCls: 'fugue-icon fingerprint',
			        	handler: this.editFootprints
			        },{
			        	text: i18n('Manufacturers'),
			        	iconCls: 'web-icon building',
			        	handler: this.editManufacturers
			        },{
			        	text: i18n('Storage Locations'),
			        	iconCls: 'fugue-icon wooden-box',
			        	handler: this.editStorageLocations
			        },{
			        	text: i18n('Distributors'),
			        	iconCls: 'web-icon lorry',
			        	handler: this.editDistributors
			        },{
			        	text: i18n('Users'),
			        	id: 'edit-users',
			        	handler: this.editUsers,
			        	iconCls: "web-icon user"
			        },{
			        	text: i18n('Part Measurement Units'),
			        	handler: this.editPartUnits,
			        	iconCls: "fugue-icon ruler"
			        },{
			        	text: i18n("Units"),
			        	handler: this.editUnits,
			        	iconCls: 'fugue-icon unit'
			        }]
		});
		
		this.viewMenu = Ext.create('Ext.menu.Menu', {
			items: [{
			        	text: i18n("Statistics"),
			        	iconCls: 'web-icon chart_bar',
			        	menu: [
							{
								text: i18n("Summary"),
								handler: this.showStatisticsSummary,
								iconCls: 'web-icon chart_bar'
							},{
								text: i18n("Chart"),
								handler: this.showStatisticsChart,
								iconCls: 'web-icon chart_bar'
							}]
			        },
					{
						text: i18n("System Information"),
						handler: this.showSystemInformation,
						iconCls: 'fugue-icon system-monitor '
					},{
						text: i18n("Project Reports"),
						handler: this.showProjectReports,
						iconCls: 'fugue-icon drill'
					},{
						text: i18n("System Notices"),
						handler: this.showSystemNotices,
						iconCls: 'fugue-icon service-bell'
					},{
						text: i18n("Stock History"),
						handler: this.showStockHistory,
						iconCls: 'fugue-icon notebook'
					},{
						text: i18n("Print and Labeling"),
						glyph: 0xf02f,
						menu: [
							{
								text: i18n("Storage Locations"),
								handler: this.showPrintStorageLocations
							},{
								text : i18n("Edit Label Layout"),
								handler : this.editPrintingPageBasicLayout
							},{
								text : i18n("Edit Configuration"),
								handler : this.editPrintingJobConfiguration
							}]					
					}]
		});
		
		this.systemMenu = Ext.create('Ext.menu.Menu', {
			items: [
			{
	        	text: i18n('Disconnect'),
	        	iconCls: 'web-icon disconnect',
	        	handler: this.disconnect
	        },{
	        	text: i18n("User Preferences"),
	        	iconCls: 'fugue-icon gear',
	        	handler: this.showUserPreferences
	        }
			]
		});
		
		this.items = [{
			text: i18n("System"),
			menu: this.systemMenu
		},{
			text: i18n('Edit'),
			menu: this.editMenu 
		},{
			text: i18n('View'),
			menu: this.viewMenu 
		},
		'->',
		{
			xtype: 'tbtext',
			cls: 'partkeepr-logo',
			text: 'PartKeepr'
		}];
		
		
		
		this.callParent();
	},
	showUserPreferences: function () {
		var j = new PartKeepr.UserPreferencePanel({
			iconCls: 'fugue-icon gear',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	disconnect: function () {
		PartKeepr.getApplication().logout();
	},
	/**
	 * Shows the system information window
	 */
	showSystemInformation: function () {
		var j = Ext.create("PartKeepr.SystemInformationGrid", {
			title: i18n("System Information"),
			iconCls: 'fugue-icon system-monitor',
			closable: true,
			padding: "5 5 5 5"
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStatisticsSummary: function () {
		var j = Ext.create("PartKeepr.CurrentStatisticsPanel", {
			iconCls: 'web-icon chart-bar',
			closable: true
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStatisticsChart: function () {
		var j = Ext.create("PartKeepr.StatisticsChartPanel", {
			iconCls: 'web-icon chart-bar',
			closable: true
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editStorageLocations: function () {
		var j = Ext.create("PartKeepr.StorageLocationEditorComponent", {
			title: i18n("Storage Locations"),
			iconCls: 'fugue-icon wooden-box',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUnits: function () {
		var j = Ext.create("PartKeepr.UnitEditorComponent", {
			title: i18n("Units"),
			iconCls: 'bundles/partkeeprfrontend/images/icons/unit',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editManufacturers: function () {
		var j = Ext.create("PartKeepr.ManufacturerEditorComponent", {
			title: i18n("Manufacturers"),
			iconCls: 'web-icon building',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editFootprints: function () {
		var j = Ext.create("PartKeepr.FootprintEditorComponent", {
			title: i18n("Footprints"),
			iconCls: 'fugue-icon fingerprint',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editDistributors: function () {
		var j = Ext.create("PartKeepr.DistributorEditorComponent", {
			title: i18n("Distributors"),
			iconCls: 'web-icon lorry',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUsers: function () {
		var j = Ext.create("PartKeepr.UserEditorComponent", {
			title: i18n("Users"),
			iconCls: 'web-icon user',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editPartUnits: function () {
		var j = Ext.create("PartKeepr.PartMeasurementUnitEditorComponent", {
			title: i18n("Part Measurement Units"),
			iconCls: "fugue-icon ruler",
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editProjects: function () {
		var j = Ext.create("PartKeepr.ProjectEditorComponent", {
			title: i18n("Projects"),
			iconCls: 'fugue-icon drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showProjectReports: function () {
		var j = Ext.create("PartKeepr.ProjectReportView", {
			title: i18n("Project Reports"),
			iconCls: 'fugue-icon drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showSystemNotices: function () {
		var j = Ext.create("PartKeepr.SystemNoticeEditorComponent", {
			title: i18n("System Notices"),
			iconCls: 'web-icon bell',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStockHistory: function () {
		var j = Ext.create("PartKeepr.StockHistoryGrid", {
			title: i18n("Stock History"),
			iconCls: 'fugue-icon notebook',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	displayComponent: function (component) {
		var j = Ext.create(component.type, {
			title: component.title,
			iconCls: component.iconCls,
			closable: component.closable 
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showPrintStorageLocations: function () {
		var j = Ext.create("PartKeepr.PrintStorageLocations", {
			title: i18n("Printing and Labeling: Storage Locations"),
			iconCls: 'web-icon drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editPrintingPageBasicLayout: function () {
		var j = Ext.create("PartKeepr.Printing.PageBasicLayoutEditorComponent", {
			title: i18n("Labeling Layout"),
			iconCls: 'web-icon drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editPrintingJobConfiguration: function () {
		var j = Ext.create("PartKeepr.Printing.PrintingJobConfigurationEditorComponent", {
			title: i18n("Printing Configuration"),
			iconCls: 'web-icon drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	}
});
