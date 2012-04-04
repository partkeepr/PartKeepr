/**
 * This class represents a list of all system information records.
 */
Ext.define('PartKeepr.SystemInformationGrid', {
	extend: 'PartKeepr.BaseGrid',
	
	/* Define the columns */
	columns: [
	          {
	        	  header: 'Name',
	        	  dataIndex: 'name',
	        	  width: 200
	          },{
	        	  header: 'Value',
	        	  dataIndex: 'value',
	        	  renderer: 'htmlEncode',
	        	  flex:1
	          },{
	        	  header: 'Category',
	        	  dataIndex: 'category',
	        	  hidden: true
	          }
	          ],
	
	/**
	 * Initializes the component
	 */
	initComponent: function () {
		
		/* Add grouping */
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '{name}'
	    });
		
		this.features = [groupingFeature];
		
		/* Create the store using an in-memory proxy */
		this.store = Ext.create("Ext.data.Store", {
			model: 'PartKeepr.SystemInformationRecord',
			sorters: ['category','name'],
			groupField: 'category',
			proxy: {
		        type: 'memory'
		    }
		});
		

		/* Add the refresh button */
		this.refreshButton = Ext.create("Ext.button.Button", {
			handler: this.requestSystemInformation,
			scope: this,
			text: i18n("Refresh")
		});
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
			dock: 'bottom',
			ui: 'footer',
			items: [ this.refreshButton ]
		});
		
		this.dockedItems = [ this.bottomToolbar ];
		
		// Initialize the panel
		this.callParent();
		
		// Retrieve the system information 
		this.requestSystemInformation();
		
	},
	/**
	 * Requests the system information from the server.
	 */
	requestSystemInformation: function () {
		var call = new PartKeepr.ServiceCall("System", "getSystemInformation");
		call.setHandler(Ext.bind(this.processSystemInformationRecords, this));
		call.doCall();
	},
	/**
	 * Processes the response given by the getSystemInformation call.
	 * 
	 * Removes all records from the store and re-creates the records.
	 * 
	 * @param response The response record
	 */
	processSystemInformationRecords: function (response) {
		this.store.removeAll();
		
		// Workaround for removeAll Bug - see http://www.sencha.com/forum/showthread.php?136673-4.0.2-store.removeAll()-does-not-perform-view.all.clear()
		this.view.all.clear();
		
		for (var i=0;i<response.data.length;i++) {
			var rec = new PartKeepr.SystemInformationRecord({
				category: response.data[i].category,
				name: response.data[i].name,
				value: response.data[i].value
			});
			
			this.store.insert(0, rec);
			
		}
	}
});