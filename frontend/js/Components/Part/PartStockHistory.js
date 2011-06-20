Ext.define('PartKeepr.PartStockHistory', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.PartStockHistory',
	
	columns: [
	          {
	        	  header: "",
	        	  xtype:'actioncolumn',
	        	  dataIndex: 'direction',
	        	  renderer: function (val) {
	        		  if (val == "out")
	        		  {
	        			  return '<img title="'+i18n("Parts removed")+'" src="resources/silkicons/brick_delete.png"/>';
	        		  } else {
	        			  return '<img title="'+i18n("Parts added")+'" src="resources/silkicons/brick_add.png"/>';
	        		  }
	        	  },
	        	  width: 20
	          },
	          {header: i18n("User"),  dataIndex: 'username', width: 80 },
	          {header: i18n("Amount"),  dataIndex: 'amount', width: 50},
	          {header: i18n("Date"), dataIndex: 'datetime', width: 120},
	          {
	        	  header: i18n("Price"),
	        	  dataIndex: 'price',
	        	  width: 60,
	        	  renderer: function (val, p, rec) {
	        		  if (rec.get("dir") == "out") {
	        			  return "-";
	        		  } else {
	        			  return val;
	        		  }
	        	  }
	          }
	          ],
    model: 'PartKeepr.StockEntry',
    initComponent: function () {
    	var config = {
			autoLoad: false,
			autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
			remoteFilter: false,
			remoteSort: false,
			model: 'PartKeepr.StockEntry',
			pageSize: -1};
    	
    	this.store = Ext.create('Ext.data.Store', config);
    	
    	this.on("activate", this.onActivate, this);
    	this.callParent();
    },
    onActivate: function () {
    	var proxy = this.store.getProxy();
		proxy.extraParams.item = this.part;
		
		this.store.load();
    }
});