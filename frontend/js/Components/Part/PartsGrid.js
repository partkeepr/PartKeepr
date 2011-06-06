Ext.define('PartDB2.PartsGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.PartsGrid',
	columns: [
	          {header: i18n("Name"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Storage Location"),  dataIndex: 'storageLocationName'},
	          {header: i18n("Stock"),  dataIndex: 'stockLevel'},
	          {header: i18n("Min. Stock"),  dataIndex: 'minStockLevel'},
	          {header: i18n("Footprint"),  dataIndex: 'footprintName'}
	          ],
	buttonTextMode: 'show',
	
	categoryScope: 'all',
	
	scopeAllText: i18n("All subcategories"),
	scopeSelectedText: i18n('Only selected category'),
	
	stockMode: "all",
	stockModeAll: i18n("Any stock level"),
	stockModeZero: i18n("Stock = 0"),
	stockModeBelow: i18n("Stock less than minimum stock"),
	stockModeAvailable: i18n("Stock > 0"),
	
	stockModes: [ "all", "nonzero", "zero", "below" ],
	
	initComponent: function () {
		this.callParent();
		
		this.categoryScopeButton = Ext.create("Ext.button.Split", {
			text: this.scopeAllText,
			handler: this.categoryModeButtonHandler,
			scope: this,
			menu: {
				items: [
				        {
				        	text: this.scopeAllText,
				        	handler: this.allSubcategoriesHandler,
				        	scope: this
				        },
				        {
				        	text: this.scopeSelectedText,
				        	handler: this.onlySelectedCategoryHandler,
				        	scope: this
				        }]
			}
		});
		
		this.stockModeButton = Ext.create("Ext.button.Split", {
			text: this.stockModeAll,
			handler: this.stockModeButtonHandler,
			scope: this,
			menu: {
				items: [
						{
							text: this.stockModeAll,
							handler: this.stockModeAllHandler,
							scope: this
						},
						{
							text: this.stockModeZero,
							handler: this.stockModeZeroHandler,
							scope: this
						},
						{
							text: this.stockModeBelow,
							handler: this.stockModeBelowHandler,
							scope: this
						},
						{
							text: this.stockModeAvailable,
							handler: this.stockModeAvailableHandler,
							scope: this
						}
				        ]
			}
		});
		
		this.bottomToolbar.add(this.categoryScopeButton);
		this.bottomToolbar.add(this.stockModeButton);
		this.setScopeMode("all");
	},
	categoryModeButtonHandler: function () {
		if (this.categoryScope == "all") {
			this.setScopeMode("selected");
		} else {
			this.setScopeMode("all");
		}
		this.store.load();
	},
	allSubcategoriesHandler: function () {
		this.setScopeMode("all");
		this.store.load();
	},
	onlySelectedCategoryHandler: function () {
		this.setScopeMode("selected");
		this.store.load();
	},
	setScopeMode: function (mode) {
		switch (mode) {
			case "all":
			case "selected":
				this.categoryScope = mode;
				break;
			default:
				alert("Invalid mode in setScopeMode!");
				break;
		}
		
		/* Update button text */
		if (this.categoryScope == "all") {
			this.categoryScopeButton.setText(this.scopeAllText);
		} else {
			this.categoryScopeButton.setText(this.scopeSelectedText);
		}
		
		var proxy = this.store.getProxy();
		proxy.extraParams.categoryScope = this.categoryScope;
	},
	stockModeAllHandler: function () {
		this.setStockMode("all");
		this.store.load();
	},
	stockModeZeroHandler: function () {
		this.setStockMode("zero");
		this.store.load();
	},
	stockModeBelowHandler: function () {
		this.setStockMode("below");
		this.store.load();
	},
	stockModeAvailableHandler: function () {
		this.setStockMode("nonzero");
		this.store.load();
	},
	stockModeButtonHandler: function () {
		var idx = Ext.Array.indexOf(this.stockModes, this.stockMode);
		
		idx++;
		
		if (idx > (this.stockModes.length - 1)) {
			idx = idx - this.stockModes.length;
		}
		
		this.setStockMode(this.stockModes[idx]);
		this.store.load();
		
	},
	setStockMode: function (mode) {
		if (!Ext.Array.contains(this.stockModes, mode)) {
			window.alert("Invalid stock mode "+mode+" for setStockMode!");
			return;
		}
		
		this.stockMode = mode;
		
		switch (this.stockMode) {
			case "zero":
				this.stockModeButton.setText(this.stockModeZero);
				break;
			case "nonzero":
				this.stockModeButton.setText(this.stockModeAvailable);
				break;
			case "below":
				this.stockModeButton.setText(this.stockModeBelow);
				break;
			case "all":
				this.stockModeButton.setText(this.stockModeAll);
				break;
		}
		
		var proxy = this.store.getProxy();
		proxy.extraParams.stockMode = this.stockMode;
	},
	setCategory: function (category) {
		var proxy = this.store.getProxy();
		
		proxy.extraParams.category = category;
		this.searchField.onTrigger1Click();
		
		proxy.extraParams.start = 0;
		this.store.currentPage = 1;
		this.store.load({ start: 0});
	}
});