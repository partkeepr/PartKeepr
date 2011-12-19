/**
 * This card displays the database parameters.
 */
Ext.define('PartKeeprSetup.DatabaseParametersCard', {
	extend: 'Ext.ux.wizard.Card',
	
	/**
	 * Various Style Settings
	 */
	title: 'Database Parameters',
	showTitle: true,
	titleCls: '',
	titleStyle: 'font-size: 2.5em;',
	cls: 'x-partkeepr-setup-basecard',
    id: 'database-parameters-card',
    autoScroll: true,
    
    
    
	/**
	 * Inits the component
	 */
	initComponent: function () {
		
		this.createDatabaseDropdown();
		
		this.databaseSettings = Ext.create("Ext.panel.Panel", {
			layout: 'card',
			border: false,
			bodyStyle: {
				background: "none"
			},
			items: [{
						border: false,
						bodyStyle: {
							background: "none"
						},
						html: 'Please select a database driver'
					},
			        Ext.create("PartKeeprSetup.DatabaseParametersCard.MySQL", { paramsheet: this }),
			        Ext.create("PartKeeprSetup.DatabaseParametersCard.PostgreSQL", { paramsheet: this })
			        ]
		});
		
		this.items = [{
             border: false,
             bodyStyle: 'background:none;padding-bottom: 10px;',
             html: 'Please enter your database parameters below:'
         },
         this.databaseDropdown,
         this.databaseSettings
         ];
		
		this.callParent();
		this.on("activate", this.onActivate, this);
	},
	createDatabaseDropdown: function () {
		// The data store containing the list of states
		var databaseTypes = Ext.create('Ext.data.Store', {
		    fields: ['type', 'name'],
		    data : [
		        {"type":"mysql", "name":"MySQL"},
		        //{"type":"postgresql", "name":"PostgreSQL"}
		    ]
		});
		
		this.databaseDropdown = Ext.create('Ext.form.ComboBox', {
			labelWidth: 120,
		    fieldLabel: 'Database Type',
		    store: databaseTypes,
		    queryMode: 'local',
		    displayField: 'name',
		    valueField: 'type',
		    triggerAction: 'all',
		    editable: false
		});
		
		this.databaseDropdown.on("select", this.onDriverSelect, this);

	},
	onDriverSelect: function (a,r) {
		if (r.length == 1) {
			switch (r[0].get("type")) {
				case "mysql":
					this.databaseSettings.layout.setActiveItem(1);
					break;
				case "postgresql":
					this.databaseSettings.layout.setActiveItem(2);
					break;
				default:
					this.databaseSettings.layout.setActiveItem(0);
			}
		} else {
			this.databaseSettings.layout.setActiveItem(0);
		}
		
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
	},
	retest: function () {
		this.retestButton.hide();
		this.runTests();
	},
	onActivate: function () {
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
		
		// Manually fire the activate event, in case the user switched cards back/forth.
		this.databaseSettings.layout.getActiveItem().fireEvent("activate");
	}
});
