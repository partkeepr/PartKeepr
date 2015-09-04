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
	minHeight: 415,
	height: 415,
	
	saveText: i18n("Save"),
	saveAndPrintText: i18n("Save + Print"),
	printText: i18n("Print"),
	cancelText: i18n("Cancel"),

	/* Default edit mode. If mode = "create", we show additional fields */
	partMode: 'edit',
	title: i18n("Add Part"),
	
	saveButtonReenableTask: null,
	
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
			this.height = 500;
			this.minHeight = 500;
		}
		
		this.items = [ this.editor ];

		/**
		 * We need a delay, since if others are listening for "editorClose", the dialog plus the record could be destroyed
		 * before any following listeners have a chance to receive the record, resulting in strange problems.
		 */
		this.editor.on("editorClose", function (context) { this.close();}, this, { delay: 200 });
		
		this.editor.on("_titleChange", function (val) { this.setTitle(val); }, this);
		this.editor.on("itemSaved", this.onItemSaved, this);
		
		this.saveButton = Ext.create("Ext.button.Button", {
			text: this.saveText,
			icon: 'bundles/brainbitsfugueicons/icons/fugue/16/disk.png',
			handler: Ext.bind(this.onItemSave, this)
		});
		
		this.cancelButton = Ext.create("Ext.button.Button", {
			text: this.cancelText,
			icon: 'resources/silkicons/cancel.png',
			handler: Ext.bind(this.onCancelEdit, this)
		});
		
		this.saveAndPrintButton = Ext.create("Ext.button.Button", {
			text: this.saveAndPrintText,
			glyph: 0xf02f,
			handler: Ext.bind(this.onItemSaveAndPrint, this)
		});
		
		this.printButton = Ext.create("Ext.button.Button", {
			text: this.printText,
			glyph: 0xf02f,
			handler: Ext.bind(this.onItemPrint, this)
		});
		
		this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			defaults: {minWidth: 100},
			dock: 'bottom',
			ui: 'footer',
			pack: 'start',
			items: [ this.saveButton, this.cancelButton, this.partMode == "create" ? this.saveAndPrintButton : this.printButton ]
		});
		
		this.dockedItems = [ this.bottomToolbar ];
		
		this.keepOpenCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Create blank item after save")
		});
		
		this.createCopyCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Create Copy after save")
		});
		
		this.copyPartDataCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Takeover all data"),
			disabled: true
		});
		
		if (this.partMode == "create") {
			this.bottomToolbar.add(this.keepOpenCheckbox);
			this.bottomToolbar.add(this.copyPartDataCheckbox);
		} else {
			this.bottomToolbar.add(this.createCopyCheckbox);
		}
		
		this.keepOpenCheckbox.on("change", this.onKeepOpenCheckboxClick, this);
		
		this.editor.keepOpenCheckbox = this.keepOpenCheckbox;
		this.editor.copyPartDataCheckbox = this.copyPartDataCheckbox;
		this.editor.createCopyCheckbox = this.createCopyCheckbox;
		
		this.callParent();
	},
	onCancelEdit: function () {
		this.editor.onCancelEdit();
	},
	/**
	 * Listens to the keepOpenCheckbox clicks and enables/disables the copyPartDataCheckbox
	 * @param value
	 */
	onKeepOpenCheckboxClick: function (field, value) {
		if (value) {
			this.copyPartDataCheckbox.enable();
		} else {
			this.copyPartDataCheckbox.disable();
		}
	},
	/**
	 * Called when the save button was clicked
	 */
	onItemSave: function () {
		if (!this.editor.getForm().isValid()) { return; }
		
		// Disable the save button to indicate progress
		this.saveButton.disable();
		
		// Sanity: If the save process fails, re-enable the button after 30 seconds
		if (this.saveButtonReenableTask === null){
			this.saveButtonReenableTask = new Ext.util.DelayedTask(function(){ this.saveButton.enable(); }, this);
			this.on( 'destroy', function(){ this.saveButtonReenableTask.cancel(); }, this );
		}
		this.saveButtonReenableTask.delay(30000);

		this.editor._onItemSave();
	},
	/**
	 * Prints the currently shown part. Only possible if the part was saved before.
	 */
	onItemPrint: function() {
		this.printItem(this.editor.record.data.id);
	},
	/**
	 * Prints a single part which is identified by its id.
	 */
	printItem: function( id ){
		var val = Ext.create("PartKeepr.PrintingWindow");
		val.setObjectType('PartKeepr\\PartBundle\\Entity\\Part');
		val.setContext("PartEditor");
		val.setObjectIds([id]);
		val.show();
	},
	/**
	 * Called if one presses the save and print button.
	 */
	onItemSaveAndPrint: function () {
		this.editor.on("itemSaved", function(record){ this.printItem(record.data.id);}, this, {"single": true});
		this.onItemSave();		
	},
	/**
	 * Called when the item was saved
	 */
	onItemSaved: function () {
		this.saveButton.enable();
	}
});
