Ext.define("PartKeepr.CategoryTree", {
	alias: 'widget.CategoryTree',
	extend: 'Ext.tree.Panel',
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
			remoteSort: false
		});
		
		this.callParent();
		
		this.addEvents("categoriesLoaded");
		
		this.loadCategories();
	},
	loadCategories: function () {
		var call = new PartKeepr.ServiceCall("Category", "getAllCategories");
		call.setLoadMessage(i18n("Loading categories..."));
		call.setHandler(Ext.bind(this.onCategoriesLoaded, this));
		call.doCall();
	},
	onCategoriesLoaded: function (result) {
		this.getRootNode().removeAll(true);
		
		this.buildCategoryTree(this.getRootNode(), result);
		
		this.getStore().sort("name");
		this.loaded = true;
		
		this.getRootNode().expandChildren();
		
		this.fireEvent("categoriesLoaded");
		
	},
	buildCategoryTree : function(root, data) {
		var nodeData = {
			id : data.id,
			name : data.name,
			tooltip : data.description
		};
		
		// Hack to prevent our virtual root node from being dragged
		if (data.id == 1) {
			nodeData.allowDrag = false;
		}
		
		//if (data.children.length === 0) {
			//nodeData.leaf = true;
		//}
		var node = root.appendChild(nodeData);
		
		for ( var i = 0; i < data.children.length; i++) {
			this.buildCategoryTree(node, data.children[i]);
		}
	}
});