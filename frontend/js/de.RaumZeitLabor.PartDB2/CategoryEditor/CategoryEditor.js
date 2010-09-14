Ext.ns("de.RaumZeitLabor.PartDB2.CategoryEditor");

de.RaumZeitLabor.PartDB2.CategoryEditor = Ext.extend(Ext.form.FormPanel, {
	id: "category-details",
	categoryId: null,
	initComponent: function () {
		
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
			        }, {
			        	fieldLabel: '$[de.RaumZeitLabor.PartDB2.CategoryEditor.parentCategory]',
			        	name: 'parent',
			        	xtype: 'textfield'
			        }
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
    	call.setParameter("id", this.categoryId);
    	call.setParameters(this.getForm().getValues());
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.saveCategory]');
    	call.setHandler(this.onCategorySaved.createDelegate(this))
    	call.doCall();
	},
	onCategorySaved: function (response) {
		//var record = Ext.getCmp("footprint-list").getStore().reload();
	},
	onCategoryLoaded: function (response) {
		this.getForm().setValues(response);
		this.show();
	}
});