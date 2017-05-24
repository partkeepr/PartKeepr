Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.ColumnProperties", {
    extend: 'Ext.form.Panel',

    scrollable: true,
    items: [{
        xtype: 'fieldcontainer',
        fieldLabel: i18n("Field"),
        layout: 'hbox',
        items: [
            {
                flex: 1,
                xtype: 'textfield',
                itemId: "field",
                bind: '{column.dataIndex}',
                emptyText: i18n("Select a field"),
                readOnly: true
            },
            {
                width: 100,
                xtype: 'button',
                itemId: "selectField",
                text: i18n("Select field")
            }
        ]
    }, {
        xtype: 'textfield',
        bind: "{column.text}",
        fieldLabel: i18n("Title")
    }, {
        xtype: 'textfield',
        bind: "{column.tooltip}",
        fieldLabel: i18n("Tooltip")
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: i18n("Width"),
        items: [{
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [{
                xtype: 'radio',
                name: 'widthMode',
                itemId: "widthModeFixed",
                boxLabel: i18n("Fixed"),
                bind: {
                    value: "{!isFlex}"
                }
            }, {
                bind: {
                    value: "{column.width}",
                    disabled: "{isFlex}"
                },

                xtype: 'numberfield'
            }]
        }, {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [{
                xtype: 'radio',
                itemId: "widthModeFlex",
                name: "widthMode",
                bind: {
                    value: "{isFlex}"
                },
                boxLabel: i18n("Ratio")
            }, {
                xtype: 'numberfield',
                itemId: 'flexValue',
                bind: {
                    value: "{column.flex}",
                    disabled: "{!isFlex}"
                }
            }]
        }]

    }, {
        xtype: 'checkbox',
        hideEmptyLabel: false,
        boxLabel: i18n("Hidden"),
        bind: {
            value: "{column.hidden}"
        }
    }, {
        xtype: 'fieldcontainer',
        flex: 1,
        layout: 'fit',
        fieldLabel: i18n("Renderers"),
        itemId: 'renderersContainer',

        items: [{
            xtype: 'partkeepr.renderersGrid',
            itemId: "renderers"
        }]
    }],

    sourceModel: null,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    defaults: {
        anchor: '100%',
        labelWidth: 80
    },

    initComponent: function ()
    {
        this.callParent(arguments);

        this.down("#selectField").on("click", this.onFieldSelectClick, this);
        this.down("#widthModeFlex").on("change", this.onWidthModeChanged, this);
        this.down("#widthModeFixed").on("change", this.onWidthModeChanged, this);
        this.down("#renderers").setSourceModel(this.sourceModel);
    },

    onFieldSelectClick: function ()
    {
        this.modelFieldSelectorWindow = Ext.create("PartKeepr.Components.Widgets.FieldSelectorWindow", {
            sourceModel: this.sourceModel
        });
        this.modelFieldSelectorWindow.on("fieldSelect", function (field)
        {
            this.down("#field").setValue(field.data.data.name);
        }, this);
        this.modelFieldSelectorWindow.show();
    },
    loadRecord: function (record)
    {
        this.callParent(arguments);

        if (record.get("flex") > 0)
        {
            record.set("width", 0);
        }

        this.down("#renderers").bindStore(record.renderers());
    },
    onWidthModeChanged: function ()
    {
        if (this.down("#widthModeFixed").getValue())
        {
            this.getRecord().set("widthMode", "fixed");
        } else
        {
            this.getRecord().set("widthMode", "flex");
        }
    }
});
