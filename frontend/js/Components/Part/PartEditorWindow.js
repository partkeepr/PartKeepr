Ext.define('PartKeepr.PartEditorWindow', {
	extend: 'Ext.window.Window',
	constrainHeader: true,
	width: 600,
	minWidth: 600,
	minHeight: 300,
	height: 450,
	layout: 'fit',
	title: i18n("Add Part"),
	initComponent: function () {
		this.editor = Ext.create("PartKeepr.PartEditor", {
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
		
		if (!r.parameters) {
			r.parameters = [];
		}
		
		if (!r.attachments) {
			r.attachments = [];
		}
		
		this.editor.partDistributorGrid.getStore().loadData(r.distributors);
		this.editor.partManufacturerGrid.getStore().loadData(r.manufacturers);
		this.editor.partParameterGrid.getStore().loadData(r.parameters);
		this.editor.partAttachmentGrid.getStore().loadData(r.attachments);
	}
});
