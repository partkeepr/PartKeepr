Ext.define('PartDB2.PartsGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.PartsGrid',
	columns: [
	          {header: i18n("Name"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Storage Location"),  dataIndex: 'storageLocationName'},
	          {header: i18n("Stock"),  dataIndex: 'stockLevel', xtype:'templatecolumn', tpl:'{stockLevel} {partUnit}'},
	          {header: i18n("Min. Stock"),  dataIndex: 'minStockLevel'},
	          {header: i18n("Footprint"),  dataIndex: 'footprintName'}
	          ],
	buttonTextMode: 'show',
	
	categoryScope: 'all',
	
	scopeAllText: i18n("All subcategories"),
	scopeSelectedText: i18n('Selected category'),
	
	
	categoryScopeAllIcon: "resources/silkicons/folder_magnify.png",
	categoryScopeSelectedIcon: "resources/silkicons/folder_go.png",
	
	stockMode: "all",
	stockModeAll: i18n("Any stock level"),
	stockModeZero: i18n("Stock = 0"),
	stockModeBelow: i18n("Stock < Min. Stock"),
	stockModeAvailable: i18n("Stock > 0"),
	
	stockModeBelowIcon: 'resources/icons/stock_below.png',
	stockModeAllIcon: 'resources/icons/stock_any.png',
	stockModeZeroIcon: 'resources/icons/stock_zero.png',
	stockModeNonzeroIcon: 'resources/icons/stock_nonzero.png',
	
	stockModes: [ "all", "nonzero", "zero", "below" ],
	
	initComponent: function () {
		this.callParent();
		
		this.categoryScopeButton = Ext.create("Ext.button.Split", {
			text: this.scopeAllText,
			icon: this.categoryScopeAllIcon,
			handler: this.categoryModeButtonHandler,
			scope: this,
			width: 140,
			menu: {
				items: [
				        {
				        	text: this.scopeAllText,
				        	handler: this.allSubcategoriesHandler,
				        	icon: this.categoryScopeAllIcon,
				        	scope: this
				        },
				        {
				        	text: this.scopeSelectedText,
				        	handler: this.onlySelectedCategoryHandler,
				        	icon: this.categoryScopeSelectedIcon,
				        	scope: this
				        }]
			}
		});
		
		this.stockModeButton = Ext.create("Ext.button.Split", {
			text: this.stockModeAll,
			width: 140,
			handler: this.stockModeButtonHandler,
			icon: this.stockModeAllIcon,
			scope: this,
			menu: {
				items: [
						{
							text: this.stockModeAll,
							handler: this.stockModeAllHandler,
							icon: this.stockModeAllIcon,
							scope: this
						},
						{
							text: this.stockModeZero,
							handler: this.stockModeZeroHandler,
							icon: this.stockModeZeroIcon,
							scope: this
						},
						{
							text: this.stockModeBelow,
							handler: this.stockModeBelowHandler,
							icon: this.stockModeBelowIcon,
							scope: this
						},
						{
							text: this.stockModeAvailable,
							handler: this.stockModeAvailableHandler,
							icon: this.stockModeNonzeroIcon,
							scope: this
						}
				        ]
			}
		});
		
		this.bottomToolbar.add('-');
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
			this.categoryScopeButton.setIcon(this.categoryScopeAllIcon);
		} else {
			this.categoryScopeButton.setText(this.scopeSelectedText);
			this.categoryScopeButton.setIcon(this.categoryScopeSelectedIcon);
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
				this.stockModeButton.setIcon(this.stockModeZeroIcon);
				break;
			case "nonzero":
				this.stockModeButton.setText(this.stockModeAvailable);
				this.stockModeButton.setIcon(this.stockModeNonzeroIcon);
				break;
			case "below":
				this.stockModeButton.setText(this.stockModeBelow);
				this.stockModeButton.setIcon(this.stockModeBelowIcon);
				break;
			case "all":
				this.stockModeButton.setText(this.stockModeAll);
				this.stockModeButton.setIcon(this.stockModeAllIcon);
				break;
			default:
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