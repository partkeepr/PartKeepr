Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerListGrid");

de.RaumZeitLabor.PartDB2.PartsManagerListGrid = Ext.extend(Ext.grid.GridPanel, {
	initComponent: function () {
	 
		 this.colModel = new Ext.grid.ColumnModel({
		        defaults: {
		            width: 120,
		            sortable: true
		        },
		        columns: [
		                 {header: 'Name', dataIndex: 'name', width: 300},
		                 {header: 'Lagerort', dataIndex: 'storagelocation', width: 100},
		                 {header: 'Stück', dataIndex: 'stockLevel', width: 100},
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
		            'name',
		            'storagelocation',
		            'stockLevel'
		        ]
		    });
		 
		 
		 this.tbStockLevel = new Ext.form.ComboBox({
			 store: new Ext.data.ArrayStore({
			        id: 0,
			        fields: [
			            'id',
			            'type'
			        ],
			        data: [['all', 'Alle'], ['zero', 'Nur Bestand = 0'], ['nonzero', 'Nur Bestand > 0']]
			    }),
			 valueField: "id",
			 displayField:"type",
			 mode: 'local',
			 triggerAction: 'all',
			 editable: false,
			 forceSelection: true,
			 value: 'all',
			 width: 120,
			 listeners: {
				 select: function () {
					 this.store.reload();	 
				 }.createDelegate(this)
			 }
		 });
		 
		 this.tbar = new Ext.Toolbar({
			items: [
			        this.tbStockLevel
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
		this.call.setParameter("stockmode", this.tbStockLevel.getValue());
	},
	setLimitCategory: function (category) {
		this.limitCategory = category;
	}
});