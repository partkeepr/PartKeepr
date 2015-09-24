/**
 * Represents the project editor view
 */
Ext.define('PartKeepr.ProjectEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.ProjectEditor',

    // Various style configurations
    saveText: i18n("Save Project"),
    defaults: {
        anchor: '100%',
        labelWidth: 110
    },
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    /**
     * Initializes the component
     */
    initComponent: function ()
    {
        /**
         * Due to an ExtJS issue, we need to delay the event
         * for a bit.
         *
         * @todo Fix this in a cleaner way
         */
        this.on("startEdit", this.onEditStart, this, {
            delay: 200
        });

        this.on("itemSaved", this._onItemSaved, this);

        var config = {};

        // Build the initial (empty) store for the project parts
        Ext.Object.merge(config, {
            autoLoad: false,
            model: "PartKeepr.ProjectBundle.Entity.ProjectPart",
            autoSync: false, // Do not change. If true, new (empty) records would be immediately committed to the database.
            remoteFilter: false,
            remoteSort: false
        });

        this.store = Ext.create('Ext.data.Store', config);

        this.partGrid = Ext.create("PartKeepr.ProjectPartGrid", {
            store: this.store,
            listeners: {
                edit: this.onProjectGridEdit
            }
        });

        var container = Ext.create("Ext.form.FieldContainer", {
            fieldLabel: i18n("Project Parts"),
            labelWidth: 110,
            layout: 'fit',
            flex: 1,
            items: this.partGrid
        });

        this.attachmentGrid = Ext.create("PartKeepr.ProjectAttachmentGrid", {
            border: true
        });

        var container2 = Ext.create("Ext.form.FieldContainer", {
            fieldLabel: i18n("Attachments"),
            labelWidth: 110,
            layout: 'fit',
            flex: 1,
            items: this.attachmentGrid
        });

        this.items = [
            {
                xtype: 'textfield',
                name: 'name',
                height: 20,
                fieldLabel: i18n("Project Name")
            }, {
                xtype: 'textarea',
                name: 'description',
                fieldLabel: i18n("Project Description"),
                height: 70
            },
            container,
            container2
        ];
        this.callParent();

    },
    /**
     * Handle transparent setting of the part name after a value was selected from the combobox
     */
    onProjectGridEdit: function (editor, e)
    {
        if (e.field == "part_id") {
            /**
             * If the user cancelled the editing, set the field to the original value
             */
            if (e.value === null) {
                e.record.set("part_id", e.originalValue);
            }

            /**
             * Inject the name into the record
             */
            var rec = e.column.getEditor().store.getById(e.value);
            if (rec) {
                e.record.set("part_name", rec.get("name"));
            }
        }
    },
    /**
     * Re-bind the store after an item was saved
     */
    _onItemSaved: function (record)
    {
        this.partGrid.bindStore(record.parts());
        this.attachmentGrid.bindStore(record.attachments());
    },
    /**
     * Bind the store as soon as the view was rendered.
     *
     * @todo This is a hack, because invocation of this method is delayed.
     */
    onEditStart: function ()
    {
        var store = this.record.parts();
        this.partGrid.bindStore(store);

        var store2 = this.record.attachments();
        this.attachmentGrid.bindStore(store2);
    }
});
