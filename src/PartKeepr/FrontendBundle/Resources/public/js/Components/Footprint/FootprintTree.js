Ext.define("PartKeepr.FootprintTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.FootprintTree',
	xtype: 'partkeepr.FootprintTree',
	ddGroup: 'FootprintTree',
	folderSort: true,

	categoryModel: "PartKeepr.FootprintBundle.Entity.FootprintCategory",

	/**
     * @cfg {String} text The path to the 'add' icon
     */
	addButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_add.png',
	
	/**
     * @cfg {String} text The path to the 'delete' icon
     */
	deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_delete.png',
	
	/**
	 * Initializes the component
	 */
	initComponent: function () {
		this.callParent();
		
		/*this.on("itemclick", Ext.bind(function (t,record) {
			if (record.self.getName() == "PartKeepr.Footprint") {
				this.fireEvent("itemEdit", record.get("id"));
			}
		}, this));*/
		
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