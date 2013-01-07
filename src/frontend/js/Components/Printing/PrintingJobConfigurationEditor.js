Ext.define('PartKeepr.Printing.PrintingJobConfigurationEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.Printing.PrintingJobConfigurationEditor',
	saveText: i18n("Save Configuration"),

	layout: 'column',

	initComponent: function () {
		this.createStores();

		this.layoutSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.layoutStore,
			name: 'pageLayout',
		    valueField: 'id',
		    displayField: 'name',
			fieldLabel: i18n("Basic Page Layout"),
			allowBlank: false,
			labelWidth: 130
			} );

		this.typeSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.typeStore,
			name: 'objectType',
			valueField: 'id',
			displayField: 'name',
			fieldLabel: i18n("Datatype"),
			allowBlank: false,
			labelWidth: 130,
			listeners: {
				scope: this,
				change: function (field, newValue) {
					if (newValue){
						this.rendererStore.getProxy().extraParams.objectType = newValue;
						this.rendererStore.load();
					}
					// We will always clear the value to have a clean box, also if the
					// loaded store does not contain the actually selected value.
					this.rendererSelector.clearValue();
				}
			}
		} );

		this.rendererSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.rendererStore,
			name: 'exportRenderer',
			valueField: 'id',
			displayField: 'name',
			fieldLabel: i18n("Renderer"),
			allowBlank: false,
			labelWidth: 130
		} );

		this.items =  [{
			columnWidth: 1,
   			minWidth: 500,
   			layout: 'anchor',
			xtype: 'container',
			margin: '0 5 0 0',
			items: [{
			        	xtype: 'textfield',
			        	name: 'name',
			        	anchor: '100%',
			        	labelWidth: 130,
			        	fieldLabel: i18n("Name")
					},
					{
						xtype: 'textfield',
						name: 'comment',
						anchor: '100%',
						labelWidth: 130,
						fieldLabel: i18n("Comment")
					},
					this.layoutSelector,
					this.typeSelector,
					this.rendererSelector,
					{
						xtype: 'textarea',
						name: 'rendererConfiguration',
						anchor: '100%',
						labelWidth: 130,
						fieldLabel: i18n("Additional Configuration")
					}
					]}
		];


		this.on("startEdit", this.onStartEdit, this);
		this.callParent();
	},
	onStartEdit: function () {
		this.store.getProxy().extraParams.PrintingJobConfiguration = this.record.get("id");
		this.store.load();
	},
	createStores: function() {
		this.layoutStore = Ext.create("Ext.data.Store", {
			autoLoad: true,
			model: 'PartKeepr.Printing.PageBasicLayout',
			pageSize: -1
		});

		this.typeStore = Ext.create("Ext.data.Store", {
    		model: 'PartKeepr.PrintingType',
    		proxy: {
    	        type: 'ajax',
    	        reader: {
    	            type: 'json',
    	            root: 'response.data'
    	        },
    	        url : 'service.php',
    	        extraParams: {
    	        	"service": "Printing",
    	        	"call": "getAvailableTypes"
    	        },
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: true
    	});


		this.rendererStore = Ext.create("Ext.data.Store", {
			model: 'PartKeepr.PrintingRenderer',
			proxy: {
				type: 'ajax',
				reader: {
					type: 'json',
					root: 'response.data'
				},
				url : 'service.php',
				extraParams: {
					"service": "Printing",
					"call": "getAvailableRenderer",
					"objectType": ""
				},
				headers: {
					session :PartKeepr.getApplication().getSession()
				}
			},
			autoLoad: false
		});




	}
});