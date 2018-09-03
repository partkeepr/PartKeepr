/**
 * This class is the main part list grid.
 *
 */
Ext.define('PartKeepr.PartsGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.PartsGrid',

    /**
     * Display button texts by default
     */
    buttonTextMode: 'show',

    /**
     * @cfg {String} Defines the text of the "Add" button
     */
    addButtonText: i18n("Add Part"),

    /**
     * @cfg {String} Defines the icon of the "Add" button
     */
    addButtonIconCls: 'web-icon brick_add',

    /**
     * @cfg {String} Defines the text of the "Delete" button
     */
    deleteButtonText: i18n("Delete Part"),

    /**
     * @cfg {String} Defines the icon of the "Add" button
     */
    deleteButtonIconCls: 'web-icon brick_delete',

    /**
     * @cfg {String} Defines the icon of the "Expand Row" button
     */
    expandRowButtonIconCls: 'partkeepr-icon group-expand',

    /**
     * @cfg {String} Defines the icon of the "Collapse Row" button
     */
    collapseRowButtonIconCls: 'partkeepr-icon group-collapse',

    /**
     * Configure drag'n'drop.
     * @todo Check if this messes up with the Part drop down in the project view
     */
    viewConfig: {
        plugins: {
            ddGroup: 'CategoryTree',
            ptype: 'gridviewdragdrop',
            enableDrop: false
        }
    },
    enableDragDrop: true,
    stripeRows: true,
    multiSelect: true,
    autoScroll: false,
    invalidateScrollerOnRefresh: true,
    titleProperty: 'name',
    searchFieldSystemPreference: "partkeepr.part.search.field",
    searchFieldSystemPreferenceDefaults: ["name", "description", "comment", "internalPartNumber"],
    splitSearchTermSystemPreference: "partkeepr.part.search.split",
    splitSearchTermSystemPreferenceDefaults: true,

    initComponent: function ()
    {

        this.groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
            //enableGroupingMenu: false,
            groupHeaderTpl: '{name} ({rows.length} ' + i18n("Part(s)") + ")"
        });

        // Create the columns
        this.defineColumns();


        this.features = [this.groupingFeature];

        this.on("itemdblclick", this.onDoubleClick, this);

        // Bugfix for scroller becoming detached.
        // @todo Remove with ExtJS 4.1
        this.on('scrollershow', function (scroller)
        {
            if (scroller && scroller.scrollEl) {
                scroller.clearManagedListeners();
                scroller.mon(scroller.scrollEl, 'scroll', scroller.onElScroll, scroller);
            }
        });

        if (this.enableEditing) {
            this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            });

            this.editing.on("edit", this.onEdit, this);

            this.plugins = [this.editing];
        }

        // Initialize the panel
        this.callParent();

        this.bottomToolbar.add({
            xtype: 'button',
            tooltip: i18n("Expand all Groups"),
            iconCls: this.expandRowButtonIconCls,
            listeners: {
                scope: this.groupingFeature,
                click: this.groupingFeature.expandAll
            }

        });

        this.bottomToolbar.add({
            xtype: 'button',
            tooltip: i18n("Collapse all Groups"),
            iconCls: this.collapseRowButtonIconCls,
            listeners: {
                scope: this.groupingFeature,
                click: this.groupingFeature.collapseAll
            }

        });

        var insertPosition = this.bottomToolbar.items.indexOf(this.bottomToolbar.down("#addFilter"));

        this.bottomToolbar.insert(insertPosition, {
            xtype: 'button',
            tooltip: i18n("Filter by Part Parameter"),
            iconCls: "fugue-icon table--plus",
            listeners: {
                scope: this,
                click: this.addParameterFilter
            }
        });

        var duplicateBasicData = i18n(
            "Duplicates the selected part with the data found in the \"basic\" tab and opens the editor. Doesn't immediately saves the duplicate, in order to allow editing.");
        var duplicateAllData = i18n(
            "Duplicates the selected part with all data including attachments, distributors etc. Doesn't immediately saves the duplicate, in order to allow editing.");

        this.addFromTemplateButton = Ext.create("Ext.button.Split", {
            disabled: true,
            handler: Ext.bind(function ()
            {
                this.fireEvent("duplicateItemWithBasicData");
            }, this),
            tooltip: duplicateBasicData,
            text: i18n("Duplicate"),
            iconCls: 'web-icon brick_link',
            menu: new Ext.menu.Menu({
                items: [
                    {
                        text: i18n("Duplicate with all data"),
                        tooltip: duplicateAllData,
                        handler: function ()
                        {
                            this.fireEvent("duplicateItemWithAllData");
                        },
                        scope: this
                    }, {
                        text: i18n("Duplicate basic data only"),
                        tooltip: duplicateBasicData,
                        handler: function ()
                        {
                            this.fireEvent("duplicateItemWithBasicData");
                        },
                        scope: this
                    }
                ]
            })
        });

        if (this.enableEditing) {
            this.topToolbar.insert(2, this.addFromTemplateButton);
        }

        this.createMetaPartButton = Ext.create("Ext.button.Button", {
            iconCls: 'web-icon bricks',
            text: i18n("Add Meta-Part"),
            handler: function ()
            {
                this.fireEvent("addMetaPart");
            },
            scope: this
        });

        this.topToolbar.insert(1, this.createMetaPartButton);

        this.mapSearchHotkey();
    },
    /**
     * Maps a search hotkey to the search box.
     *
     * Right now, this is hardcoded to alt+x.
     *
     */
    mapSearchHotkey: function ()
    {
        this.searchKey = new Ext.util.KeyMap(Ext.get(document), {
            key: 'x',
            ctrl: false,
            alt: true,
            fn: function ()
            {
                var searchBox = this.searchField;
                if (Ext.get(document).activeElement !== searchBox) {
                    searchBox.focus('', 10);
                }
                searchBox.setValue('');
            },
            scope: this,
            stopEvent: true
        });
    },
    /**
     * Called when an item was selected. Enables/disables the delete button.
     */
    _updateAddTemplateButton: function ()
    {
        /* Right now, we support delete on a single record only */
        if (this.getSelectionModel().getCount() === 1) {
            this.addFromTemplateButton.enable();
        } else {
            this.addFromTemplateButton.disable();
        }
    },
    /**
     * Called when an item was selected
     */
    _onItemSelect: function (selectionModel, record)
    {
        this._updateAddTemplateButton(selectionModel, record);
        this.callParent(arguments);
    },
    /**
     * Called when an item was deselected
     */
    _onItemDeselect: function (selectionModel, record)
    {
        this._updateAddTemplateButton(selectionModel, record);
        this.callParent(arguments);
    },
    /**
     * Called when the record was double-clicked
     */
    onDoubleClick: function (view, record)
    {
        if (record) {
            this.fireEvent("editPart", record);
        }
    },
    /**
     * Defines the columns used in this grid.
     */
    defineColumns: function ()
    {
        this.columns = [
            {
                header: '<span class="web-icon fugue-icon paper-clip"></span>',
                dataIndex: "",
                width: 30,
                tooltip: i18n("Has attachments?"),
                renderers: [{
                    rtype: 'partAttachment'
                }]
            }, {
                text: '<span class="web-icon flag_orange"></span>',
                dataIndex: "needsReview",
                width: 30,
                tooltip: i18n("Needs Review?"),
                renderers: [{
                    rtype: 'icon',
                    rendererConfig: {
                        iconCls: 'web-icon flag_orange'
                    }
                }]
            }, {
                text: '<span class="web-icon bricks"></span>',
                dataIndex: "metaPart",
                width: 30,
                tooltip: i18n("Meta Part"),
                renderers: [{
                    rtype: 'icon',
                    rendererConfig: {
                        iconCls: 'web-icon bricks'
                    }
                }]
            }, {
                header: i18n("Name"),
                dataIndex: 'name',
                flex: 1,
                minWidth: 150
            }, {
                header: i18n("Description"),
                dataIndex: 'description',
                flex: 2,
                minWidth: 150
            }, {
                header: i18n("Storage Location"),
                dataIndex: 'storageLocation.name'
            }, {
                header: i18n("Status"),
                dataIndex: "status"},
            {
                header: i18n("Condition"),
                dataIndex: "partCondition"
            }, {
                header: i18n("Stock"),
                dataIndex: 'stockLevel',
                renderers: [{
                    rtype: "stockLevel"
                }],
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }, {
                header: i18n("Min. Stock"),
                dataIndex: 'minStockLevel',
                renderers: [{
                    rtype: "stockLevel"
                }]
            }, {
                header: i18n("Avg. Price"),
                dataIndex: 'averagePrice',
                align: 'right',
                renderers: [{
                    rtype: "currency"
                }]
            }, {
                header: i18n("Footprint"),
                dataIndex: 'footprint.name'
            }, {
                header: i18n("Category"),
                dataIndex: "category.categoryPath",
                hidden: true
            }, {
                header: i18n("Create Date"),
                dataIndex: 'createDate',
                hidden: true
            }, {
                header: i18n("Internal ID"),
                dataIndex: '@id',
                 renderers: [{
                    rtype: "internalID"
                }]
            }

        ];
    },
    /**
     * Sets the category. Triggers a store reload with a category filter.
     */
    setCategory: function (category)
    {
        var proxy = this.store.getProxy();

        proxy.extraParams.category = category;

        this.store.currentPage = 1;
        this.store.load({
            start: 0
        });
    },
    /**
     * Handles editing of the grid fields. Right now, only the stock level editing is supported.
     *
     * @param editor Not used
     * @param e An edit event, as documented in
     *            http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
     */
    onEdit: function (editor, e)
    {
        switch (e.field) {
            case "stockLevel":
                if (e.value !== e.originalValue.toString()) {
                    this.handleStockFieldEdit(e);
                }
                break;
            default:
                break;
        }
    },
    addParameterFilter: function () {
        this.addFilterWindow = Ext.create("PartKeepr.Components.Widgets.PartParameterSearchWindow", {

            sourceModel: this.getStore().getModel(),
            listeners: {
                "apply": this.onAddParameterFilter,
                scope: this
            }
        });

        this.addFilterWindow.show();
    },
    /**
     * @todo Refactor this function as well as the one in DataApplicator to a single central function
     *
     * Note that this function takes the input and multiplies it by the si prefix
     * @param value
     * @param siPrefix
     * @returns {*}
     */
    applySiPrefix: function (value, siPrefix)
    {
        if (siPrefix instanceof PartKeepr.SiPrefixBundle.Entity.SiPrefix) {
            var fractionValue = value * Math.pow(siPrefix.get("base"), siPrefix.get("exponent"));

            if (siPrefix.get("exponent") < 0)
            {
                return fractionValue.toFixed(Math.abs(siPrefix.get("exponent")));
            } else
            {
                return fractionValue;
            }
        } else {
            return value;
        }
    },
    onAddParameterFilter: function (rec) {
        var subFilters = [];


        subFilters.push( Ext.create("PartKeepr.util.Filter", {
            property: "parameters.name",
            operator: "=",
            value: rec.get("partParameterName")
        }));

        var value;

        if (rec.get("valueType") === "numeric") {
            value = this.applySiPrefix(rec.get("value"), rec.getSiPrefix());

            subFilters.push( Ext.create("PartKeepr.util.Filter", {
                property: "parameters.normalizedValue",
                operator: rec.get("operator"),
                value: value
            }));
        } else {
            value = rec.get("stringValue");

            subFilters.push( Ext.create("PartKeepr.util.Filter", {
                property: "parameters.stringValue",
                operator: rec.get("operator"),
                value: value
            }));
        }


        var filter = Ext.create("PartKeepr.util.Filter", {
            type: "AND",
            subfilters: subFilters
        });
        this.getStore().addFilter(filter);
    },

    /**
     * Handles the editing of the stock level field. Checks if the user has opted in to skip the
     * online stock edit confirm window, and runs the changes afterwards.
     *
     * @param e An edit event, as documented in
     *            http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
     */
    handleStockFieldEdit: function (e)
    {
        if (PartKeepr.getApplication().getUserPreference("partkeepr.inline-stock-change.confirm", true) === false) {
            this.handleStockChange(e);
        } else {
            this.confirmStockChange(e);
        }
    },
    getStockChangeMode: function (value)
    {
        var n = value.indexOf("+");

        if (n !== -1) {
            return "addition";
        }

        n = value.indexOf("-");

        if (n !== -1) {
            return "removal";
        }

        return "fixed";
    },
    /**
     * Opens the confirm dialog
     *
     * @param e An edit event, as documented in
     *            http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
     */
    confirmStockChange: function (e)
    {
        var mode = this.getStockChangeMode(e.value);
        var value = Math.abs(parseInt(e.value));
        var confirmText = "";
        var headerText = "";

        switch (mode) {
            case "removal":
                confirmText = sprintf(
                    i18n("You wish to remove <b>%s %s</b> of the part <b>%s</b>. Is this correct?"),
                    value, e.record.getPartUnit().get("name"), e.record.get("name"));

                // Set the stock level to a temporary calculated value.
                e.record.set("stockLevel", (e.originalValue - value));
                headerText = i18n("Remove Part(s)");
                break;
            case "addition":
                confirmText = sprintf(
                    i18n("You wish to add  <b>%s %s</b> of part <b>%s</b>. Is this correct?"),
                    value, e.record.getPartUnit().get("name"), e.record.get("name"));

                e.record.set("stockLevel", (e.originalValue + value));
                headerText = i18n("Add Part(s)");
                break;
            case "fixed":
                confirmText = sprintf(
                    i18n("You wish to set the stock level to <b>%s %s</b> for part <b>%s</b>. Is this correct?"),
                    value, e.record.getPartUnit().get("name"), e.record.get("name"));

                e.record.set("stockLevel", value);
                headerText = i18n("Set Stock Level for Part(s)");
                break;
        }


        var j = Ext.create("PartKeepr.RememberChoiceMessageBox", {
            escButtonAction: "cancel",
            dontAskAgainProperty: "partkeepr.inline-stock-change.confirm",
            dontAskAgainValue: false
        });

        j.show({
            title: headerText,
            msg: confirmText,
            buttons: Ext.Msg.OKCANCEL,
            fn: this.afterConfirmStockChange,
            scope: this,
            originalOnEdit: e,
            dialog: j
        });
    },
    /**
     * Callback for the stock removal confirm window.
     *
     * The parameters are documented on:
     * http://docs.sencha.com/ext-js/4-0/#!/api/Ext.window.MessageBox-method-show
     */
    afterConfirmStockChange: function (buttonId, text, opts)
    {
        if (buttonId === "cancel") {
            opts.originalOnEdit.record.set("stockLevel", opts.originalOnEdit.originalValue);
            return;
        }

        this.handleStockChange(opts.originalOnEdit);
    },
    /**
     * Handles the stock change. Automatically figures out which method to call (deleteStock or addStock) and
     * sets the correct quantity.
     *
     * @param e An edit event, as documented in
     *            http://docs.sencha.com/ext-js/4-0/#!/api/Ext.grid.plugin.CellEditing-event-edit
     */
    handleStockChange: function (e)
    {
        var mode = this.getStockChangeMode(e.value);
        var value = Math.abs(parseInt(e.value));
        var call;

        if (e.value === 0) {
            return;
        }

        switch (mode) {
            case "removal":
                call = "removeStock";
                break;
            case "addition":
                call = "addStock";
                break;
            case "fixed":
                call = "setStock";
                break;
            default:
                return;
        }

        e.record.callPutAction(call, {
            quantity: value
        }, Ext.bind(this.reloadPart, this, [e]));
    },
    /**
     * Reloads the current part
     */
    reloadPart: function (opts)
    {
        this.loadPart(opts.record.getId(), opts);
    },
    /**
     * Load the part from the database.
     */
    loadPart: function (id)
    {
        PartKeepr.PartBundle.Entity.Part.load(id, {
            scope: this,
            success: this.onPartLoaded
        });
    },
    /**
     * Callback after the part is loaded
     */
    onPartLoaded: function (record)
    {
        var rec = this.store.findRecord("id", record.getId());
        if (rec) {
            rec.set("stockLevel", record.get("stockLevel"));
        }
    }
});
