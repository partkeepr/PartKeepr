Ext.define('PartDB2.EditorGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.EditorGrid',
	deleteButtonText: i18n("Delete Item"),
	addButtonText: i18n("Add Item"),
	buttonTextMode: 'hide',
	initComponent: function () {
		
		this.addEvents("itemSelect", "itemDelete", "itemAdd");
		
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