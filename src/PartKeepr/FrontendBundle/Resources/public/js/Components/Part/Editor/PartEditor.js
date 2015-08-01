/**
 * @class PartKeepr.PartEditor

 * <p>The PartEditor provides an editing form for a part. It contains multiple tabs, one for each nested record.</p>
 */
Ext.define('PartKeepr.PartEditor', {
	extend: 'PartKeepr.Editor',
	
	// Assigned model
	model: 'PartKeepr.PartBundle.Entity.Part',
	
	// Layout stuff
	border: false,
	layout: 'fit',
	bodyStyle: 'background:#DBDBDB;',
	
	/**
	 * Initializes the editor fields
	 */
	initComponent: function () {
		// Defines the overall height of all fields, used to calculate the anchoring for the description field
		var overallHeight = (this.partMode == "create") ? '-280' : '-235';
		
		this.nameField = Ext.create("Ext.form.field.Text", {
			name: 'name',
			fieldLabel: i18n("Name"),
			allowBlank: false,
			labelWidth: 150
		});
		
		this.storageLocationComboBox = Ext.create("PartKeepr.StorageLocationComboBox",
			{
				fieldLabel: i18n("Storage Location"),
				name: 'storageLocation',
				allowBlank: false,
				labelWidth: 150
			});
		
		this.storageLocationComboBox.store.on("load", function () {
			// Re-trigger validation because of asynchronous loading of the storage location field,
			// which would be marked invalid because validation happens immediately, but after loading
			// the storage locations, the field is valid, but not re-validated.
			
			// This workaround is done twice; once after the store is loaded and once when we start editing,
			// because we don't know which event will come first
			this.getForm().isValid();
		}, this);
		
		this.footprintNone = Ext.create("Ext.form.field.Radio", {
				boxLabel: i18n("None"),
				name: 'footprint_mode',
				margin: {
					right: 5
				},
				value: "unset",
				listeners: {
					scope: this,
					change: function (field, newValue) {
						if (newValue === true) {
							this.footprintComboBox.clearValue();
						}
					}
				}
			});
		
		this.footprintSet = Ext.create("Ext.form.field.Radio", {
			name: 'footprint_mode',
			margin: {
				right: 5
			},
			value: "set"
		});
		
		/*
		 * Creates the footprint combo box. We listen for the "change" event, because we need to set the footprint
		 * comboboxes to the right state, depending on the selection. Another way would be to patch the combobox
		 * to support "null" values, however, this is a major change within ExtJS and probably not supported for
		 * updates of ExtJS.
		 */
		this.footprintComboBox = Ext.create("PartKeepr.FootprintComboBox", {
				name: 'footprint',
				flex: 1,
				listeners: {
					scope: this,
					change: function (field, newValue) {
						if (newValue !== 0) {
							this.footprintSet.setValue(true);
						}
					}
				}
		});
		
		// Defines the basic editor fields
		var basicEditorFields = [
			this.nameField,
			{
				xtype: 'textfield',
				fieldLabel: i18n("Description"),
				name: 'description'
			},{
				layout: 'column',
				bodyStyle: 'background:#DBDBDB',
				border: false,
				items: [{
						xtype: 'numberfield',
						fieldLabel: i18n('Minimum Stock'),
						allowDecimals: false,
						allowBlank: false,
						labelWidth: 150,
						name: 'minStockLevel',
						value: 0,
						columnWidth: 0.5,
						minValue: 0
					},{
						xtype: 'PartUnitComboBox',
						fieldLabel: i18n("Part Unit"),
						columnWidth: 0.5,
						margin: "0 0 0 5",
						name: 'partUnit',
						value: PartKeepr.getApplication().getDefaultPartUnit().get("id")
					}]
			},{
				xtype: 'CategoryComboBox',
				fieldLabel: i18n("Category"),
				name: 'category'
			},
			this.storageLocationComboBox,
			{
				xtype: 'fieldcontainer',
				layout: 'hbox',
				fieldLabel: i18n("Footprint"),
				defaults: {
	                hideLabel: true
	            },
				items: [
				        this.footprintNone,
				        this.footprintSet,
				        this.footprintComboBox
				       ]
			},{
				xtype: 'textarea',
				fieldLabel: i18n("Comment"),
				name: 'comment',
				anchor: '100% ' + overallHeight
			},
			{
				xtype: 'fieldcontainer',
				layout: 'hbox',
				fieldLabel: i18n("Status"),
				defaults: {
	                hideLabel: true
	            },
	            items: [{
	            	xtype: 'textfield',
	            	fieldLabel: i18n("Status"),
	            	flex: 1,
	            	name: 'status'
	            },{
	            	xtype: 'checkbox',
	            	hideEmptyLabel: false,
	            	fieldLabel: '',
	            	margins: {
	            		left: 5
	            	},
	            	boxLabel: i18n("Needs Review"),
	            	name: 'needsReview'
	            }]
			},{
				xtype: 'textfield',
				fieldLabel: i18n("Condition"),
				name: 'partCondition'
			},{
                xtype: 'fieldcontainer',
                layout: 'hbox',
                items : [{
                    xtype: 'textfield',
                    labelWidth: 150,
                    fieldLabel: i18n("Internal Part Number"),
                    name: 'internalPartNumber',
                    flex: 1
                },{
                    xtype: 'displayfield',
                    margins: {
                        left: 5
                    },
                    fieldLabel: i18n("Internal ID"),
                    name: 'id'
                }]

			}];
		
		// Creates the distributor grid
		this.partDistributorGrid = Ext.create("PartKeepr.PartDistributorGrid", {
			title: i18n("Distributors"),
			iconCls: 'icon-lorry',
			layout: 'fit'
		});
		
		// Creates the manufacturer grid
		this.partManufacturerGrid = Ext.create("PartKeepr.PartManufacturerGrid", {
			title: i18n("Manufacturers"),
			iconCls: 'icon-building',
			layout: 'fit'
		});
		
		// Creates the parameter grid
		this.partParameterGrid = Ext.create("PartKeepr.PartParameterGrid", {
			title: i18n("Parameters"),
			iconCls: 'icon-table',
			layout: 'fit'
		});
		
		// Creates the attachment grid
		this.partAttachmentGrid = Ext.create("PartKeepr.PartAttachmentGrid", {
			title: i18n("Attachments"),
			iconCls: 'icon-attach',
			layout: 'fit'
		});
		
		// Adds stock level fields for new items
		if (this.partMode && this.partMode == "create") {
			this.initialStockLevel = Ext.create("Ext.form.field.Number", {
				fieldLabel: i18n("Initial Stock Level"),
				name: "initialStockLevel",
				labelWidth: 150,
				columnWidth: 0.5
			});
			
			this.initialStockLevelUser = Ext.create("PartKeepr.UserComboBox", {
				fieldLabel: i18n("Stock User"),
				name: 'initialStockLevelUser',
				columnWidth: 0.5,
				margin: "0 0 0 5"
			});
			
			basicEditorFields.push({
				layout: 'column',
				bodyStyle: 'background:#DBDBDB',
				border: false,
				items: [
				        this.initialStockLevel,
				        this.initialStockLevelUser
				]
			});
			
			this.initialStockLevelPrice = Ext.create("PartKeepr.CurrencyField", {
				fieldLabel: i18n('Price'),
				labelWidth: 150,
				columnWidth: 0.5,
				name: 'initialStockLevelPrice'
			});
			
			this.initialStockLevelPricePerItem = Ext.create("Ext.form.field.Checkbox", {
				boxLabel: i18n("Per Item"),
				columnWidth: 0.5,
				margin: "0 0 0 5",
				name: 'initialStockLevelPricePerItem'
			});
			
			basicEditorFields.push({
				layout: 'column',
				bodyStyle: 'background:#DBDBDB',
				border: false,
				items: [
				        this.initialStockLevelPrice,
				        this.initialStockLevelPricePerItem
				]
			});
			
			
		}
		
		// Create a tab panel of all fields
		this.items = {
				xtype: 'tabpanel',
				border: false,
				plain: true,
				items: [{
					iconCls: 'icon-brick',
					xtype: 'panel',
					border: false,
					autoScroll: false,
					layout: 'anchor',
					defaults: {
				        anchor: '100%',
				        labelWidth: 150
				    },
					bodyStyle: 'background:#DBDBDB;padding: 10px;',
					title: i18n("Basic Data"),
					items: basicEditorFields
				},
				this.partDistributorGrid,
				this.partManufacturerGrid,
				this.partParameterGrid,
				this.partAttachmentGrid
				]
		};
		
		this.on("startEdit", this.onEditStart, this, { delay: 200 });
		this.on("itemSaved", this._onItemSaved, this);
		
		this.callParent();
		
		this.on("itemSave", this.onItemSave, this);
		
	},
	/**
	 * Cleans up the record prior saving.
	 */
	onItemSave: function () {
		var removeRecords = [], j;
		
		/**
		 * Iterate through all records and check if a valid distributor
		 * ID is assigned. If not, the record is removed as it is assumed
		 * that the record is invalid and being removed.
		 */
		for (j=0;j<this.record.distributors().getCount();j++) {
			if (this.record.distributors().getAt(j).get("distributor_id") === 0) {
				removeRecords.push(this.record.distributors().getAt(j));
			}
		}
		
		if (removeRecords.length > 0) {
			this.record.distributors().remove(removeRecords);
		}
		
		removeRecords = [];
		
		/**
		 * Iterate through all records and check if a valid parameter
		 * ID is assigned. If not, the record is removed as it is assumed
		 * that the record is invalid and being removed.
		 */

		for (j=0;j<this.record.parameters().getCount();j++) {
			if (this.record.parameters().getAt(j).get("unit_id") === 0) {
				removeRecords.push(this.record.parameters().getAt(j));
			}
		}
		
		if (removeRecords.length > 0) {
			this.record.parameters().remove(removeRecords);
		}
		
		removeRecords = [];
		
		/**
		 * Iterate through all records and check if a valid manufacturer
		 * ID is assigned. If not, the record is removed as it is assumed
		 * that the record is invalid and being removed.
		 */

		for (j=0;j<this.record.manufacturers().getCount();j++) {
			if (this.record.manufacturers().getAt(j).get("manufacturer_id") === 0) {
				removeRecords.push(this.record.manufacturers().getAt(j));
			}
		}
		
		if (removeRecords.length > 0) {
			this.record.manufacturers().remove(removeRecords);
		}
		
		/**
		 * Check if the storage location is valid. If not, try an exact, case-insensitive match for the
		 * storage location name and inject that into the record.
		 */
		if (isNaN(this.record.get("storageLocation"))) {
			var storageLocationRecord = this.storageLocationComboBox.getStore().findRecord(
					"name",
					this.storageLocationComboBox.getValue(),
					0, false, false, true)	;
			
			this.record.set("storageLocation", storageLocationRecord.get("id"));
		}
		
		// Force footprint to be "null" when the checkbox is checked.
		if (this.footprintNone.getValue() === true) {
			this.record.set("footprint", 0);
		}
		
	},
	onEditStart: function () {
		this.bindChildStores();
		this.nameField.focus();
		
		// Re-trigger validation because of asynchronous loading of the storage location field,
		// which would be marked invalid because validation happens immediately, but after loading
		// the storage locations, the field is valid, but not re-validated.
		
		// This workaround is done twice; once after the store is loaded and once when we start editing,
		// because we don't know which event will come first
		this.getForm().isValid();
		
		if (this.record.get("footprint") === 0) {
			this.footprintNone.setValue(true);
		} else {
			this.footprintSet.setValue(true);
		}
	},
	_onItemSaved: function () {
		this.fireEvent("partSaved", this.record);
		
		if (this.keepOpenCheckbox.getValue() !== true && this.createCopyCheckbox.getValue() !== true) {
			this.fireEvent("editorClose", this);
		} else {
			var newItem;
			if (this.partMode == "create") {
				if (this.copyPartDataCheckbox.getValue() === true) {
					data = this.record.getData(true);
					data.id = null;
					newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
					newItem.setDataWithAssociations(data);

					this.editItem(newItem);
				} else {
					newItem = Ext.create("PartKeepr.PartBundle.Entity.Part", this.partDefaults);
					this.editItem(newItem);
				}
			} else {
				var data = this.record.getData(true);
				data.id = null;
				newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
				newItem.setDataWithAssociations(data);

				this.editItem(newItem);
			}
			
			
			
			
		}
	},
	bindChildStores: function () {
		this.partDistributorGrid.bindStore(this.record.distributors());
		this.partManufacturerGrid.bindStore(this.record.manufacturers());
		this.partParameterGrid.bindStore(this.record.parameters());
		this.partAttachmentGrid.bindStore(this.record.attachments());
	},
	_setTitle: function (title) {
		var tmpTitle;
		
		if (this.record.phantom) {
			tmpTitle = i18n("Add Part");
		} else {
			tmpTitle = i18n("Edit Part");	
		}
		
		if (title !== "") {
			 tmpTitle = tmpTitle + ": " + title;
		}
		
		this.fireEvent("titleChange", tmpTitle);
	}
});
