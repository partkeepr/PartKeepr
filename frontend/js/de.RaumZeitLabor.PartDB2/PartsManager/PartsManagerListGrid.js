Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerListGrid");

de.RaumZeitLabor.PartDB2.PartsManagerListGrid = Ext.extend(Ext.grid.GridPanel, {
	height: '100%',
	initComponent: function () {
	 
		 this.colModel = new Ext.grid.ColumnModel({
		        defaults: {
		            width: 120,
		            sortable: true
		        },
		        columns: [
		                 {header: 'Name', dataIndex: 'name', width: 300},
		        ],
		    });
		   
		var pageSize = 13;
		
		this.call = new org.jerrymouse.service.Call(
					"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
					"getParts");
			
		this.call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.loading]');
		this.call.setParameter("limit", pageSize);
			
		 this.store = new Ext.data.JsonStore({
		        root: 'parts',
		        totalProperty: 'totalCount',
		        proxy: new ServiceCallDataProxy(this.call),
		        idProperty: 'id',
		        remoteSort: true,
		        listeners: {
		        	beforeLoad: this.onBeforeLoad.createDelegate(this)
		        },
		        fields: [
		            'id',
		            'name'
		        ]
		    });
		 
		 
		 this.bbar =  new Ext.PagingToolbar(
					{
						"pageSize": pageSize,
						store: this.store,
			            displayInfo: false				
					});
		 de.RaumZeitLabor.PartDB2.PartsManagerListGrid.superclass.initComponent.call(this);
	},
	onBeforeLoad: function (store, options) {
		this.call.setParameter("category", this.limitCategory);
	},
	setLimitCategory: function (category) {
		this.limitCategory = category;
	}
});