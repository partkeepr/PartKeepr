/**
 * Represents the multi create window.
 * @class PartKeepr.StorageLocationMultiCreateWindow
 */
Ext.define("PartKeepr.StorageLocationMultiCreateWindow", {
	extend: 'Ext.Window',
	
	// Layout stuff
	layout: 'fit',
	width: 500,
	height: 250,
	
	// Title
	title: i18n("Multi-Create Storage Locations"),
	
	/**
	 * Initializes the window by adding the buttons and the form
	 */
	initComponent: function () {
		this.form = Ext.create("PartKeepr.StorageLocationMultiAddDialog");
		
		this.items = [ this.form ];
		
		// Creates the add button as instance, so we can disable it easily.
		this.addButton = Ext.create("Ext.button.Button", {
       		text: i18n("Create Storage Locations"),
       		icon: 'resources/silkicons/add.png',
       		handler: this.onAddClick,
       		scope: this
		});
		
		this.dockedItems = [{
			xtype: 'toolbar',
			defaults: {minWidth: 100},
			dock: 'bottom',
			ui: 'footer',
			pack: 'start',
			items: [this.addButton,
	       	{
	       		text: i18n("Close"),
	       		handler: this.onCloseClick,
	       		scope: this,
	       		icon: 'resources/silkicons/cancel.png'
	       	}]
		}];
		
		this.callParent();
	},
	/**
	 * Called when the "Add" button was clicked. Sends a call to the server
	 * to create the storage locations
	 */
	onAddClick: function () {
		this.addButton.disable();
		var call = new PartKeepr.ServiceCall("StorageLocation", "massCreate");
		call.setParameter("storageLocations", this.form.getStorageLocations());
		call.setHandler(Ext.bind(this.onAdded, this));
		call.doCall();
		
	},
	/**
	 * Called when the service call was completed. Displays an error dialog
	 * if something went wrong.
	 * @param response The server response
	 */
	onAdded: function (response) {
		this.addButton.enable();
		
		
		if (response.data.length > 0) {
			Ext.Msg.alert(i18n("Errors occured"), implode("<br>", response.data));
		} else {
			this.close();
		}
	},
	/**
	 * Close the dialog
	 */
	onCloseClick: function () {
		this.close();
	}
	
});