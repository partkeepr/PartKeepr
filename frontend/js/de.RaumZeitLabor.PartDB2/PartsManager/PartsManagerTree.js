Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerTree");

de.RaumZeitLabor.PartDB2.PartsManagerTree = Ext.extend(Ext.tree.TreePanel, {
	
	id: 'parts-tree',
	initComponent: function () {
		new Ext.tree.TreeSorter(this, {
		    folderSort: false,
		    dir: "asc"
		});

	
		Ext.apply(this, {
			root: new Ext.tree.TreeNode({id: 0}),
			rootVisible: false,
			animate: false,
		    autoScroll: true,

			tbar: {
				items: [
				        {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.CategoryManager.add]',
				        	icon: 'resources/silkicons/folder_add.png',
				        	handler: this.addCategory.createDelegate(this)
				        },
				        {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.CategoryManager.edit]',
				        	icon: 'resources/silkicons/folder_edit.png',
				        	id: 'category-edit-button',
				        	handler: this.editCategory.createDelegate(this),
				        	disabled: true
				        }
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
		
		this.getSelectionModel().on("selectionchange", this.onSelectionChange.createDelegate(this));
		this.loadTree();
	},
	
	addCategory: function () {
		Ext.getCmp("category-details").createCategory();
	},
	onSelectionChange: function (sm, node) {
		if (node) {
			this.selectedNode = node.id;
			Ext.getCmp("category-edit-button").enable();
		} else {
			Ext.getCmp("category-edit-button").disable();
		}
	},
	editCategory: function () {
		var category = this.getSelectionModel().getSelectedNode().id;
		
		
		Ext.getCmp("category-details").editCategory(category);
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
		this.getRootNode().removeAll(true);
		
		var node = this.buildCategoryTree(result);
		
		this.setRootNode(node);
		
		if (this.selectedNode) {
			var target = node.findChild("id", this.selectedNode, true);
			
			if (target) {
				target.ensureVisible();
				target.select();
			}
		}
		
	},
	buildCategoryTree: function (data) {
		var node = new Ext.tree.TreeNode({
			id: data.id,
			text: data.name,
			tooltip: data.description
		});
		
		for (var i=0;i<data.children.length;i++) {
			node.appendChild(this.buildCategoryTree(data.children[i]));
		}
		
		return node;
	}

});
