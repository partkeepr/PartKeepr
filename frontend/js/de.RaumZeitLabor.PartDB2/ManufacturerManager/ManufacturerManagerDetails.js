Ext.ns("de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails");

de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails = Ext.extend(Ext.form.FormPanel, {
	id: "manufacturer-details",
	storageLocationId: null,
	labelWidth: 150,
	initComponent: function () {
	
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {	fieldLabel: '$[de.RaumZeitLabor.PartDB2.ManufacturerManager.name]',
			        	name: 'name',
			        	xtype: 'textfield'
			        }
			        ],
			hidden: true,
	        buttons: [{
	            text: '$[de.RaumZeitLabor.PartDB2.save]',
	            handler: this.saveManufacturer.createDelegate(this)
	        },{
	            text: '$[de.RaumZeitLabor.PartDB2.cancel]',
	            handler: function () {
	        		this.hide();
	        	}.createDelegate(this)
	        }]
		});
		de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails.superclass.initComponent.call(this);
	},
	
	setManufacturer: function (id) {
		this.storageLocationId = id;
	},
	
	editManufacturer: function (id) {
		this.setManufacturer(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
    			"getManufacturer");
    	call.setParameter("id", this.storageLocationId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.loadManufacturer]');
    	call.setHandler(this.onManufacturerLoaded.createDelegate(this));
    	call.doCall();
	},
	saveManufacturer: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
    			"saveManufacturer");
    	call.setParameter("id", this.storageLocationId);
    	call.setParameters(this.getForm().getValues());
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.saveManufacturer]');
    	call.setHandler(this.onManufacturerSaved.createDelegate(this));
    	call.doCall();
	},
	onManufacturerSaved: function (response) {
		var record = Ext.getCmp("manufacturer-list").getStore().reload();
	},
	onManufacturerLoaded: function (response) {
		this.getForm().setValues(response);
		this.show();
	}
});