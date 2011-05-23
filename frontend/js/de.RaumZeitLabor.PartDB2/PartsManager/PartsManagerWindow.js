Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerWindow");

de.RaumZeitLabor.PartDB2.PartsManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	renderHidden: true,
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
		
		this.partsList = new de.RaumZeitLabor.PartDB2.PartsManagerListGrid({ flex: 1, id: 'parts-list'});
		
		this.partsList.getSelectionModel().on("rowselect", this.onPartSelect.createDelegate(this));
		this.partsList.getSelectionModel().on("selectionchange", function (sm) {
			if (sm.getCount() == 0) {
				this.partsDetail.hide();
			} else {
				this.partsDetail.show();
			}
			
			this.partsLayout.doLayout();
		}.createDelegate(this));
		
		this.partsDetail = new de.RaumZeitLabor.PartDB2.PartsManagerPartDetail({ hidden: true });
		
		this.partsLayout = new Ext.Panel({
				layout: 'vbox',
				align : 'stretch',
			    pack  : 'start',
				id: 'parts-overview',
				items: [
				        	this.partsList,
				        	this.partsDetail
				        ]
		});
		
		
		Ext.apply(this.partsManagerDetails, {
		    region:'center',
		    collapsible: false,
		    margins: '0 0 0 0'
		 });
		
		Ext.apply(this, {
			width: 800,
			height: 600,
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
			        	        this.partsLayout
			        	        ]
			        }]
		});
		de.RaumZeitLabor.PartDB2.PartsManagerWindow.superclass.initComponent.call(this);
	},
	onPartSelect: function (grid, row, r) {
		this.partsDetail.loadPart(r.get("id"));
	},
	showPartsList: function () {
		Ext.getCmp("parts-mananger-window-card").getLayout().setActiveItem("parts-overview");
		this.partsList.doLayout();
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

