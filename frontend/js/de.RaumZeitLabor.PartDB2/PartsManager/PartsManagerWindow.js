Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerWindow");

de.RaumZeitLabor.PartDB2.PartsManagerWindow = Ext.extend(org.jerrymouse.gui.widgets.window, {
	renderHidden: true,
	maximizable: true,
	layout: 'border',
	
	initComponent: function () {
	
		this.partsManagerTree = new de.RaumZeitLabor.PartDB2.PartsManagerTree({
			border: false,
			region:'west',
			split: true,
		    margins: '0 0 0 0',
		    cmargins: '0 0 0 0',
		    padding: '0 0 0 0',
		    width: 250
		});
		
		this.categoryEditor = new de.RaumZeitLabor.PartDB2.CategoryEditor({ border: false, id: 'card-category-editor' });
		
		this.partsList = new de.RaumZeitLabor.PartDB2.PartsManagerListGrid({ flex: 1, border: false, width: '100%', id: 'parts-list'});
		
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
				border: false,
				layout: 'vbox',
				layoutConfig : { align : 'stretch' },
				id: 'parts-overview',
				items: [
				        	this.partsList,
				        	this.partsDetail
				        ]
		});
		
		
		Ext.apply(this, {
			width: 800,
			height: 600,
			title: "$[de.RaumZeitLabor.PartDB2.PartsManager.manage]",
			items: [
			        this.partsManagerTree,
			        {
			        	layout: 'card',
			        	region: 'center',
			        	border: false,
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

