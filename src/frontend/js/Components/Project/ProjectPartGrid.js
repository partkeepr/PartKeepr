/**
 * Represents an editable list of project parts.
 */
Ext.define('PartKeepr.ProjectPartGrid', {
	extend: 'PartKeepr.BaseGrid',
	
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
            text: i18n('Delete'),
            disabled: true,
            itemId: 'delete',
            scope: this,
            icon: 'resources/silkicons/brick_delete.png',
            handler: this.onDeleteClick
        });
		
		this.viewButton = Ext.create("Ext.button.Button", {
            text: i18n('View Part'),
            disabled: true,
            itemId: 'view',
            scope: this,
            icon: 'resources/silkicons/brick_go.png',
            handler: this.onViewClick
        });
		
		this.dockedItems = [{
		    xtype: 'toolbar',
		    items: [{
		        text: i18n('Add'),
		        scope: this,
		        icon: 'resources/silkicons/brick_add.png',
		        handler: this.onAddClick
		    },{
		    	text: i18n("Create new Part"),
		    	scope: this,
		    	icon: 'resources/silkicons/brick_add.png',
		    	handler: this.onAddPartClick
		    },
		    this.deleteButton,
		    this.viewButton
		    ]
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
	 * Creates a new part, adds it to the list and sets the default quantity to 1.
	 */
	onAddPartClick: function () {
		var win = Ext.getCmp("partkeepr-partmanager").onItemAdd();
		win.editor.on("editorClose", function (context) {
			// End this if the record is a phatom and thus hasn't been saved yet
			if (context.record.phantom) { return; }
			
			// Insert the new record
			this.editing.cancelEdit();
			
			var rec = new PartKeepr.ProjectPart({
				quantity: 1,
				part_id: context.record.get("id"),
				part_name: context.record.get("name")
			});
			
			this.store.insert(this.store.count(), rec);
			
			this.editing.startEdit(rec, this.columns[0]);
		}, this);
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
	 * Removes the currently selected row
	 */
	onViewClick: function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            Ext.getCmp("partkeepr-partmanager").onEditPart(selection.get("part_id"));
        }
	},
	/**
	 * Enables or disables the delete button, depending on the row selection
	 */
	onSelectChange: function(selModel, selections){
        this.deleteButton.setDisabled(selections.length === 0);
        this.viewButton.setDisabled(selections.length === 0);
    }
});