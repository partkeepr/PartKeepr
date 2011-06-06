Ext.define('PartDB2.PartEditor', {
	extend: 'PartDB2.Editor',
	autoScroll: true,
	border: false,
	model: 'PartDB2.Part',
	mode: 'add',
	layout: 'fit',
	bodyStyle: 'background:#DFE8F6;',
	initComponent: function () {
		var basicEditorFields = [{
				xtype: 'textfield',
				name: 'name',
				fieldLabel: i18n("Name")
			},{
				xtype: 'numberfield',
				fieldLabel: i18n('Minimum Stock'),
				allowDecimals: false,
				allowBlank: false,
				name: 'minStockLevel'
			},{
				xtype: 'CategoryComboBox',
				fieldLabel: i18n("Category"),
				name: 'category_id'
			},{
				xtype: 'StorageLocationComboBox',
				fieldLabel: i18n("Storage Location"),
				name: 'storageLocation_id'
			},{
				xtype: 'FootprintComboBox',
				fieldLabel: i18n("Footprint"),
				name: 'footprint_id'
			},{
				xtype: 'textarea',
				fieldLabel: i18n("Comment"),
				name: 'comment'
			}];
		
		this.partDistributorGrid = Ext.create("PartDB2.PartDistributorGrid", {
			title: i18n("Distributors"),
			layout: 'fit'
		});
		
		this.partManufacturerGrid = Ext.create("PartDB2.PartManufacturerGrid", {
			title: i18n("Manufacturers"),
			layout: 'fit'
		});
		
		this.items = {
				xtype: 'tabpanel',
				border: false,
				items: [{
					xtype: 'panel',
					border: false,
					bodyStyle: 'background:#DFE8F6;padding: 10px;',
					title: i18n("Basic Data"),
					items: basicEditorFields
				},
				this.partDistributorGrid,
				this.partManufacturerGrid
				]
		};
		
		this.on("startEdit", function () { this.mode = "edit"; }, this);
		
		this.addEvents("partSaved");
		
		this.callParent();
	},
	onItemSave: function () {
		var call = new PartDB2.ServiceCall(
    			"Part", 
    			"addOrUpdatePart");
		
		if (this.rawValues.id) {
			call.setParameter("part", this.rawValues.id);
		}
		
		var values = this.getForm().getFieldValues();
		
		values.distributorChanges = {
			"inserts": PartDB2.serializeRecords(this.partDistributorGrid.getStore().getNewRecords()),
			"updates": PartDB2.serializeRecords(this.partDistributorGrid.getStore().getUpdatedRecords()),
			"removals": PartDB2.serializeRecords(this.partDistributorGrid.getStore().getRemovedRecords())
		};
		
		values.manufacturerChanges = {
				"inserts": PartDB2.serializeRecords(this.partManufacturerGrid.getStore().getNewRecords()),
				"updates": PartDB2.serializeRecords(this.partManufacturerGrid.getStore().getUpdatedRecords()),
				"removals": PartDB2.serializeRecords(this.partManufacturerGrid.getStore().getRemovedRecords())
			};
	
		call.setParameters(values);
		call.setHandler(Ext.bind(this.onPartSave, this));
		call.doCall();
	},
	onPartSave: function () {
		this.fireEvent("partSaved");
	}
});
