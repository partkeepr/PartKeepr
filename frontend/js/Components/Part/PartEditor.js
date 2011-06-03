Ext.define('PartDB2.PartEditor', {
	extend: 'PartDB2.Editor',
	autoScroll: true,
	items: [{
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
	}],
	model: 'PartDB2.Part',
	mode: 'add',
	initComponent: function () {
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
		
		call.setParameters(values);
		call.setHandler(Ext.bind(this.onPartSave, this));
		call.doCall();
	},
	onPartSave: function () {
		this.fireEvent("partSaved");
	}
});
