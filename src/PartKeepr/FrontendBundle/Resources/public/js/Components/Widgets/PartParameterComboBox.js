Ext.define("PartKeepr.PartParameterComboBox",{
    extend:"Ext.form.field.ComboBox",
    xtype: 'PartParameterComboBox',
    displayField: 'name',
    valueField: 'name',
    autoSelect: false,
    allowBlank: false,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: false,
    editable: true,
	triggers: {
        reload: {
            cls: "x-form-reload-trigger",
            weight: -1,
            handler: function ()
            {
                this.store.load();
            },
            scope: 'this'
        }
    },
    initComponent: function () {

    	this.store = Ext.create("Ext.data.Store", {
    		fields: [{ name: 'name' }],
			autoLoad: false,
    		proxy: {
    			type: 'ajax',
    			url: PartKeepr.getBasePath() + "/api/parts/getPartParameterNames",
    			reader: {
    				type: 'json'
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
		this.store.load();
    },
	setValue: function (val) {
    	this._oldValue = val;
    	this.callParent(arguments);
    }
});

