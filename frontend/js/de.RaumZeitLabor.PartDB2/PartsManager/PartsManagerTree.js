Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerTree");

de.RaumZeitLabor.PartDB2.PartsManagerTree = Ext.extend(Ext.tree.TreePanel, {
	
	id: 'parts-tree',
	initComponent: function () {
		Ext.apply(this, {
			root: new Ext.tree.TreeNode({id: 0}),
			rootVisible: false,
			tbar: {
				items: [
				        {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.CategoryManager.add]',
				        	icon: 'resources/silkicons/add.png',
				        	handler: this.addCategory.createDelegate(this)
				        },
				       /* {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.FootPrintManager.delete]',
				        	icon: 'resources/silkicons/delete.png',
				        	id: 'footprint-delete-button',
				        	handler: this.deleteFootprint.createDelegate(this),
				        	disabled: true
				        }*/]
			}
		
		});
		de.RaumZeitLabor.PartDB2.PartsManagerTree.superclass.initComponent.call(this);
		
		this.loadTree();
	},
	
	addCategory: function () {
		Ext.getCmp("category-details").createCategory();
	},
	
	loadTree: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService", 
    			"getAllCategories");
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
    	call.setHandler(this.onCategoriesLoaded.createDelegate(this))
    	call.doCall();
	},
	onCategoriesLoaded: function (result) {
		console.log(result);
		
		this.getRootNode().removeAll(true);
		
		for (var i=0;i<result.categories.length;i++) {
			
			var node = new Ext.tree.TreeNode(
					{
						id: result.categories[i].id,
						text: result.categories[i].name,
						tooltip: result.categories[i].description
					});
			if (result.categories[i].parent == 0) {
				this.getRootNode().appendChild(node);
			} else {
				var appendNode = this.getRootNode().findChild("id", result.categories[i].parent, true);;
				appendNode.appendChild(node);
			}
	
			
			//console.log(result.categories[i].description);
		}
		
	}

});
