Ext.ns("de.RaumZeitLabor.PartDB2.CategoryEditor");

de.RaumZeitLabor.PartDB2.CategoryEditor = Ext.extend(Ext.form.FormPanel, {
	id: "category-details",
	categoryId: null,
	categoryComboBox: null,
	initComponent: function () {
		
		this.categoryComboBox = new de.RaumZeitLabor.PartDB2.CategoryComboBox({
			fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.parentCategory]',
			name: 'parent',
			anchor: '100%'
		});
		
		Ext.apply(this, {
			cls: 'x-panel-mc',
			bodyStyle:'padding:0px 5px 0',
			items: [
			        {
			        	fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.categoryName]',
			        	name: 'name',
			        	anchor: '100%',
			        	xtype: 'textfield'
			        }, {
			        	fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.categoryDescription]',
			        	name: 'description',
			        	anchor: '100%',
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
		this.categoryComboBox.categoryId = id;
	},
	createCategory: function () {
		this.getForm().setValues({name: "", description: "", parent: 0});
		this.setCategoryId(null);
		
		var node = Ext.getCmp("parts-tree").getSelectionModel().getSelectedNode();
		
		if (node) {
			this.categoryComboBox.parentId = node.id;
			this.categoryComboBox.setValue(node.text);
		} else {
			this.categoryComboBox.parentId = Ext.getCmp("parts-tree").getRootNode().id;
			this.categoryComboBox.setValue(Ext.getCmp("parts-tree").getRootNode().text);
		}
		Ext.getCmp("parts-manager-window").showCategoryEditor();
		this.show();
	},
	editCategory: function (id) {
		this.setCategoryId(id);
		
		var call = new org.jerrymouse.service.Call(
    			"de.RaumZeitLabor.PartDB2.Category.CategoryManagerService", 
    			"getCategory");
    	call.setParameter("id", this.categoryId);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategory]');
    	call.setHandler(this.onCategoryLoaded.createDelegate(this));
    	call.doCall();
	},
	saveCategory: function () {
		
		var sCall;
		
		if (this.categoryId === null) {
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
    	call.setHandler(this.onCategorySaved.createDelegate(this));
    	call.doCall();
	},
	onCategorySaved: function (response) {
			Ext.getCmp("parts-tree").selectedNode = response.id;
			Ext.getCmp("parts-tree").loadTree();
			this.categoryComboBox.loadTree();
	},
	onCategoryLoaded: function (response) {
		this.getForm().setValues(response);
		this.categoryComboBox.parentId = response.parent;
		this.categoryComboBox.setValue(response.parentName);
		
		
		Ext.getCmp("parts-manager-window").showCategoryEditor();
		this.show();
	}
});