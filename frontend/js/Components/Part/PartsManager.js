/**
 * @class PartDB2.PartManager
 * @todo Document the editor system a bit better 
 */
Ext.define('PartDB2.PartManager', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.PartManager',
	layout: 'border',
	initComponent: function () {
		 this.createStore({
			 model: 'Part'
			 , sorters: [{
             property: 'name',
             direction:'ASC'
         }] 
		 });
		 
		this.tree = Ext.create("PartDB2.CategoryEditorTree", { region: 'west', split: true, width: 300});
		
		this.tree.on("selectionchange", Ext.bind(function (t,s) {
			if (s.length > 0) {
				this.grid.setCategory(s[0].get("id"));
			}
		}, this));
		
		//this.editor = Ext.create("PartDB2.PartEditor", { region: 'south', store: this.getStore() });
		
		this.detail = Ext.create("PartDB2.PartDisplay", { region: 'east', split: true, width: 300});
		this.detail.on("editPart", this.onEditPart, this);
		this.grid = Ext.create("PartDB2.PartsGrid", { region: 'center', layout: 'fit', store: this.getStore()});
		
		this.grid.on("itemSelect", this.onItemSelect, this);
		this.grid.on("itemAdd", this.onItemAdd, this);
		this.grid.on("itemDelete", this.onItemDelete, this);
		
		this.detail.on("partChanged", function () { this.grid.getStore().load(); }, this);
		
		this.items = [ this.tree, this.grid, this.detail /*this.editor*/ ]; 
		
		this.callParent();
	},
	onItemDelete: function () {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		Ext.Msg.confirm(i18n("Delete Part"), sprintf(i18n("Do you really wish to delete the part %s?"),r.get("name")), this.deletePart, this);
	},
	deletePart: function (btn) {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		if (btn == "yes") {
			var call = new PartDB2.ServiceCall(
					"Part", 
					"deletePart");
			
			call.setLoadMessage(sprintf(i18n("Deleting part %s"), r.get("name")));
			call.setParameter("part", r.get("id"));
			call.setHandler(Ext.bind(function () {
				this.store.load();
			}, this));
			call.doCall();
		}
	},
	onItemAdd: function () {
		var j = Ext.create("PartDB2.PartEditorWindow");
		j.applyRecord({});
		j.show();
	},
	onEditPart: function (id) {
		this.loadPart(id, Ext.bind(this.onPartLoaded, this));
	},
	onPartLoaded: function (f,g) {
		var j = Ext.create("PartDB2.PartEditorWindow");
		j.applyRecord(f);
		j.show();
	},
	onItemSelect: function (r) {
		this.detail.setValues(r);
	},
	loadPart: function (id, handler) {
		var call = new PartDB2.ServiceCall(
    			"Part", 
    			"getPart");
		call.setParameter("part", id);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
    	call.setHandler(handler);
    	call.doCall();
	},
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