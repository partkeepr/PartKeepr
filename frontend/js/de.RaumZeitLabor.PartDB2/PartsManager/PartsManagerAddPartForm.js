Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm");

de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm = Ext.extend(Ext.form.FormPanel, {
	frame: true,
	border: false,
	monitorValid: true,
	mode: 'add',
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
		
		this.categoryComboBox = new de.RaumZeitLabor.PartDB2.CategoryComboBox({
			fieldLabel: 'Kategorie',
			name: 'parent',
			anchor: '100%',
			style: 'margin-bottom: 8px;',
			validator: function (value) {
				if (value == "") {
					return "Es muß eine Kategorie ausgewählt werden";
				}
				return true;
			}.createDelegate(this),
		});
		
		this.commentField = new Ext.form.TextArea({
			fieldLabel: 'Kommentar',
			anchor: '100%',
		});
		
		this.partQuantityDisplay = new Ext.form.DisplayField({
			fieldLabel: 'Aktuelle Stückzahl',
			hidden: true,
			width: 100
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
		
		this.partStorageLocation = new Ext.form.ClearableComboBox({
			store: this.storageLocationStore,
			displayField: "name",
			anchor: '100%',
			mode: 'local',
			valueField: "id",
			fieldLabel: "Lagerort",
			validator: function (value) {
				if (value == "") {
					return "Ein Lagerort muß ausgewählt oder eingegeben werden";
				}
				
			}.createDelegate(this)
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
		
		this.footprintCombo = new Ext.form.ClearableComboBox({
			validator: function (value) {
				return true;
			}.createDelegate(this),
			store: this.footprintStore,
			displayField: "footprint",
			anchor: '100%',
			mode: 'local',
			valueField: "id",
			fieldLabel: "Footprint"
		});

		this.keepStorageLocation = new Ext.form.Checkbox({
			boxLabel: "Lagerort nach dem Speichern beibehalten"
		});

		
		this.items = [
		              this.categoryComboBox,
		              this.partName,
		              {
		            	  xtype: "compositefield",
		            	  fieldLabel: "Stück",
		            	  items: [
		            	          	this.partQuantityDisplay,
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
		              this.keepStorageLocation,
		              this.footprintCombo,
		              this.commentField
		              ];
	
		var btntext;
		
		if (this.mode == "add") {
			btntext = "Hinzufügen";
		} else {
			btntext = "Speichern";
		}
		
		this.addButton = new Ext.Button({
			text: btntext,
			handler: this.onAddAction.createDelegate(this)
		});
		
		this.cancelButton = new Ext.Button({
			text: "Abbrechen",
			handler: this.onCancelAction.createDelegate(this)
		});
		
		
		this.buttons = [
		                this.addButton,
		                this.cancelButton,
		                
		                ];
		
		this.addEvents("cancelEntry", "partLoaded", "partSaved");
		de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm.superclass.initComponent.call(this);
	},
	isStoreLocationInList: function () {
		var foundId = this.partStorageLocation.store.findExact("id", this.partStorageLocation.getValue());
		var foundName = this.partStorageLocation.store.findExact("name", this.partStorageLocation.getValue());
		
		if (foundId !== -1) {
			return true;
		} else if (foundName !== -1) {
			return true;
		} else {
			return false;
		}
	},
	getStoreLocation: function () {
		var foundId = this.partStorageLocation.store.findExact("id", this.partStorageLocation.getValue());
		var foundName = this.partStorageLocation.store.findExact("name", this.partStorageLocation.getValue());
		
		if (foundId !== -1) {
			return foundId;
		}
		
		if (foundName !== 1) {
			return foundName;
		}
		
		return null;
	},
	onAddAction: function () {
		if (this.getForm().isValid()) {
			
			var call = new org.jerrymouse.service.Call(
	    			"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
	    			"addOrUpdatePart");
			
			if (this.mode == "edit") {
				call.setParameter("part", this.partId)
			}
			
			call.setParameter("category", this.categoryComboBox.parentId)
			call.setParameter("name", this.partName.getValue());
			call.setParameter("quantity", this.partQuantity.getValue());
			call.setParameter("minstock", this.partMinStock.getValue());
			
			call.setParameter("storagelocation", this.getStorageLocation());
			call.setParameter("footprint", this.footprintCombo.getValue());
			call.setParameter("comment", this.commentField.getValue());

			call.setHandler(this.onPartAdded.createDelegate(this))
			call.doCall();
		}
	},
	getStorageLocation: function () {
		var idx = this.partStorageLocation.store.findExact("id", this.partStorageLocation.getValue());
		
		if (idx !== -1) {
			return this.partStorageLocation.store.getAt(idx).get("id");
		}
		
		var idx = this.partStorageLocation.store.findExact("name", this.partStorageLocation.getValue());
		
		if (idx !== -1) {
			return this.partStorageLocation.store.getAt(idx).get("id");
		}
		
		return idx;
	},
	onPartAdded: function () {
		this.clearForm();
		if (this.mode == "edit") {
			this.fireEvent("partSaved");
		}
	},
	onCancelAction: function () {
		this.clearForm(true);

		this.fireEvent("cancelEntry");
	},
	loadPart: function (part) {
		var call = new org.jerrymouse.service.Call(
				"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
				"getPart");
		
		this.setEditMode(part);
		
		call.setParameter("part", part);
		call.setHandler(this.onPartLoaded.createDelegate(this));
		call.doCall();
	},
	setEditMode: function (part) {
		this.mode = "edit";
		this.partQuantity.disable();
		this.keepStorageLocation.hide();
		this.partId = part;
		this.partQuantityDisplay.show();
		this.partQuantity.hide();
		this.addButton.setText("Speichern");
	},
	setAddMode: function () {
		this.mode = "add";
		this.keepStorageLocation.show();
		this.partQuantity.enable();
		this.partId = null;
		this.partQuantityDisplay.hide();
		this.partQuantity.show();
		this.addButton.setText("Hinzufügen");
	},
	onPartLoaded: function (response) {
		
		this.commentField.setValue(response.comment);
		this.footprintCombo.setValue(response.footprint.footprint);
		this.partMinStock.setValue(response.minStockLevel);
		this.partName.setValue(response.name);
		
		if (this.mode == "edit") {
			this.partQuantityDisplay.setValue(response.stockLevel);
		} else {
			this.partQuantity.setValue(response.stockLevel);
		}
				
		this.partStorageLocation.setValue(response.storageLocation.name);
		
		this.categoryComboBox.setValue(response.category.name);
		this.categoryComboBox.parentId = response.category.id;

		this.fireEvent("partLoaded");
	},
	clearForm: function (force) {
		this.partName.setRawValue("");
		this.partQuantity.setRawValue(0);
		this.partMinStock.setRawValue(0);
		this.footprintCombo.setRawValue("");
		this.commentField.setRawValue("");
		
		if (this.keepStorageLocation.getValue() !== true || force == true)
		{
			this.partStorageLocation.setRawValue("");
		}
		
		this.categoryComboBox.setValue("");
		this.categoryComboBox.parentId = null;
		
		this.partName.focus(false, 10);
	},
	reloadStorageLocations: function () {
		this.storageLocationStore.reload();
		this.footprintStore.reload();
	}
});