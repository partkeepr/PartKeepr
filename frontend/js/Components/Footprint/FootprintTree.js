Ext.define("PartKeepr.FootprintTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.FootprintTree',
	
	ddGroup: 'FootprintTree',
	categoryModel: 'PartKeepr.FootprintCategory',
	categoryService: 'FootprintCategory',
	folderSort: true,
	
	/**
     * @cfg {String} text The path to the 'add' icon
     */
	addButtonIcon: 'resources/icons/footprint_add.png',
	
	/**
     * @cfg {String} text The path to the 'delete' icon
     */
	deleteButtonIcon: 'resources/icons/footprint_delete.png',
	
	/**
	 * Initializes the component
	 */
	initComponent: function () {
		this.callParent();
		
		this.addEvents("itemEdit");
		
		this.on("itemclick", Ext.bind(function (t,record) {
			if (record.get("footprintId")) {
				this.fireEvent("itemEdit", record.get("footprintId"));
			}
		}, this));
		
		this.addButton = Ext.create("Ext.button.Button",
				{
		        	tooltip: i18n("Add Footprint"),
			        icon: this.addButtonIcon,
			        handler: this._onAddFootprint,
			        scope: this
			    });
		
		this.deleteButton = Ext.create("Ext.button.Button", {
			tooltip: i18n("Delete Footprint"),
			icon: this.deleteButtonIcon,
        	handler: Ext.bind(function () {
        		this.fireEvent("itemDelete");
        	}, this),
        	disabled: true
		});
		
		this.toolbar.add(['-', this.addButton, this.deleteButton]);
		
		this.getSelectionModel().on("select", 	this._onItemSelect, 	this);
		this.getSelectionModel().on("deselect", this._onItemDeselect, 	this);
	},
	/**
	 * Called when a footprint is about to be added
	 */
	_onAddFootprint: function () {
		var r = this.getSelectionModel().getLastSelected();
    	
    	if (r && !r.get("footprintId")) {
    		this.fireEvent("itemAdd", { category: r.get("id") });
    	} else {
    		if (!r) {
    			this.fireEvent("itemAdd", this.getRootNode().get("id"));
    		} else {
    			/* Try to find the category's parent id */
        		if (r.parentNode && !r.parentNode.get("footprintId")) {
        			this.fireEvent("itemAdd", { category: r.parentNode.get("id") });	
        		} else {
        			this.fireEvent("itemAdd", this.getRootNode().get("id"));
        		}	
    		}
    		
    	}
	},
	/**
	 * Called when an item was selected
	 */
	_onItemSelect: function (selectionModel, record) {
		this._updateDeleteButton(selectionModel, record);
		this.fireEvent("itemSelect", record);
	},
	/**
	 * Called when an item was deselected
	 */
	_onItemDeselect: function (selectionModel, record) {
		this._updateDeleteButton(selectionModel, record);
		this.fireEvent("itemDeselect", record);
	},
	/**
	 * Called when an item was selected. Enables/disables the delete button. 
	 */
	_updateDeleteButton: function (selectionModel, record) {
		/* Right now, we support delete on a single record only */
		if (this.getSelectionModel().getCount() == 1 && record.get("footprintId")) {
			this.deleteButton.enable();
		} else {
			this.deleteButton.disable();
		}
	},
	syncChanges: function (record) {
		var oldRecordIndex = PartKeepr.getApplication().getFootprintStore().find("id", record.get("id"));
		
		if (oldRecordIndex === -1) {
			/* Record doesn't exist yet; add it */
			PartKeepr.getApplication().getFootprintStore().add(record);
		} else {
			var oldRecord = PartKeepr.getApplication().getFootprintStore().getAt(oldRecordIndex);
			oldRecord.set("name", record.get("name"));	
		}
		
		this.loadCategories();
	},
	_onCategoriesLoaded: function () {
		this.callParent(arguments);
		var store = PartKeepr.getApplication().getFootprintStore();
		var category_id;
		var nodeData, record;
		
		for (var i=0;i<store.getCount();i++) {
			record = store.getAt(i);
			
			nodeData = {
					name: record.getRecordName(),
					footprintId: record.get("id"),
					leaf: true,
					iconCls:'icon-footprint'
			};
			

			if (record.get("category") === 0) {
				this.getRootNode().firstChild.appendChild(nodeData);
			} else {
				var node = this.getRootNode().findChild("id", record.get("category"), true);
				
				if (node) {
					node.appendChild(nodeData);
				} else {
					this.getRootNode().firstChild.appendChild(nodeData);
				}	
			}
			
		}
		
	},
	onBeforeDrop: function (node, data, overModel, dropPosition, dropFunction, options) {
		var draggedRecord = data.records[0];
		var droppedOn = this.getView().getRecord(node);

		if (droppedOn.get("footprintId")) {
			// Target record is a footprint, we don't allow moving categories onto footprints
			return false;
		}
		
		if (draggedRecord.get("footprintId")) {
			/* Move Footprint */
			var call = new PartKeepr.ServiceCall("Footprint", "moveFootprint");
			
			call.setParameter("id", draggedRecord.get("footprintId"));
			call.setParameter("targetCategory", droppedOn.get("id"));
			call.setHandler(Ext.bind(function () {
				var node = this.getRootNode().findChild("footprintId", draggedRecord.get("footprintId"), true);
				
				var targetNode = this.getRootNode().findChild("id", droppedOn.get("id"), true);
				targetNode.expand();
				
				node.remove();
				
				targetNode.appendChild(node);
				
				var oldRecordIndex = PartKeepr.getApplication().getFootprintStore().find("id", draggedRecord.get("footprintId"));
				var oldRecord = PartKeepr.getApplication().getFootprintStore().getAt(oldRecordIndex);

				oldRecord.set("category", droppedOn.get("id"));
				
			}, this));
			call.doCall();
			
			return false;
		}
		
	}
	
});