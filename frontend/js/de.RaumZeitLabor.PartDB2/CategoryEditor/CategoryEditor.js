Ext.ns("de.RaumZeitLabor.PartDB2.CategoryEditor");

de.RaumZeitLabor.PartDB2.CategoryEditor = Ext.extend(Ext.form.FormPanel, {
	id: "category-details",
	categoryId: null,
	categoryComboBox: null,
	parentCategoryTree: null,
	initComponent: function () {
		
		this.categoryComboBox = new Ext.form.ComboBox({
			store:new Ext.data.SimpleStore({fields:[],data:[[]]}),
			editable:false,
			shadow:false,
			mode: 'local',
			triggerAction:'all',
			maxHeight: 400,
			width: 200,
			listWidth: 400,
			tpl: '<tpl for="."><div id="tree1" style="overflow: auto;"></div></tpl>',
			selectedClass:'',
			fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.parentCategory]',
			name: 'parent',
			lazyInit: false,
			onSelect:Ext.emptyFn
		});
		
		this.categoryComboBox.onViewClick = function () {
			
		};
		
		this.categoryComboBox.on("beforeselect", function () {
			return false;
		});
		
		var tree = new de.RaumZeitLabor.PartDB2.CategoryEditor.CategoryWidget();
		
		this.parentCategoryTree = tree;
		
		tree.on('click', function (node) {
			this.categoryComboBox.setValue(node.text);
			this.categoryComboBox.collapse();
			this.categoryComboBox.parentId = node.id;
		}.createDelegate(this));
		
		tree.on("afterrender", function (obj) {
			var node = obj.getRootNode().findChild("id", this.categoryComboBox.parentId, true);
			
			
			if (node) {
				node.ensureVisible();
				node.select();
			} else {
				obj.getRootNode().select();
			}
			
			if (this.disabledNode) {
				this.disabledNode.enable();
			}
			
			var node = obj.getRootNode().findChild("id", this.categoryId, true);
			
			if (node) {
				this.disabledNode = node;
				node.disable();
			}
			
			obj.expandAll();
			
		}.createDelegate(this));
		
		this.categoryComboBox.on('expand',function(e){
			if (tree.rendered) {
				var node = tree.getRootNode().findChild("id", this.categoryComboBox.parentId, true);
				
				
				if (node) {
					node.ensureVisible();
					node.select();
				} else {
					tree.getRootNode().select();
				}
				
				tree.getRootNode().eachChild(function (n) {
					n.enable();
				});
				
				if (this.disabledNode) {
					this.disabledNode.enable();
				}

				var node = tree.getRootNode().findChild("id", this.categoryId, true);
				
				if (node) {
					this.disabledNode = node;
					node.disable();
				}
				tree.expandAll();
			} else {
				tree.render('tree1');
			}
			
	  	}.createDelegate(this));
		
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {
			        	fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.categoryName]',
			        	name: 'name',
			        	xtype: 'textfield'
			        }, {
			        	fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.categoryDescription]',
			        	name: 'description',
			        	xtype: 'textarea'
			        }, this.categoryComboBox
			        ],
			hidden: true,
	        buttons: [{
	            text: '$[de.RaumZeitLabor.PartDB2.save]',
	            handler: this.saveCategory.createDelegate(this)
	        },{
	            text: '$[de.RaumZeitLabor.PartDB2.cancel]',
	            handler: function () {
	        		this.hide();
	        	}.createDelegate(this)
	        }]
		});
		de.RaumZeitLabor.PartDB2.CategoryEditor.superclass.initComponent.call(this);
	},
	
	setCategoryId: function (id) {
		this.categoryId = id;
	},
	createCategory: function () {
		this.getForm().setValues({name: "", description: "", parent: 0})
		this.setCategoryId(null);
		
		var node = Ext.getCmp("parts-tree").getSelectionModel().getSelectedNode();
		
		if (node) {
			this.categoryComboBox.parentId = node.id;
			this.categoryComboBox.setValue(node.text);
		} else {
			this.categoryComboBox.parentId = Ext.getCmp("parts-tree").getRootNode().id;
			this.categoryComboBox.setValue(Ext.getCmp("parts-tree").getRootNode().text);
		}
		this.show();
	},
	editCategory: function (id) {
		this.setCategoryId(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService", 
    			"getCategory");
    	call.setParameter("id", this.categoryId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategory]');
    	call.setHandler(this.onCategoryLoaded.createDelegate(this))
    	call.doCall();
	},
	saveCategory: function () {
		
		var sCall;
		
		if (this.categoryId == null) {
			sCall = "addCategory";
		} else {
			sCall = "saveCategory";
		}
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService", 
    			sCall);
		
		var parameters = this.getForm().getValues();
		
		parameters.parent = this.categoryComboBox.parentId;
		
    	call.setParameter("id", this.categoryId);
    	call.setParameters(parameters);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.saveCategory]');
    	call.setHandler(this.onCategorySaved.createDelegate(this))
    	call.doCall();
	},
	onCategorySaved: function (response) {
			Ext.getCmp("parts-tree").selectedNode = response.id;
			Ext.getCmp("parts-tree").loadTree();
			this.parentCategoryTree.loadTree();
	},
	onCategoryLoaded: function (response) {
		this.getForm().setValues(response);
		this.categoryComboBox.parentId = response.parent;
		this.categoryComboBox.setValue(response.parentName);
		
		
		this.show();
	}
});