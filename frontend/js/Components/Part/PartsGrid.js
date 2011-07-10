/**
 * This class is the main part list grid.
 * 
 */
Ext.define('PartKeepr.PartsGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.PartsGrid',
	
	// We want to display the texts for the add/delete buttons
	buttonTextMode: 'show',
	
	addButtonText: i18n("Add Part"),
	addButtonIcon: 'resources/silkicons/brick_add.png',
    deleteButtonText: i18n("Delete Part"),
    deleteButtonIcon: 'resources/silkicons/brick_delete.png',
    	
	viewConfig: {
        plugins: {
            ddGroup: 'CategoryTree',
            ptype: 'gridviewdragdrop',
            enableDrop: false
        }
    },
    enableDragDrop   : true,
    stripeRows       : true,
    multiSelect		 : true,
    invalidateScrollerOnRefresh: true,
	initComponent: function () {
		
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
			//enableGroupingMenu: false,
	        groupHeaderTpl: '{name} ({rows.length} ' + i18n("Part(s)")+")"
	    });

		// Create the columns
		this.defineColumns();
		
		
		this.features = [groupingFeature];
		
		this.on("itemdblclick", this.onDoubleClick, this);
		
		this.addEvents("editPart");
		
		// Initialize the panel
		this.callParent();
		
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
		        	  header: "",
		        	  dataIndex: "",
		        	  width: 30,
		        	  renderer: this.iconRenderer
		          },
		          {
		        	  header: i18n("Name"),
		        	  dataIndex: 'name',
		        	  flex: 1,
		        	  minWidth: 200,
		        	  renderer: Ext.util.Format.htmlEncode
		          },{
		        	  header: i18n("Storage Location"),
		        	  dataIndex: 'storageLocationName'
		          },{
		        	  header: i18n("Stock"),
		        	  dataIndex: 'stockLevel',
		        	  renderer: this.stockLevelRenderer
		          },{
		        	  header: i18n("Min. Stock"),
		        	  dataIndex: 'minStockLevel',
		        	  renderer: this.stockLevelRenderer
		          },{
		        	  header: i18n("Avg. Price"),
		        	  dataIndex: 'averagePrice'
		          },{
		        	  header: i18n("Footprint"),
		        	  dataIndex: 'footprintName'
		          },{
		        	  header: i18n("Category"),
		        	  dataIndex: 'categoryPath',
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
			return val + " " + rec.get("partUnitName");
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
			ret += '<img src="resources/silkicons/attach.png" alt="'+i18n("Has attachments")+'" title="'+i18n("Has attachments")+'"/>';
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
		this.searchField.onTrigger1Click();
		
		proxy.extraParams.start = 0;
		this.store.currentPage = 1;
		this.store.load({ start: 0});
	}
});