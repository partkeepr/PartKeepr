/**
 * @class PartKeepr.PartEditor

 * <p>The PartEditor provides an editing form for a part. It contains multiple tabs, one for each nested record.</p>
 */
Ext.define('PartKeepr.PartEditor', {
    extend: 'PartKeepr.Editor',

    // Assigned model
    model: 'PartKeepr.PartBundle.Entity.Part',
    bodyPadding: '0 0 0 0',
    // Layout stuff
    border: false,
    layout: 'fit',
    editAfterSave: false,

    /**
     * Initializes the editor fields
     */
    initComponent: function ()
    {
        // Defines the overall height of all fields, used to calculate the anchoring for the description field
        var overallHeight = (this.partMode == "create") ? '-300' : '-245';

        this.nameField = Ext.create("Ext.form.field.Text", {
            name: 'name',
            fieldLabel: i18n("Name"),
            allowBlank: false,
            labelWidth: 150
        });

        this.storageLocationComboBox = Ext.create("PartKeepr.StorageLocationPicker",
            {
                fieldLabel: i18n("Storage Location"),
                name: 'storageLocation',
                allowBlank: false,
                labelWidth: 150
            });

        this.footprintNone = Ext.create("Ext.form.field.Radio", {
            boxLabel: i18n("None"),
            name: 'footprint_mode',
            value: "unset",
            width: 70,
            listeners: {
                scope: this,
                change: function (field, newValue)
                {
                    if (newValue === true) {
                        this.footprintComboBox.clearValue();
                    }
                }
            }
        });

        this.footprintSet = Ext.create("Ext.form.field.Radio", {
            name: 'footprint_mode',
            width: 20,
            value: "set"
        });

        /*
         * Creates the footprint combo box. We listen for the "change" event, because we need to set the footprint
         * comboboxes to the right state, depending on the selection. Another way would be to patch the combobox
         * to support "null" values, however, this is a major change within ExtJS and probably not supported for
         * updates of ExtJS.
         */
        this.footprintComboBox = Ext.create("PartKeepr.FootprintComboBox", {
            name: 'footprint',
            returnObject: true,
            flex: 1,
            listeners: {
                scope: this,
                change: function (field, newValue)
                {
                    if (typeof(newValue) === 'object') {
                        this.footprintSet.setValue(true);
                    }
                }
            }
        });

        // Defines the basic editor fields
        var basicEditorFields = [
            this.nameField,
            {
                xtype: 'textfield',
                fieldLabel: i18n("Description"),
                name: 'description'
            }, {
                layout: 'column',
                border: false,
                items: [
                    {
                        xtype: 'numberfield',
                        fieldLabel: i18n('Minimum Stock'),
                        allowDecimals: false,
                        allowBlank: false,
                        labelWidth: 150,
                        name: 'minStockLevel',
                        value: 0,
                        columnWidth: 0.5,
                        minValue: 0
                    }, {
                        xtype: 'PartUnitComboBox',
                        fieldLabel: i18n("Measurement Unit"),
                        labelWidth: 120,
                        columnWidth: 0.5,
                        returnObject: true,
                        name: 'partUnit'
                    }
                ]
            }, {
                xtype: 'CategoryComboBox',
                fieldLabel: i18n("Category"),
                name: 'category',
                displayField: "name",
                returnObject: true
            },
            this.storageLocationComboBox,
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                fieldLabel: i18n("Footprint"),
                defaults: {
                    hideLabel: true
                },
                items: [
                    this.footprintNone,
                    this.footprintSet,
                    this.footprintComboBox
                ]
            }, {
                xtype: 'textarea',
                fieldLabel: i18n("Comment"),
                name: 'comment',
                anchor: '100% ' + overallHeight
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                fieldLabel: i18n("Status"),
                defaults: {
                    hideLabel: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: i18n("Status"),
                        flex: 1,
                        name: 'status'
                    }, {
                        xtype: 'checkbox',
                        hideEmptyLabel: false,
                        fieldLabel: '',
                        boxLabel: i18n("Needs Review"),
                        name: 'needsReview'
                    }
                ]
            }, {
                xtype: 'textfield',
                fieldLabel: i18n("Condition"),
                name: 'partCondition'
            }, {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        labelWidth: 150,
                        fieldLabel: i18n("Internal Part Number"),
                        name: 'internalPartNumber',
                        flex: 1
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: i18n("Internal ID"),
                        name: '@id',
                        renderer: function (value)
                        {
                            var values = value.split("/");
                            return values[values.length - 1];
                        }
                    }
                ]

            }
        ];

        // Creates the distributor grid
        this.partDistributorGrid = Ext.create("PartKeepr.PartDistributorGrid", {
            title: i18n("Distributors"),
            iconCls: 'web-icon lorry',
            layout: 'fit'
        });

        // Creates the manufacturer grid
        this.partManufacturerGrid = Ext.create("PartKeepr.PartManufacturerGrid", {
            title: i18n("Manufacturers"),
            iconCls: 'web-icon building',
            layout: 'fit'
        });

        // Creates the attachment grid
        this.partAttachmentGrid = Ext.create("PartKeepr.PartAttachmentGrid", {
            title: i18n("Attachments"),
            iconCls: 'web-icon attach',
            layout: 'fit'
        });

        // Adds stock level fields for new items
        if (this.partMode && this.partMode == "create") {
            this.initialStockLevel = Ext.create("Ext.form.field.Number", {
                fieldLabel: i18n("Initial Stock Level"),
                name: "initialStockLevel",
                labelWidth: 150,
                columnWidth: 0.5
            });

            this.initialStockLevelUser = Ext.create("PartKeepr.UserComboBox", {
                fieldLabel: i18n("Stock User"),
                name: 'initialStockLevelUser',
                columnWidth: 0.5,
                returnObject: true
            });

            basicEditorFields.push({
                layout: 'column',
                border: false,
                items: [
                    this.initialStockLevel,
                    this.initialStockLevelUser
                ]
            });

            this.initialStockLevelPrice = Ext.create("PartKeepr.CurrencyField", {
                fieldLabel: i18n('Price'),
                labelWidth: 150,
                columnWidth: 0.5,
                name: 'initialStockLevelPrice'
            });

            this.initialStockLevelPricePerItem = Ext.create("Ext.form.field.Checkbox", {
                boxLabel: i18n("Per Item"),
                columnWidth: 0.5,
                name: 'initialStockLevelPricePerItem'
            });

            basicEditorFields.push({
                layout: 'column',
                border: false,
                items: [
                    this.initialStockLevelPrice,
                    this.initialStockLevelPricePerItem
                ]
            });


        }

        // Create a tab panel of all fields
        this.items = {
            xtype: 'tabpanel',
            border: false,
            items: [
                {
                    iconCls: 'web-icon brick',
                    xtype: 'panel',
                    autoScroll: false,
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        labelWidth: 150
                    },
                    title: i18n("Basic Data"),
                    items: basicEditorFields
                },
                this.partDistributorGrid,
                this.partManufacturerGrid,
                this.partAttachmentGrid
            ]
        };

        this.on("startEdit", this.onEditStart, this, {delay: 200});
        this.on("itemSaved", this._onItemSaved, this);

        this.callParent();

        this.on("itemSave", this.onItemSave, this);

    },
    /**
     * Cleans up the record prior saving.
     */
    onItemSave: function ()
    {
        var removeRecords = [], j;

        /**
         * Iterate through all records and check if a valid distributor
         * ID is assigned. If not, the record is removed as it is assumed
         * that the record is invalid and being removed.
         */
        for (j = 0; j < this.record.distributors().getCount(); j++) {
            if (this.record.distributors().getAt(j).getDistributor() === null) {
                removeRecords.push(this.record.distributors().getAt(j));
            }
        }

        if (removeRecords.length > 0) {
            this.record.distributors().remove(removeRecords);
        }

        removeRecords = [];

        /**
         * Iterate through all records and check if a valid parameter
         * ID is assigned. If not, the record is removed as it is assumed
         * that the record is invalid and being removed.
         */

        for (j = 0; j < this.record.parameters().getCount(); j++) {
            if (this.record.parameters().getAt(j).get("unit_id") === 0) {
                removeRecords.push(this.record.parameters().getAt(j));
            }
        }

        if (removeRecords.length > 0) {
            this.record.parameters().remove(removeRecords);
        }

        removeRecords = [];

        /**
         * Iterate through all records and check if a valid manufacturer
         * ID is assigned. If not, the record is removed as it is assumed
         * that the record is invalid and being removed.
         */

        for (j = 0; j < this.record.manufacturers().getCount(); j++) {
            if (this.record.manufacturers().getAt(j).getManufacturer() === null) {
                removeRecords.push(this.record.manufacturers().getAt(j));
            }
        }

        if (removeRecords.length > 0) {
            this.record.manufacturers().remove(removeRecords);
        }

        // Force footprint to be "null" when the checkbox is checked.
        if (this.footprintNone.getValue() === true) {
            this.record.setFootprint(null);
        }

        if (this.initialStockLevel) {
            var initialStockLevel = this.initialStockLevel.getValue();

            if (this.record.phantom && initialStockLevel > 0) {
                var stockLevel = Ext.create("PartKeepr.StockBundle.Entity.StockEntry");
                stockLevel.set("stockLevel", initialStockLevel);
                stockLevel.setUser(this.initialStockLevelUser.getValue());

                if (this.initialStockLevelPricePerItem.getValue() === false) {
                    stockLevel.set("price", this.initialStockLevelPrice.getValue() / initialStockLevel);
                } else {
                    stockLevel.set("price", this.initialStockLevelPrice.getValue());
                }

                this.record.stockLevels().add(stockLevel);
            }
        }
    },
    onEditStart: function ()
    {
        this.bindChildStores();
        this.nameField.focus();

        // Re-trigger validation because of asynchronous loading of the storage location field,
        // which would be marked invalid because validation happens immediately, but after loading
        // the storage locations, the field is valid, but not re-validated.

        // This workaround is done twice; once after the store is loaded and once when we start editing,
        // because we don't know which event will come first
        this.getForm().isValid();

        if (this.record.getFootprint() !== null) {
            this.footprintSet.setValue(true);
        } else {
            this.footprintNone.setValue(true);
        }
    },
    _onItemSaved: function ()
    {
        this.fireEvent("partSaved", this.record);

        if (this.keepOpenCheckbox.getValue() !== true && this.createCopyCheckbox.getValue() !== true) {
            this.fireEvent("editorClose", this);
        } else {
            var newItem, data;

            if (this.partMode == "create") {
                if (this.copyPartDataCheckbox.getValue() === true) {
                    data = this.record.getData();
                    delete data["@id"];

                    newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
                    newItem.set(data);
                    newItem.setAssociationData(this.record.getAssociationData());
                    newItem.stockLevels().removeAll();
                    newItem.set("stockLevel", 0);
                    this.editItem(newItem);

                } else {
                    newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
                    newItem.setPartUnit(PartKeepr.getApplication().getDefaultPartUnit());

                    newItem.setCategory(this.record.getCategory());

                    this.editItem(newItem);
                }
            } else {
                data = this.record.getData();
                delete data["@id"];

                newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
                newItem.set(data);
                newItem.setAssociationData(this.record.getAssociationData());
                this.editItem(newItem);
            }
        }
    },
    bindChildStores: function ()
    {
        this.partDistributorGrid.bindStore(this.record.distributors());
        this.partManufacturerGrid.bindStore(this.record.manufacturers());
        this.partAttachmentGrid.bindStore(this.record.attachments());
    },
    setTitle: function (title)
    {
        var tmpTitle;

        if (this.record.phantom) {
            tmpTitle = i18n("Add Part");
        } else {
            tmpTitle = i18n("Edit Part");
        }

        if (title !== "") {
            tmpTitle = tmpTitle + ": " + title;
        }

        this.fireEvent("_titleChange", tmpTitle);
    }
});
