Ext.define('PartDB2.PartsGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.PartsGrid',
	columns: [
	          {header: i18n("Name"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Storage Location"),  dataIndex: 'storageLocationName'},
	          {header: i18n("Stock"),  dataIndex: 'stockLevel'},
	          {header: i18n("Min. Stock"),  dataIndex: 'minStockLevel'},
	          {header: i18n("Footprint"),  dataIndex: 'footprintName'},
	          ],
	buttonTextMode: 'show',
	initComponent: function () {
		this.callParent();
	},
	setCategory: function (category) {
		var proxy = this.store.getProxy();
		
		proxy.extraParams.category = category;
		this.searchField.onTrigger1Click();
		
		proxy.extraParams.start = 0;
		this.store.currentPage = 1;
		this.store.load({ start: 0});
	}
});