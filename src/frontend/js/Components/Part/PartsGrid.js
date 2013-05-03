/**
 * This class is the main part list grid.
 * 
 */
Ext.define('PartKeepr.PartsGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.PartsGrid',
	
	/**
     * Display button texts by default
     */
	buttonTextMode: 'show',
	
	/**
     * @cfg {String} Defines the text of the "Add" button
     */
	addButtonText: i18n("Add Part"),
	
	/**
     * @cfg {String} Defines the icon of the "Add" button
     */
	addButtonIcon: 'resources/silkicons/brick_add.png',
	
	/**
     * @cfg {String} Defines the text of the "Delete" button
     */
	deleteButtonText: i18n("Delete Part"),
	
	/**
     * @cfg {String} Defines the icon of the "Add" button
     */
	deleteButtonIcon: 'resources/silkicons/brick_delete.png',
    
	/**
     * @cfg {String} Defines the icon of the "Expand Row" button
     */
	expandRowButtonIcon: 'resources/icons/group-expand.png',
	
	/**
     * @cfg {String} Defines the icon of the "Collapse Row" button
     */
	collapseRowButtonIcon: 'resources/icons/group-collapse.png',
    
	/**
	 * Configure drag'n'drop.
	 * @todo Check if this messes up with the Part Dropdown in the project view
	 */
	viewConfig: {
		plugins: {
			ddGroup: 'CategoryTree',
			ptype: 'gridviewdragdrop',
			enableDrop: false
		}
	},
	enableDragDrop	: true,
	stripeRows		: true,
	multiSelect		: true,
	autoScroll		: false,
	invalidateScrollerOnRefresh: true,
	initComponent: function () {
		
		this.groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
			//enableGroupingMenu: false,
			groupHeaderTpl: '{name} ({rows.length} ' + i18n("Part(s)")+")"
		});

		// Create the columns
		this.defineColumns();
		
		
		this.features = [this.groupingFeature];
		
		this.on("itemdblclick", this.onDoubleClick, this);
		
		this.addEvents("editPart");
		
		// Bugfix for scroller becoming detached.
		// @todo Remove with ExtJS 4.1
		this.on('scrollershow', function(scroller) {
			if (scroller && scroller.scrollEl) {
				scroller.clearManagedListeners(); 
				scroller.mon(scroller.scrollEl, 'scroll', scroller.onElScroll, scroller); 
			}
		});
		
		if (this.enableEditing) {
			this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit: 1
			});

			this.editing.on("edit", this.onEdit, this);
			
			this.plugins = [ this.editing ];
		}
		
		// Initialize the panel
		this.callParent();
		
		this.bottomToolbar.add({
			xtype: 'button',
			tooltip: i18n("Expand all Groups"),
			icon: this.expandRowButtonIcon,
			listeners: {
				scope: this.groupingFeature,
				click: this.groupingFeature.expandAll	
			}
			
		});
		
		this.bottomToolbar.add({
			xtype: 'button',
			tooltip: i18n("Collapse all Groups"),
			icon: this.collapseRowButtonIcon,
			listeners: {
				scope: this.groupingFeature,
				click: this.groupingFeature.collapseAll	
			}
		});
		
		var duplicateBasicData = i18n("Duplicates the selected part with the data found in the \"basic\" tab and opens the editor. Doesn't immediately saves the duplicate, in order to allow editing.");
		var duplicateAllData = i18n("Duplicates the selected part with all data including attachments, distributors etc. Doesn't immediately saves the duplicate, in order to allow editing.");
		
		this.addFromTemplateButton = Ext.create("Ext.button.Split", {
			disabled: true,
			handler: Ext.bind(function () {
				this.fireEvent("duplicateItemWithBasicData");
			}, this),
			tooltip: duplicateBasicData,
			text: i18n("Duplicate"),
			icon: 'resources/silkicons/brick_link.png',
			menu: new Ext.menu.Menu({
				items: [{
					text: i18n("Duplicate with all data"),
					tooltip: duplicateAllData,
					handler: function () {
						this.fireEvent("duplicateItemWithAllData");
					},
					scope: this
				},{
					text: i18n("Duplicate basic data only"),
					tooltip: duplicateBasicData,
					handler: function () {
						this.fireEvent("duplicateItemWithBasicData");
					},
					scope: this
				}
				]
			})
		});
		
		if (this.enableEditing) {
			this.topToolbar.insert(2, this.addFromTemplateButton);
		}
		
		
		this.mapSearchHotkey();
	},
	/**
	 * Maps a search hotkey to the search box.
	 * 
	 * Right now, this is hardcoded to alt+x.
	 * 
	 * @param none
	 * @return nothing
	 */
	mapSearchHotkey: function () {
		this.searchKey = new Ext.util.KeyMap(Ext.get(document), {
			key: 'x',
			ctrl: false,
			alt: true,
			fn: function(e) {
				var searchBox = this.searchField;
				if (Ext.get(document).activeElement != searchBox) {
					searchBox.focus('',10);
				}
				searchBox.setValue('');
			},
			scope: this,
			stopEvent: true
		});		
	},
	/**
	 * Called when an item was selected. Enables/disables the delete button. 
	 */
	_updateAddTemplateButton: function (selectionModel, record) {
		/* Right now, we support delete on a single record only */
		if (this.getSelectionModel().getCount() == 1) {
			this.addFromTemplateButton.enable();
		} else {
			this.addFromTemplateButton.disable();
		}
	},
	/**
	 * Called when an item was selected
	 */
	_onItemSelect: function (selectionModel, record) {
		this._updateAddTemplateButton(selectionModel, record);
		this.callParent(arguments);
	},
	/**
	 * Called when an item was deselected
	 */
	_onItemDeselect: function (selectionModel, record) {
		this._updateAddTemplateButton(selectionModel, record);
		this.callParent(arguments);
	},
	/**
	 * Called when the record was double-clicked
	 */
	onDoubleClick: function (view, record) {
		if (record) {
			this.fireEvent("editPart", record.get("id"));
		}
	},
	/**
	 * Defines the columns used in this grid.
	 */
	defineColumns: function () {
		this.columns = [
		{
			header: '<img src="resources/diagona-icons/icons/10/190.png"/>',
			dataIndex: "",
			width: 30,
            tooltip: i18n("Has attachments?"),
			renderer: this.iconRenderer
		},{
			header: '<img src="resources/diagona-icons/icons/10/102.png"/>',
			dataIndex: "needsReview",
			width: 25,
			tooltip: i18n("Needs Review?"),
			renderer: this.reviewRenderer
		},{
			header: i18n("Name"),
			dataIndex: 'name',
			flex: 1,
			minWidth: 150,
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Description"),
			dataIndex: 'description',
			flex: 2,
			minWidth: 150,
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Storage Location"),
			dataIndex: 'storageLocationName',
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Status"),
			dataIndex: "status",
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Condition"),
			dataIndex: "partCondition",
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Stock"),
			dataIndex: 'stockLevel',
			editor: {
				xtype:'numberfield',
				allowBlank:false
			},
			renderer: this.stockLevelRenderer
		},{
			header: i18n("Min. Stock"),
			dataIndex: 'minStockLevel',
			renderer: this.stockLevelRenderer
		},{
			header: i18n("Avg. Price"),
			dataIndex: 'averagePrice',
			align: 'right',
			renderer: this.averagePriceRenderer
		},{
			header: i18n("Footprint"),
			dataIndex: 'footprintName',
			renderer: Ext.util.Format.htmlEncode
		},{
			header: i18n("Category"),
			dataIndex: 'categoryPath',
			renderer: Ext.util.Format.htmlEncode,
			hidden: true
		},{
			header: i18n("Create Date"),
			dataIndex: 'createDate',
			hidden: true
		}
		          
		];
	},
	/**
	 * Used as renderer for the stock level columns.
	 * 
	 * If a part contains a non-default unit, we display it.
	 * Otherwise we hide it.
	 */
	stockLevelRenderer: function (val,q,rec)
	{
		if (rec.get("partUnitDefault") !== true) {
			return val + " " + rec.get("partUnitShortName");
		} else {
			return val;
		}
	},
	/**
	 * Used as renderer for the icon column.
	 */
	iconRenderer: function (val,q,rec)
	{
		var ret = "";
		if (rec.get("attachmentCount") > 0) {
			ret += '<img src="resources/diagona-icons/icons/10/190.png" style="margin-top: 2px;" alt="'+i18n("Has attachments")+'" title="'+i18n("Has attachments")+'"/>';
		}
		
		return ret;
	},
	/**
	 * Used as renderer for the review column.
	 */
	 reviewRenderer: function (val,q,rec)
	 {
	 	var ret = "";
		if (rec.get("needsReview") === true) {
			ret += '<img src="resources/diagona-icons/icons/10/071.png" style="margin-top: 2px;" alt="'+i18n("Needs review")+'" title="'+i18n("Needs review")+'"/>';
		}
		
		return ret;
	 },
	/**
	 * Sets the category. Triggers a store reload with a category filter.
	 */
	setCategory: function (category) {
		this.currentCategory = category;
		
		var proxy = this.store.getProxy();
		
		proxy.extraParams.category = category;
		
		this.store.currentPage = 1;
		this.store.load({
			start: 0
		});
	},
	/**
	 * Handles editing of the grid fields. Right now, only the stock level editing is supported.
	 * 
	 * @param e An edit event, as documented in
	 * 		    http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
	 */
	onEdit: function (editor, e) {
		switch (e.field) {
			case "stockLevel":
				this.handleStockFieldEdit(e);
				break;
			default:
				break;
		}
	},
	/**
	 * Handles the editing of the stock level field. Checks if the user has opted in to skip the
	 * online stock edit confirm window, and runs the changes afterwards.
	 * 
	 * @param e An edit event, as documented in
	 * 		    http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
	 */
	handleStockFieldEdit: function (e) {
		if (PartKeepr.getApplication().getUserPreference("partkeepr.inline-stock-change.confirm") === false) {
			this.handleStockChange(e);
		} else {
			this.confirmStockChange(e);
		}
	},
	/**
	 * Opens the confirm dialog
	 * 
	 * @param e An edit event, as documented in
	 * 		    http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
	 */
	confirmStockChange: function (e) {
		var confirmText = "";
		var headerText = "";
		
		if (e.value < 0) {
			confirmText = sprintf(	i18n("You wish to remove <b>%s %s</b> of the part <b>%s</b>. Is this correct?"),
				abs(e.value), e.record.get("partUnitName"), e.record.get("name"));
			
			// Set the stock level to a temporary calculated value. 
			e.record.set("stockLevel", (e.originalValue - abs(e.value)));
			headerText = i18n("Remove Part(s)");
		} else {
			confirmText = sprintf(
				i18n("You wish to set the stock level to <b>%s %s</b> of part <b>%s</b>. Is this correct?"),
				abs(e.value), e.record.get("partUnitName"), e.record.get("name"));
			
			headerText = i18n("Set Stock Level for Part(s)");
		}
		
		var j = new PartKeepr.RememberChoiceMessageBox({
			escButtonAction: "cancel",
			dontAskAgainProperty: "partkeepr.inlinestockremoval.ask",
			dontAskAgainValue: false
		});
		
		j.show({
			title : headerText,
			msg : confirmText,
			buttons: Ext.Msg.OKCANCEL,
			fn: this.afterConfirmStockChange,
			scope : this,
			originalOnEdit: e,
			dialog: j
		});
	},
	/**
	 * Callback for the stock removal confirm window. 
	 *
	 * The parameters are documented on:
	 * http://docs.sencha.com/ext-js/4-0/#!/api/Ext.window.MessageBox-method-show 
	 */
	afterConfirmStockChange: function (buttonId, text, opts) {
		if (buttonId == "cancel") {
			opts.originalOnEdit.record.set("stockLevel", opts.originalOnEdit.originalValue);
		}
		
		if (buttonId == "ok") {
			if (opts.dialog.rememberChoiceCheckbox.getValue() === true) {
				PartKeepr.getApplication().setUserPreference("partkeepr.inline-stock-change.confirm", false);
			}
			
			this.handleStockChange(opts.originalOnEdit);
		}
	},
	/**
	 * Handles the stock change. Automatically figures out which method to call (deleteStock or addStock) and
	 * sets the correct quantity.
	 * 
	 * @param e An edit event, as documented in
	 * 		    http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
	 */
	handleStockChange: function (e) {
		var mode, quantity = 0;
		
		if (e.value < 0) {
			mode = "deleteStock";
			quantity = abs(e.value);
		} else {
			if (e.originalValue <= e.value) {
				mode = "deleteStock";
				quantity = e.originalValue - e.value;
			} else {
				mode = "addStock";
				quantity = e.value - e.originalValue;
			}
		}
		
		var call = new PartKeepr.ServiceCall(
			"Part", 
			mode);
		call.setParameter("stock", quantity);
		call.setParameter("part", e.record.get("id"));
		call.setHandler(Ext.bind(this.reloadPart, this, [ e ]));
		call.doCall();
	},
	/**
	 * Reloads the current part
	 */
	reloadPart: function (opts) {
		this.loadPart(opts.record.get("id"), opts);
	},
	/**
	 * Load the part from the database.
	 */
	loadPart: function (id, opts) {
		PartKeepr.Part.load(id, {
			scope: this,
			success: this.onPartLoaded
		});
	},
	/**
	 * Callback after the part is loaded
	 */
	onPartLoaded: function (record, opts) {
		var rec = this.store.findRecord("id", record.get("id"));
		if (rec) {
			rec.set("stockLevel", record.get("stockLevel"));
		}
	}
});
