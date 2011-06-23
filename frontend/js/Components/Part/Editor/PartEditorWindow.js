/**
 * @class PartKeepr.PartEditorWindow

 * <p>The PartEditorWindow encapsulates the PartKeepr.PartEditor within a window.</p>
 */
Ext.define('PartKeepr.PartEditorWindow', {
	extend: 'Ext.window.Window',
	
	/* Constrain the window to fit the viewport */
	constrainHeader: true,
	
	/* Fit the editor within the window */
	layout: 'fit',
	
	/* Width and height settings */
	width: 600,
	minWidth: 600,
	minHeight: 300,
	height: 450,
	
	title: i18n("Add Part"),
	
	initComponent: function () {
		this.editor = Ext.create("PartKeepr.PartEditor", {
			border: false
		});
		this.items = [ this.editor ];
		
		this.editor.on("editorClose", function () { this.close(); }, this);
		
		
		/**
		 * We need a delay, since if others are listening for "partSaved", the dialog plus the record could be destroyed
		 * before any following listeners have a chance to receive the record, resulting in strange problems.
		 */
		this.editor.on("partSaved", function (record) { this.close();}, this, { delay: 200 });
		
		this.editor.on("titleChange", function (val) { this.setTitle(val); }, this);
		this.callParent();
	}
});
