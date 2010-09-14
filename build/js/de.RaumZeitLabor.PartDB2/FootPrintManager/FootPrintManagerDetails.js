Ext.ns("de.RaumZeitLabor.PartDB2.FootPrintManagerDetails");

de.RaumZeitLabor.PartDB2.FootPrintManagerDetails = Ext.extend(Ext.form.FormPanel, {
	id: "footprint-details",
	footprintId: null,
	
	initComponent: function () {
	
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {	fieldLabel: '$[de.RaumZeitLabor.PartDB2.FootPrintManager.footprint]',
			        	name: 'footprint',
			        	xtype: 'textfield'
			        },
			        {
			        	html: 'TODO: Add upload for custom footprint diagram'
			        }
			        ],
			hidden: true,
	        buttons: [{
	            text: '$[de.RaumZeitLabor.PartDB2.save]',
	            handler: this.saveFootprint.createDelegate(this)
	        },{
	            text: '$[de.RaumZeitLabor.PartDB2.cancel]',
	            handler: function () {
	        		this.hide();
	        	}.createDelegate(this)
	        }]
		});
		de.RaumZeitLabor.PartDB2.FootPrintManagerDetails.superclass.initComponent.call(this);
	},
	
	setFootprint: function (id) {
		this.footprintId = id;
	},
	
	editFootprint: function (id) {
		this.setFootprint(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
    			"getFootprint");
    	call.setParameter("id", this.footprintId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.loadFootprint]');
    	call.setHandler(this.onFootprintLoaded.createDelegate(this))
    	call.doCall();
	},
	saveFootprint: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
    			"saveFootprint");
    	call.setParameter("id", this.footprintId);
    	call.setParameters(this.getForm().getValues());
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.saveFootprint]');
    	call.setHandler(this.onFootprintSaved.createDelegate(this))
    	call.doCall();
	},
	onFootprintSaved: function (response) {
		var record = Ext.getCmp("footprint-list").getStore().reload();
	},
	onFootprintLoaded: function (response) {
		this.getForm().setValues(response);
		this.show();
	}
});