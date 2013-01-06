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
		configId = this.layoutSelector.getValue();
		if (configId==null){
			Ext.Msg.alert(i18n("Error"),i18n("No Layout selected for printing. Please select a layout and try again."));
			return;
		}
		
		selection = this.locationList.getSelectionModel().getSelection();
		
		var params = new Array();
		
		for (var i=0;i<selection.length;i++) {
			params.push(selection[i].get("id"));
		}
        
		this.storePrintingService.getProxy().extraParams.configuration = configId;
		this.storePrintingService.getProxy().extraParams.ids = params.join(",");
		this.storePrintingService.load({
			callback : function(r, options, success) {
				if (success ){			
					window.open('file.php?id=' + r[0].data.fileid + '&type=Print');
				}
            }
		}
		);
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
		
		this.storePrintingService = Ext.create("Ext.data.Store", {			
    		model: 'PartKeepr.PrintingResponse',
    		proxy: {
    	        type: 'ajax',
    	        reader: {
    	            type: 'json',
    	            root: 'response'
    	        },
    	        url : 'service.php',
    	        extraParams: {
    	        	"service": "Printing",
    	        	"call": "startExport",
   	        		"ids": "",
   	        		"objectType":"PartKeepr\\StorageLocation\\StorageLocation",
   	        		"configuration": ""
   	        	},
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: false
    	});
		
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