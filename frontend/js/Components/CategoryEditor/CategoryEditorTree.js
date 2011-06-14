PartKeepr.CategoryEditorTree = Ext.define("CategoryEditorTree", {
	alias: 'widget.CategoryEditorTree',
	extend: 'PartKeepr.CategoryTree',
	viewConfig: {
    	animate: false,
        plugins: {
            ptype: 'treeviewdragdrop'
        }
	},
	initComponent: function () {
		
		this.callParent();
		
		this.getView().on("drop", Ext.bind(this.onCategoryDrop, this));
		this.getView().on("itemcontextmenu", Ext.bind(this.onItemContextMenu, this));
		
		this.createMenu();
	},
	onCategoryDrop: function (node, data, model, pos) {
		var draggedRecord = data.records[0];
		
		var droppedOn = this.getView().getRecord(node);
		
		var targetRecord;
		
		if (pos == "after" || pos == "before") {
			targetRecord = droppedOn.parentNode;
		} else {
			targetRecord = droppedOn;
		}
		
		this.getStore().sort("name", "ASC");
		
		var call = new PartKeepr.ServiceCall("Category", "moveCategory");
		call.setLoadMessage(sprintf(i18n("Moving category %s..."), draggedRecord.get("name")));
		call.setParameter("category", draggedRecord.get("id"));
		call.setParameter("target", targetRecord.get("id"));
		call.doCall();
	},

	onItemContextMenu: function (view, record, item, index, event) {
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
	confirmCategoryDelete: function () {
		Ext.Msg.confirm(i18n("Confirm Category Delete"), sprintf(i18n("Do you really wish to delete the category %s?"), this.menu.record.get("name")), this.onCategoryDelete, this);
	},
	showCategoryAddDialog: function () {
		var j = Ext.create("PartKeepr.CategoryEditorWindow", {
			record: null,
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
			var call = new PartKeepr.ServiceCall("Category", "deleteCategory");
			call.setLoadMessage(sprintf(i18n("Deleting category %s..."), this.menu.record.get("name")));
			call.setParameter("id", this.menu.record.get("id"));
			call.setHandler(Ext.bind(this.onCategoryDeleted, this));
			call.doCall();
		}
	},
	onCategoryDeleted: function (response) {
		var del = this.getStore().getRootNode().findChild("id", response.id, true);
		del.destroy();
	}
});