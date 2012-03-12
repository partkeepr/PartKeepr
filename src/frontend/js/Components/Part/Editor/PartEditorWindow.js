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
	minHeight: 390,
	height: 390,
	
	saveText: i18n("Save"),
	cancelText: i18n("Cancel"),
	
	/* Default edit mode. If mode = "create", we show additional fields */
	partMode: 'edit',
	title: i18n("Add Part"),
	
	/**
	 * Creates the part editor and put it into the window.
	 */
	initComponent: function () {
		this.editor = Ext.create("PartKeepr.PartEditor", {
			border: false,
			partMode: this.partMode,
			enableButtons: false
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
		this.editor.on("editorClose", function (context) { this.close();}, this, { delay: 200 });
		
		this.editor.on("titleChange", function (val) { this.setTitle(val); }, this);
		this.editor.on("itemSaved", this.onItemSaved, this);
		
		this.saveButton = Ext.create("Ext.button.Button", {
			text: this.saveText,
			icon: 'resources/fugue-icons/icons/disk.png',
			handler: Ext.bind(this.onItemSave, this)
		});
		
		this.cancelButton = Ext.create("Ext.button.Button", {
			text: this.cancelText,
			icon: 'resources/silkicons/cancel.png',
			handler: Ext.bind(this.onCancelEdit, this)
		});
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			defaults: {minWidth: 100},
			dock: 'bottom',
			ui: 'footer',
			pack: 'start',
			items: [ this.saveButton, this.cancelButton ]
		});
		
		this.dockedItems = [ this.bottomToolbar ];
		
		this.keepOpenCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Create blank item after save")
		});
		
		if (this.partMode == "create") {
			this.bottomToolbar.add(this.keepOpenCheckbox);
		}
		
		this.editor.keepOpenCheckbox = this.keepOpenCheckbox;
		
		this.callParent();
	},
	onCancelEdit: function () {
		this.editor.onCancelEdit();
	},
	/**
	 * Called when the save button was clicked
	 */
	onItemSave: function () {
		if (!this.editor.getForm().isValid()) { return; }
		
		// Disable the save button to indicate progress
		this.saveButton.disable();
		
		// Sanity: If the save process fails, re-enable the button after 30 seconds
		Ext.defer(function () { this.saveButton.enable(); }, 30000, this);
		
		this.editor._onItemSave();
	},
	/**
	 * Called when the item was saved
	 */
	onItemSaved: function () {
		this.saveButton.enable();
	}
});
