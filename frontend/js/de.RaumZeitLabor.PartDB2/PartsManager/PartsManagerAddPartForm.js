Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm");

de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm = Ext.extend(Ext.form.FormPanel, {
	frame: true,
	border: false,
	monitorValid: true,
	initComponent: function () {
		
		
		this.partName = new Ext.form.TextField({
			fieldLabel: "Name",
			allowBlank: false,
			anchor: '100%'
		});
		
		this.partQuantity = new Ext.form.NumberField({
			allowDecimals: false,
			fieldLabel: "Stück",
			allowBlank: false,
			flex: 1
		});
		
		this.partMinStock = new Ext.form.NumberField({
			allowDecimals: false,
			allowBlank: false,
			id: Ext.id(),
			flex: 1
		});
		
		
		// @todo Put the storage location combobox into an own component
		this.storageLocationCall = new org.jerrymouse.service.Call(
				"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
				"getStorageLocations");
	
		this.storageLocationStore = new Ext.data.JsonStore({
	        root: 'storageLocations',
	        totalProperty: 'totalCount',
	        proxy: new ServiceCallDataProxy(this.storageLocationCall),
	        idProperty: 'id',
	        allowBlank: false,
	        remoteSort: false,
	        fields: [
	            'id',
	            'name'
	        ]
	    });
		
		this.partStorageLocation = new Ext.form.ComboBox({
			store: this.storageLocationStore,
			displayField: "name",
			anchor: '100%',
			mode: 'local',
			valueField: "id",
			fieldLabel: "Lagerort"
		});
		
		// @todo Put the footprint combobox into an own component
		this.footprintCall = new org.jerrymouse.service.Call(
				"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
				"getFootprints");
	
		this.footprintCall.setParameter("limit", -1);
		
		this.footprintStore = new Ext.data.JsonStore({
	        root: 'footprints',
	        totalProperty: 'totalCount',
	        proxy: new ServiceCallDataProxy(this.footprintCall),
	        idProperty: 'id',
	        remoteSort: false,
	        fields: [
	            'id',
	            'footprint'
	        ]
	    });
		
		this.footprintCombo = new Ext.form.ComboBox({
			store: this.footprintStore,
			displayField: "footprint",
			anchor: '100%',
			mode: 'local',
			valueField: "id",
			fieldLabel: "Footprint"
		});
		
		this.items = [
		              this.partName,
		              {
		            	  xtype: "compositefield",
		            	  fieldLabel: "Stück",
		            	  items: [
		            	          	this.partQuantity,
		            	          	{
		            	          		xtype: "label",
		            	          		forId: this.partMinStock.id,
		            	          		text: "Min. Bestand"
		            	          	},
		            	          	this.partMinStock
		            	          ]
		              },		              
		              this.partStorageLocation,
		              this.footprintCombo];
	
		de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm.superclass.initComponent.call(this);
	},
	reloadStorageLocations: function () {
		this.storageLocationStore.reload();
		this.footprintStore.reload();
	}
});
	 