Ext.ns("de.RaumZeitLabor.PartDB2.CategoryEditor");

de.RaumZeitLabor.PartDB2.CategoryComboBox = Ext.extend(Ext.form.ComboBox, {
	editable:false,
	shadow:false,
	mode: 'local',
	triggerAction:'all',
	maxHeight: 400,
	width: 200,
	listWidth: 400,
	selectedClass:'',
	lazyInit: false,
	onSelect:Ext.emptyFn,
	initComponent: function () {
		
		this.treeDivId = Ext.id();
		
		this.tpl = '<tpl for="."><div id="'+this.treeDivId+'" style="overflow: auto;"></div></tpl>';
		
		this.store = new Ext.data.SimpleStore({fields:[],data:[[]]});
		
		this.tree = new de.RaumZeitLabor.PartDB2.CategoryEditor.CategoryWidget();
		
		this.on("beforeselect", function () {
			return false;
		});
		
		this.tree.on('click', function (node) {
			this.setValue(node.text);
			this.collapse();
			this.parentId = node.id;
		}.createDelegate(this));
		
		this.tree.on("afterrender", function (obj) {
			var node = obj.getRootNode().findChild("id", this.parentId, true);
			
			
			if (node) {
				node.ensureVisible();
				node.select();
			} else {
				obj.getRootNode().select();
			}
			
			if (this.disabledNode) {
				this.disabledNode.enable();
			}
			
			node = obj.getRootNode().findChild("id", this.categoryId, true);
			
			if (node) {
				this.disabledNode = node;
				node.disable();
			}
			
			obj.expandAll();
			
		}.createDelegate(this));

		
		this.on('expand',function(e){
			if (this.tree.rendered) {
				var node = this.tree.getRootNode().findChild("id", this.parentId, true);
				
				if (node) {
					node.ensureVisible();
					node.select();
				} else {
					this.tree.getRootNode().select();
				}
				
				this.tree.getRootNode().eachChild(function (n) {
					n.enable();
				});
				
				if (this.disabledNode) {
					this.disabledNode.enable();
				}

				node = this.tree.getRootNode().findChild("id", this.categoryId, true);
				
				if (node) {
					this.disabledNode = node;
					node.disable();
				}
				this.tree.expandAll();
			} else {
				this.tree.render(this.treeDivId);
			}
			
	  	}.createDelegate(this));
		
		de.RaumZeitLabor.PartDB2.CategoryComboBox.superclass.initComponent.call(this);
	},
	onViewClick: function () {
		
	},
	loadTree: function () {
		this.tree.loadTree();	
	}
});