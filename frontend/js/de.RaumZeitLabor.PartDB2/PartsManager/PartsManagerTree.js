Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerTree");

de.RaumZeitLabor.PartDB2.PartsManagerTree = Ext.extend(Ext.tree.TreePanel, {
	
	id: 'parts-tree',
	initComponent: function () {
		new Ext.tree.TreeSorter(this, {
		    folderSort: false,
		    dir: "asc"
		});

	
		Ext.apply(this, {
			root: new Ext.tree.TreeNode({id: 0, expanded: true}),
			rootVisible: true,
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
				        },
				        {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.CategoryManager.edit]',
				        	icon: 'resources/silkicons/bullet_toggle_minus.png',
				        	id: 'category-collapse-button',
				        	handler: this.onCollapse.createDelegate(this)
				        },
				        {
				        	tooltip: '$[de.RaumZeitLabor.PartDB2.CategoryManager.edit]',
				        	icon: 'resources/silkicons/bullet_toggle_plus.png',
				        	id: 'category-expand-button',
				        	handler: this.onExpand.createDelegate(this)
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
	onCollapse: function () {
		this.getRootNode().collapse(true);
	},
	onExpand: function () {
		this.getRootNode().expand(true);
	},
	
	addCategory: function () {
		Ext.getCmp("card-category-editor").createCategory();
	},
	onSelectionChange: function (sm, node) {
		if (node) {
			this.selectedNode = node.id;
			
			if (node.attributes.id != this.getRootNode().attributes.id) {
				Ext.getCmp("category-edit-button").enable();
			} else {
				Ext.getCmp("category-edit-button").disable();
			}
			
			Ext.getCmp("parts-manager-window").showPartsList();
			Ext.getCmp("parts-list").setLimitCategory(node.attributes.id);
			Ext.getCmp("parts-list").store.load({ params: { start: 0 }});
			Ext.getCmp("parts-list").show();
		} else {
			Ext.getCmp("category-edit-button").disable();
		}
		
		
		
		
	},
	editCategory: function () {
		var category = this.getSelectionModel().getSelectedNode().id;
		
		
		Ext.getCmp("card-category-editor").editCategory(category);
	},	
	loadTree: function () {
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService", 
    			"getAllCategories");
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
    	call.setHandler(this.onCategoriesLoaded.createDelegate(this));
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
		
		this.getRootNode().expand();
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
