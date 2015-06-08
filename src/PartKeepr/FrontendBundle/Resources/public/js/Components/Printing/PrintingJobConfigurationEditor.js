Ext.define('PartKeepr.Printing.PrintingJobConfigurationEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.Printing.PrintingJobConfigurationEditor',
	saveText: i18n("Save Configuration"),

	layout: 'column',
	inSetRecordPhase: false,

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

		this.rendererSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.rendererStore,
			name: 'exportRenderer',
			valueField: 'id',
			displayField: 'name',
			fieldLabel: i18n("Renderer"),
			allowBlank: false,
			labelWidth: 130,
			listeners: {
				scope: this,
				change: function (field, newValue) {
					if (newValue){						
						this.onChangeRenderer( newValue );						
					}
				}
			}
		} );
		
		this.typeSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.typeStore,
			name: 'objectType',
			valueField: 'id',
			displayField: 'name',
			fieldLabel: i18n("Datatype"),
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
					this.rendererSelector,
					this.layoutSelector,
					this.typeSelector,
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
	editItem: function (record) {
		this.inSetRecordPhase = true;
		
		// FIXME: How can a base method can be called in Javascript?
		this.record = record;
		this.getForm().loadRecord(this.record);
		this.show();
		if (this.record.get("name") !== "") {
			this._setTitle(this.record.get("name"));
		}
		
		this.change = false;
		this.fireEvent("startEdit", this);
		
		this.inSetRecordPhase = false;
	},
	onChangeRenderer: function( renderer ) {
		this.typeStore.getProxy().extraParams.renderer = renderer;
		this.typeStore.load();
		if (!this.inSetRecordPhase)
			this.typeSelector.clearValue();
		
		var call = new PartKeepr.ServiceCall(
				"Printing", 
				"getNeededParameters");
		call.setParameter("renderer",renderer);
		
		call.setHandler(Ext.bind(this.onReceivedNeededParameters, this));
		call.doCall();
	},
	onReceivedNeededParameters: function (data) {
		var needPageBasicLayout = data.data.indexOf('PartKeepr\\Printing\\PageBasicLayout\\PageBasicLayout') != -1;
		
		if (needPageBasicLayout) {
			this.layoutSelector.show();
		} else {
			this.layoutSelector.hide();
			this.layoutSelector.clearValue();
		}
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
    	        	"call": "getAvailableTypes",
    	        	"renderer": ""
    	        },
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: false
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
					"call": "getAvailableRenderer"
				},
				headers: {
					session :PartKeepr.getApplication().getSession()
				}
			},
			autoLoad: true
		});




	}
});