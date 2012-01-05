Ext.define("PartKeepr.StorageLocationComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.StorageLocationComboBox',
    displayField: 'name',
    valueField: 'id',
    queryMode: 'local',
    triggerAction: 'all',
    
    trigger2Cls: Ext.baseCSSPrefix + 'form-reload-trigger',
    
    onTrigger1Click: function () {
    	this.onTriggerClick();
    },
    onTrigger2Click: function () {
    	this.expand();
    	this.store.load();
    },
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

