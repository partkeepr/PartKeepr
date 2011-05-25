Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerTree");

de.RaumZeitLabor.PartDB2.PartsManagerPartDetail = Ext.extend(Ext.TabPanel, {
	frame: true,
	border: false,
	activeTab: 0,
	initComponent: function () {
		
		this.partName = new Ext.form.DisplayField({
			fieldLabel: 'Name'
		});
		
		this.stockLevel = new Ext.form.DisplayField({
			fieldLabel: 'Bestand'
		});
		
		this.storageLocation = new Ext.form.DisplayField({
			fieldLabel: 'Lagerort'
		});
		
		this.footprint = new Ext.form.DisplayField({
			fieldLabel: 'Footprint'
		});
		
		this.comment = new Ext.form.DisplayField({
			fieldLabel: 'Kommentar'
		});
		
		this.minStockLevel = new Ext.form.DisplayField({
			fieldLabel: 'Min. Bestand'
		});
		
		this.items = [{
		            	xtype: 'form',
		            	title: 'Grunddaten',
		            	items: [
		            	        this.partName,
		            	        this.stockLevel,
		            	        this.storageLocation,
		            	        this.footprint,
		            	        this.comment,
		            	        this.minStockLevel
		            	        ]
		}];
		
		this.addButton = new Ext.Button({
			text: "Bestand einlagern",
			cls:'x-btn-text-icon',
			icon: 'resources/silkicons/brick_add.png',
			handler: this.addPartPrompt.createDelegate(this)
		});
		
		this.deleteButton = new Ext.Button({
			text: "Bestand entnehmen",
			cls:'x-btn-text-icon',
			icon: 'resources/silkicons/brick_delete.png',
			handler: this.deletePartPrompt.createDelegate(this)
		});
		
		this.bbar = new Ext.Toolbar({
			items: [
			        this.addButton,
			        this.deleteButton
			        ]
		});
		
		de.RaumZeitLabor.PartDB2.PartsManagerPartDetail.superclass.initComponent.call(this);
	},
	addPartPrompt: function () {
		Ext.Msg.prompt("Bestand hinzufügen", "Anzahl", this.addPartHandler.createDelegate(this));
	},
	addPartHandler: function (btn,a,c) {
		if (btn == "ok") {
			var call = new org.jerrymouse.service.Call(
	    			"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
	    			"addStock");
			call.setParameter("stock", a);
			call.setParameter("part", this.partId);
	    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
	    	call.setHandler(this.reloadPart.createDelegate(this));
	    	call.doCall();	
		}
	},
	deletePartPrompt: function () {
		Ext.Msg.prompt("Bestand entfernen", "Anzahl", this.deletePartHandler.createDelegate(this));
	},
	deletePartHandler: function (btn,a,c) {
		if (btn == "ok") {
			var call = new org.jerrymouse.service.Call(
	    			"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
	    			"deleteStock");
			call.setParameter("stock", a);
			call.setParameter("part", this.partId);
	    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
	    	call.setHandler(this.reloadPart.createDelegate(this));
	    	call.doCall();	
		}
	},
	reloadPart: function () {
		this.loadPart(this.partId);
	},
	loadPart: function (id) {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
    			"getPart");
		call.setParameter("part", id);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
    	call.setHandler(this.onPartLoaded.createDelegate(this));
    	call.doCall();
	},
	onPartLoaded: function (response) {
		this.partName.setValue(response.name);
		this.stockLevel.setValue(response.stockLevel);
		this.storageLocation.setValue(response.storageLocation.name);
		this.footprint.setValue(response.footprint.footprint);
		this.comment.setValue(response.comment);
		this.minStockLevel.setValue(response.minStockLevel);
		this.partId = response.id;
	}
});
