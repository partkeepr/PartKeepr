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
		
		this.sm = new Ext.grid.RowSelectionModel({ singleSelect: true });
		
		this.sm.on("selectionchange", this.onSelectionChange.createDelegate(this));
		
		this.addPartDialog = new de.RaumZeitLabor.PartDB2.PartsManagerAddPartDialog();
		
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
		 
		 this.addPartButton = new Ext.Button({
			 	text: "Bauteil erfassen",
			 	cls:'x-btn-text-icon',
				icon: 'resources/silkicons/brick_add.png',
				handler: this.onPartAdd.createDelegate(this)
		 });
		 
		 this.editPartButton = new Ext.Button({
			 	text: "Bauteil editieren",
			 	cls:'x-btn-text-icon',
				icon: 'resources/silkicons/brick_edit.png',
				disabled: true,
				handler: this.onPartEdit.createDelegate(this)
		 });
		 
		 this.deletePartButton = new Ext.Button({
			 	text: "Bauteil löschen",
				cls:'x-btn-text-icon',
				disabled: true,
				icon: 'resources/silkicons/brick_delete.png',
				handler: this.onPartDelete.createDelegate(this)
		 });
		 
		 this.bbar =  new Ext.PagingToolbar(
					{
						"pageSize": pageSize,
						store: this.store,
			            displayInfo: false,
			            items: [
			                    this.addPartButton,
			                    this.editPartButton,
			                    this.deletePartButton
			                    ]
					});
		 de.RaumZeitLabor.PartDB2.PartsManagerListGrid.superclass.initComponent.call(this);
	},
	onPartAdd: function () {
		this.addPartDialog.addPart();
	},
	onPartEdit: function () {
		this.addPartDialog.editPart(this.getSelectionModel().getSelected().get("id"));
	},
	onPartDelete: function () {
		var r = this.getSelectionModel().getSelected();
		
		Ext.Msg.confirm("Bauteil löschen", "Soll das Bauteil <b>"+r.get("name")+"</b>, Lagernd in <b>"+r.get("storagelocation")+"</b>, wirklich gelöscht werden?", function (button) {
			if (button == "yes") {
				var call = new org.jerrymouse.service.Call(
						"de.RaumZeitLabor.PartDB2.Part.PartManagerService", 
						"deletePart");
				
				call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.FootPrintManager.loading]');
				call.setParameter("part", r.get("id"));
				call.setHandler(function () {
					this.store.reload();
				}.createDelegate(this));
				call.doCall();
			}
		}.createDelegate(this));
	},
	onBeforeLoad: function (store, options) {
		this.call.setParameter("category", this.limitCategory);
		this.call.setParameter("stockmode", this.tbStockLevel.getValue());
	},
	setLimitCategory: function (category) {
		this.limitCategory = category;
	},
	onSelectionChange: function () {
		if (this.getSelectionModel().getCount() == 0) {
			this.editPartButton.disable();
			this.deletePartButton.disable();
		} else {
			this.editPartButton.enable();
			this.deletePartButton.enable();
		}
	}
});