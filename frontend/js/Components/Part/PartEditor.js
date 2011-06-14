Ext.define('PartKeepr.PartEditor', {
	extend: 'PartKeepr.Editor',
	border: false,
	model: 'PartKeepr.Part',
	mode: 'add',
	layout: 'fit',
	bodyStyle: 'background:#DFE8F6;',
	initComponent: function () {
		var basicEditorFields = [{
				xtype: 'textfield',
				name: 'name',
				fieldLabel: i18n("Name"),
				allowBlank: false
			},{
				xtype: 'numberfield',
				fieldLabel: i18n('Minimum Stock'),
				allowDecimals: false,
				allowBlank: false,
				name: 'minStockLevel',
				value: 0,
				minValue: 0
			},{
				xtype: 'PartUnitComboBox',
				fieldLabel: i18n("Part Unit"),
				name: 'partUnit_id'
			},{
				xtype: 'CategoryComboBox',
				fieldLabel: i18n("Category"),
				name: 'category_id'
			},{
				xtype: 'StorageLocationComboBox',
				fieldLabel: i18n("Storage Location"),
				name: 'storageLocation_id',
				allowBlank: false
			},{
				xtype: 'FootprintComboBox',
				fieldLabel: i18n("Footprint"),
				name: 'footprint_id'
			},{
				xtype: 'textarea',
				fieldLabel: i18n("Comment"),
				name: 'comment'
			}];
		
		this.partDistributorGrid = Ext.create("PartKeepr.PartDistributorGrid", {
			title: i18n("Distributors"),
			layout: 'fit'
		});
		
		this.partManufacturerGrid = Ext.create("PartKeepr.PartManufacturerGrid", {
			title: i18n("Manufacturers"),
			layout: 'fit'
		});
		
		this.partParameterGrid = Ext.create("PartKeepr.PartParameterGrid", {
			title: i18n("Parameters"),
			layout: 'fit'
		});
		
		this.items = {
				xtype: 'tabpanel',
				border: false,
				plain: true,
				items: [{
					xtype: 'panel',
					border: false,
					autoScroll: true,
					layout: 'anchor',
					defaults: {
				        anchor: '100%',
				        labelWidth: 150
				    },
					bodyStyle: 'background:#DFE8F6;padding: 10px;',
					title: i18n("Basic Data"),
					items: basicEditorFields
				},
				this.partDistributorGrid,
				this.partManufacturerGrid,
				this.partParameterGrid
				]
		};
		
		this.on("startEdit", function () { this.mode = "edit"; }, this);
		
		this.addEvents("partSaved");
		
		this.callParent();
	},
	onItemSave: function () {
		if (!this.getForm().isValid()) {
			return;
		}
		
		var call = new PartKeepr.ServiceCall(
    			"Part", 
    			"addOrUpdatePart");
		
		if (this.rawValues.id) {
			call.setParameter("part", this.rawValues.id);
		}
		
		var values = this.getForm().getFieldValues();
		
		values.distributorChanges = {
			"inserts": PartKeepr.serializeRecords(this.partDistributorGrid.getStore().getNewRecords()),
			"updates": PartKeepr.serializeRecords(this.partDistributorGrid.getStore().getUpdatedRecords()),
			"removals": PartKeepr.serializeRecords(this.partDistributorGrid.getStore().getRemovedRecords())
		};
		
		values.manufacturerChanges = {
				"inserts": PartKeepr.serializeRecords(this.partManufacturerGrid.getStore().getNewRecords()),
				"updates": PartKeepr.serializeRecords(this.partManufacturerGrid.getStore().getUpdatedRecords()),
				"removals": PartKeepr.serializeRecords(this.partManufacturerGrid.getStore().getRemovedRecords())
			};
	
		values.parameterChanges = {
				"inserts": PartKeepr.serializeRecords(this.partParameterGrid.getStore().getNewRecords()),
				"updates": PartKeepr.serializeRecords(this.partParameterGrid.getStore().getUpdatedRecords()),
				"removals": PartKeepr.serializeRecords(this.partParameterGrid.getStore().getRemovedRecords())
		};
		call.setParameters(values);
		call.setHandler(Ext.bind(this.onPartSave, this));
		call.doCall();
	},
	onPartSave: function () {
		this.fireEvent("partSaved");
	}
});
