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
			if (record.self.getName() == "PartKeepr.Footprint") {
				this.fireEvent("itemEdit", record.get("id"));
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
	 * Called when a footprint is about to be added. This prepares the to-be-edited record with the proper category id.
	 */
	_onAddFootprint: function () {
		var record = this.getSelectionModel().getLastSelected();
		
		if (!record) {
			// Nothing is selected, use the root node's ID as category
			this.fireEvent("itemAdd", { category: this.getRootNode().get("id") });
		}
    	
    	if (record.self.getName() == "PartKeepr.FootprintCategory") {
    		// Selected node is a footprint category
    		this.fireEvent("itemAdd", { category: record.get("id") });
    	} else {
    		// Selected node is a footprint
    		if (record.parentNode && record.parentNode.self.getName() == "PartKeepr.FootprintCategory") {
    			// Selected parent node is a category, perfect. Let's use this 
    			this.fireEvent("itemAdd", { category: record.parentNode.get("id") });	
    		} else {
    			// Something went probably wrong, use the root node
    			this.fireEvent("itemAdd", { category: this.getRootNode().get("id") });
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
		if (this.getSelectionModel().getCount() == 1 && record.self.getName() == "PartKeepr.Footprint") {
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
	/**
	 * Injects all footprints into the correct categories. That way, we don't have to implement a complete
	 * own tree, but rather take what's already there for the categories and extend that.
	 */
	_onCategoriesLoaded: function () {
		this.callParent(arguments);
		
		var store = PartKeepr.getApplication().getFootprintStore();
		var nodeData, record;
		
		Ext.data.NodeInterface.decorate("PartKeepr.Footprint");
		
		for (var i=0;i<store.getCount();i++) {
			record = store.getAt(i);
			nodeData = {
					text: record.getRecordName(),
					id: record.get("id"),
					leaf: true,
					iconCls:'icon-footprint'
			};
			
			var newNode = Ext.create("PartKeepr.Footprint", nodeData);
			
			if (record.get("category") === 0) {
				this.getRootNode().firstChild.appendChild(newNode);
			} else {
				
				var node = this.getRootNode().findChildBy(function () {
					if (this.self.getName() == "PartKeepr.FootprintCategory" && this.get("id") == record.get("category")) {
						return true;
					} else {
						return false;
					}
				}, false, true);
				
				if (node) {
					node.appendChild(newNode);
				} else {
					this.getRootNode().firstChild.appendChild(newNode);
				}
			}
			
		}
		
	},
	onBeforeDrop: function (node, data, overModel, dropPosition, dropFunction, options) {
		var draggedRecord = data.records[0];
		var droppedOn = this.getView().getRecord(node);

		if (droppedOn.self.getName() == "PartKeepr.Footprint") {
			// Target record is a footprint, we don't allow moving categories onto footprints
			return false;
		}
		
		if (draggedRecord.self.getName() == "PartKeepr.Footprint") {
			/* Move Footprint */
			var call = new PartKeepr.ServiceCall("Footprint", "moveFootprint");
			
			call.setParameter("id", draggedRecord.get("id"));
			call.setParameter("targetCategory", droppedOn.get("id"));
			call.setHandler(Ext.bind(function () {
				var sourceNode = this.getRootNode().findChildBy(function () {
					if (this.self.getName() == "PartKeepr.Footprint" && this.get("id") == draggedRecord.get("id")) {
						return true;
					} else {
						return false;
					}
				}, false, true);
				
				var targetNode = this.getRootNode().findChildBy(function () {
					if (this.self.getName() == "PartKeepr.FootprintCategory" && this.get("id") == droppedOn.get("id")) {
						return true;
					} else {
						return false;
					}
				}, false, true);
				
				targetNode.expand();
				
				sourceNode.remove();
				
				targetNode.appendChild(sourceNode);
				
				var oldRecordIndex = PartKeepr.getApplication().getFootprintStore().find("id", draggedRecord.get("id"));
				var oldRecord = PartKeepr.getApplication().getFootprintStore().getAt(oldRecordIndex);

				oldRecord.set("category", droppedOn.get("id"));
				
			}, this));
			call.doCall();
			
			return false;
		}
		
	}
	
});