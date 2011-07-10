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
	height: 390,
	
	/* Default edit mode. If mode = "create", we show additional fields */
	partMode: 'edit',
	title: i18n("Add Part"),
	
	/**
	 * Creates the part editor and put it into the window.
	 */
	initComponent: function () {
		this.editor = Ext.create("PartKeepr.PartEditor", {
			border: false,
			partMode: this.partMode
		});
		
		/* If the edit mode is "create", we need to enlarge the window a bit to fit the fields without scrolling */
		if (this.partMode && this.partMode == "create") {
			this.height = 445;
		}
		
		this.items = [ this.editor ];

		/**
		 * We need a delay, since if others are listening for "editorClose", the dialog plus the record could be destroyed
		 * before any following listeners have a chance to receive the record, resulting in strange problems.
		 */
		this.editor.on("editorClose", function (record) { this.close();}, this, { delay: 200 });
		
		this.editor.on("titleChange", function (val) { this.setTitle(val); }, this);
		this.callParent();
	}
});
