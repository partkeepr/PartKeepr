Ext.define('PartKeepr.PartDistributorGrid', {
	extend: 'PartKeepr.BaseGrid',
	alias: 'widget.PartDistributorGrid',
	border: false,
	initComponent: function () {
		this.store = Ext.create("Ext.data.Store", {
			model: 'PartKeepr.PartDistributor',
			proxy: {
				type: 'memory',
				reader: {
					type: 'json'
				}
			}
			
		});
		
		this.editing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        });
		
		this.plugins =  [ this.editing ];
		
		this.deleteButton = Ext.create("Ext.button.Button", {
                text: 'Delete',
                disabled: true,
                itemId: 'delete',
                scope: this,
                icon: 'resources/silkicons/lorry_delete.png',
                handler: this.onDeleteClick
            });
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Add',
                scope: this,
                icon: 'resources/silkicons/lorry_add.png',
                handler: this.onAddClick
            }, this.deleteButton]
        }];
		
		this.columns = [
		                {
		                	header: i18n("Distributor"),
		                	dataIndex: 'distributor_id',
		                	xtype: 'templatecolumn',
		                	tpl: '{distributor_name}',
		                	flex: 0.3,
		                	editor: {
		                        xtype:'DistributorComboBox',
		                        allowBlank:true
		                    }
		                },
		                { 	
		                	header: i18n("Order Number"),
		                	dataIndex: 'orderNumber',
		                	flex: 0.3,
		                	editor: {
		                        xtype:'textfield',
		                        allowBlank:true
		                    }
		                },{
		                	header: i18n("Packaging Unit"),
		                	dataIndex: 'packagingUnit',
		                	flex: 0.2,
		                	editor: {
		                        xtype:'numberfield',
		                        allowDecimals: false,
		                        allowBlank:false,
		                        minValue: 1
		                    }
		                },{
		                	header: i18n("Price per Item"),
		                	dataIndex: 'price',
		                	flex: 0.2,
		                	editor: {
		                		xtype:'numberfield',
		                        allowDecimals: true,
		                        allowBlank:true
		                	}
		                }
		                ];
		
		this.callParent();
		
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
		this.on("edit", this.onEdit, this);
	},
	onEdit: function (data) {
		var id = data.record.get("distributor_id");
		
		var rec = PartKeepr.getApplication().getDistributorStore().findRecord("id", id);
		
		if (rec) {
			data.record.set("distributor_name", rec.get("name"));
		}
	},
	onAddClick: function () {
		this.editing.cancelEdit();
		
		var rec = new PartKeepr.PartDistributor({
			packagingUnit: 1
		});
		
		this.store.insert(0, rec);
		
		this.editing.startEdit(0,0);
	},
	onDeleteClick: function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
	},
	onSelectChange: function(selModel, selections){
        this.deleteButton.setDisabled(selections.length === 0);
    }
});