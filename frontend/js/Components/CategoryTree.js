Ext.define("PartKeepr.CategoryTree", {
	alias: 'widget.CategoryTree',
	extend: 'Ext.tree.Panel',
	categoryService: null,
	categoryModel: null,
	displayField: 'name',
	sorters: [{
        property: 'name',
        direction: 'ASC'
    }],
    viewConfig: {
    	animate: false
    },
    loaded: false,
    rootVisible: false,
	initComponent: function () {
		this.store = new Ext.data.TreeStore({
			root: {
				id: "src",
				name: "Foo"
			},
			remoteSort: false,
			folderSort: true
		});
		
		this.callParent();
		
		this.addEvents("categoriesLoaded");
		
		this.loadCategories();
	},
	loadCategories: function () {
		var call = new PartKeepr.ServiceCall(this.categoryService, "getAllCategories");
		call.setLoadMessage(i18n("Loading categories..."));
		call.setHandler(Ext.bind(this._onCategoriesLoaded, this));
		call.doCall();
	},
	_onCategoriesLoaded: function (result) {
		/* Store expand/collapse state for all nodes */
		var expandedNodes = this.getExpandedNodes(this.getRootNode());
		
		this.getRootNode().removeAll();
		
		this.buildCategoryTree(this.getRootNode(), result, expandedNodes);
		
		this.loaded = true;
		
		this.getRootNode().expandChildren();
		
		this.getStore().sort("name", "ASC");
		
		this.fireEvent("categoriesLoaded");
	},
	getExpandedNodes: function (node) {
		var ret = [];
		if (node.get("expanded") === true) {
			ret.push(node.get("id"));
		}
		
		for (var i=0;i<node.childNodes.length;i++) {
			ret = ret.concat(this.getExpandedNodes(node.childNodes[i]));
		}
		return ret;
	},
	buildCategoryTree : function(root, data, expandedNodes) {
		var nodeData = {
			id :  data.id,
			name : data.name,
			tooltip : data.description
		};
		
		if (Ext.Array.contains(expandedNodes, data.id)) {
			Ext.apply(nodeData, {
				expanded: true
			});
		}
		
		// Hack to prevent our virtual root node from being dragged
		if (data.id == 1) {
			nodeData.allowDrag = false;
		}
		
		/* We'd like to set leaf here. For some reason, the tree
		 * is stupid.
		 * 
		 * If the node is a leaf, it's not possible to append children. I would
		 * have expected that the "leaf" flag is cleared when a child is appended.
		 * 
		 * If the node is not a leaf, the node should (in theory) use the children
		 * count. However, it doesn't do that in our case and always shows the "expand"
		 * button unless clicked once.
		 */
		
		/*if (data.children.length === 0) {
			nodeData.leaf = true;
		} else {
			nodeData.leaf = false;
		}*/
		
		nodeData.leaf = false;
                nodeData.loaded = true;
		
		var node = root.appendChild(Ext.create(this.categoryModel, nodeData));
		
		for ( var i = 0; i < data.children.length; i++) {
			this.buildCategoryTree(node, data.children[i], expandedNodes);
		}
	}
});