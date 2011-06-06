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
		
		this.bottomToolbar.add(this.categoryScopeButton);
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
	setCategory: function (category) {
		var proxy = this.store.getProxy();
		
		proxy.extraParams.category = category;
		this.searchField.onTrigger1Click();
		
		proxy.extraParams.start = 0;
		this.store.currentPage = 1;
		this.store.load({ start: 0});
	}
});