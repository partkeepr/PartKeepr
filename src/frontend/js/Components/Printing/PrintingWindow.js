/**
 * The PrintingWindow can be used to configure a printing in more
 * detail and execute the printing request with the right configuration.
 */
Ext.define('PartKeepr.PrintingWindow', {
	extend: 'Ext.window.Window',
	
	constrainHeader: true,
	layout: {
	    type: 'vbox',
	    align: 'left'
	},
	buttonAlign:'center',

	width: 400,
	minWidth: 400,
	minHeight: 50,
	height: 150,
	
	modal: true,
	
	executeText: i18n("Print"),
	cancelText: i18n("Cancel"),
	
	title: i18n("Printing ..."),
	
	/**
	 * Creates the part editor and put it into the window.
	 */
	initComponent: function () {
		this.objectType = null;
		this.objectIds = null;
		
		this.configurationStore = Ext.create("Ext.data.Store", {
			autoLoad: true,
    		model: 'PartKeepr.Printing.PrintingJobConfiguration',
			pageSize: -1
    	});
		
		this.targetStore = Ext.create("Ext.data.Store", {
			autoLoad: true,
    		model: 'PartKeepr.User',
			pageSize: -1,
			remoteFilter: true,
			filters: [{
		         property: 'lastSeenMax',
		         value: '60'
		     },{
		    	 property: 'hideCurrentUser',
		    	 value: '1'
		     }]
    	});
		
		this.configurationSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.configurationStore,
		    valueField: 'id',
		    displayField: 'name',
			fieldLabel: i18n("Choose Configuration"),
			allowBlank: false,
			labelWidth: 140
			} );
		
		
		this.targetSelector = Ext.create('Ext.form.field.ComboBox',{
			store: this.targetStore,
		    valueField: 'id',
		    displayField: 'username',
			fieldLabel: i18n("Choose Target"),
			allowBlank: true,
			labelWidth: 140
			} );
		
		this.items = [ this.configurationSelector, this.targetSelector ];
		
		this.executeButton = Ext.create("Ext.button.Button", {
			text: this.executeText,
			icon: 'resources/fugue-icons/icons/disk.png',
			handler: Ext.bind(this.onExecute, this)
		});
		
		this.cancelButton = Ext.create("Ext.button.Button", {
			text: this.cancelText,
			icon: 'resources/silkicons/cancel.png',
			handler: Ext.bind(this.onCancel, this)
		});
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			defaults: {minWidth: 100},
			dock: 'bottom',
			ui: 'footer',
			pack: 'start',
			items: [ this.executeButton, this.cancelButton ]
		});
		
		this.buttons = [ this.bottomToolbar ];
		
		this.callParent();
	},
	/**
	 * Set the object type. They will be passed
	 * to the server later on.
	 */
	setObjectType: function( objectType ) {
		this.objectType = objectType;
		this.configurationStore.filter('objectType', objectType );
	},
	/**
	 * Set the ids of the objects which should be printed/exported
	 */
	setObjectIds: function( ids ) {
		this.objectIds = ids;
	},
	onCancel: function () {
		this.close();
	},
	onExecute: function () {
		executor = Ext.create('PartKeepr.PrintingExecutor');
		if (this.objectIds===null || this.objectType===null){
			Ext.Msg.alert(i18n("Error"),i18n("Unable to handle request: Missing data! This is a Bug, please report it!"));
		}
		config = this.configurationSelector.getValue();
		target = this.targetSelector.getValue();
		if (config!==null){
			executor.executePrint( config, this.objectType, this.objectIds, target);
			this.close();
		}
	}
});
