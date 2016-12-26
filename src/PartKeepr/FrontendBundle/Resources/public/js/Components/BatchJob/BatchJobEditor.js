Ext.define('PartKeepr.BatchJobEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.BatchJobEditor',

    defaults: {
        anchor: '100%',
        labelWidth: 110
    },
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: i18n("Batch Job Name")
        },
        {
            xtype: 'combo',
            store: Ext.StoreManager.lookup("ModelStore"),
            displayField: 'model',
            queryMode: 'local',
            itemId: 'baseEntity',
            editable: false,
            forceSelection: true,
            valueField: 'model',
            name: 'baseEntity',
            fieldLabel: i18n("Base Entity")
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Query Fields"),
            layout: 'fit',
            flex: 1,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'batchJobQueryFields',
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    bbar: [
                        {
                            xtype: 'button',
                            iconCls: 'fugue-icon database--plus',
                            itemId: 'addQueryFieldButton',
                            text: i18n("Add Query Field…")
                        }, {
                            xtype: 'button',
                            iconCls: 'fugue-icon database--minus',
                            text: i18n("Delete Query Field"),
                            itemId: 'deleteQueryFieldButton',
                            disabled: true
                        }
                    ],
                    columns: [
                        {
                            header: i18n("Property"),
                            dataIndex: "property",
                            flex: 1
                        }, {
                            header: i18n("Operator"),
                            dataIndex: "operator",
                            flex: 0.5
                        }, {
                            header: i18n("Value"),
                            dataIndex: "value",
                            flex: 1
                        }, {
                            xtype: 'checkcolumn',
                            header: i18n("Dynamic"),
                            editable: true,
                            dataIndex: "dynamic",
                            flex: 0.5
                        }, {
                            header: i18n("Description"),
                            editable: true,
                            dataIndex: "description",
                            editor: {
                                xtype: 'textfield',
                                allowBlank: true
                            },
                            flex: 2
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: i18n("Update Fields"),
            layout: 'fit',
            flex: 1,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'batchJobUpdateFields',
                    plugins: {
                        ptype: 'cellediting',
                        pluginId: 'cellediting',
                        clicksToEdit: 1
                    },
                    bbar: [
                        {
                            xtype: 'button',
                            iconCls: 'fugue-icon database--plus',
                            itemId: 'addUpdateFieldButton',
                            text: i18n("Add Update Field…")
                        }, {
                            xtype: 'button',
                            iconCls: 'fugue-icon database--minus',
                            text: i18n("Delete Update Field"),
                            itemId: 'deleteUpdateFieldButton',
                            disabled: true
                        }
                    ],
                    columns: [
                        {
                            header: i18n("Property"),
                            dataIndex: "property",
                            flex: 1
                        }, {
                            header: i18n("Value"),
                            dataIndex: "value",
                            flex: 1
                        }, {
                            xtype: 'checkcolumn',
                            header: i18n("Dynamic"),
                            editable: true,
                            dataIndex: "dynamic",
                            flex: 0.5
                        }, {
                            header: i18n("Description"),
                            editable: true,
                            dataIndex: "description",
                            editor: {
                                xtype: 'textfield',
                                allowBlank: true
                            },
                            flex: 2
                        }
                    ]
                }
            ]
        }
    ],
    saveText: i18n("Save Batch Job"),

    initComponent: function ()
    {
        this.on("startEdit", this.onEditStart, this, { delay: 50 });

        this.callParent(arguments);

        this.down("#addQueryFieldButton").on("click", this.onAddQueryFieldButtonClick, this);
        this.down("#deleteQueryFieldButton").on("click", this.onDeleteQueryFieldButtonClick, this);
        this.down("#batchJobQueryFields").getSelectionModel().on("selectionchange", this.onSelectionChange, this);
        this.down("#addUpdateFieldButton").on("click", this.onAddUpdateFieldButtonClick, this);
        this.down("#deleteUpdateFieldButton").on("click", this.onDeleteUpdateFieldButtonClick, this);
        this.down("#batchJobUpdateFields").getSelectionModel().on("selectionchange", this.onUpdateSelectionChange,
            this);


    },
    beforeFieldSelection: function (selectorField)
    {
        var sourceModel = Ext.ClassManager.get(this.down("#baseEntity").getValue());

        if (sourceModel === null) {
            Ext.Msg.alert(i18n("Base Entity not selected"),
                i18n("You need to select a base entity to perform the query against"));
            return;
        }

        selectorField.setBaseEntity(sourceModel);

        return true;
    },
    /**
     * Enables or disables the delete button, depending on the row selection
     */
    onSelectionChange: function (selModel, selections)
    {
        this.down("#deleteQueryFieldButton").setDisabled(selections.length === 0);
    },
    /**
     * Enables or disables the delete button, depending on the row selection
     */
    onUpdateSelectionChange: function (selModel, selections)
    {
        this.down("#deleteUpdateFieldButton").setDisabled(selections.length === 0);
    },
    onAddQueryFieldButtonClick: function ()
    {
        var sourceModel = Ext.ClassManager.get(this.down("#baseEntity").getValue());

        if (sourceModel === null) {
            Ext.Msg.alert(i18n("Base Entity not selected"),
                i18n("You need to select a base entity to perform the query against"));
            return;
        }
        this.addFilterWindow = Ext.create("PartKeepr.Widgets.FilterExpressionWindow", {
            sourceModel: sourceModel,
            listeners: {
                "applyfilter": this.onAddFilter,
                scope: this
            }
        });
        this.addFilterWindow.show();
    },
    onAddUpdateFieldButtonClick: function ()
    {
        var sourceModel = Ext.ClassManager.get(this.down("#baseEntity").getValue());

        if (sourceModel === null) {
            Ext.Msg.alert(i18n("Base Entity not selected"),
                i18n("You need to select a base entity to perform the query against"));
            return;
        }

        var j = Ext.create("PartKeepr.Components.BatchJob.BatchJobUpdateExpressionWindow", {
            sourceModel: sourceModel,
            listeners: {
                applyexpression: this.onApplyUpdateExpression,
                scope: this
            }
        });
        j.show();
    },
    onApplyUpdateExpression: function (field, value)
    {
        this.down("#batchJobUpdateFields").getStore().add({
            property: field,
            value: value
        });
    },
    onAddFilter: function (filter)
    {
        this.down("#batchJobQueryFields").getStore().add({
            property: filter.getProperty(),
            operator: filter.getOperator(),
            value: filter.getValue()
        });
    },
    onDeleteQueryFieldButtonClick: function ()
    {
        var selection = this.down("#batchJobQueryFields").getSelectionModel().getSelection()[0];
        if (selection) {
            this.down("#batchJobQueryFields").getStore().remove(selection);
        }
    },
    onDeleteUpdateFieldButtonClick: function ()
    {
        var selection = this.down("#batchJobUpdateFields").getSelectionModel().getSelection()[0];
        if (selection) {
            this.down("#batchJobUpdateFields").getStore().remove(selection);
        }
    },
    /**
     * Re-bind the store after an item was saved
     */
    _onItemSaved: function (record)
    {
        this.down("#batchJobQueryFields").bindStore(record.batchJobQueryFields());
    },
    /**
     * Bind the store as soon as the view was rendered.
     */
    onEditStart: function ()
    {
        var store = this.record.batchJobQueryFields();
        this.down("#batchJobQueryFields").bindStore(store);

        var store2 = this.record.batchJobUpdateFields();
        this.down("#batchJobUpdateFields").bindStore(store2);
    }
});
