/**
 * Represents the printing view for the storage locations
 */
Ext.define('PartKeepr.PrintStorageLocations', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.PrintStorageLocations',

	bodyStyle: 'background:#DBDBDB;padding: 5px',
	border: false,

	defaults: {
	    bodyStyle: 'padding:10px'
	},

	layout: 'border',

	listeners: {
	    activate: function(tab, eOpts) {
	    	// Everytime we enter teh panel, we requery our storage to ensure
	    	// a consistent state with other tabs.
	    	this.configurationStore.reload();

	    	// TODO: this should also be reloaded, but if we do so, we losse our
	    	// selections. So we must implement a way to keep them or something else?
	    	// this.storeStorageLocation.reload();
	    }
	},

	initComponent: function () {
		this.createStores();
		
		this.printExecutor = Ext.create('PartKeepr.PrintingExecutor');

		this.upperGridEditing = Ext.create('Ext.grid.plugin.CellEditing', {
	        clicksToEdit: 1
	    });

		this.locationList = Ext.create("PartKeepr.BaseGrid", {
			selModel: {
				mode: 'MULTI'
			},
			selType: 'checkboxmodel',
			flex: 1,
			columns: [{
				header: i18n("Storage location name"), dataIndex: 'name',
				flex: 1
			}],
			store: this.storeStorageLocation,
			plugins: [ this.upperGridEditing ]
		});

		this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
	        clicksToEdit: 1
	    });

		this.printIt = Ext.create('Ext.button.Button', {
		  	  text: i18n("Print"),
		  	  width: 160,
		  	  listeners: {
		  		  scope: this,
		  		  click: this.onPrintClick
		  		}

		});


		this.layoutSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.configurationStore,
		    valueField: 'id',
		    displayField: 'name',
			fieldLabel: i18n("Printing Configuration"),
			allowBlank: false,
			labelWidth: 140,
			margins: { left: 10 }
			} );

		this.items = [
		              {
		            	  title: i18n("Choose locations to print label for"),
		            	  split: true,
		            	  minHeight: 300,
		            	  height: 300,
		            	  bodyStyle: 'background:#DBDBDB;padding: 10px;',
		            	  layout: {
		            		  type: 'vbox',
		            		  align : 'stretch',
		            		  pack  : 'start'
		            	  },
		            	  region: 'north',
		            	  items: [
									this.locationList,
									{
										layout: {
											type: 'hbox',
											pack: 'start'
										},
										margins: {
											top: 10
										},
										border: false,
										bodyStyle: 'background:#DBDBDB',
										items: [ this.printIt, this.layoutSelector]
									}
		            	          ]
		              }];

		this.callParent();
	},
	onPrintClick: function () {
		selection = this.locationList.getSelectionModel().getSelection();
		var ids = new Array();
		for (var i=0;i<selection.length;i++) {
			ids.push(selection[i].get("id"));
		}

		configId = this.layoutSelector.getValue();
		this.printExecutor.executePrint( configId, 'PartKeepr\\StorageLocation\\StorageLocation', ids);
	},
	/**
	 * Creates the store used in this view.
	 */
	createStores: function () {
		var config = {
			autoLoad: true,
			model: "PartKeepr.StorageLocation",
			pageSize: -1
		};

		this.storeStorageLocation = Ext.create('Ext.data.Store', config);

		this.configurationStore = Ext.create("Ext.data.Store", {
			autoLoad: true,
    		model: 'PartKeepr.Printing.PrintingJobConfiguration',
			pageSize: -1
			// TODO: Findout why this does not work??
//			filters: [{
//		         property: 'objectType',
//		         value: 'PartKeepr\\StorageLocation\\StorageLocation'
//		     }]
    	});
	}
});