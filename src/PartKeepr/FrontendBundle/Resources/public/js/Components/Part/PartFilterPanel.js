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
     * Fixed body background color style
     */
    bodyStyle: 'background:#DBDBDB;',

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
    commentFilter: null,

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
                this.needsReview
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
                defaults: {minWidth: 100},
                items: [this.applyButton, this.resetButton]
            }
        ];

        this.callParent();
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
        var filters = this.getFilters();

        this.store.clearFilter(true);

        if (filters.length !== 0) {
            this.store.addFilter(this.getFilters(), true);
        }

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
            listeners: {
                select: function ()
                {
                    this.storageLocationFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.storageLocationFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {

                    if (!value) {
                        this.storageLocationFilter.setValue("");
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
        }

        // Create the stock level filter field
        this.stockFilter = Ext.create("Ext.form.RadioGroup", {
            fieldLabel: i18n("Stock Mode"),
            columns: 1,
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

        this.partsWithoutPrice = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Item Price"),
            boxLabel: i18n("Show Parts without Price only")
        });

        this.distributorOrderNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Order Number"),
            anchor: '100%'
        });

        this.manufacturerPartNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Manufacturer Part Number"),
            anchor: '100%'
        });

        this.createDateField = Ext.create("Ext.form.field.Date", {
            flex: 1
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
            valueField: 'type'
        });

        this.createDateFilter = {
            xtype: 'fieldcontainer',
            anchor: '100%',
            fieldLabel: i18n("Create date"),
            layout: 'hbox',
            border: false,
            items: [this.createDateFilterSelect, this.createDateField]
        };

        this.partsWithoutStockRemovals = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Stock Settings"),
            boxLabel: i18n("Show Parts without stock removals only")
        });

        this.needsReview = Ext.create("Ext.form.field.Checkbox", {
            fieldLabel: i18n("Needs Review"),
            boxLabel: i18n("Show Parts that need to reviewed only")
        });

        this.manufacturerFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {

                    if (!value) {
                        this.manufacturerFilterCombo.setValue("");
                    }
                },
                scope: this
            }
        });

        this.manufacturerFilterCombo = Ext.create("PartKeepr.ManufacturerComboBox", {
            flex: 1,
            listeners: {
                select: function ()
                {
                    this.manufacturerFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

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
                        this.distributorFilterCombo.setValue("");
                    }
                },
                scope: this
            }
        });

        this.distributorFilterCombo = Ext.create("PartKeepr.DistributorComboBox", {
            flex: 1,
            listeners: {
                select: function ()
                {
                    this.distributorFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.distributorFilter = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.distributorFilterCheckbox, this.distributorFilterCombo],
            fieldLabel: i18n("Distributor")
        });

        this.footprintFilterCheckbox = Ext.create("Ext.form.field.Checkbox", {
            width: "20px",
            listeners: {
                change: function (obj, value)
                {
                    if (!value) {
                        this.footprintFilterCombo.setValue("");
                    }
                },
                scope: this
            }
        });

        this.footprintFilterCombo = Ext.create("PartKeepr.FootprintComboBox", {
            flex: 1,
            listeners: {
                select: function ()
                {
                    this.footprintFilterCheckbox.setValue(true);
                },
                scope: this
            }
        });

        this.footprintFilter = Ext.create("Ext.form.FieldContainer", {
            layout: 'hbox',
            items: [this.footprintFilterCheckbox, this.footprintFilterCombo],
            fieldLabel: i18n("Footprint")
        });

        /** **/

        this.statusFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Status"),
            anchor: '100%'
        });

        this.conditionFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Condition"),
            anchor: '100%'
        });

        this.internalPartNumberFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Internal Part Number"),
            anchor: '100%'
        });

        this.commentFilter = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Comment"),
            anchor: '100%'
        });

    },
    /**
     * Applies the filter parameters to the passed extraParams object.
     * @param extraParams An object containing the extraParams from a proxy.
     */
    getFilters: function ()
    {
        var filters = [];

        if (this.storageLocationFilterCheckbox.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'storageLocation',
                operator: "=",
                value: this.storageLocationFilter.getValue()
            }));
        }

        if (this.partManager !== null) {
            if (this.categoryFilter.getValue().category === "all") {
                if (this.partManager.getSelectedCategory() !== null) {
                    filters.push(Ext.create("Ext.util.Filter", {
                        id: 'categoryFilter',
                        property: 'category',
                        operator: 'IN',
                        value: this.partManager.getChildrenIds(this.partManager.getSelectedCategory())
                    }));
                }
            } else {
                filters.push(Ext.create("Ext.util.Filter", {
                    id: 'categoryFilter',
                    property: 'category',
                    operator: '=',
                    value: this.partManager.getSelectedCategory()
                }));
            }
        }

        if (this.partsWithoutPrice.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'averagePrice',
                operator: '=',
                value: 0
            }));
        }

        if (this.createDateFilterSelect.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'createDate',
                operator: this.createDateFilterSelect.getValue(),
                value: this.createDateField.getValue()
            }));
        }

        if (this.partsWithoutStockRemovals.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'removals',
                operator: "=",
                value: false
            }));
        }

        if (this.needsReview.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'needsReview',
                operator: "=",
                value: true
            }));
        }


        if (this.stockFilter.getValue().stock !== "any") {
            switch (this.stockFilter.getValue().stock) {
                case "zero":
                    filters.push(Ext.create("Ext.util.Filter", {
                        property: 'stockLevel',
                        operator: "=",
                        value: 0
                    }));
                    break;
                case "nonzero":
                    filters.push(Ext.create("Ext.util.Filter", {
                        property: 'stockLevel',
                        operator: ">",
                        value: 0
                    }));
                    break;
                case "below":
                    filters.push(Ext.create("Ext.util.Filter", {
                        property: 'lowStock',
                        operator: "=",
                        value: true
                    }));
                    break;
            }
        }

        if (this.distributorOrderNumberFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'distributors.orderNumber',
                operator: "LIKE",
                value: "%" + this.distributorOrderNumberFilter.getValue() + "%"
            }));
        }

        if (this.manufacturerPartNumberFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'manufacturers.partNumber',
                operator: "LIKE",
                value: "%" + this.manufacturerPartNumberFilter.getValue() + "%"
            }));
        }

        if (this.distributorFilterCheckbox.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'distributors.distributor',
                operator: "=",
                value: this.distributorFilterCombo.getValue()
            }));
        }

        if (this.manufacturerFilterCheckbox.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'manufacturers.manufacturer',
                operator: "=",
                value: this.manufacturerFilterCombo.getValue()
            }));
        }

        if (this.footprintFilterCheckbox.getValue() === true) {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'footprint',
                operator: "=",
                value: this.footprintFilterCombo.getValue()
            }));
        }

        if (this.statusFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'status',
                operator: "LIKE",
                value: "%" + this.statusFilter.getValue() + "%"
            }));
        }

        if (this.conditionFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'condition',
                operator: "LIKE",
                value: "%" + this.conditionFilter.getValue() + "%"
            }));
        }

        if (this.internalPartNumberFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'internalPartNumber',
                operator: "LIKE",
                value: "%" + this.internalPartNumberFilter.getValue() + "%"
            }));
        }

        if (this.commentFilter.getValue() !== "") {
            filters.push(Ext.create("Ext.util.Filter", {
                property: 'comment',
                operator: "LIKE",
                value: "%" + this.commentFilter.getValue() + "%"
            }));
        }
        return filters;
    }
});
