Ext.define("PartKeepr.Components.BatchJob.BatchJobUpdateExpression", {
    extend: "Ext.form.Panel",

    xtype: 'partkeepr.batchjobupdateexpression',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    minHeight: 150,
    minWidth: 400,
    width: 400,
    height: 150,
    requires: [],

    bbar: [
        {
            xtype: 'button',
            itemId: 'apply',
            disabled: true,
            text: i18n("Apply")
        }
    ],
    items: [
        {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Field"),
            layout: 'hbox',
            items: [
                {
                    flex: 1,
                    xtype: 'textfield',
                    itemId: "field",
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
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Value"),
            flex: 1,
            itemId: 'value',
            layout: 'hbox',
            border: false,
            items: [
                {
                    disabled: true,
                    itemId: "valueField",
                    xtype: 'textfield',
                    flex: 1
                },
                {
                    width: 100,
                    xtype: 'button',
                    hidden: true,
                    itemId: "selectEntity",
                    text: i18n("Select Entity")
                }
            ]
        },
    ],

    sourceModel: null,
    objectFilter: null,

    initComponent: function ()
    {
        this.callParent(arguments);

        this.down("#selectField").on("click", this.onFieldSelectClick, this);
        this.down("#selectEntity").on("click", this.onEntitySelectClick, this);
        this.down("#apply").on("click", this.onApplyClick, this);
    },
    onApplyClick: function ()
    {
        this.fireEvent("applyexpression", this.selectedField.data.data.name, this.down("#valueField").getValue());
    },
    validateApplyButton: function ()
    {
        var applyButton = this.down("#apply");

        if (this.selectedField.data.data.type == "manytoone") {
            if (this.down("#valueField").getValue() === "") {
                applyButton.setDisabled(true);
                return;
            }
        }

        applyButton.setDisabled(false);
    },
    onFieldSelectClick: function ()
    {
        this.modelFieldSelectorWindow = Ext.create("PartKeepr.Components.Widgets.FieldSelectorWindow", {
            sourceModel: this.sourceModel
        });
        this.modelFieldSelectorWindow.on("fieldSelect", function (field)
        {
            this.updateValueFieldState(field);
            this.down("#field").setValue(field.data.data.name);
        }, this);
        this.modelFieldSelectorWindow.show();
    },
    updateValueFieldState: function (record)
    {
        this.selectedField = record;


        if (record.data.data.type == "manytoone") {
            this.down("#selectEntity").show();
            this.down("#valueField").setReadOnly(true);
        } else {
            this.down("#selectEntity").hide();
            this.down("#valueField").setReadOnly(false);
        }

        this.down("#valueField").setDisabled(false);

        this.validateApplyButton();
    },
    onEntitySelectClick: function ()
    {
        this.entitySelector = Ext.create("Ext.window.Window", {
            items: Ext.create("PartKeepr.Widgets.EntityPicker", {
                model: this.selectedField.data.data.reference,
                listeners: {
                    entityselect: this.onEntitySelect,
                    scope: this
                },
                ittemId: "entitySelectorPanel"
            }),
            title: i18n("Select entity"),
            width: "80%",
            height: "80%",
            modal: true,
            layout: 'fit',
            maximizable: true,
            closeAction: 'destroy'
        });

        this.entitySelector.show();
    },
    /**
     * @param entity {Ext.data.Model} The entity
     */
    onEntitySelect: function (entity)
    {
        this.down("#valueField").setValue(entity.getId());

        this.entitySelector.close();
        this.validateApplyButton();
    },
});
