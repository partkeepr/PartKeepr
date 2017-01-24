Ext.define("PartKeepr.Components.BatchJob.BatchJobExecutionWindow", {
    extend: "Ext.window.Window",

    width: 800,
    height: 400,
    layout: 'fit',
    title: i18n("Execute Batch Job"),
    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: i18n("Query Fields"),
                    items: [
                        {
                            xtype: 'grid',
                            height: 100,
                            itemId: 'queryFields',
                            viewConfig: {
                                markDirty: false
                            },
                            columns: []
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: i18n("Update Fields"),
                    items: [
                        {
                            xtype: 'grid',
                            height: 100,
                            itemId: 'updateFields',
                            viewConfig: {
                                markDirty: false
                            },
                            columns: [
                                {
                                    header: '',
                                    width: 32,
                                    renderer: function (val, metaData, record)
                                    {
                                        if (record.get("value") == "") {
                                            return '<span title="OK" style="vertical-align: top;" class="web-icon error"></span>';
                                        } else {
                                            return '<span title="OK" style="vertical-align: top;" class="web-icon accept"></span>';
                                        }

                                    }
                                },
                                {
                                    header: i18n("Property"),
                                    flex: 1,
                                    dataIndex: "property"
                                }, {
                                    header: i18n("Description"),
                                    flex: 2,
                                    dataIndex: "description"
                                },
                                {
                                    header: i18n("Value"),
                                    flex: 1,
                                    dataIndex: "value"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    bbar: [
        {
            xtype: 'button',
            text: i18n("Execute Batch Job"),
            disabled: true,
            itemId: 'executeBatchJob'
        }
    ],

    batchJob: null,

    initComponent: function ()
    {
        var i;

        this.callParent(arguments);

        var batchJobQueryFields = this.batchJob.batchJobQueryFields();
        batchJobQueryFields.setRemoteFilter(false);
        batchJobQueryFields.filter({property: 'dynamic', operator: '=', value: true});

        for (i = 0; i < batchJobQueryFields.getCount(); i++) {
            batchJobQueryFields.getAt(i).set("value", "");
        }

        this.down("#queryFields").setStore(batchJobQueryFields);

        var batchJobUpdateFields = this.batchJob.batchJobUpdateFields();
        batchJobUpdateFields.setRemoteFilter(false);
        batchJobUpdateFields.filter({property: 'dynamic', operator: '=', value: true});

        for (i = 0; i < batchJobUpdateFields.getCount(); i++) {
            batchJobUpdateFields.getAt(i).set("value", "");
        }

        this.down("#updateFields").setStore(batchJobUpdateFields);

        var columns = [
            {
                header: '',
                width: 32,
                renderer: function (val, metaData, record)
                {
                    if (record.get("value") == "") {
                        return '<span title="OK" style="vertical-align: top;" class="web-icon error"></span>';
                    } else {
                        return '<span title="OK" style="vertical-align: top;" class="web-icon accept"></span>';
                    }

                }
            },
            {
                header: i18n("Property"),
                flex: 1,
                dataIndex: "property"
            }, {
                header: i18n("Description"),
                flex: 2,
                dataIndex: "description"
            }, {
                header: i18n("Value"),
                flex: 1,
                dataIndex: "value"
            }, {
                width: 100,
                xtype: 'widgetcolumn',
                itemId: 'foobar',
                widget: {

                    xtype: 'button',
                    text: i18n("Set Value…"),
                    handler: this.onSetValueClick,
                    scope: this
                }
            }
        ];

        this.down("#updateFields").reconfigure(null, columns);
        this.down("#queryFields").reconfigure(null, columns);

        this.validateExecuteBatchJobButton();
        this.down("#executeBatchJob").on("click", this.onExecuteBatchJob, this);
    },
    onExecuteBatchJob: function ()
    {
        this.down("#executeBatchJob").setDisabled();

        var i, queryFieldConfig = [], updateFieldConfig = [];

        for (i = 0; i < this.batchJob.batchJobQueryFields().getCount(); i++) {
            queryFieldConfig.push({
                property: this.batchJob.batchJobQueryFields().getAt(i).get("property"),
                value: this.batchJob.batchJobQueryFields().getAt(i).get("value")
            });
        }

        for (i = 0; i < this.batchJob.batchJobUpdateFields().getCount(); i++) {
            updateFieldConfig.push({
                property: this.batchJob.batchJobUpdateFields().getAt(i).get("property"),
                value: this.batchJob.batchJobUpdateFields().getAt(i).get("value")
            });
        }

        this.batchJob.callPutAction("execute", {
            queryFields: Ext.encode(queryFieldConfig),
            updateFields: Ext.encode(updateFieldConfig)
        }, Ext.bind(this.onBatchJobExecuted, this));
    },
    /**
     * Displays a message as soon as the batch job is completed successfully.
     */
    onBatchJobExecuted: function (options, success)
    {
        if (success) {
            Ext.MessageBox.alert(i18n("Batch Job Completed Successfully"),
                i18n("The batch job has been executed successfully"));
        }

        this.down("#executeBatchJob").setEnabled();
    },
    validateExecuteBatchJobButton: function ()
    {
        var valid = true, i;

        var batchJobQueryFields = this.batchJob.batchJobQueryFields();

        for (i = 0; i < batchJobQueryFields.getCount(); i++) {
            if (batchJobQueryFields.getAt(i).get("value") == "") {
                valid = false;
            }
        }

        var batchJobUpdateFields = this.batchJob.batchJobUpdateFields();

        for (i = 0; i < batchJobUpdateFields.getCount(); i++) {
            if (batchJobUpdateFields.getAt(i).get("value") == "") {
                valid = false;
            }
        }

        this.down("#executeBatchJob").setDisabled(!valid);
    },
    onSetValueClick: function (widgetColumn)
    {
        this.editingRecord = widgetColumn.getWidgetRecord();


        var baseEntity = this.batchJob.get("baseEntity");

        var baseModel = Ext.create(baseEntity);

        var type = baseModel.getFieldType(this.editingRecord.get("property"));

        if (type.type === "field") {
            Ext.Msg.prompt(i18n("Enter the value"), this.editingRecord.get("description"), this.onValueEntered, this);
        } else {
            this.entitySelector = Ext.create("Ext.window.Window", {
                items: Ext.create("PartKeepr.Widgets.EntityPicker", {
                    model: Ext.ClassManager.get(type.reference),
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
        }


    },
    onValueEntered: function (btn, value)
    {
        if (btn === "ok") {
            this.editingRecord.set("value", value);
        }

        this.validateExecuteBatchJobButton();
    },
    onEntitySelect: function (entity)
    {
        this.editingRecord.set("value", entity.getId());
        this.entitySelector.close();
        this.validateExecuteBatchJobButton();
    }
});
