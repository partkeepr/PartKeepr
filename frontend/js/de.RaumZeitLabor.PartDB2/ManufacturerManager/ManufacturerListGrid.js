Ext.ns("de.RaumZeitLabor.PartDB2");

de.RaumZeitLabor.PartDB2.ManufacturerListGrid = Ext.extend(Ext.grid.GridPanel, {
	
	store: null,
	initComponent: function () {
	
	var pageSize = 13;
	
	
	var call = new org.jerrymouse.service.Call(
			"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
			"getManufacturers");
	
	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.loading]');
	call.setParameter("limit", pageSize);
	
	this.store = new Ext.data.JsonStore({
        root: 'manufacturers',
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
        		"rowselect": this.onManufacturerSelected.createDelegate(this),
        		"selectionchange": this.onManufacturerSelectionChange.createDelegate(this)
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
                {header: '$[de.RaumZeitLabor.PartDB2.ManufacturerManager.name]', dataIndex: 'name', id: 'name'}
                
            ],
        }),

        tbar: {
			items: [
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.ManufacturerManager.add]',
			        	icon: 'resources/silkicons/add.png',
			        	handler: this.addManufacturer.createDelegate(this)
			        },
			        {
			        	tooltip: '$[de.RaumZeitLabor.PartDB2.ManufacturerManager.delete]',
			        	icon: 'resources/silkicons/delete.png',
			        	id: 'manufacturer-delete-button',
			        	handler: this.deleteManufacturer.createDelegate(this),
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
	
	this.loadManufacturers();
	
	de.RaumZeitLabor.PartDB2.ManufacturerListGrid.superclass.initComponent.call(this);
	
	},
	
	onManufacturerSelected: function (sm, rowIdx, record) {
		Ext.getCmp("manufacturer-delete-button").enable();
		
		Ext.getCmp("manufacturer-details").editManufacturer(record.get("id"));
	},
	onManufacturerSelectionChange: function (sm) {
		if (sm.getCount() == 0) {
			Ext.getCmp("manufacturer-delete-button").disable();
		}
	},
	loadManufacturers: function () {
		this.store.load();
	},
	deleteManufacturer: function () {
		var record = this.getSelectionModel().getSelected();
		
		org.jerrymouse.gui.widgets.messagebox.confirm(
				'$[de.RaumZeitLabor.PartDB2.ManufacturerManager.deleteManufacturerDialogTitle]',
				sprintf('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.deleteManufacturerDialogMessage]', record.get("name")),
				function(btn, text){
						if (btn == 'yes'){
							var call = new org.jerrymouse.service.Call(
									"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
									"deleteManufacturer");
							call.setParameter("id", record.get("id"));
							call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.deleteManufacturer]');
							call.setHandler(this.onManufacturerDeleted.createDelegate(this))
							call.doCall();
						}
				}.createDelegate(this));
	},
	addManufacturer: function () {
		org.jerrymouse.gui.widgets.messagebox.prompt(
				'$[de.RaumZeitLabor.PartDB2.ManufacturerManager.addManufacturerDialogTitle]',
				'$[de.RaumZeitLabor.PartDB2.ManufacturerManager.addManufacturerDialogMessage]',
				function(btn, text){
					if (btn == 'ok'){
						var call = new org.jerrymouse.service.Call(
								"de.RaumZeitLabor.PartDB2.Manufacturer.ManufacturerService", 
		    					"addManufacturer");
						call.setParameter("name", text);
						call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.ManufacturerManager.addManufacturer]');
						call.setHandler(this.onManufacturerAdded.createDelegate(this))
						call.doCall();
					}
				}.createDelegate(this));
	},
	
	onManufacturerAdded: function (result) {
		this.loadManufacturers();
	},
	onManufacturerDeleted: function (result) {
		Ext.getCmp("manufacturer-details").hide();
		this.loadManufacturers();
	}
});
