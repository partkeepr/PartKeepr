Ext.ns("de.RaumZeitLabor.PartDB2");

de.RaumZeitLabor.PartDB2.StorageLocationListGrid = Ext.extend(Ext.grid.GridPanel, {
	
	store: null,
	initComponent: function () {
	
	var pageSize = 13;
	
	
	var call = new org.jerrymouse.service.Call(
			"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
			"getStorageLocations");
	
	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.loading]');
	call.setParameter("limit", pageSize);
	
	this.store = new Ext.data.JsonStore({
        root: 'storageLocations',
        totalProperty: 'totalCount',
        proxy: new ServiceCallDataProxy(call),
        idProperty: 'id',
        remoteSort: true,

        fields: [
            'id',
            'name'
        ]
    });
	
	Ext.apply(this, {
		containerScroll: true,
        rootVisible: false,
        lines: false,
        store: this.store,
        autoExpandColumn: 'name', 
        sm: new Ext.grid.RowSelectionModel({
        	singleSelect: true,
        	listeners: {
        		"rowselect": this.onStorageLocationSelected.createDelegate(this),
        		"selectionchange": this.onStorageLocationSelectionChange.createDelegate(this)
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
                {header: '$[de.RaumZeitLabor.PartDB2.StorageLocationManager.name]', dataIndex: 'name', id: 'name'}
                
            ]
        }),

        tbar: {
			items: [
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.StorageLocationManager.add]',
			        	icon: 'resources/silkicons/add.png',
			        	handler: this.addStorageLocation.createDelegate(this)
			        },
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.StorageLocationManager.delete]',
			        	icon: 'resources/silkicons/delete.png',
			        	id: 'storagelocation-delete-button',
			        	handler: this.deleteStorageLocation.createDelegate(this),
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
			        			this.store.proxy.call.setParameter("start", 0);
			        			this.store.load({start: 0});
			        		}.createDelegate(this),
			        		'resetSearch': function (text) {
			        			this.store.proxy.call.setParameter("filter", '');
			        			this.store.proxy.call.setParameter("start", 0);
			        			this.store.load({start: 0});
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
	
	this.loadStorageLocations();
	
	de.RaumZeitLabor.PartDB2.StorageLocationListGrid.superclass.initComponent.call(this);
	
	},
	
	onStorageLocationSelected: function (sm, rowIdx, record) {
		Ext.getCmp("storagelocation-delete-button").enable();
		
		Ext.getCmp("storagelocation-details").editStorageLocation(record.get("id"));
	},
	onStorageLocationSelectionChange: function (sm) {
		if (sm.getCount() === 0) {
			Ext.getCmp("storagelocation-delete-button").disable();
		}
	},
	loadStorageLocations: function () {
		this.store.load();
	},
	deleteStorageLocation: function () {
		var record = this.getSelectionModel().getSelected();
		
		org.jerrymouse.gui.widgets.messagebox.confirm(
				'$[de.RaumZeitLabor.PartDB2.StorageLocationManager.deleteStorageLocationDialogTitle]',
				sprintf('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.deleteStorageLocationDialogMessage]', record.get("name")),
				function(btn, text){
						if (btn == 'yes'){
							var call = new org.jerrymouse.service.Call(
									"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
									"deleteStorageLocation");
							call.setParameter("id", record.get("id"));
							call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.deleteStorageLocation]');
							call.setHandler(this.onStorageLocationDeleted.createDelegate(this));
							call.doCall();
						}
				}.createDelegate(this));
	},
	addStorageLocation: function () {
		org.jerrymouse.gui.widgets.messagebox.prompt(
				'$[de.RaumZeitLabor.PartDB2.StorageLocationManager.addStorageLocationDialogTitle]',
				'$[de.RaumZeitLabor.PartDB2.StorageLocationManager.addStorageLocationDialogMessage]',
				function(btn, text){
					if (btn == 'ok'){
						var call = new org.jerrymouse.service.Call(
								"de.RaumZeitLabor.PartDB2.StorageLocation.StorageLocationService", 
		    					"addStorageLocation");
						call.setParameter("name", text);
						call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.StorageLocationManager.addStorageLocation]');
						call.setHandler(this.onStorageLocationAdded.createDelegate(this));
						call.doCall();
					}
				}.createDelegate(this));
	},
	
	onStorageLocationAdded: function (result) {
		this.loadStorageLocations();
	},
	onStorageLocationDeleted: function (result) {
		Ext.getCmp("storagelocation-details").hide();
		this.loadStorageLocations();
	}
});
