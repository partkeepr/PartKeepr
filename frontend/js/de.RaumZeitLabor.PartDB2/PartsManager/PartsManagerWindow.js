Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerWindow");

de.RaumZeitLabor.PartDB2.PartsManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	
	initComponent: function () {
	
		this.partsManagerTree = new de.RaumZeitLabor.PartDB2.PartsManagerTree();
		
		Ext.apply(this.partsManagerTree, {
		    region:'west',
		    margins: '0 0 0 0',
		    cmargins: '0 0 0 0',
		    padding: '0 0 0 0',
		    width: 250
		});
		
		this.categoryEditor = new de.RaumZeitLabor.PartDB2.CategoryEditor({ id: 'card-category-editor' });
		this.partsList = new de.RaumZeitLabor.PartDB2.PartsManagerListGrid({ layout: 'fit', id: 'parts-list'});
		
		Ext.apply(this.partsManagerDetails, {
		    region:'center',
		    collapsible: false,
		    margins: '0 0 0 0'
		 });
		
		Ext.apply(this, {
			width: 600,
			height: 400,
			title: "$[de.RaumZeitLabor.PartDB2.PartsManager.manage]",
			layout:'border',
			defaults: {
			    collapsible: false,
			    split: false
			},
			items: [
			        this.partsManagerTree,
			        {
			        	layout: 'card',
			        	region: 'center',
			        	id: 'parts-mananger-window-card',
			        	items: [
			        	        this.categoryEditor,
			        	        this.partsList
			        	        ]
			        }]
		});
		de.RaumZeitLabor.PartDB2.PartsManagerWindow.superclass.initComponent.call(this);
	},
	showPartsList: function () {
		Ext.getCmp("parts-mananger-window-card").getLayout().setActiveItem("parts-list");
		this.partsList.show();
	},
	showCategoryEditor: function () {
		Ext.getCmp("parts-mananger-window-card").getLayout().setActiveItem("card-category-editor");
		Ext.getCmp("card-category-editor").doLayout();
	}
});

de.RaumZeitLabor.PartDB2.PartsManagerWindow.handler = function () {
	var partsManager = new de.RaumZeitLabor.PartDB2.PartsManagerWindow({id: 'parts-manager-window'});
	partsManager.show();
}

