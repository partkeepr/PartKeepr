Ext.define('PartKeepr.PartFilterPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.PartFilterPanel',
	bodyPadding: '10px',
	layout: 'column',
	bodyStyle: 'background:#DBDBDB;',
	initComponent: function () {
		
		// Create the filter fields
		this.createFilterFields();
		

		// Creates the left column of the filter panel
		this.leftColumn = {
				xtype: 'container',
            	anchor: '100%',
            	layout: 'anchor',
            	columnWidth: 0.5,
            	items: [
            	        this.storageLocationFilter,
            	        this.categoryFilter,
            	        this.partsWithoutPrice
            	        ]
		};
		
		// Creates the right column of the filter panel
		this.rightColumn = {
				xtype: 'container',
            	anchor: '100%',
            	columnWidth: 0.5,
            	layout: 'anchor',
            	items: [
            	        this.stockFilter,
            	        this.distributorOrderNumberFilter
            	        ]
		};
		
		// Apply both columns to this panel
		this.items = [ this.leftColumn, this.rightColumn ];
		
		// Create the reset button
		this.resetButton = Ext.create("Ext.button.Button", {
			text: i18n("Reset"),
			handler: this.onReset,
			icon: 'resources/diagona-icons/icons/16/101.png',
			scope: this
		});
		
		// Create the apply button
		this.applyButton = Ext.create("Ext.button.Button", {
			text: i18n("Apply"),
			icon: 'resources/diagona-icons/icons/16/102.png',
			handler: this.onApply,
			scope: this
		});
		
		// Append both buttons to a toolbar
		this.dockedItems = [{
			xtype: 'toolbar',
			enableOverflow: true,
			dock: 'bottom',
			defaults: {minWidth: 100},
			items: [ this.applyButton, this.resetButton ]
		}];
		
		this.callParent();
	},
	/**
	 * Applies the parameters from the filter panel to the proxy, then
	 * reload the store to refresh the grid.
	 */
	onApply: function () {
		this.applyFilterParameters(this.store.getProxy().extraParams);
		this.store.currentPage = 1;
		this.store.load({ start: 0});
	},
	/**
	 * Resets the fields to their original values, then call onApply()
	 * to reload the store.
	 */
	onReset: function () {
		this.storageLocationFilter.setValue("");
		this.categoryFilter.setValue({ category: 'all'});
		this.stockFilter.setValue({ stock: 'any'});
		this.distributorOrderNumberFilter.setValue("");
		
		this.onApply();
	},
	/**
	 * Creates the filter fields required for this filter panel
	 */
	createFilterFields: function () {
		
		// Create the storage location filter field
		this.storageLocationFilter = Ext.create("PartKeepr.StorageLocationComboBox", {
			fieldLabel: i18n("Storage Location"),
			forceSelection: true
		});
		
		// Create the category scope field
		this.categoryFilter = Ext.create("Ext.form.RadioGroup", {
			fieldLabel: i18n("Category Scope"),
			columns: 1,
			items: [{
			        	boxLabel: i18n("All Subcategories"),
			        	name: 'category',
			        	inputValue: "all",
			        	checked: true
			        },
			        {
			        	boxLabel: i18n("Selected Category"),
			        	name: 'category',
			        	inputValue: "selected"
			        }]
		});
		
		// Create the stock level filter field
		this.stockFilter = Ext.create("Ext.form.RadioGroup", {
			fieldLabel: i18n("Stock Mode"),
			columns: 1,
			items: [{
			        	boxLabel: i18n("Any Stock Level"),
			        	name: 'stock',
			        	inputValue: "any",
			        	checked: true
			        },{
			        	boxLabel: i18n("Stock Level = 0"),
			        	name: 'stock',
			        	inputValue: "zero"
			        },{
			        	boxLabel: i18n("Stock Level > 0"),
			        	name: 'stock',
			        	inputValue: "nonzero"
			        },{
			        	boxLabel: i18n("Stock Level < Minimum Stock Level"),
			        	name: 'stock',
			        	inputValue: "below"
			        }]
		});
		
		this.partsWithoutPrice = Ext.create("Ext.form.field.Checkbox", {
			fieldLabel: i18n("Item Price"),
			boxLabel: i18n("Show Parts without Price only")
		});
		
		this.distributorOrderNumberFilter = Ext.create("Ext.form.field.Text", {
			fieldLabel: i18n("Order Number")
		});
	},
	/**
	 * Applies the filter parameters to the passed extraParams object.
	 * @param extraParams An object containing the extraParams from a proxy.
	 */
	applyFilterParameters: function (extraParams) {
		extraParams.withoutPrice = this.partsWithoutPrice.getValue();
		extraParams.categoryScope = this.categoryFilter.getValue().category;
		extraParams.stockMode = this.stockFilter.getValue().stock;
		extraParams.distributorOrderNumber = this.distributorOrderNumberFilter.getValue();
		/**
		 * Get the raw (=text) value. I really wish that ExtJS would handle selected values (from a store)
		 * distinct than entered values.
		 */ 
		if (this.storageLocationFilter.getRawValue() !== "") {
			extraParams.storageLocation = this.storageLocationFilter.getRawValue();
		} else {
			delete extraParams.storageLocation;
		}
		
	}
	
});