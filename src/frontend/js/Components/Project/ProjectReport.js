/**
 * Represents the project report view 
 */
Ext.define('PartKeepr.ProjectReportView', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.ProjectReportView',
	
	bodyStyle: 'background:#DBDBDB;padding: 5px',
	border: false,
	
	defaults: {
	    bodyStyle: 'padding:10px'
	},
	
	layout: 'border',
	
	initComponent: function () {
		
		this.createStores();
		
		this.upperGridEditing = Ext.create('Ext.grid.plugin.CellEditing', {
	        clicksToEdit: 1
	    });
		
		this.reportList = Ext.create("PartKeepr.BaseGrid", {
			selModel: {
				mode: 'MULTI'
			},
			selType: 'checkboxmodel',
			flex: 1,
			columns: [{
				header: i18n("Amount"), dataIndex: 'amount',
				width: 50,
				editor: {
					xtype: 'numberfield'
				}
			},{
				header: i18n("Project Name"), dataIndex: 'name',
				flex: 1
			},{
				header: i18n("Description"), dataIndex: 'description',
				flex: 1
			}],
			store: this.store,
			plugins: [ this.upperGridEditing ]
		});
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
	        clicksToEdit: 1
	    });
		
		this.reportResult = Ext.create("PartKeepr.BaseGrid", {
			flex: 1,
			features: [{
		        ftype: 'summary'
		    }],
			columns: [{
				header: i18n("Quantity"), dataIndex: 'quantity',
				width: 50
			},{
				header: i18n("Part"),
				renderer: function (val, p, rec) {
					return rec.part().getAt(0).get("name");
				},
				flex: 1
			},{
				header: i18n("Remarks"),
				dataIndex: 'remarks',
				flex: 1
			},{
				header: i18n("Projects"),
				dataIndex: 'projects',
				flex: 1
			},{
				header: i18n("Storage Location"), dataIndex: 'storageLocation_name',
				width: 100
			},{
				header: i18n("Available"), dataIndex: 'available',
				width: 75
			},{
				header: i18n("Distributor"), dataIndex: 'distributor_id',
				renderer: function (val,p,rec) {
					return rec.get("distributor_name");
				},
				flex: 1,
				editor: {
					xtype: 'DistributorComboBox',
					triggerAction: 'query',
					ignoreQuery: true,
					forceSelection: true,
					editable: false
				}
			},{
				header: i18n("Distributor Order Number"), dataIndex: 'distributor_order_number',
				flex: 1,
				editor: {
					xtype: 'textfield'
				}
			},{
				header: i18n("Price per Item"), dataIndex: 'price',
				width: 100
			},{
				header: i18n("Sum"),
				renderer: function (val,p,rec) {
					if (!isNaN(rec.get("price"))) {
						return rec.get("quantity") * rec.get("price");	
					}
					
					return 0;
					
				},
				width: 100
			},{
				header: i18n("Amount to Order"), dataIndex: 'missing',
				width: 100
			},{
				header: i18n("Sum (Order)"),
				dataIndex: 'sum_order',
				summaryType: 'sum',
				width: 100
			}],
			store: this.projectReportStore,
			plugins: [ this.editing ]
		});
		
		this.reportResult.on("beforeedit", this.onBeforeEdit, this);
		this.reportResult.on("edit", this.onEdit, this);
		
		this.createReportButton = Ext.create('Ext.button.Button', {
			xtype: 'button',
			text: i18n("Create Report"),
			width: 120,
			margins: {
				right: 10
			},
			listeners: {
				click: this.onCreateReportClick,
				scope: this
			}
		});
		
		this.autoFillButton = Ext.create('Ext.button.Button', {
			  xtype: 'button',
		  	  text: i18n("Autofill"),
		  	  width: 120,
		  	  listeners: {
		  		  click: this.onAutoFillClick,
		  		  scope: this
		  		}
		});
		
		this.items = [
		              {
		            	  title: i18n("Choose Projects to create a report for"),
		            	  split: true,
		            	  minHeight: 300,
		            	  height: 300,
		            	  bodyStyle: 'background:#DBDBDB;padding: 10px;',
		            	  layout: {
		            		  type: 'vbox',
		            		  align : 'stretch',
		            		  pack  : 'start'
		            	  },
		            	  region: 'north',
		            	  items: [
									this.reportList,
									{
										layout: {
											type: 'hbox',
											pack: 'start'
										},
										margins: {
											top: 10
										},
										border: false,
										bodyStyle: 'background:#DBDBDB',
										items: [ this.createReportButton , this.autoFillButton ]
									}
		            	          ]
		              },{
		            	  region: 'center',
		            	  layout: 'fit',
		            	  bodyStyle: 'background:#DBDBDB;padding: 10px;',
		            	  title: i18n("Project Report"),
		            	  items: this.reportResult
		              }];
		            	  
		
		
		
		this.callParent();
	},
	onBeforeEdit: function (e) {
		if (e.field !== "distributor_id") { return; }
		
		var distributors = e.record.part().getAt(0).distributors();
		
		var filterIds = new Array();
		for (var i=0;i<distributors.count();i++) {
			filterIds.push(distributors.getAt(i).get("distributor_id"));
		}
		
		e.column.getEditor().store.clearFilter();
		e.column.getEditor().store.filter({filterFn: function(item) { 
			for (var i=0;i<filterIds.length;i++) {
				if (item.get("id") == filterIds[i]) {
					return true;
				}
			}
			return false;
		}});
	},
	onEdit: function (editor, e) {
		if (e.field == "distributor_id") {
			var distributors = e.record.part().getAt(0).distributors();
			
			for (var i = 0; i < distributors.count(); i++) {
				if (distributors.getAt(i).get("distributor_id") == e.value) {
					e.record.set("distributor_name", distributors.getAt(i).get("distributor_name"));
					e.record.set("price", distributors.getAt(i).get("price"));
					e.record.set("distributor_order_number", distributors.getAt(i).get("orderNumber"));
					
					e.record.set("sum_order", e.record.get("missing") * e.record.get("price"));
				}
			}
		}
		
		this.reportResult.getView().refresh(true);
		
	},
	onAutoFillClick: function () {
		for (var i=0;i<this.reportResult.store.count();i++) {
			var activeRecord = this.reportResult.store.getAt(i);
			var cheapest=null;
			var cheapestPrice=null;
			
			for (var j=0;j<activeRecord.part().getAt(0).distributors().count();j++) {
				var activeDistributor = activeRecord.part().getAt(0).distributors().getAt(j);
				
				if (cheapestPrice === null && parseFloat(activeDistributor.get("price")) !== 0) {
					cheapestPrice = activeDistributor.get("price");
					cheapest = activeDistributor;
				} else {
					if (parseFloat(activeDistributor.get("price")) !== 0 && parseFloat(activeDistributor.get("price")) < cheapestPrice) {
						cheapestPrice = activeDistributor.get("price");
						cheapest = activeDistributor;
					}
				}
				
			}
			
			if (cheapest !== null) {
				activeRecord.set("distributor_name", cheapest.get("distributor_name"));
				activeRecord.set("distributor_order_number", cheapest.get("orderNumber"));
				activeRecord.set("price", cheapest.get("price"));
				activeRecord.set("sum_order", activeRecord.get("missing") * activeRecord.get("price"));
			}
		}
		
		this.reportResult.getView().refresh(true);
	},
	/**
	 * 
	 */
	onCreateReportClick: function () {
		selection = this.reportList.getSelectionModel().getSelection();
		
		var params = new Array();
		
		for (var i=0;i<selection.length;i++) {
			params.push({ project: selection[i].get("id"), amount: selection[i].get("amount")});
		}
		
		this.projectReportStore.getProxy().extraParams.reports = Ext.encode(params);
		this.projectReportStore.load();
	},
	/**
	 * Creates the store used in this view.
	 */
	createStores: function () {
		var config = {
			autoLoad: true,
			model: "PartKeepr.ProjectReportList",
			pageSize: -1
		};
		
		this.store = Ext.create('Ext.data.Store', config);
		
		this.projectReportStore = Ext.create('Ext.data.Store', {
			model: "PartKeepr.ProjectReport",
			pageSize: -1
		});
	}
});