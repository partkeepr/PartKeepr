/**
 * This class extends a regular GridPanel with the following features:
 * 
 * - Buttons to add/delete items
 * - Enable/Disable the delete button if an item is selected
 * - Search field
 * - Paging Toolbar
 */
Ext.define('PartKeepr.EditorGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.EditorGrid',
	
	/**
     * @cfg {String} text The text for the "delete" button
     */
	deleteButtonText: i18n("Delete Item"),
	
	/**
     * @cfg {String} text The text for the "add" button
     */
	addButtonText: i18n("Add Item"),
	
	/**
     * @cfg {String} text Defines if the "add"/"delete" buttons should show their text or icon only. If "hide", the
     * button text is hidden, anything else shows the text.
     */
	buttonTextMode: 'hide',
	
	initComponent: function () {
		
		this.addEvents(
				/**
	             * @event itemSelect
	             * Fires if a record was selected within the grid.
	             * @param {Object} record The selected record
	             */
				"itemSelect",
				
				/**
	             * @event itemDeselect
	             * Fires if a record was deselected within the grid.
	             * @param {Object} record The deselected record
	             */
				"itemDeselect",
				
				/**
	             * @event itemDelete
	             * Fires if the delete button was clicked.
	             */
				"itemDelete",
				
				/**
	             * @event itemDelete
	             * Fires if the add button was clicked.
	             */
				"itemAdd");
		
		
		this.getSelectionModel().on("select", 
				Ext.bind(function (rsm, r, i) {
					this.deleteButton.enable();
					this.fireEvent("itemSelect", r);
				},
				this));
		
		this.getSelectionModel().on("deselect", 
				Ext.bind(function (rsm, r, i) {
						this.deleteButton.disable();
						this.fireEvent("itemDeselect", r);
				}, this));

		this.deleteButton = Ext.create("Ext.button.Button", {
			text: (this.buttonTextMode !== "hide") ? this.deleteButtonText : '',
			tooltip: this.deleteButtonText,
        	icon: 'resources/silkicons/delete.png',
        	handler: Ext.bind(function () {
        		this.fireEvent("itemDelete");
        	}, this),
        	disabled: true
		});
		
		this.searchField = Ext.create("Ext.ux.form.SearchField",{
				store: this.store
			});
		
		this.topToolbar = Ext.create("Ext.toolbar.Toolbar",{
			dock: 'top',
			enableOverflow: true,
			items: [
			        {
			        	text: (this.buttonTextMode !== "hide") ? this.addButtonText : '',
			        	tooltip: this.addButtonText,
			        	icon: 'resources/silkicons/add.png',
			        	handler: Ext.bind(function () {
			        		this.fireEvent("itemAdd");
			        	}, this)
			        },
			        this.deleteButton,
			        { xtype: 'tbfill' },
			        this.searchField]
		});
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Paging", {
			store: this.store,
			enableOverflow: true,
			dock: 'bottom',
			displayInfo: false
		});
		
		Ext.apply(this, {
			dockedItems: [
			    this.topToolbar,
				this.bottomToolbar
				]
		});
	
		this.callParent();
}
});