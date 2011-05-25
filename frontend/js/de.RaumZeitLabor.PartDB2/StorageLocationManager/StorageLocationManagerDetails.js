Ext.ns("de.RaumZeitLabor.PartDB2.StorageLocationManagerDetails");

de.RaumZeitLabor.PartDB2.StorageLocationManagerDetails = Ext.extend(Ext.form.FormPanel, {
	id: "storagelocation-details",
	storageLocationId: null,
	labelWidth: 150,
	initComponent: function () {
	
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {	fieldLabel: '$[de.RaumZeitLabor.PartDB2.StorageLocationManager.name]',
			        	name: 'name',
			        	xtype: 'textfield'
			        }
			        ],
			hidden: true,
	        buttons: [{
	            text: '$[de.RaumZeitLabor.PartDB2.save]',
	            handler: this.saveStorageLocation.createDelegate(this)
	        },{
	            text: '$[de.RaumZeitLabor.PartDB2.cancel]',
	            handler: function () {
	        		this.hide();
	        	}.createDelegate(this)
	        }]
		});
		de.RaumZeitLabor.PartDB2.StorageLocationManagerDetails.superclass.initComponent.call(this);
	},
	
	setStorageLocation: function (id) {
		this.storageLocationId = id;
	},
	
	editStorageLocation: function (id) {
		this.setStorageLocation(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
    			"getStorageLocation");
    	call.setParameter("id", this.storageLocationId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.loadStorageLocation]');
    	call.setHandler(this.onStorageLocationLoaded.createDelegate(this));
    	call.doCall();
	},
	saveStorageLocation: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
    			"saveStorageLocation");
    	call.setParameter("id", this.storageLocationId);
    	call.setParameters(this.getForm().getValues());
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.saveStorageLocation]');
    	call.setHandler(this.onStorageLocationSaved.createDelegate(this));
    	call.doCall();
	},
	onStorageLocationSaved: function (response) {
		var record = Ext.getCmp("storagelocation-list").getStore().reload();
	},
	onStorageLocationLoaded: function (response) {
		this.getForm().setValues(response);
		this.show();
	}
});