Ext.ns("de.RaumZeitLabor.PartDB2.PartsManagerAddPartDialog");

de.RaumZeitLabor.PartDB2.PartsManagerAddPartDialog = Ext.extend(Ext.Window, {
	closeAction: 'hide',
	title: "Bauteil erfassen",
	width: 600,
	minWidth: 600,
	minHeight: 400,
	border: false,
	layout: 'fit',
	frame: true,
	height: 400,
	initComponent: function () {
		
		this.addPartForm = new de.RaumZeitLabor.PartDB2.PartsManagerAddPartForm();
		
		this.items = [
		              this.addPartForm
		              ];
		
		this.on("show", function () {
			this.addPartForm.reloadStorageLocations();
			this.addPartForm.partName.focus(false, 300);
		}.createDelegate(this));
		
		this.addPartForm.on("cancelEntry", function () {
			this.hide();
		}.createDelegate(this));
		
		this.addPartForm.on("partloaded", this.onPartLoaded.createDelegate(this));
		this.addPartForm.on("partSaved", this.onPartSaved.createDelegate(this));
		
		de.RaumZeitLabor.PartDB2.PartsManagerAddPartDialog.superclass.initComponent.call(this);
	},
	addPart: function () {
		this.addPartForm.setAddMode();
		this.addPartForm.clearForm(true);
		this.show();
	},
	editPart: function (part) {
		this.addPartForm.loadPart(part);
	},
	onPartSaved: function () {
		this.hide();
	},
	onPartLoaded: function () {
		this.show();
	}
});
	 