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
	          {
	        	  header: i18n("User"),
	        	  dataIndex: 'user_id',
	        	  flex: 0.4,
	        	  minWidth: 80,
	        	  renderer: function (val) {
	        		  var rec = PartKeepr.getApplication().getUserStore().findRecord("id", val);
	        		  
	        		  if (rec) {
	        			  return rec.get("username");
	        		  } else {
	        			  return i18n("Unknown user");
	        		  }
	        		  
	        	  },
	        	  editor: {
	        		  xtype: 'UserComboBox'
	        	  }
	          },
	          {header: i18n("Amount"),  dataIndex: 'amount', width: 50,
	        	  editor: {
                      xtype:'numberfield',
                      allowBlank:false
                  }},
	          {header: i18n("Date"), dataIndex: 'datetime', width: 120},
	          {
	        	  header: i18n("Price"),
	        	  editor: {
                      xtype:'numberfield',
                      allowBlank:false
                  },
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
    /**
     * Initializes the stock history grid.
     */
    initComponent: function () {
    	var config = {
			autoLoad: false,
			autoSync: true, 
			remoteFilter: false,
			remoteSort: false,
			model: 'PartKeepr.StockEntry',
			pageSize: -1};
    	
    	this.store = Ext.create('Ext.data.Store', config);
    	
    	this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
		
		this.plugins =  [ this.editing ];
		
		this.editing.on("beforeedit", this.onBeforeEdit, this);
		    	
    	this.on("activate", this.onActivate, this);
    	this.callParent();
    },
    /**
     * Called before editing a cell. Checks if the user may actually make the requested changes.
     *  
     * @param e Passed from ExtJS
     * @returns {Boolean}
     */
    onBeforeEdit: function (e) {

    	// Checks if the usernames match
    	var sameUser = e.record.get("username") == PartKeepr.getApplication().getUsername();
    	
    	switch (e.field) {
    		case "price":
    			// Check the direction is "out". If yes, editing the price field is not allowed
    			if (e.record.get("direction") == "out") {
    				return false;
    			}
    			
    			// If it's not the same user or an admin, editing is not allowed
    			if ( !sameUser && !PartKeepr.getApplication().isAdmin()) {
    				return false;
    			}
    			break;
    		case "amount":
    			// Only an admin may edit the amount. Regular users must put the stock back in manually.
    			if (!PartKeepr.getApplication().isAdmin()) {
    				return false;
    			}
    			break;
    		case "user":
    			if (!PartKeepr.getApplication().isAdmin()) {
    				return false;
    			}
    			break;
    	}
    },
    /**
     * Called when the view is activated.
     */
    onActivate: function () {
    	var proxy = this.store.getProxy();
		proxy.extraParams.item = this.part;
		
		this.store.load();
    }
});