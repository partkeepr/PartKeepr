Ext.define('PartDB2.PartEditorWindow', {
	extend: 'Ext.window.Window',
	constrainHeader: true,
	width: 500,
	minWidth: 500,
	minHeight: 300,
	height: 320,
	layout: 'fit',
	title: i18n("Add Part"),
	initComponent: function () {
		this.editor = Ext.create("PartDB2.PartEditor", {
			border: false
		});
		this.items = [ this.editor ];
		
		this.editor.on("editorClose", function () { this.close(); }, this);
		this.editor.on("partSaved", function () { this.close();}, this);
		this.callParent();
	},
	applyRecord: function (r) {
		if (r.id) {
			this.setTitle(i18n("Edit Part"));	
		}
		
		this.editor.getForm().setValues(r);
		this.editor.rawValues = r;
		
		if (!r.distributors) {
			r.distributors = [];
		}
		
		if (!r.manufacturers) {
			r.manufacturers = [];
		}
		
		this.editor.partDistributorGrid.getStore().loadData(r.distributors);
		this.editor.partManufacturerGrid.getStore().loadData(r.manufacturers);
	}
});