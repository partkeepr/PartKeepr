Ext.define("PartKeepr.PartParameterValueEditor", {
    extend: "Ext.form.Panel",

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'

    },
    items: [
        {
            fieldLabel: i18n("Parameter Name"),
            name: 'name',
            itemId: 'partParameter',
            xtype: 'PartParameterComboBox'
        },
        {
            fieldLabel: i18n("Description"),
            name: 'description',
            itemId: 'description',
            xtype: 'textarea'
        },
        {
            xtype: 'UnitComboBox',
            fieldLabel: i18n("Unit"),
            name: 'unit',
            itemId: "unit",
            returnObject: true
        },
        {
            fieldLabel: i18n("Value Type"),
            xtype: 'radiogroup',
            name: 'valueType',
            itemId: 'valueType',
            items: [
                {
                    boxLabel: i18n("Numeric"),
                    inputValue: "numeric"
                }, {
                    boxLabel: i18n("Text"),
                    inputValue: "string"
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'card',
            itemId: 'typeFields',
            items: [
                {
                    xtype: 'fieldcontainer',
                    itemId: "numeric",
                    layout: 'vbox',
                    items: [
                        {
                            fieldLabel: i18n("Min Value"),
                            name: 'minValue',
                            siFieldName: 'minSiPrefix',
                            siUnitItemId: 'minSiPrefix',
                            xtype: 'SiUnitField',
                            width: 200
                        },
                        {
                            xtype: 'SiUnitField',
                            itemId: "singleValue",
                            fieldLabel: i18n("Nominal Value"),
                            siUnitItemId: 'siPrefix',
                            name: 'value',
                            siFieldName: 'siPrefix',
                            width: 200
                        },
                        {
                            fieldLabel: i18n("Max Value"),
                            name: 'maxValue',
                            siFieldName: 'maxSiPrefix',
                            siUnitItemId: 'maxSiPrefix',
                            xtype: 'SiUnitField',
                            width: 200
                        }
                    ]
                },
                {
                    fieldLabel: i18n("Value"),
                    itemId: 'text',
                    name: 'stringValue',
                    xtype: 'textfield'
                }
            ]
        },
    ],

    bbar: [
        {
            xtype: 'button',
            itemId: "save",
            text: i18n("Save")
        }
    ],
    initComponent: function ()
    {
        this.callParent(arguments);

        this.unitFilter = Ext.create("PartKeepr.util.Filter", {
           property: "@id",
            operator: "in",
            value: []
        });
        this.down("#valueType").on("change", this.onTypeChange, this);
        this.down("#partParameter").on("select", this.onPartParameterSelect, this);
        this.down("#save").on("click", this.onSave, this);
        this.down("#unit").on("change", this.onUnitChange, this);
    },
    onPartParameterSelect: function (combo, record) {

        var description = record.get("description");
        if (description !== null) {
            this.down("#description").setRawValue(description);
        }

        if (record.get("unitName") !== null) {
            var unit = this.down("#unit").getStore().findRecord("name", record.get("unitName"), 0, false, true, true);

            if (unit instanceof PartKeepr.UnitBundle.Entity.Unit) {
                this.down("#unit").select(unit);
                this.down("#valueType").setValue({valueType: "numeric"});
            }

        } else {
            this.down("#unit").select(null);
        }

        var valueType = record.get("valueType");
        if (valueType == "numeric") {
            this.down("#valueType").setValue({valueType: "numeric"});

        } else if (valueType == "string") {
            this.down("#valueType").setValue({valueType: "string"});
        }

    },
    onUnitChange: function (combo, newValue) {
        var prefixes,j, unitFilter = [];

        this.down("#siPrefix").getStore().removeFilter(this.unitFilter);
        this.down("#minSiPrefix").getStore().removeFilter(this.unitFilter);
        this.down("#maxSiPrefix").getStore().removeFilter(this.unitFilter);

        if (newValue instanceof PartKeepr.UnitBundle.Entity.Unit) {
            prefixes = newValue.prefixes().getData();

            for (j=0;j<prefixes.getCount();j++) {
                unitFilter.push(prefixes.getAt(j).get("@id"));
            }
        }

        this.unitFilter.setValue(unitFilter);
        this.down("#siPrefix").getStore().addFilter(this.unitFilter);
        this.down("#minSiPrefix").getStore().addFilter(this.unitFilter);
        this.down("#maxSiPrefix").getStore().addFilter(this.unitFilter);
    },
    loadRecord: function (record) {
        this.callParent(arguments);

        this.down("#valueType").setValue({ valueType: record.get("valueType")});
    },
    onSave: function () {
        this.updateRecord();
        this.fireEvent("save");
    },
    onTypeChange: function (field, newValue)
    {
        switch (newValue.valueType) {
            case "string":
                this.down("#typeFields").setActiveItem(this.down("#text"));
                break;
            case "numeric":
                this.down("#typeFields").setActiveItem(this.down("#numeric"));
                break;

        }
    }
});
