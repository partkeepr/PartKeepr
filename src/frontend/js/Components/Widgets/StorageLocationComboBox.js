Ext.define("PartKeepr.StorageLocationComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.StorageLocationComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
  
    initComponent: function () {
		this.store = Ext.create("Ext.data.Store",
			{
				model: 'PartKeepr.StorageLocation',
				proxy: PartKeepr.getRESTProxy("StorageLocation"),
				pageSize: -1,
				autoLoad: true
			});
		
		this.callParent();
    }
});

