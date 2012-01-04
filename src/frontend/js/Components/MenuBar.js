Ext.define('PartKeepr.MenuBar', {
	extend: 'Ext.toolbar.Toolbar',
	initComponent: function () {
		this.ui = "mainmenu";
		
		// @todo this is an ugly list of configurations. Refactor this in a cleaner way.
		
		this.editMenu = Ext.create('Ext.menu.Menu', {
			items: [{
						text: i18n('Projects'),
						icon: 'resources/fugue-icons/icons/drill.png',
						handler: this.editProjects
					},
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
			        	text: i18n("Units"),
			        	handler: this.editUnits,
			        	icon: 'resources/icons/unit.png'
			        }]
		});
		
		this.viewMenu = Ext.create('Ext.menu.Menu', {
			items: [{
			        	text: i18n("Statistics"),
			        	icon: 'resources/silkicons/chart_bar.png',
			        	menu: [
							{
								text: i18n("Summary"),
								handler: this.showStatisticsSummary,
								icon: 'resources/silkicons/chart_bar.png'
							},{
								text: i18n("Chart"),
								handler: this.showStatisticsChart,
								icon: 'resources/silkicons/chart_bar.png'
							}]
			        },
					{
						text: i18n("System Information"),
						handler: this.showSystemInformation,
						icon: 'resources/fugue-icons/icons/system-monitor.png'
					},{
						text: i18n("Project Reports"),
						handler: this.showProjectReports,
						icon: 'resources/fugue-icons/icons/drill.png'
					},{
						text: i18n("System Notices"),
						handler: this.showSystemNotices,
						icon: 'resources/fugue-icons/icons/service-bell.png'
					},{
						text: i18n("Stock History"),
						handler: this.showStockHistory,
						icon: 'resources/fugue-icons/icons/notebook.png'
					}
					
			        ]
		});
		
		this.systemMenu = Ext.create('Ext.menu.Menu', {
			items: [
			{
	        	text: i18n('Disconnect'),
	        	icon: 'resources/silkicons/disconnect.png',
	        	handler: this.disconnect
	        },{
	        	text: i18n("User Preferences"),
	        	icon: 'resources/fugue-icons/icons/gear.png',
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
			cls: 'partkeepr-logo-align',
			text: '<div class="partkeepr-logo">PartKeepr</div>',
			width: 200
		}];
		
		
		
		this.callParent();
	},
	showUserPreferences: function () {
		var j = new PartKeepr.UserPreferencePanel({
			iconCls: 'icon-gear',
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
			iconCls: 'icon-system-monitor',
			closable: true,
			padding: "5 5 5 5"
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStatisticsSummary: function () {
		var j = Ext.create("PartKeepr.CurrentStatisticsPanel", {
			iconCls: 'icon-chart-bar',
			closable: true
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStatisticsChart: function () {
		var j = Ext.create("PartKeepr.StatisticsChartPanel", {
			iconCls: 'icon-chart-bar',
			closable: true
		});
		
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editStorageLocations: function () {
		var j = Ext.create("PartKeepr.StorageLocationEditorComponent", {
			title: i18n("Storage Locations"),
			iconCls: 'icon-wooden-box',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUnits: function () {
		var j = Ext.create("PartKeepr.UnitEditorComponent", {
			title: i18n("Units"),
			iconCls: 'icon-unit',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editManufacturers: function () {
		var j = Ext.create("PartKeepr.ManufacturerEditorComponent", {
			title: i18n("Manufacturers"),
			iconCls: 'icon-building',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editFootprints: function () {
		var j = Ext.create("PartKeepr.FootprintEditorComponent", {
			title: i18n("Footprints"),
			iconCls: 'icon-footprint',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editDistributors: function () {
		var j = Ext.create("PartKeepr.DistributorEditorComponent", {
			title: i18n("Distributors"),
			iconCls: 'icon-lorry',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editUsers: function () {
		var j = Ext.create("PartKeepr.UserEditorComponent", {
			title: i18n("Users"),
			iconCls: 'icon-user',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editPartUnits: function () {
		var j = Ext.create("PartKeepr.PartUnitEditorComponent", {
			title: i18n("Part Measurement Units"),
			iconCls: 'icon-ruler',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	editProjects: function () {
		var j = Ext.create("PartKeepr.ProjectEditorComponent", {
			title: i18n("Projects"),
			iconCls: 'icon-drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showProjectReports: function () {
		var j = Ext.create("PartKeepr.ProjectReportView", {
			title: i18n("Project Reports"),
			iconCls: 'icon-drill',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showSystemNotices: function () {
		var j = Ext.create("PartKeepr.SystemNoticeEditorComponent", {
			title: i18n("System Notices"),
			iconCls: 'icon-service-bell',
			closable: true
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
	},
	showStockHistory: function () {
		var j = Ext.create("PartKeepr.StockHistoryGrid", {
			title: i18n("Stock History"),
			iconCls: 'icon-notebook',
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
	}
});
	