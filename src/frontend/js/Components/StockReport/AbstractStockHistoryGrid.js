/**
 * Represents the stock history grid.
 */
Ext.define('PartKeepr.AbstractStockHistoryGrid', {
	extend: 'PartKeepr.BaseGrid',
	
	pageSize: 25,
	
	defineColumns: function () {
		this.columns = [{
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
	          {header: i18n("Date"), dataIndex: 'dateTime', width: 120},
	          {
	        	  header: i18n("User"),
	        	  dataIndex: 'user_id',
	        	  flex: 1,
	        	  minWidth: 80,
	        	  renderer: function (val, p, rec) {
        			  return rec.get("username");
	        	  },
	        	  editor: {
	        		  xtype: 'UserComboBox'
	        	  }
	          },
	          {header: i18n("Amount"),  dataIndex: 'stockLevel', width: 50,
	        	  editor: {
                      xtype:'numberfield',
                      allowBlank:false
                  }},
	          
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
	          },{
	        	  header: i18n("Comment"),
	        	  dataIndex: 'comment',
	        	  width: 60,
	        	  editor: {
                      xtype:'textfield',
                      allowBlank:true
                  }
	          }];
	},
    model: 'PartKeepr.StockEntry',
    /**
     * Initializes the stock history grid.
     */
    initComponent: function () {
    	
    	this.defineColumns();
    	
    	var config = {
			autoLoad: false,
			autoSync: true, 
			remoteFilter: true,
			remoteSort: true,
			proxy: PartKeepr.getRESTProxy("Stock"),
			model: 'PartKeepr.StockEntry',
 			sorters: [{
	 			property: 'dateTime',
 				direction:'DESC'
 			}],
			pageSize: this.pageSize };
    	
    	this.store = Ext.create('Ext.data.Store', config);
    	
    	this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
		
		this.plugins =  [ this.editing ];
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Paging", {
			store: this.store,
			enableOverflow: true,
			dock: 'bottom',
			displayInfo: false
		});
		
		
		this.dockedItems = new Array();
		this.dockedItems.push(this.bottomToolbar);
		
		this.editing.on("beforeedit", this.onBeforeEdit, this);
		    	
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
    		case "stockLevel":
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
    		case "comment":
    			if ( !sameUser && !PartKeepr.getApplication().isAdmin()) {
    				return false;
    			}
    			break;
		default:
			return true;
    	}

	return true;
    }
});