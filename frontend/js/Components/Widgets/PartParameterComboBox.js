Ext.define("PartDB2.PartParameterComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.PartParameterComboBox',
    displayField: 'name',
    valueField: 'name',
    autoSelect: false,
    queryMode: 'remote',
    triggerAction: 'all',
    forceSelection: false,
    editable: true,
    initComponent: function () {
		//this.store = PartDB2.getApplication().getPartUnitStore();
    	
    	this.store = Ext.create("Ext.data.Store", {
    		fields: [{ name: 'name' }],
    		proxy: {
    			type: 'ajax',
    			url: PartDB2.getBasePath() + "/Part/getPartParameterNames",
    			reader: {
    				type: 'json',
    				root: 'response.data'
    			}
    		}
    	});
		
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

