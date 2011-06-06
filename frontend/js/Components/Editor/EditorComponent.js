/**
 * @class PartDB2.EditorComponent
 * <p>The EditorComponent encapsulates an editing workflow. In general, we have four actions
 * for each object: create, update, delete, view. These actions stay exactly the same for each
 * distinct object.</p>
 * <p>The EditorComponent is a border layout, which has a grid and a form.</p>
 * @todo Document the editor system a bit better 
 */
Ext.define('PartDB2.EditorComponent', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.EditorComponent',
	layout: 'border',
	gridClass: null,
	editorClass: null,
	padding: 5,
	store: null,
	border: false,
	deleteMessage: i18n("Do you really wish to delete the item %s?"),
	deleteTitle: i18n("Delete Item"),
	newItemText: i18n("New Item"),
	initComponent: function () {
		
		this.grid = Ext.create(this.gridClass, {
			region: 'west',
			width: 265,
			split: true,
			store: this.store,
			listeners: {
				"itemSelect": Ext.bind(this.startEdit, this)
			}
		});
		
		this.grid.on("itemAdd", Ext.bind(this.newRecord, this));
		
		this.grid.on("itemDelete", Ext.bind(this.confirmDelete, this));
		
		this.editorTabPanel = Ext.create("Ext.tab.Panel", {
			region: "center",
			layout: 'fit',
			plugins: Ext.create('Ext.ux.TabCloseMenu')
		});
		
		this.items = [ this.grid, this.editorTabPanel ];
		
		this.callParent();
	},
	newRecord: function () {
		var editor = this.createEditor(this.newItemText);
		editor.newItem();
		this.editorTabPanel.add(editor).show();
	},
	startEdit: function (r) {
		var editor = this.findEditor(r.get("id"));
		
		if (editor !== null) {
			editor.show();
			return;
		}
		
		// Still here? OK, we don't have an editor open. Create a new one
		
		
		//this.editor.editItem(r);
		editor = this.createEditor(r.getName());
		editor.editItem(r);
		this.editorTabPanel.add(editor).show();
		
	},
	findEditor: function (id) {
		for (var i=0;i<this.editorTabPanel.items.getCount();i++) {
			if (this.editorTabPanel.items.getAt(i).getRecordId() == id) {
				return this.editorTabPanel.items.getAt(i);
			}
		}
		
		return null;
	},
	createEditor: function (title) {
		var editor = Ext.create(this.editorClass, {
			store: this.store,
			title: title,
			closable: true,
			listeners: {
				editorClose: Ext.bind(function (m) {
					this.editorTabPanel.remove(m);
				}, this)
			}
		});
		
		return editor;
	},
	confirmDelete: function () {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		Ext.Msg.confirm(
				this.deleteTitle,
				sprintf(this.deleteMessage, r.getName()),
				function (but) {
					if (but == "yes") {
						var editor = this.findEditor(r.get("id"));
						
						if (editor !== null) {
							this.editorTabPanel.remove(editor);
						}
						
						r.destroy();
						this.store.load();
					}
				},this);
	},
	// Creates a store. To be called from child's initComponent
	createStore: function (config) {
		Ext.Object.merge(config, {
				autoLoad: true,
				autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
				remoteFilter: true,
				remoteSort: true,
				pageSize: 15});
		
		this.store = Ext.create('Ext.data.Store', config);
		
		// Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
		this.store.on('write', function(store, operation) {
	        var success=operation.wasSuccessful();
	        if (success) {
	            Ext.each(operation.records, function(record){
	                if (record.dirty) {
	                    record.commit();
	                }
	            });
	        }
		});
	},
	getStore: function () {
		return this.store;
	}
});