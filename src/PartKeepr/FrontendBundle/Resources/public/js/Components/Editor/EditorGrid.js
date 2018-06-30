/**
 * This class extends a regular GridPanel with the following features:
 *
 * - Buttons to add/delete items
 * - Enable/Disable the delete button if an item is selected
 * - Search field
 * - Paging Toolbar
 */
Ext.define('PartKeepr.EditorGrid', {
    extend: 'PartKeepr.BaseGrid',
    alias: 'widget.EditorGrid',

    /**
     * @cfg {String} text The text for the "delete" button
     */
    deleteButtonText: i18n("Delete Item"),

    /**
     * @cfg {String} text The path to the 'delete' icon
     */
    deleteButtonIcon: '',

    /**
     * @cfg {String} text The CSS class for the 'delete' icon
     */
    deleteButtonIconCls: 'web-icon delete',

    /**
     * @cfg {String} text The text for the "add" button
     */
    addButtonText: i18n("Add Item"),

    /**
     * @cfg {String} text The path to the 'add' icon
     */
    addButtonIcon: '',

    /**
     * @cfg {String} text The CSS class for the 'add' icon
     */
    addButtonIconCls: 'web-icon add',

    /**
     * @cfg {Boolean} boolean Specifies whether to enable the top toolbar or not
     */
    enableTopToolbar: true,

    /**
     * @cfg {String} text Defines if the "add"/"delete" buttons should show their text or icon only. If "hide", the
     * button text is hidden, anything else shows the text.
     */
    buttonTextMode: 'hide',

    /**
     * @cfg {Boolean} boolean Defines if the grid should automatically calculate it's page size
     */
    automaticPageSize: false,

    /**
     * @cfg {Integer} integer Defines the row height with which the calculator should assume
     */
    automaticPageSizeRowHeight: 21,

    /**
     * @cfg {Boolean} boolean Defines if the list should be read-only, or if the list can be edited. Defaults to true.
     */
    enableEditing: true,

    /**
     * @cfg {Boolean} boolean Defines if the edit event should pass the object (true) or as id (false)
     */
    editItemAsObject: false,

    /**
     * @cfg {String} Specifies the system property which defines all fields to be searched
     */
    searchFieldSystemPreference: null,

    /**
     * @cfg {Array} Specifies the default fields to be searched
     */
    searchFieldSystemPreferenceDefaults: [],

    /**
     * @cfg {String} Specifies the system property which defines if the search terms should be splitted
     */
    splitSearchTermSystemPreference: null,

    /**
     * @cfg {String} Specifies the default for search term splitting
     */
    splitSearchTermSystemPreferenceDefaults: true,

    /**
     * @cfg {String} The title property
     */
    titleProperty: null,

    listeners: {
        'reconfigure': 'onReconfigure'
    },

    /**
     * @event itemSelect
     * Fires if a record was selected within the grid.
     * @param {Object} Ext.data.Record The selected record
     */
    initComponent: function () {

        /**
         * @event itemDeselect
         * Fires if a record was deselected within the grid.
         * @param {Object} record The deselected record
         */

        /**
         * @event itemEdit
         * Fires if a record should be edited.
         * @param {Object} record The record to edit
         */

        /**
         * @event itemDelete
         * Fires if the delete button was clicked.
         */

        /**
         * @event itemAdd
         * Fires if the add button was clicked.
         */

        this.on("itemclick", this._onItemEdit, this);

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: (this.buttonTextMode !== "hide") ? this.deleteButtonText : '',
            tooltip: this.deleteButtonText,
            icon: this.deleteButtonIcon,
            iconCls: this.deleteButtonIconCls,
            handler: Ext.bind(function () {
                this.fireEvent("itemDelete");
            }, this),
            disabled: true
        });

        this.addButton = Ext.create("Ext.button.Button", {
            text: (this.buttonTextMode !== "hide") ? this.addButtonText : '',
            tooltip: this.addButtonText,
            icon: this.addButtonIcon,
            iconCls: this.addButtonIconCls,
            handler: Ext.bind(function () {
                this.fireEvent("itemAdd");
            }, this)
        });

        var targetField = this.titleProperty;

        this.searchField = Ext.create("PartKeepr.form.field.SearchField", {
            store: this.store,
            targetField: targetField,
            searchFieldSystemPreference: this.searchFieldSystemPreference,
            searchFieldSystemPreferenceDefaults: this.searchFieldSystemPreferenceDefaults,
            splitSearchTermSystemPreference: this.splitSearchTermSystemPreference,
            splitSearchTermSystemPreferenceDefaults: this.splitSearchTermSystemPreferenceDefaults
        });

        var topToolbarItems = [];

        if (this.enableEditing)
        {
            topToolbarItems.push(this.addButton);
            topToolbarItems.push(this.deleteButton);
        }

        topToolbarItems.push({xtype: 'tbfill'});
        topToolbarItems.push(this.searchField);

        this.topToolbar = Ext.create("Ext.toolbar.Toolbar", {
            dock: 'top',
            enableOverflow: true,
            items: topToolbarItems
        });

        this.bottomToolbar = Ext.create("PartKeepr.PagingToolbar", {
            store: this.store,
            enableOverflow: true,
            dock: 'bottom',
            displayInfo: false,
            grid: this
        });

        this.appliedFiltersToolbar = Ext.create("PartKeepr.Grid.AppliedFiltersToolbar", {
            dock: 'bottom',
            targetStore: this.store
        });

        this.notificationBar = Ext.create("Ext.panel.Panel", {
            dock: 'top',
            hidden: true,
            ui: 'notification'
        });

        this.dockedItems = new Array();

        this.dockedItems.push(this.bottomToolbar);
        this.dockedItems.push(this.appliedFiltersToolbar);

        if (this.enableTopToolbar)
        {
            this.dockedItems.push(this.topToolbar);
        }

        if (!Ext.isArray(this.plugins))
        {
            this.plugins = [];
        }

        this.callParent();

        this.addDocked(this.notificationBar);
        this.getSelectionModel().on("select", this._onItemSelect, this);
        this.getSelectionModel().on("deselect", this._onItemDeselect, this);
        this.getView().on("itemkeydown", this._onItemKeyPress, this);
        this.getStore().on("filterchange", this._onFilterChange, this);

        if (this.automaticPageSize)
        {
            this.on("resize", this.reassignPageSize, this);
        }
    },
    _onFilterChange: function () {
        var filters = this.getStore().getFilters();

        if (filters.length > 0)
        {
            this.bottomToolbar.down("#resetFilter").show();
        } else
        {
            this.bottomToolbar.down("#resetFilter").hide();
        }

        this.appliedFiltersToolbar.updateFilters(filters);

    },
    /**
     * Sets a notification which is displayed on the grid's top dock
     * @param message
     */
    setNotification: function (message) {
        this.notificationBar.setHtml(message);
        this.notificationBar.show();
    },
    /**
     * Removes a previously set notification
     */
    removeNotification: function () {
        this.notificationBar.hide();
    },
    /**
     * Re-calculates and re-assigns the page size for the assigned store.
     *
     * Automatically reloads the store.
     */
    reassignPageSize: function () {
        if (this.store.isLoading())
        {
            return;
        }
        if (this.getView().getHeight() === 0)
        {
            return;
        }

        var numRecords = Math.floor(this.getView().getHeight() / this.automaticPageSizeRowHeight);

        if (numRecords < 1)
        {
            numRecords = 1;
        }

        var oldStartIndex = this.store.pageSize * this.store.currentPage;

        this.store.pageSize = numRecords;

        var newStartPage = Math.floor(oldStartIndex / numRecords);

        if (newStartPage < 1)
        {
            newStartPage = 1;
        }

        this.store.loadPage(newStartPage);
    },
    onReconfigure: function (me, store) {
        this.searchField.setStore(store);
        this.bottomToolbar.setStore(store);

    },
    syncChanges: function () {
        // Simply reload the store for now
        this.store.load();
    },
    /**
     * Called when an item was selected. Enables/disables the delete button.
     */
    _updateDeleteButton: function () {
        /* Right now, we support delete on a single record only */
        if (this.getSelectionModel().getCount() == 1)
        {
            this.deleteButton.enable();
        } else
        {
            this.deleteButton.disable();
        }
    },
    _onItemKeyPress: function (view, record, item, index, e) {
        if (e.getKey() == e.ENTER || e.getKey() == e.TAB)
        {
            this._onItemEdit(view, record);
        }
    },
    /**
     * Called when an item should be edited
     */
    _onItemEdit: function (view, record) {
        if (this.editItemAsObject)
        {
            this.fireEvent("itemEdit", record);
        } else
        {
            this.fireEvent("itemEdit", record.getId());
        }
    },
    /**
     * Called when an item was selected
     */
    _onItemSelect: function (selectionModel, record) {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemSelect", record);
    },
    /**
     * Called when an item was deselected
     */
    _onItemDeselect: function (selectionModel, record) {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemDeselect", record);
    }
});
