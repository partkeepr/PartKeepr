/**
 * @class PartKeepr.Components.Part.Editor.MetaPartEditorWindow

 * <p>The MetaPartEditorWindow encapsulates the PartKeepr.Components.Part.Editor.MetaPartEditor within a window.</p>
 */
Ext.define('PartKeepr.Components.Part.Editor.MetaPartEditorWindow', {
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

    border: false,

    saveText: i18n("Save"),
    cancelText: i18n("Cancel"),

    title: i18n("Add/Edit Meta-Part"),

    saveButtonReenableTask: null,

    /**
     * Creates the part editor and put it into the window.
     */
    initComponent: function ()
    {
        this.editor = Ext.create("PartKeepr.Components.Part.Editor.MetaPartEditor", {
            border: false,
            enableButtons: false
        });

        this.items = [this.editor];

        this.editor.on("editorClose", function ()
        {
            this.close();
        }, this, {delay: 200});

        this.editor.on("_titleChange", function (val)
        {
            this.setTitle(val);
        }, this);
        this.editor.on("itemSaved", this.onItemSaved, this);

        this.saveButton = Ext.create("Ext.button.Button", {
            text: this.saveText,
            iconCls: 'fugue-icon disk',
            handler: Ext.bind(this.onItemSave, this)
        });

        this.cancelButton = Ext.create("Ext.button.Button", {
            text: this.cancelText,
            iconCls: 'web-icon cancel',
            handler: Ext.bind(this.onCancelEdit, this)
        });

        this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
            enableOverflow: true,
            defaults: {minWidth: 100},
            dock: 'bottom',
            ui: 'footer',
            pack: 'start',
            items: [this.saveButton, this.cancelButton]
        });

        this.dockedItems = [this.bottomToolbar];

        this.callParent();
    },
    onCancelEdit: function ()
    {
        this.editor.onCancelEdit();
    },
    /**
     * Called when the save button was clicked
     */
    onItemSave: function ()
    {
        if (!this.editor.getForm().isValid()) {
            return;
        }

        // Disable the save button to indicate progress
        this.saveButton.disable();

        // Sanity: If the save process fails, re-enable the button after 30 seconds
        if (this.saveButtonReenableTask === null) {
            this.saveButtonReenableTask = new Ext.util.DelayedTask(function ()
            {
                this.saveButton.enable();
            }, this);
            this.on('destroy', function ()
            {
                this.saveButtonReenableTask.cancel();
            }, this);
        }
        this.saveButtonReenableTask.delay(30000);

        if (!this.editor._onItemSave()) {
            this.saveButton.enable();
        }
    },
    /**
     * Called when the item was saved
     */
    onItemSaved: function ()
    {
        this.saveButton.enable();
    }
});
