/**
 * @class PartKeepr.EditorComponent

 * <p>The EditorComponent encapsulates an editing workflow. In general, we have four actions
 * for each object: create, update, delete, view. These actions stay exactly the same for each
 * distinct object.</p>
 * <p>The EditorComponent is a border layout, which has a navigation and an editor area.</p>
 * @todo Document the editor system a bit better
 */
Ext.define('PartKeepr.EditorComponent', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.EditorComponent',

    /**
     * Misc layout settings
     */
    layout: 'border',
    padding: 5,
    border: false,

    /**
     * Specifies the class name of the navigation. The navigation is placed in the "west" region
     * and needs to fire the event "itemSelect". The component listens on that event and
     * creates an editor based on the selected record.
     */
    navigationClass: null,

    /**
     * Specifies the class name of the editor.
     */
    editorClass: null,

    /**
     * Contains the store for the item overview.
     */
    store: null,

    /**
     * Contains the associated model to load a record for.
     */
    model: null,

    /**
     * Defines the store to use. Defaults to {Ext.data.Store}
     */
    storeType: "Ext.data.Store",

    /**
     * Some default text messages. Can be overridden by sub classes.
     */
    deleteMessage: i18n("Do you really wish to delete the item %s?"),
    deleteTitle: i18n("Delete Item"),
    newItemText: i18n("New Item"),

    /**
     * @var {string} The record field to read the title property from
     */
    titleProperty: 'name',

    initComponent: function ()
    {

        /**
         * Create the navigation panel
         */
        this.navigation = Ext.create(this.navigationClass, {
            region: 'west',
            width: 300,
            split: true,
            store: this.store,
            titleProperty: this.titleProperty
        });

        this.navigation.on("itemAdd", this.newRecord, this);
        this.navigation.on("itemDelete", this.confirmDelete, this);
        this.navigation.on("itemEdit", this.startEdit, this);

        /**
         * Create the editor panel
         */
        this.editorTabPanel = Ext.create("Ext.tab.Panel", {
            region: "center",
            layout: 'fit',
            plugins: Ext.create('Ext.ux.TabCloseMenu')
        });

        this.items = [this.navigation, this.editorTabPanel];

        this.callParent();
    },
    /**
     * Creates a new record. Creates a new instance of the editor.
     */
    newRecord: function (defaults)
    {
        Ext.apply(defaults, {});

        var editor = this.createEditor(this.newItemText);
        editor.newItem(defaults);
        this.editorTabPanel.add(editor).show();
    },
    /**
     * Instructs the component to edit a new record.
     * @param {Record} record The record to edit
     */
    startEdit: function (id)
    {
        /* Search for an open editor for the current record. If we
         * already have an editor, show the editor instead of loading
         * a new record.
         */
        var editor = this.findEditor(id);

        if (editor !== null) {
            editor.show();
            return;
        }

        // Still here? OK, we don't have an editor open. Create a new one
        var model = Ext.ClassManager.get(this.model);

        model.load(id, {
            scope: this,
            success: function (record, operation)
            {
                editor = this.createEditor(record.get(this.titleProperty));
                editor.editItem(record);
                this.editorTabPanel.add(editor).show();
            }
        });
    },
    findEditor: function (id)
    {
        for (var i = 0; i < this.editorTabPanel.items.getCount(); i++) {
            if (this.editorTabPanel.items.getAt(i).getRecordId() == id) {
                return this.editorTabPanel.items.getAt(i);
            }
        }

        return null;
    },
    createEditor: function (title)
    {
        var editor = Ext.create(this.editorClass, {
            store: this.store,
            title: title,
            model: this.model,
            closable: true,
            titleProperty: this.titleProperty,
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this.editorTabPanel.remove(m);
                }, this)
            }
        });

        editor.on("itemSaved", this.onItemSaved, this);
        return editor;
    },
    confirmDelete: function ()
    {
        var r = this.navigation.getSelectionModel().getLastSelected();
        var recordName;

        recordName = r.get(this.titleProperty);

        Ext.Msg.confirm(
            this.deleteTitle,
            sprintf(this.deleteMessage, recordName),
            function (but)
            {
                if (but == "yes") {
                    this.deleteRecord(r);
                }
            }, this);
    },
    deleteRecord: function (r)
    {
        var editor = this.findEditor(r.getId());

        if (editor !== null) {
            this.editorTabPanel.remove(editor);
        }

        r.erase();
        this.store.load();
    },
    // Creates a store. To be called from child's initComponent
    createStore: function (config)
    {
        Ext.applyIf(config, {
            autoLoad: true,
            model: this.model,
            autoSync: false, // Do not change. If true, new (empty) records would be immediately committed to the database.
            remoteFilter: true,
            remoteSort: true,
            pageSize: 15
        });

        this.store = Ext.create(this.storeType, config);

        // Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
        this.store.on('write', function (store, operation)
        {
            var success = operation.wasSuccessful();
            if (success) {
                Ext.each(operation.records, function (record)
                {
                    if (record.dirty) {
                        record.commit();
                    }
                });
            }
        });
    },
    getStore: function ()
    {
        return this.store;
    },
    onItemSaved: function (record)
    {
        this.navigation.syncChanges(record);
    }
});
