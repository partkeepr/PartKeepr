/**
 * Represents an editable list of project parts.
 */
Ext.define('PartKeepr.ProjectPartGrid', {
	extend: 'Ext.grid.Panel',
	
	/* Column definitions */
	columns: [{
		header: i18n("Quantity"), dataIndex: 'quantity',
		wdith: 50,
		editor: {
            xtype: 'numberfield',
            allowBlank: false,
            minValue: 1
        }
	}, {
		header: i18n("Part"), dataIndex: 'part_id',
		flex: 1,
		editor: {
			xtype: 'RemotePartComboBox'
		},
		renderer: function (val,p,rec) {
			return rec.get("part_name");
		}
	},{
		header: i18n("Remarks"), dataIndex: 'remarks',
		flex: 1,
		editor: {
			xtype: 'textfield'
		}
	}],
	
	/**
	 * Initializes the component
	 */
	initComponent: function () {
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
	        clicksToEdit: 1
	    });
		
		this.plugins = [ this.editing ];
		
		this.deleteButton = Ext.create("Ext.button.Button", {
            text: 'Delete',
            disabled: true,
            itemId: 'delete',
            scope: this,
            icon: 'resources/silkicons/brick_delete.png',
            handler: this.onDeleteClick
        });
		
		this.dockedItems = [{
		    xtype: 'toolbar',
		    items: [{
		        text: 'Add',
		        scope: this,
		        icon: 'resources/silkicons/brick_add.png',
		        handler: this.onAddClick
		    }, this.deleteButton]
		}];
		
		this.callParent();
		
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	/**
	 * Creates a new row and sets the default quantity to 1.
	 */
	onAddClick: function () {
		this.editing.cancelEdit();
		
		var rec = new PartKeepr.ProjectPart({
			quantity: 1
		});
		
		this.store.insert(this.store.count(), rec);
		
		this.editing.startEdit(rec, this.columns[0]);
	},
	/**
	 * Removes the currently selected row
	 */
	onDeleteClick: function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
	},
	/**
	 * Enables or disables the delete button, depending on the row selection
	 */
	onSelectChange: function(selModel, selections){
        this.deleteButton.setDisabled(selections.length === 0);
    }
});