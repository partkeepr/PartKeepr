Ext.define('PartKeepr.Editor', {
	extend: 'Ext.form.Panel',
	alias: 'widget.Editor',
	trackResetOnLoad: true,
	bodyStyle: 'background:#DBDBDB;padding: 10px;',
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
    enableButtons: true,
    
    // If false, determinates if we should sync via the store or the record itself.
    // If true, always syncs the record via it's own proxy.
    syncDirect: false,
    
    onFieldChange: function () {
    	return;
    	
    	// @todo Finish implementing the dirty flag later
    	/*if (this.change == false) {
    		this.setTitle(this.record.getRecordName() + "*");
    	}
    	
    	this.change = true;*/
    },
	initComponent: function () {
		if (this.enableButtons) {
			this.saveButton = Ext.create("Ext.button.Button", {
				text: this.saveText,
				cls: 'x-btn-text-icon',
				icon: 'resources/fugue-icons/icons/disk.png',
				handler: Ext.bind(this.onItemSave, this)
			});
			
			this.cancelButton = Ext.create("Ext.button.Button", {
				text: this.cancelText,
				cls: 'x-btn-text-icon',
				icon: 'resources/silkicons/cancel.png',
				handler: Ext.bind(this.onCancelEdit, this)
			});
			
			this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
				enableOverflow: true,
				margin: '10px',
				defaults: {minWidth: 100},
				dock: 'bottom',
				ui: 'footer',
				items: [ this.saveButton, this.cancelButton ]
			});
			
			Ext.apply(this, {
				dockedItems: [ this.bottomToolbar ]});
		}
		
		
		
		
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
	newItem: function (defaults) {
		Ext.apply(defaults, {});
		var j = Ext.create(this.model, defaults);
		this.editItem(j);
	},
	editItem: function (record) {
		this.record = record;
		this.getForm().loadRecord(this.record);
		this.show();
		if (this.record.getRecordName() !== "") {
			this._setTitle(this.record.getRecordName());
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
		this.getForm().updateRecord(this.record);
		this.record.save({
				callback: this._onSave,
				scope: this
		});
	},
	_onSave: function (record, response) {
		if (response.success === true) {
			this.record = record;
			this.fireEvent("itemSaved", this.record);			
		}
	},
	_setTitle: function (title) {
		this.setTitle(title);
	}
});
