Ext.define('PartKeepr.PartStockHistory', {
	extend: 'PartKeepr.AbstractStockHistoryGrid',
	alias: 'widget.PartStockHistory',
	
	initComponent: function () {
		this.callParent();
		
		this.on("activate", this.onActivate, this);
	},
	/**
     * Called when the view is activated.
     */
    onActivate: function () {
    	var proxy = this.store.getProxy();
		proxy.extraParams.part = this.part;
		
		this.store.load();
    }
});
