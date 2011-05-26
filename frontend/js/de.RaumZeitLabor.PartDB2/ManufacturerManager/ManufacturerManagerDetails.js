Ext.ns("de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails");

de.RaumZeitLabor.PartDB2.ManufacturerManagerDetails = Ext.extend(Ext.form.FormPanel, {
	id: "manufacturer-details",
	manufacturerId: null,
	labelWidth: 100,
	initComponent: function () {
	
		this.call = new org.jerrymouse.service.Call(
				"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
				"getManufacturerLogos");
		
		this.store = new Ext.data.JsonStore({
	        root: 'logos',
	        totalProperty: 'totalCount',
	        proxy: new ServiceCallDataProxy(this.call),
	        idProperty: 'id',
	        remoteSort: true,
	        fields: [
	            'id'
	        ]
	    });
		
		var tpl = new Ext.XTemplate(
				'<tpl for=".">',
		            '<div class="thumb-wrap" id="{id}">',
				    '<div class="thumb"><img src="image.php?type=iclogo&id={id}&w=32&h=32"></div>',
				    '</div>',
		        '</tpl>',
		        '<div class="x-clear"></div>');
		
		this.tbAddLogo = new Ext.Button({
			cls:'x-btn-text-icon',
	        icon: "resources/silkicons/add.png",
	        text: 'Logo hinzufügen',
	        handler: this.onLogoAdd.createDelegate(this)
		});
		
		this.tbDeleteLogo = new Ext.Button({
			cls:'x-btn-text-icon',
	        icon: "resources/silkicons/delete.png",
	        text: 'Logo löschen',
	        disabled: true,
	        handler: this.onLogoDelete.createDelegate(this)
		});
		
		this.logoToolbar = new Ext.Toolbar({
			items: [
			        this.tbAddLogo,
			        this.tbDeleteLogo
			        ]
		});
		
		this.iclogoGrid = new Ext.DataView({
			store: this.store,
			width: 200,
			border: true,
			frame: true,
			style: 'background-color: white',
			height: 200,
			id: 'manufacturer-ic-logos',
			overClass: 'x-view-over',
			itemSelector: 'div.thumb-wrap',
			singleSelect: true,
			anchor: '100%',
			tpl: tpl,
			listeners: {
				selectionchange: this.onLogoSelectionChange.createDelegate(this)
			}
		});
		
		
		
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {	fieldLabel: '$[de.RaumZeitLabor.PartDB2.ManufacturerManager.name]',
			        	name: 'name',
			        	anchor: '100%',
			        	xtype: 'textfield'
			        },
			        {
			        	xtype: 'panel',
			        	layout: 'anchor',
			        	fieldLabel: "Herstellerlogos",
			        	anchor: '100%',
			        	items: this.iclogoGrid,
			        	bbar: this.logoToolbar
			        }
			        
			        ],
			hidden: false,
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
	onLogoSelectionChange: function (dataview, selections) {
		if (selections.length > 0) {
			this.tbDeleteLogo.enable();
		} else {
			this.tbDeleteLogo.disable();
		}
	},
	onLogoAdd: function () {
		var j = new de.RaumZeitLabor.PartDB2.UploadWindow();
		j.getForm().setImageType("iclogo");
		j.getForm().setCustomParams({ manufacturer: this.manufacturerId });
		j.show();
	},
	onLogoDelete: function () {
		var records = this.iclogoGrid.getSelectedRecords();
		var logo= records[0].get("id");
		
		Ext.Msg.confirm("Delete Logo", "Do you really want to delete the selected manufacturer logo?", function (btn, text) {
			if (btn == 'yes') {
				this.deleteLogo(logo);
			}
		}.createDelegate(this));
	},
	deleteLogo: function (logo) {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
    			"deleteManufacturerLogo");
    	call.setParameter("id", logo);
    	call.setHandler(function () {
    		this.store.reload();
    	}.createDelegate(this));
    	call.doCall();
	},
	setManufacturer: function (id) {
		this.manufacturerId = id;
	},
	
	editManufacturer: function (id) {
		this.setManufacturer(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
    			"getManufacturer");
    	call.setParameter("id", this.manufacturerId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.loadManufacturer]');
    	call.setHandler(this.onManufacturerLoaded.createDelegate(this));
    	call.doCall();
	},
	saveManufacturer: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
    			"saveManufacturer");
    	call.setParameter("id", this.manufacturerId);
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
		this.call.setParameter("id", this.manufacturerId);
		this.store.load();
		this.show();
	}
});