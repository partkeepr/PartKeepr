/**
 * @class PartKeepr.Components.Part.Editor.MetaPartEditor

 * <p>The MetaPartEditor provides an editing form for meta parts</p>
 */
Ext.define('PartKeepr.Components.Part.Editor.MetaPartEditor', {
    extend: 'PartKeepr.Editor',

    // Assigned model
    model: 'PartKeepr.PartBundle.Entity.Part',
    bodyPadding: '0 0 0 0',
    // Layout stuff
    border: false,
    editAfterSave: false,

    ui: 'default-framed',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    /**
     * Initializes the editor fields
     */
    initComponent: function ()
    {
        this.operatorStore = Ext.create("PartKeepr.Data.store.OperatorStore");

        this.nameField = Ext.create("Ext.form.field.Text", {
            name: 'name',
            fieldLabel: i18n("Name"),
            allowBlank: false,
            labelWidth: 150,
            height: 20
        });

        this.parameterCriterias = Ext.create("Ext.grid.Panel", {
            columns: [
                {
                    header: i18n("Parameter Name"),
                    dataIndex: 'partParameterName',
                    flex: 1
                }, {
                    header: i18n("Operator"),
                    renderer: this.renderOperator,
                    scope: this,
                    flex: 0.5
                }, {
                    header: i18n("Value"),
                    renderer: this.renderValue,
                    scope: this,
                    flex: 1
                }
            ],
            bbar: [
                {
                    xtype: 'button',
                    itemId: 'addParameterCriteria',
                    handler: this.addParameterCriteriaClick,
                    iconCls: "fugue-icon eye--plus",
                    text: i18n("Add…"),
                    scope: this
                }, {
                    xtype: 'button',
                    itemId: 'deleteParameterCriteria',
                    handler: this.onDeleteParameterCriteriaClick,
                    text: i18n("Delete"),
                    iconCls: "fugue-icon eye--minus",
                    scope: this
                }
            ]
        })
        ;

        this.items = [
            this.nameField,
            {
                xtype: 'CategoryComboBox',
                fieldLabel: i18n("Category"),
                name: 'category',
                displayField: "name",
                returnObject: true
            },
            {
                xtype: 'PartUnitComboBox',
                fieldLabel: i18n("Measurement Unit"),
                columnWidth: 0.5,
                returnObject: true,
                name: 'partUnit'
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Parameter Criterias"),
                flex: 1,
                layout: 'fit',
                items: this.parameterCriterias
            }
        ];


        this.on("startEdit", this.onEditStart, this, {delay: 200});
        this.on("itemSaved", this._onItemSaved, this);
        this.callParent();

        this.parameterCriterias.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onCancelEdit: function () {
        this.record.metaPartParameterCriterias().rejectChanges();
        this.callParent(arguments);
    },
    setTitle: function (title)
    {
        var tmpTitle;

        if (this.record.phantom) {
            tmpTitle = i18n("Add Meta-Part");
        } else {
            tmpTitle = i18n("Edit Meta-Part");
        }

        if (title !== "") {
            tmpTitle = tmpTitle + ": " + title;
        }

        this.fireEvent("_titleChange", tmpTitle);
    },
    _onItemSaved: function ()
    {
        this.fireEvent("partSaved", this.record);

        this.fireEvent("editorClose", this);
    },
    onSelectChange: function (selModel, selections)
    {
        this.down("#deleteParameterCriteria").setDisabled(selections.length === 0);
    },
    addParameterCriteriaClick: function ()
    {
        var j = Ext.create("PartKeepr.Components.Widgets.PartParameterSearchWindow");

        j.on("apply", this.onAddParameterCriteria, this);
        j.show();
    },
    onAddParameterCriteria: function (rec)
    {
        this.parameterCriterias.getStore().add(rec);
    },
    onDeleteParameterCriteriaClick: function ()
    {
        this.parameterCriterias.getStore().remove(this.parameterCriterias.getSelection());
    },
    renderValue: function (v, m, rec)
    {
        var unit = "", symbol = "";

        switch (rec.get("valueType")) {
            case "string":
                return rec.get("stringValue");
                break;
            case "numeric":
                if (rec.getUnit() !== null) {
                    unit = rec.getUnit().get("symbol");
                }

                if (rec.getSiPrefix() !== null) {
                    symbol = rec.getSiPrefix().get("symbol");
                }


                return rec.get("value") + symbol + unit;
                break;
            default:
                return "";
        }
    },
    renderOperator: function (v, m, rec)
    {
        var operator = this.operatorStore.findRecord("operator", rec.get("operator"), 0, false, true, true);

        if (operator instanceof Ext.data.Model) {
            return operator.get("symbol");
        } else {
            return "";
        }
    },
    onEditStart: function ()
    {
        this.parameterCriterias.bindStore(this.record.metaPartParameterCriterias());
        this.nameField.focus();
    }
});
