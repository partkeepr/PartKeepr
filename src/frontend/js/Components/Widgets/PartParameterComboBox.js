Ext.define("PartKeepr.PartParameterComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.PartParameterComboBox',
    displayField: 'name',
    valueField: 'name',
    autoSelect: false,
    allowBlank: false,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: false,
    editable: true,
    initComponent: function () {
		//this.store = PartKeepr.getApplication().getPartUnitStore();
    	
    	this.store = Ext.create("Ext.data.Store", {
    		fields: [{ name: 'name' }],
    		proxy: {
    			type: 'ajax',
    			url: PartKeepr.getBasePath() + "/Part/getPartParameterNames",
    			reader: {
    				type: 'json',
    				root: 'response.data'
    			}
    		}
    	});
    	
    	this.store.load();
		
		/* Workaround to remember the value when loading */
		this.store.on("beforeload", function () {
			this._oldValue = this.getValue();
		}, this);
		
		/* Set the old value when load is complete */
		this.store.on("load", function () {
			this.setValue(this._oldValue);
		}, this);
		
		this.callParent();
    }
});

