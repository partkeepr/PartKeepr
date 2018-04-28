/**
 * Defines the part filter panel.
 *
 *
 */
Ext.define('PartKeepr.PartFilterPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.PartFilterPanel',

    /**
     * Define a padding of 10px
     */
    bodyPadding: '10px',

    /**
     * The items are aligned in a wrappable column layout
     */
    layout: 'column',

    /**
     * Automatically scroll the container if the items exceed the container size.
     */
    autoScroll: true,

    /**
     * The applied filters
     */
    appliedFilters: [],

    /**
     * Fixed body background color style
     */
    //bodyStyle: 'background:#DBDBDB;',

    ui: 'default-framed',
    iconCls: "fugue-icon funnel",

    partManager: null,
    storageLocationFilter: null,
    storageLocationFilterCheckbox: null,
    storageLocationContainer: null,
    categoryFilter: null,
    stockFilter: null,
    partsWithoutPrice: null,
    distributorOrderNumberFilter: null,
    manufacturerPartNumberFilter: null,
    createDateField: null,
    createDateFilterSelect: null,
    createDateFilter: null,
    partsWithoutStockRemovals: null,
    needsReview: null,
    manufacturerFilterCheckbox: null,
    manufacturerFilterCombo: null,
    manufacturerFilter: null,
    distributorFilterCombo: null,
    distributorFilter: null,
    footprintFilterCheckbox: null,
    footprintFilterCombo: null,
    footprintFilter: null,
    statusFilter: null,
    conditionFilter: null,
    internalPartNumberFilter: null,
    internalIdFilter: null,
    commentFilter: null,

    filterControls: [],

    /**
     * Initializes the component
     */
    initComponent: function ()
    {

        // Create the filter fields
        this.createFilterFields();

        // Creates the left column of the filter panel
        this.leftColumn = {
            xtype: 'container',
            anchor: '100%',
            layout: 'anchor',
            minWidth: 340,
            style: 'margin-right: 10px',
            columnWidth: 0.5,
            items: [
                this.storageLocationContainer,
                this.categoryFilter,
                this.partsWithoutPrice,
                this.createDateFilter,
                this.partsWithoutStockRemovals,
                this.needsReview,
                this.internalIdFilter
            ]
        };

        // Creates the right column of the filter panel
        this.rightColumn = {
            xtype: 'container',
            anchor: '100%',
            minWidth: 340,
            columnWidth: 0.5,
            layout: 'anchor',
            items: [
                this.stockFilter,
                this.distributorOrderNumberFilter,
                this.distributorFilter,
                this.manufacturerFilter,
                this.manufacturerPartNumberFilter,
                this.footprintFilter,
                this.statusFilter,
                this.conditionFilter,
                this.internalPartNumberFilter,
                this.commentFilter
            ]
        };

        // Apply both columns to this panel
        this.items = [this.leftColumn, this.rightColumn];

        // Create the reset button
        this.resetButton = Ext.create("Ext.button.Button", {
            text: i18n("Reset"),
            handler: this.onReset,
            iconCls: 'web-icon cancel',
            scope: this
        });

        // Create the apply button
        this.applyButton = Ext.create("Ext.button.Button", {
            text: i18n("Apply"),
            iconCls: 'web-icon accept',
            handler: this.onApply,
            scope: this
        });

        // Append both buttons to a toolbar
        this.dockedItems = [
            {
                xtype: 'toolbar',
                enableOverflow: true,
                dock: 'bottom',
                ui: 'footer',
                defaults: {minWidth: 100},
                items: [this.applyButton, this.resetButton]
            }
        ];

        this.store.getFilters().on("endupdate", this._onFilterRemove, this);
        this.callParent();

        this.down("#idField").on("beforedestroy", this.onBeforeIdFieldDestroy, this.down("#idField"));
    },
    _onFilterRemove: function ()
    {
        var filterPlugin;
        if (this.suspendRemovals) {
            return;
        }

        for (var i = 0; i < this.filterControls.length; i++) {
            filterPlugin = this.filterControls[i].findPlugin("filter");

            if (filterPlugin instanceof PartKeepr.Util.FilterPlugin) {
                if (!this.store.getFilters().contains(filterPlugin.getFilter())) {
                    this.filterControls[i].disableFilter();
                }
            }
        }

    },
    /**
     * Applies the parameters from the filter panel to the proxy, then
     * reload the store to refresh the grid.
     *
     * @param none
     * @return nothing
     */
    onApply: function ()
    {
        var i;

        this.appliedFilters = this.getFilters();

        this.suspendRemovals = true;
        if (this.appliedFilters.disableFilters.length !== 0) {
            for (i = 0; i < this.appliedFilters.disableFilters.length; i++) {
                this.store.removeFilter(this.appliedFilters.disableFilters[i], true);
            }
        }

        if (this.appliedFilters.enableFilters.length !== 0) {
            for (i = 0; i < this.appliedFilters.enableFilters.length; i++) {
                this.store.addFilter(this.appliedFilters.enableFilters[i], true);
            }
        }

        this.suspendRemovals = false;


        this.store.load();
    },
    /**
     * Resets the fields to their original values, then call onApply()
     * to reload the store.
     */
    onReset: function ()
    {
        this.storageLocationFilter.setValue("");
        this.storageLocationFilterCheckbox.setValue(false);

        this.categoryFilter.setValue({category: 'all'});
        this.stockFilter.setValue({stock: 'any'});
        this.distributorOrderNumberFilter.setValue("");
        this.manufacturerPartNumberFilter.setValue("");

        this.createDateFilterSelect.setValue("");
        this.createDateField.setValue("");
        this.partsWithoutStockRemovals.setValue(false);
        this.needsReview.setValue(false);
        this.partsWithoutPrice.setValue(false);

        this.distributorFilterCombo.setValue("");
        this.distributorFilterCheckbox.setValue(false);

        this.manufacturerFilterCombo.setValue("");
        this.manufacturerFilterCheckbox.setValue(false);

        this.footprintFilterCombo.setValue("");
        this.footprintFilterCheckbox.setValue(false);

        this.statusFilter.setValue("");

        this.conditionFilter.setValue("");
        this.internalPartNumberFilter.setValue("");
        this.commentFilter.setValue("");
        this.internalIdFilter.setValue("");

        this.onApply();
    },
    /**
     * Creates the filter fields required for this filter panel
     */
    createFilterFields: function ()
    {

        // Create the storage location filter field
        this.storageLocationFilter = Ext.create("PartKeepr.StorageLocationComboBox", {
            flex: 1,
            forceSelection: true,
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'storageLocation',
                            operator: "=",
                            value: this.storageLocationFilter.getValue()
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.storageLocationFilter.setValue("");
                            this.storageLocationFilterCheckbox.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                select: function (cmp)
                {
                    cmp.enableFilter();
                    this.storageLocationFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.filterControls.push(this.storageLocationFilter);

        this.storageLocationFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {
                    if (!value) {
                        this.storageLocationFilter.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.storageLocationContainer = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.storageLocationFilterCheckbox, this.storageLocationFilter],
            anchor: '100%',
            minWidth: 300,
            fieldLabel: i18n("Storage Location")
        });

        if (this.partManager !== null) {
            // Create the category scope field
            this.categoryFilter = Ext.create("Ext.form.RadioGroup", {
                fieldLabel: i18n("Category Scope"),
                plugins: [
                    Ext.create("PartKeepr.Util.FilterPlugin", {
                        getFilterFn: function ()
                        {
                            if (this.partManager !== null) {
                                if (this.categoryFilter.getValue().category === "all") {
                                    if (this.partManager.getSelectedCategory() !== null) {
                                        if (!this.partManager.getSelectedCategory().isRoot()) {
                                            return {
                                                id: 'categoryFilter',
                                                property: 'category',
                                                operator: 'IN',
                                                value: this.partManager.getChildrenIds(
                                                    this.partManager.getSelectedCategory())
                                            };
                                        }
                                    }
                                } else {
                                    var selectedCategory = this.partManager.getSelectedCategory();

                                    if (selectedCategory === null) {
                                        selectedCategory = this.partManager.tree.getRootNode().firstChild;
                                    }

                                    return {
                                        id: 'categoryFilter',
                                        property: 'category',
                                        operator: '=',
                                        value: selectedCategory.getId()
                                    };
                                }
                            }

                            return {};
                        },
                        listeners: {
                            scope: this,
                            disable: function ()
                            {
                                if (this.categoryFilter !== null) {
                                    this.categoryFilter.setValue({category: "all"});
                                }

                            }
                        },
                        scope: this
                    })
                ],
                listeners: {
                    change: function (cmp)
                    {
                        cmp.enableFilter();
                    },
                    scope: this
                },
                columns: 1,
                items: [
                    {
                        boxLabel: i18n("All Subcategories"),
                        name: 'category',
                        inputValue: "all",
                        checked: true
                    },
                    {
                        boxLabel: i18n("Selected Category"),
                        name: 'category',
                        inputValue: "selected"
                    }
                ]
            });

            this.filterControls.push(this.categoryFilter);
        }


        // Create the stock level filter field
        this.stockFilter = Ext.create("Ext.form.RadioGroup", {
            fieldLabel: i18n("Stock Mode"),
            columns: 1,
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        if (this.stockFilter.getValue().stock !== "any") {
                            switch (this.stockFilter.getValue().stock) {
                                case "zero":
                                    return {
                                        property: 'stockLevel',
                                        operator: "=",
                                        value: 0
                                    };
                                case "nonzero":
                                    return {
                                        property: 'stockLevel',
                                        operator: ">",
                                        value: 0
                                    };
                                case "below":
                                    return {
                                        property: 'lowStock',
                                        operator: "=",
                                        value: true
                                    };
                            }

                            return {};
                        }
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            if (this.categoryFilter !== null) {
                                this.categoryFilter.setValue({stock: "any"});
                            }

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue().stock === "any") {
                        cmp.disableFilter();
                    } else {
                        cmp.enableFilter();
                    }
                },
                scope: this
            },
            items: [
                {
                    boxLabel: i18n("Any Stock Level"),
                    name: 'stock',
                    inputValue: "any",
                    checked: true
                }, {
                    boxLabel: i18n("Stock Level = 0"),
                    name: 'stock',
                    inputValue: "zero"
                }, {
                    boxLabel: i18n("Stock Level > 0"),
                    name: 'stock',
                    inputValue: "nonzero"
                }, {
                    boxLabel: i18n("Stock Level < Minimum Stock Level"),
                    name: 'stock',
                    inputValue: "below"
                }
            ]
        });

        this.filterControls.push(this.stockFilter);

        this.partsWithoutPrice = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Item Price"),
            boxLabel: i18n("Show Parts without Price only"),
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        if (this.partsWithoutPrice.getValue() === true) {
                            return {
                                property: 'averagePrice',
                                operator: '=',
                                value: 0
                            };
                        }

                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.partsWithoutPrice.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue()) {
                        cmp.enableFilter();

                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            },
        });

        this.filterControls.push(this.partsWithoutPrice);

        this.distributorOrderNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Order Number"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'distributors.orderNumber',
                            operator: "LIKE",
                            value: "%" + this.distributorOrderNumberFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.distributorOrderNumberFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.distributorOrderNumberFilter);

        this.manufacturerPartNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Manufacturer Part Number"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'manufacturers.partNumber',
                            operator: "LIKE",
                            value: "%" + this.manufacturerPartNumberFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.manufacturerPartNumberFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.manufacturerPartNumberFilter);

        this.createDateField = Ext.create("Ext.form.field.Date", {
            flex: 1,
            listeners: {
                change: function ()
                {
                    if (this.createDateFilterSelect.getValue() !== "" && this.createDateField.getValue() !== "") {
                        this.createDateFilter.enableFilter();
                    } else {
                        this.createDateFilter.disableFilter();
                    }

                },
                scope: this
            }
        });

        var filter = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: [
                {"type": "<", "name": "before"},
                {"type": ">", "name": "after"},
                {"type": "", "name": "- none -"}
            ]
        });

        this.createDateFilterSelect = Ext.create('Ext.form.ComboBox', {
            store: filter,
            queryMode: 'local',
            forceSelection: true,
            editable: false,
            width: 60,
            value: '',
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'type',
            listeners: {
                select: function ()
                {
                    if (this.createDateFilterSelect.getValue() !== "" && this.createDateField.getValue() !== "") {
                        this.createDateFilter.enableFilter();
                    } else {
                        this.createDateFilter.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.createDateFilter = Ext.create({
            xtype: 'fieldcontainer',
            anchor: '100%',
            fieldLabel: i18n("Create date"),
            layout: 'hbox',
            border: false,
            items: [this.createDateFilterSelect, this.createDateField],
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'createDate',
                            operator: this.createDateFilterSelect.getValue(),
                            value: this.createDateField.getValue()
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.createDateFilterSelect.setValue("");
                            this.createDateField.setValue("");
                        }
                    },
                    scope: this
                })
            ]
        });

        this.filterControls.push(this.createDateFilter);

        this.partsWithoutStockRemovals = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Stock Settings"),
            boxLabel: i18n("Show Parts without stock removals only"),
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'removals',
                            operator: '=',
                            value: false
                        };

                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.partsWithoutStockRemovals.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue()) {
                        cmp.enableFilter();

                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            },
        });

        this.filterControls.push(this.partsWithoutStockRemovals);

        this.needsReview = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Needs Review"),
            boxLabel: i18n("Show Parts that need to reviewed only"),
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'needsReview',
                            operator: '=',
                            value: true
                        };

                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.needsReview.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue()) {
                        cmp.enableFilter();

                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            },
        });

        this.filterControls.push(this.needsReview);

        this.manufacturerFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {

                    if (!value) {
                        this.manufacturerFilterCombo.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.manufacturerFilterCombo = Ext.create("PartKeepr.ManufacturerComboBox", {
            flex: 1,
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'manufacturers.manufacturer',
                            operator: "=",
                            value: this.manufacturerFilterCombo.getValue()
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.manufacturerFilterCombo.setValue("");
                            this.manufacturerFilterCheckbox.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                select: function (cmp)
                {
                    cmp.enableFilter();
                    this.manufacturerFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.filterControls.push(this.manufacturerFilterCombo);

        this.manufacturerFilter = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.manufacturerFilterCheckbox, this.manufacturerFilterCombo],
            fieldLabel: i18n("Manufacturer")
        });

        this.distributorFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {
                    if (!value) {
                        this.distributorFilterCombo.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.distributorFilterCombo = Ext.create("PartKeepr.DistributorComboBox", {
            flex: 1,
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'distributors.distributor',
                            operator: "=",
                            value: this.distributorFilterCombo.getValue()
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.distributorFilterCombo.setValue("");
                            this.distributorFilterCheckbox.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                select: function (cmp)
                {
                    cmp.enableFilter();
                    this.distributorFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.distributorFilter = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.distributorFilterCheckbox, this.distributorFilterCombo],
            fieldLabel: i18n("Distributor"),

        });

        this.filterControls.push(this.distributorFilterCombo);

        this.footprintFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {
                    if (!value) {
                        this.footprintFilterCombo.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.footprintFilterCombo = Ext.create("PartKeepr.FootprintComboBox", {
            flex: 1,
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'footprint',
                            operator: "=",
                            value: this.footprintFilterCombo.getValue()
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.footprintFilterCombo.setValue("");
                            this.footprintFilterCheckbox.setValue(false);

                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                select: function (cmp)
                {
                    cmp.enableFilter();
                    this.footprintFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.filterControls.push(this.footprintFilterCombo);

        this.footprintFilter = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.footprintFilterCheckbox, this.footprintFilterCombo],
            fieldLabel: i18n("Footprint")
        });

        /** **/

        this.statusFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Status"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'status',
                            operator: "LIKE",
                            value: "%" + this.statusFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.statusFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.statusFilter);

        this.conditionFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Condition"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'partCondition',
                            operator: "LIKE",
                            value: "%" + this.conditionFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.conditionFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.conditionFilter);

        this.internalPartNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Internal Part Number"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'internalPartNumber',
                            operator: "LIKE",
                            value: "%" + this.internalPartNumberFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.internalPartNumberFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.internalPartNumberFilter);

        this.internalIdFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Internal ID"),
            anchor: '100%',
            itemId: 'idField',
            qtip: i18n(
                "The first number is the ID in decimal, the second number is the ID in base36. To search in base36 format you need to prefix the search string with #, example: #15y"),
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        var idstr = this.internalIdFilter.getValue();
                        var idint;

                        if (idstr.substring(0, 1) == "#") {
                            idstr = idstr.substring(1);
                            idint = parseInt(idstr, 36);
                        } else {
                            idint = parseInt(idstr, 10);
                        }
                        return {
                            property: 'id',
                            operator: "=",
                            value: idint
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.internalIdFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                render: function (c)
                {
                    Ext.QuickTips.register({
                        target: c.getEl(),
                        text: c.qtip
                    });
                },
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.internalIdFilter);

        this.commentFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Comment"),
            anchor: '100%',
            plugins: [
                Ext.create("PartKeepr.Util.FilterPlugin", {
                    getFilterFn: function ()
                    {
                        return {
                            property: 'comment',
                            operator: "LIKE",
                            value: "%" + this.commentFilter.getValue() + "%"
                        };
                    },
                    listeners: {
                        scope: this,
                        disable: function ()
                        {
                            this.commentFilter.setValue("");
                        }
                    },
                    scope: this
                })
            ],
            listeners: {
                change: function (cmp)
                {
                    if (cmp.getValue() !== "") {
                        cmp.enableFilter();
                    } else {
                        cmp.disableFilter();
                    }
                },
                scope: this
            }
        });

        this.filterControls.push(this.commentFilter);
    },
    /**
     * Applies the filter parameters to the passed extraParams object.
     * @param extraParams An object containing the extraParams from a proxy.
     */
    getFilters: function ()
    {
        var enableFilters = [],
            disableFilters = [],
            filterPlugin;

        for (var i = 0; i < this.filterControls.length; i++) {
            filterPlugin = this.filterControls[i].findPlugin("filter");

            if (filterPlugin instanceof PartKeepr.Util.FilterPlugin) {
                if (filterPlugin.isEnabled()) {
                    enableFilters.push(this.filterControls[i].findPlugin("filter").getFilter());
                } else {
                    disableFilters.push(this.filterControls[i].findPlugin("filter").getFilter());
                }
            }
        }

        return {
            disableFilters: disableFilters,
            enableFilters: enableFilters
        };
    },
    /**
     * Unregisters the quick tip immediately prior destroying
     */
    onBeforeIdFieldDestroy: function (field)
    {
        Ext.QuickTips.unregister(field.getEl());
    }
});
