Ext.ns("de.RaumZeitLabor.PartDB2.FootPrintManagerList");

de.RaumZeitLabor.PartDB2.FootPrintManagerList = Ext.extend(Ext.grid.GridPanel, {
	
	store: null,
	id: 'footprint-list',
	initComponent: function () {
	
	var pageSize = 13;
	
	
	var call = new org.jerrymouse.service.Call(
			"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
			"getFootprints");
	
	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.loading]');
	call.setParameter("limit", pageSize);
	
	this.store = new Ext.data.JsonStore({
        root: 'footprints',
        totalProperty: 'totalCount',
        proxy: new ServiceCallDataProxy(call),
        idProperty: 'id',
        remoteSort: true,

        fields: [
            'id',
            'footprint'
        ]
    });
	
	Ext.apply(this, {
		containerScroll: true,
        rootVisible: false,
        lines: false,
        store: this.store,
        autoExpandColumn: 'footprint', 
        sm: new Ext.grid.RowSelectionModel({
        	singleSelect: true,
        	listeners: {
        		"rowselect": this.onFootprintSelected.createDelegate(this),
        		"selectionchange": this.onFootprintSelectionChange.createDelegate(this)
        }
        	
        }),
		viewConfig: {
			forceFit: true
		},
		
        colModel: new Ext.grid.ColumnModel({
            defaults: {
                width: 230,
                sortable: true
            },
            columns: [
                {header: '$[de.RaumZeitLabor.PartDB2.FootPrintManager.footprint]', dataIndex: 'footprint', id: 'footprint'}
                
            ],
        }),

        tbar: {
			items: [
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.FootPrintManager.add]',
			        	icon: 'resources/silkicons/add.png',
			        	handler: this.addFootprint.createDelegate(this)
			        },
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.FootPrintManager.delete]',
			        	icon: 'resources/silkicons/delete.png',
			        	id: 'footprint-delete-button',
			        	handler: this.deleteFootprint.createDelegate(this),
			        	disabled: true
			        },{
			        	xtype: 'tbfill'
			        },{
			        	xtype: 'tbtext',
			        	text: 'Filter:'
			        	
			        },{
			        	xtype: 'org.jerrymouse.gui.widgets.searchField',
			        	listeners: {
			        		'startSearch': function (text) {
			        			this.store.proxy.call.setParameter("filter", text);
			        			this.store.reload();
			        		}.createDelegate(this),
			        		'resetSearch': function (text) {
			        			this.store.proxy.call.setParameter("filter", '');
			        			this.store.reload();
			        		}.createDelegate(this)
			        	},
			        	id: 'filter'
			        }]
	
	},
	bbar: new Ext.PagingToolbar(
			{
				"pageSize": pageSize,
				store: this.store,
	            displayInfo: false				
			})

	});
	
	this.loadFootprints();
	
	de.RaumZeitLabor.PartDB2.FootPrintManagerList.superclass.initComponent.call(this);
	
	},
	
	onFootprintSelected: function (sm, rowIdx, record) {
		Ext.getCmp("footprint-delete-button").enable();
		
		Ext.getCmp("footprint-details").editFootprint(record.get("id"));
	},
	onFootprintSelectionChange: function (sm) {
		if (sm.getCount() == 0) {
			Ext.getCmp("footprint-delete-button").disable();
		}
	},
	loadFootprints: function () {
		this.store.load();
	},
	deleteFootprint: function () {
		var record = this.getSelectionModel().getSelected();
		
		console.log(record.get("id"));
		
		org.jerrymouse.gui.widgets.messagebox.confirm('$[de.RaumZeitLabor.PartDB2.FootPrintManager.deleteFootprintDialogTitle]', '$[de.RaumZeitLabor.PartDB2.FootPrintManager.deleteFootprintDialogMessage]',function(btn, text){
			
			if (btn == 'yes'){
		    	var call = new org.jerrymouse.service.Call(
		    			"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
		    			"deleteFootprint");
		    	call.setParameter("id", record.get("id"));
		    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.deleteFootprint]');
		    	call.setHandler(this.onFootprintDeleted.createDelegate(this))
		    	call.doCall();
		    }
		}.createDelegate(this));
	},
	addFootprint: function () {
		org.jerrymouse.gui.widgets.messagebox.prompt('$[de.RaumZeitLabor.PartDB2.FootPrintManager.addFootprintDialogTitle]', '$[de.RaumZeitLabor.PartDB2.FootPrintManager.addFootprintDialogMessage]',function(btn, text){
		    if (btn == 'ok'){
		    	var call = new org.jerrymouse.service.Call(
		    			"de.RaumZeitLabor.PartDB2.Footprint.FootprintManagerService", 
		    			"addFootprint");
		    	call.setParameter("footprint", text);
		    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.addFootprint]');
		    	call.setHandler(this.onFootprintAdded.createDelegate(this))
		    	call.doCall();
		    }
		}.createDelegate(this));
	},
	
	onFootprintAdded: function (result) {
		this.loadFootprints();
	},
	onFootprintDeleted: function (result) {
		Ext.getCmp("footprint-details").hide();
		this.loadFootprints();
	}
});
