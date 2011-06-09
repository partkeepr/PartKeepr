Ext.define('PartDB2.PartParameterGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.PartParameterGrid',
	border: false,
	initComponent: function () {
		this.store = Ext.create("Ext.data.Store", {
			model: 'PartParameter',
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
                icon: 'resources/silkicons/building_delete.png',
                handler: this.onDeleteClick
            });
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Add',
                scope: this,
                icon: 'resources/silkicons/building_add.png',
                handler: this.onAddClick
            }, this.deleteButton]
        }];
		
		this.columns = [
		                {
		                	header: i18n("Parameter"),
		                	dataIndex: 'name',
		                	flex: 0.2,
		                	editor: {
		                        xtype:'PartParameterComboBox',
		                        allowBlank:true
		                    }
		                },
		                { 	
		                	header: i18n("Description"),
		                	dataIndex: 'description',
		                	flex: 0.3,
		                	editor: {
		                        xtype:'textfield',
		                        allowBlank:true
		                    }
		                },
		                {
		                	header: i18n("Unit"),
		                	flex: 0.2,
		                	dataIndex: 'unit_id',
		                	renderer: function (val,p,rec) {
		                		var foundRec = PartDB2.getApplication().getUnitStore().findRecord("id", val);
		                		
		                		if (foundRec) {
		                			return foundRec.get("name");
		                		} else {
		                			return "";
		                		}
		                	},
		                	editor: {
		                        xtype:'UnitComboBox',
		                        allowBlank:true
		                    }
		                },
		                {
		                	header: i18n("Value"),
		                	flex: 0.2,
		                	dataIndex: "value",
		                	renderer: function (val,p,rec) {
		                		/* Convert the value into a "nice" si-prefixed unit */
		                		
		                		var foundRec = PartDB2.getApplication().getUnitStore().findRecord("id", rec.get("unit_id"));
		                		var allowedSiPrefixes = foundRec.prefixes().getRange();
		                		
		                		console.log(allowedSiPrefixes.length);
		                		finalValue = null;
		                		
		                		for (var i=0;i<allowedSiPrefixes.length;i++) {
		                			var test = val / Math.pow(10, allowedSiPrefixes[i].get("power"));
		                			
		                			if (test >= 1 && test < 1000) {
		                				finalValue = test.toPrecision(6) + " "+allowedSiPrefixes[i].get("symbol")+foundRec.get("symbol");
		                			}
		                		}
		                		
		                		if (finalValue === null) {
		                			finalValue = val.toPrecision(6) + foundRec.get("symbol"); 
		                		}
		                		
		                		return finalValue;
		                	},
		                	editor: {
		                		xtype: 'numberfield',
		                		decimalPrecision: 20
		                	}
		                }
		                ];
		
		this.callParent();
		
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
		this.on("edit", this.onEdit, this);
	},
	onEdit: function (data) {
		/*var id = data.record.get("unit_id");
		
		var rec = PartDB2.getApplication().getManufacturerStore().findRecord("id", id);
		
		if (rec) {
			data.record.set("manufacturer_name", rec.get("name"));
		}*/
	},
	onAddClick: function () {
		this.editing.cancelEdit();
		
		/*var rec = new PartDB2.PartManufacturer({
			packagingUnit: 1
		});
		
		this.store.insert(0, rec);
		
		this.editing.startEdit(0,0);*/
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