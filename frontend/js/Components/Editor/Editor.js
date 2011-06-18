Ext.define('PartKeepr.Editor', {
	extend: 'Ext.form.Panel',
	alias: 'widget.Editor',
	trackResetOnLoad: true,
	bodyStyle: 'background:#DFE8F6;padding: 10px;',
	record: null,		// The record which is currently edited
	saveText: i18n("Save"),
	cancelText: i18n("Cancel"),
	model: null,
	layout: 'anchor',
	change: false,
	autoScroll: true,
    defaults: {
        anchor: '100%',
        labelWidth: 150
    },
    onFieldChange: function () {
    	return;
    	
    	// @todo Finish implementing the dirty flag later
    	/*if (this.change == false) {
    		this.setTitle(this.record.getRecordName() + "*");
    	}
    	
    	this.change = true;*/
    },
	initComponent: function () {
		this.saveButton = Ext.create("Ext.button.Button", {
			text: this.saveText,
			handler: Ext.bind(this.onItemSave, this)
		});
		
		this.cancelButton = Ext.create("Ext.button.Button", {
			text: this.cancelText,
			handler: Ext.bind(this.onCancelEdit, this)
		});
		
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				enableOverflow: true,
				margin: '10px',
				dock: 'bottom',
				ui: 'footer',
				items: [ this.saveButton, this.cancelButton ]
			}]});
		
		this.on("dirtychange", function (form, dirty) {
			// @todo Check dirty flag
			// Waiting for reply on http://www.sencha.com/forum/showthread.php?135142-Ext.form.Basic.loadRecord-causes-form-to-be-dirty&p=607588#post607588
		});
		
		this.addEvents("editorClose", "startEdit", "itemSaved");
		
		this.defaults.listeners = {
        	"change": Ext.bind(this.onFieldChange, this)
        };
		
		this.callParent();
	},
	onCancelEdit: function () {
		this.fireEvent("editorClose", this);
	},
	newItem: function () {
		var j = Ext.create(this.model);
			
		this.editItem(j);
	},
	editItem: function (record) {
		this.record = record;
		this.getForm().loadRecord(this.record);
		this.show();
		if (this.record.getRecordName() !== "") {
			this.setTitle(this.record.getRecordName());
		}
		
		this.change = false;
		this.fireEvent("startEdit", this);
	},
	getRecordId: function () {
		if (this.record) {
			return this.record.get("id");
		} else {
			return null;
		}
	},
	onItemSave: function () {
		if (this.record) {
			/* Check if this is an in-memory record */
			if (this.record.phantom === true) {
					
			/* Push form values into the record */
			this.getForm().updateRecord(this.record);
					
			/* Trigger the save */
			this.record.save({
				success: function (record) {
					this.record = record;
					this.fireEvent("itemSaved", record);
							
					// Reload the store
					this.store.load({
						scope   : this,
					    callback: function(records, operation, success) {
					    	/* If the store contains our record, start
					    	 * editing with the store's record, since it handles
					    	 * syncing for us.
							 */
							for (i=0;i<records.length;i++) {
					    		if (records[i].get("id") == this.record.get("id")) {
					    			this.editItem(records[i]);
								    break;
					    		}
							}
					    }});
						},
						scope: this
					});
			} else {
				this.getForm().updateRecord(this.record);
					
				/* If the store doesn't handle our record,
				 * do it on our own.
				 */ 
				if (this.record.dirty && !this.record.store) {
					this.record.save();
				} else {
					// Sync via the store
					this.store.sync();
				}
				
				this.fireEvent("itemSaved", this.record);
			}
		}
		
	}
});