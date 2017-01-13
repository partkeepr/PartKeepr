Ext.define("PartKeepr.Components.Widgets.PartParameterSearch", {
    extend: "Ext.panel.Panel",

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    shrinkWrap: 2,
    minHeight: 110,
    minWidth: 380,
    items: [
        {
            xtype: 'PartParameterComboBox',
            fieldLabel: i18n("Parameter"),
            itemId: 'parameter'
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Operator"),
            layout: 'hbox',
            items: [
                {
                    itemId: "operator",
                    xtype: 'OperatorComboBox',
                    flex: 1,
                    disabled: true
                }
            ]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Value"),
            layout: 'card',
            flex: 1,
            itemId: 'valueCards',
            items: [
                {
                    itemId: 'stringValue',
                    layout: 'hbox',
                    border: false,
                    items: [
                        {
                            disabled: true,
                            itemId: "textValueField",
                            xtype: 'combobox',
                            displayField: 'value',
                            valueField: 'value',
                            flex: 1
                        }
                    ]
                }, {
                    itemId: 'value',
                    layout: 'hbox',
                    border: false,
                    items: [
                        {
                            disabled: true,
                            xtype: 'SiUnitField',
                            siUnitItemId: 'siPrefix',
                            itemId: 'valueField',
                            siFieldName: 'siPrefix',
                            flex: 1
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'unitDisplay',
                            name: 'unitName',
                            value: ''
                        }
                    ]
                },
            ]
        },
    ],

    bbar: [
        {
            xtype: 'button',
            itemId: 'apply',
            disabled: true,
            text: i18n("Apply")
        }
    ],

    valueType: "",
    operatorType: null,
    filter: null,
    unit: null,

    initComponent: function ()
    {
        this.callParent();

        this.unitFilter = Ext.create("PartKeepr.util.Filter", {
            property: "@id",
            operator: "in",
            value: []
        });


        this.down("#operator").on("change", this.onOperatorChange, this);
        this.down("#parameter").on("select", this.onParameterSelect, this);
        this.down("#apply").on("click", this.onApplyClick, this);

        this.partParameterValueStore = Ext.create("Ext.data.Store", {
            fields: [{name: 'value'}],
            autoLoad: false,
            proxy: {
                extraParams: {
                    name: "",
                    value: ""
                },
                type: 'ajax',
                url: PartKeepr.getBasePath() + "/api/parts/getPartParameterValues",
                reader: {
                    type: 'json'
                }
            }
        });

        this.down("#textValueField").setStore(this.partParameterValueStore);
    },
    onApplyClick: function ()
    {
        var operator;

        if (this.down("#operator").getValue() instanceof Ext.data.Model) {
            operator = this.down("#operator").getValue().get("operator");
        }

        var j = Ext.create("PartKeepr.PartBundle.Entity.MetaPartParameterCriteria");
        j.set("partParameterName", this.down("#parameter").getValue());
        j.set("valueType", this.valueType);
        j.setSiPrefix(this.down("#siPrefix").getValue());
        j.setUnit(this.unit);
        j.set("stringValue", this.down("#textValueField").getValue());
        j.set("operator", operator);
        j.set("value", this.down("#valueField").getValue());

        this.fireEvent("apply", j);
    },
    onParameterSelect: function (combo, value)
    {
        var prefixes, j, unitFilter = [];

        this.valueType = value.get("valueType");
        this.down("#operator").getStore().clearFilter();

        if (value.get("valueType") === "string") {
            this.down("#operator").getStore().filter("string", true);
            this.down("#operator").getStore().filter("type", "scalar");
        } else {
            this.down("#operator").getStore().filter("numeric", true);
            this.down("#operator").getStore().filter("type", "scalar");
        }

        this.down("#siPrefix").getStore().removeFilter(this.unitFilter);

        var unitStore = PartKeepr.getApplication().getUnitStore();
        var unit = unitStore.findRecord("name", value.get("unitName"), 0, false, true, true);
        if (unit instanceof PartKeepr.UnitBundle.Entity.Unit) {
            this.unit = unit;
            prefixes = unit.prefixes().getData();

            for (j = 0; j < prefixes.getCount(); j++) {
                unitFilter.push(prefixes.getAt(j).get("@id"));
            }

            this.down("#unitDisplay").setValue(unit.get("name"));
        } else {
            this.unit = null;
        }

        this.unitFilter.setValue(unitFilter);

        this.down("#siPrefix").getStore().addFilter(this.unitFilter);

        this.down("#operator").enable();


        this.partParameterValueStore.getProxy().setExtraParams({
            name: value.get("name"),
            valueType: value.get("valueType")
        });
        this.partParameterValueStore.load();
        this.switchValueCard();
    },
    onOperatorChange: function (combo, value)
    {
        if (value === null) {
            this.operatorType = null;
            return;
        }

        this.operatorType = value.get("type");
        this.switchValueCard();
    },
    switchValueCard: function ()
    {
        switch (this.operatorType) {
            case "scalar":
                if (this.valueType === "string") {
                    this.down("#valueCards").setActiveItem(this.down("#stringValue"));
                    this.down("#textValueField").enable();
                } else {
                    this.down("#valueCards").setActiveItem(this.down("#value"));
                    this.down("#siPrefix").enable();
                    this.down("#valueField").enable();
                }
                break;
            default:
                this.down("#valueCards").setActiveItem(this.down("#value"));
                this.down("#siPrefix").disable();
                this.down("#valueField").disable();
        }

        this.validateApplyButton();
    },
    validateApplyButton: function ()
    {
        var applyButton = this.down("#apply");

        if (this.down("#operator").getValue() === null) {
            applyButton.setDisabled(true);
            return;
        }

        applyButton.enable();
    }
});
