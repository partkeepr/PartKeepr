/**
 * The stock history grid. It shows all stock transactions.
 */
Ext.define('PartKeepr.StockHistoryGrid', {
	extend: 'PartKeepr.AbstractStockHistoryGrid',
	alias: 'widget.PartStockHistory',
	
	pageSize: 25,
	
	defineColumns: function () {
		this.callParent();
		
		this.columns.splice(2, 0, {
	        	  header: i18n("Part"),
	        	  dataIndex: 'part_name',
	        	  flex: 1,
	        	  minWidth: 200
		});
		
		this.columns.splice(3, 0, {
      	  header: i18n("Storage Location"),
      	  dataIndex: 'storageLocation_name',
      	  flex: 1,
      	  minWidth: 200
	});
	},
	initComponent: function () {
		this.callParent();
		
		this.on("activate", this.onActivate, this);
	},
	/**
     * Called when the view is activated.
     */
    onActivate: function () {
		this.store.load();
    }
});
