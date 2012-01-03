/**
 * @class PartKeepr.PartManager
 * @todo Document the editor system a bit better 
 * 
 * The part manager encapsulates the category tree, the part display grid and the part detail view.
 */
Ext.define('PartKeepr.PartManager', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.PartManager',
	layout: 'border',
	id: 'partkeepr-partmanager',
	border: false,
	padding: 5,
	initComponent: function () {
		
		/**
		 * Create the store with the default sorter "name ASC"
		 */
		this.createStore({
			 model: 'PartKeepr.Part',
			 proxy: PartKeepr.getRESTProxy("Part"),
			 groupField: 'categoryPath',
			 sorters: [{
				 property: 'name',
				 direction:'ASC'
			 }] 
		 });
		
		// Create the tree
		this.tree = Ext.create("PartKeepr.PartCategoryTree", {
			region: 'west',
			categoryModel: 'PartKeepr.PartCategory',
			categoryService: 'PartCategory',
			split: true,
			title: i18n("Categories"),
			ddGroup: 'CategoryTree',
			width: 300,			// @todo Make this configurable
			collapsible: true	// We want to collapse the tree panel on small screens
		});
		
		// Trigger a grid reload on category change
		this.tree.on("selectionchange", Ext.bind(function (t,s) {
			if (s.length > 0) {
				this.grid.setCategory(s[0].get("id"));
			}
		}, this));
		
		// Create the detail panel
		this.detail = Ext.create("PartKeepr.PartDisplay", { title: i18n("Part Details") });
		this.detail.on("editPart", this.onEditPart, this);
		
		// Create the grid
		this.grid = Ext.create("PartKeepr.PartsGrid", { title: i18n("Parts List"), region: 'center', layout: 'fit', store: this.getStore()});
		this.grid.on("editPart", this.onEditPart, this);
		
		// Create the grid listeners
		this.grid.on("itemSelect", this.onItemSelect, this);
		this.grid.on("itemDeselect", this.onItemSelect, this);
		this.grid.on("itemAdd", this.onItemAdd, this);
		this.grid.on("itemDelete", this.onItemDelete, this);
		this.grid.on("itemCreateFromTemplate", this.onItemCreateFromTemplate, this);
		this.tree.on("syncCategory", this.onSyncCategory, this);
		
		// Listen on the partChanged event, which is fired when the users edits the part
		this.detail.on("partChanged", function () { this.grid.getStore().load(); }, this);
		
		// Create the stock level panel
		this.stockLevel = Ext.create("PartKeepr.PartStockHistory", { title: "Stock History"});
		
		this.detailPanel = Ext.create("Ext.tab.Panel", {
			title: i18n("Part Details"),
			collapsed: true,
			collapsible: true,
			region: 'east',
			split: true,
			width: 300,
			animCollapse: false,
			items: [ this.detail, this.stockLevel ]
		});
		
		this.filterPanel = Ext.create("PartKeepr.PartFilterPanel", {
			region: 'south',
			title: i18n("Filter"),
			height: 200,
			split: true,
			collapsed: true,
			collapsible: true,
			store: this.store
		});
		
		this.items = [ this.tree, {
			layout: 'border',
			border: false,
			region: 'center',
			items: [ this.grid, this.filterPanel ]
		}, this.detailPanel ]; 
		
		
		this.callParent();
	},
	/**
	 * Called when the sync button was clicked. Highlights the category
	 * of the selected part for a short time. We can't select the category
	 * as this would affect the parts grid.
	 */
	onSyncCategory: function () {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		var rootNode = this.tree.getRootNode();
		var cat = r.get("category");
		
		var node = rootNode.findChild("id", cat, true);
		
		this.tree.getView().ensureVisible(node);
		this.tree.getView().scrollIntoView(node);
		
		var htmlNode = new Ext.Element(this.tree.getView().getNode(node));
		
		htmlNode.highlight("2aaad3");
	},
	/**
     * Called when the delete button was clicked.
     * 
     * Prompts the user if he really wishes to delete the part. If yes, it calls deletePart.
     */
	onItemDelete: function () {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		Ext.Msg.confirm(i18n("Delete Part"), sprintf(i18n("Do you really wish to delete the part %s?"),r.get("name")), this.deletePart, this);
	},
	/**
	 * Creates a duplicate from the selected item. Loads the selected part and calls createPartDuplicate
	 * after the part was loaded.
	 * 
	 * @param none
	 * @return nothing
	 */
	onItemCreateFromTemplate: function () {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		this.loadPart(r.get("id"), Ext.bind(this.createPartDuplicate, this));
	},
	/**
	 * Creates a part duplicate from the given record and opens the editor window.
	 * @param rec The record to duplicate
	 */
	createPartDuplicate: function (rec) {
		var copy = rec.copy();
		Ext.data.Model.id(copy);
		copy.set("id", null);
		
		var j = Ext.create("PartKeepr.PartEditorWindow", {
			partMode: 'create'
		});
		
		j.editor.on("partSaved", this.onPartSaved, this);
		j.editor.editItem(copy);
		j.show();
	},
	/**
     * Deletes the selected part.
     * 
     * @param {String} btn The clicked button in the message box window.
     * @todo We use the current selection of the grid. If for some reason the selection changes during the user is prompted,
     * we delete the wrong part. Fix that to pass the selected item to the onItemDelete then to this function.
     */
	deletePart: function (btn) {
		var r = this.grid.getSelectionModel().getLastSelected();
		
		if (btn == "yes") {
			var call = new PartKeepr.ServiceCall(
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
	/**
     * Creates a new, empty part editor window
     */
	onItemAdd: function () {
		var j = Ext.create("PartKeepr.PartEditorWindow", {
			partMode: 'create'
		});
		
		var defaults = {};
		
		var defaultPartUnit = PartKeepr.getApplication().getPartUnitStore().findRecord("default", true);
		
		defaults.partUnit = defaultPartUnit.get("id");
		defaults.category = this.grid.currentCategory;
		
		record = Ext.create("PartKeepr.Part", defaults);
		
		// Inject the defaults to the editor, so the editor can create a new item on its own
		j.editor.partDefaults = defaults;
		
		j.editor.editItem(record);
		j.show();
		
		return j;
	},
	/**
     * Called when a part was edited. Refreshes the grid.
     */
	onEditPart: function (id) {
		this.loadPart(id, Ext.bind(this.onPartLoaded, this));
	},
	/**
     * Called when a part was loaded. Displays the part in the editor window.
     */
	onPartLoaded: function (f,g) {
		var j = Ext.create("PartKeepr.PartEditorWindow");
		j.editor.on("partSaved", this.onPartSaved, this);
		j.editor.editItem(f);
		j.show();
	},
	onPartSaved: function (record) {
	
		var idx = this.grid.store.find("id", record.get("id"));
		
		// Only reload the grid if the edited record is contained
		if (idx !== -1) {
			this.grid.store.load();
		}
		
		this.detail.setValues(record);
	},
	/**
     * Called when a part was selected in the grid. Displays the details for this part.
     */
	onItemSelect: function () {
		if (this.grid.getSelectionModel().getCount() > 1) {
			this.detailPanel.collapse();
			this.tree.syncButton.disable();
		} else if (this.grid.getSelectionModel().getCount() == 1) {
			var r = this.grid.getSelectionModel().getLastSelected();
			
			this.detailPanel.setActiveTab(this.detail);
			this.detailPanel.expand();
			this.detail.setValues(r);
			this.stockLevel.part = r.get("id");
			
			this.tree.syncButton.enable();
		} else {
			this.tree.syncButton.disable();
		}
		
	},
	/**
     * Triggers loading of a part 
     * @param {Integer} id The ID of the part to load
     * @param {Function} handler The callback to call when the part was loaded
     */
	loadPart: function (id, handler) {
		// @todo we have this method duplicated in PartEditor
		var model = Ext.ModelManager.getModel("PartKeepr.Part");
		
		model.load(id, {
			scope: this,
		    success: handler
		});
	},
	/**
     * Creates the store 
     */
	createStore: function (config) {
		Ext.Object.merge(config, {
				autoLoad: true,
				autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
				remoteFilter: true,
				remoteSort: true,
				pageSize: 50});
		
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
	/**
     * Returns the store 
     */
	getStore: function () {
		return this.store;
	}
});