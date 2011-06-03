Ext.define('PartDB2.PartEditorWindow', {
	extend: 'Ext.window.Window',
	constrainHeader: true,
	width: 500,
	minWidth: 500,
	minHeight: 300,
	height: 320,
	layout: 'fit',
	title: i18n("Edit Part"),
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
		this.editor.getForm().setValues(r);
		this.editor.rawValues = r;
		
	}
});