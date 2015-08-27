Ext.define("PartKeepr.StorageLocationComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.StorageLocationComboBox',
    displayField: 'name',
    valueField: '@id',
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
				model: 'PartKeepr.StorageLocationBundle.Entity.StorageLocation',
				pageSize: 99999999,
				autoLoad: true
			});
		
		this.callParent();
    },
    setValue: function (val) {
    	if (val === 0) {
    		return;
    	}
    	this.callParent(arguments);
    }
});

