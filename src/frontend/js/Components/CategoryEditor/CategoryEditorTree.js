Ext.define("PartKeepr.CategoryEditorTree", {
	alias: 'widget.CategoryEditorTree',
	extend: 'PartKeepr.CategoryTree',
	ddGroup: null,
	categoryModel: null,
	categoryService: null,
	initComponent: function () {
		if (this.ddGroup !== null) {
			Ext.apply(this, { 
				viewConfig: {
					animate: false,
					plugins: {
						ptype: 'treeviewdragdrop',
						ddGroup: this.ddGroup
					}
				}});	
		}
		
		this.createToolbar();
		
		this.callParent();
		
		this.getView().on("drop", Ext.bind(this.onCategoryDrop, this));
		this.getView().on("beforedrop", this.onBeforeDrop, this);
		this.getView().on("itemcontextmenu", Ext.bind(this.onItemContextMenu, this));
		
		this.createMenu();
		
	},
	onBeforeDrop: function () {
		
	},
	onCategoryDrop: function (node, data, model, pos) {
		var draggedRecord = data.records[0];
		var droppedOn = this.getView().getRecord(node);
		
		if (!draggedRecord.isCategory) {
			return;
		} else {
			/* Must be a category */
			
			var targetRecord;
			
			if (pos == "after" || pos == "before") {
				targetRecord = droppedOn.parentNode;
			} else {
				targetRecord = droppedOn;
			}
			
			this.getStore().sort("name", "ASC");
			
			var call = new PartKeepr.ServiceCall(this.categoryService, "moveCategory");
			call.setLoadMessage(sprintf(i18n("Moving category %s..."), draggedRecord.get("name")));
			call.setParameter("category", draggedRecord.get("id"));
			call.setParameter("target", targetRecord.get("id"));
			call.doCall();
		}
		
	},

	onItemContextMenu: function (view, record, item, index, event) {
		if (!record.isCategory) { return; }
		var menu = this.menu;
		event.stopEvent();
		
		menu.record = record;

		this.menuCategoryDelete.enable();
		
		if (record.get("id") == 1) {
			this.menuCategoryDelete.disable();
		}
		
		if (record.hasChildNodes()) {
			this.menuCategoryDelete.disable();
		}

	    menu.showAt(event.getXY());
	},
	createMenu: function () {
		this.menuCategoryDelete = Ext.create("Ext.menu.Item", {
			text: i18n("Delete Category"),
			handler: Ext.bind(this.confirmCategoryDelete, this),
			icon: 'resources/silkicons/folder_delete.png'
		});
		
		this.menuCategoryAdd = Ext.create("Ext.menu.Item", {
			text: i18n("Add Category"),
			handler: Ext.bind(this.showCategoryAddDialog, this),
			icon: 'resources/silkicons/folder_add.png'
		});
		
		this.menuCategoryEdit = Ext.create("Ext.menu.Item", {
			text: i18n("Edit Category"),
			handler: Ext.bind(this.showCategoryEditDialog, this),
			icon: 'resources/silkicons/folder_edit.png'
		});
		
		this.menu = Ext.create('widget.menu', {
            items: [
                this.menuCategoryAdd,
                this.menuCategoryEdit,
                this.menuCategoryDelete
                ]
        });
	},
	createToolbar: function () {
		this.toolbarExpandButton = Ext.create("Ext.button.Button", {
			icon: 'resources/fugue-icons/icons/toggle-expand.png',
			tooltip: i18n("Expand All"),
			handler: this._onExpandClick,
			scope: this
		});
		
		this.toolbarCollapseButton = Ext.create("Ext.button.Button", {
			icon: 'resources/fugue-icons/icons/toggle.png',
			tooltip: i18n("Collapse All"),
			handler: this._onCollapseClick,
			scope: this
		});
		
		this.toolbarReloadButton = Ext.create("Ext.button.Button", {
			icon: 'extjs/resources/themes/images/default/grid/refresh.gif',
			tooltip: i18n("Reload"),
			handler: this._onReloadClick,
			scope: this
		});
		
		this.toolbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			dock: 'top',
			items: [ this.toolbarExpandButton, this.toolbarCollapseButton, this.toolbarReloadButton ]
		});
		
		Ext.apply(this, {
			dockedItems: [ this.toolbar ]
		});
	},
	_onReloadClick: function () {
		this.loadCategories();
	},
	_onExpandClick: function () {
		this.getRootNode().firstChild.expand(true);
	},
	_onCollapseClick: function () {
		this.getRootNode().firstChild.collapse(true);
	},
	confirmCategoryDelete: function () {
		Ext.Msg.confirm(i18n("Confirm Category Delete"), sprintf(i18n("Do you really wish to delete the category %s?"), this.menu.record.get("name")), this.onCategoryDelete, this);
	},
	showCategoryAddDialog: function () {
		var j = Ext.create("PartKeepr.CategoryEditorWindow", {
			record: null,
			categoryModel: this.categoryModel,
			parent: this.menu.record.get("id"),
			listeners: {
				save: Ext.bind(this.onUpdateRecord, this)
			}
		});
		
		j.show();
	},
	showCategoryEditDialog: function () {
		var j = Ext.create("PartKeepr.CategoryEditorWindow", {
			record: this.menu.record,
			parent: null,
			categoryModel: this.categoryModel,
			listeners: {
				save: Ext.bind(this.onUpdateRecord, this)
			}
		});
		
		j.show();
	},
	onUpdateRecord: function (record) {
		var currentRecord = this.getStore().getRootNode().findChild("id", record.get("id"), true);
		
		if (currentRecord === null) {
			var parentRecord = this.getStore().getRootNode().findChild("id", record.get("parent"), true);
			
			var nodeData = {
					id : record.get("id"),
					name : record.get("name"),
					tooltip : record.get("description")
				};
			
			parentRecord.appendChild(nodeData);
			
		} else {
			currentRecord.set("name", record.get("name"));
			currentRecord.set("description", record.get("description"));
			currentRecord.commit();	
		}
		
	},
	onCategoryDelete: function (btn) {
		if (btn == "yes") {
			var del = this.getStore().getRootNode().findChild("id", this.menu.record.get("id"), true);
			del.destroy({
				failure: function () {
			     	this.loadCategories();   
			    },
			    scope: this
			});
		}
	}
});