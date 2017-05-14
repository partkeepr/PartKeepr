Ext.define('PartKeepr.Components.SystemPreferences.Preferences.ActionsConfiguration', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {

        this.batchJobStore = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.BatchJobBundle.Entity.BatchJob',
            autoLoad: true
        });

        this.actionsStore = Ext.create("Ext.data.Store", {
            fields: [
                {name: 'baseEntity'},
                {name: 'action'},
                {name: 'batchJob'},
                {name: 'batchJobName'}
            ]
        });

        this.items = [
            {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Actions"),
                items: [
                    {
                        xtype: 'grid',
                        height: 200,
                        itemId: 'actionGrid',
                        plugins: {
                            ptype: 'cellediting',
                            clicksToEdit: 1,
                            pluginId: 'editing'
                        },
                        listeners: {
                            selectionchange: this.onSelectionChange,
                            edit: this.onGridEdit,
                            scope: this
                        },
                        store: this.actionsStore,
                        columns: [
                            {
                                header: i18n("Entity"),
                                flex: 1,
                                dataIndex: "baseEntity",
                                editor: {
                                    xtype: 'combo',
                                    store: Ext.StoreManager.lookup("ModelStore"),
                                    displayField: 'model',
                                    queryMode: 'local',
                                    editable: false,
                                    forceSelection: true,
                                    valueField: 'model'
                                }
                            }, {
                                header: i18n("Action"),
                                dataIndex: "action",
                                flex: 1,
                                editor: {
                                    xtype: 'textfield'
                                }
                            }, {
                                header: i18n("Batch Job"),
                                dataIndex: "batchJob",
                                flex: 1,
                                editor: {
                                    xtype: 'combo',
                                    store: this.batchJobStore,
                                    displayField: 'name',
                                    editable: false,
                                    forceSelection: true,
                                    valueField: '@id'
                                },
                                renderer: this.renderBatchJob,
                                scope: this
                            }
                        ],
                        bbar: [
                            {
                                xtype: 'button',
                                text: i18n("Add Action"),
                                itemId: 'actionAdd',
                                handler: this.onAddAction,
                                scope: this
                            }, {
                                xtype: 'button',
                                text: i18n("Delete Action"),
                                disabled: true,
                                itemId: 'actionDelete'
                            }
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);

         var actions = PartKeepr.getApplication().getSystemPreference("partkeepr.actions", []);

        for (var i = 0; i < actions.length; i++) {
            this.actionsStore.add(actions[i]);
        }

    },
    onGridEdit: function (editor, e) {
        if (e.field === "batchJob") {
            var batchJob = this.batchJobStore.getById(e.value);

            if (batchJob !== null) {
                e.record.set("batchJobName", batchJob.get("name"));
            }
        }
    },
    renderBatchJob: function (value, metaData, record)
    {
        return record.get("batchJobName");
    },
    onAddAction: function ()
    {
        var grid = this.down("#actionGrid");
        grid.getPlugin("editing").cancelEdit();

        grid.getStore().insert(0, {});

        grid.getPlugin("editing").startEdit(0, 0);
    },
    onSelectionChange: function (grid, selection)
    {
        if (selection.length === 1) {
            this.down("#actionDelete").setDisabled(false);
        } else {
            this.down("#actionDelete").setDisabled(true);
        }
    },
    onSave: function ()
    {
        var data = this.down("#actionGrid").getStore().getData();
        var actions = [];

        for (var i = 0; i < data.length; i++) {
            var item = data.getAt(i);

            actions.push({
                baseEntity: item.get("baseEntity"),
                action: item.get("action"),
                batchJob: item.get("batchJob"),
                batchJobName: item.get("batchJobName")
            });
        }

        PartKeepr.getApplication().setSystemPreference("partkeepr.actions", actions);
    },
    statics: {
        iconCls: 'fugue-icon task--arrow',
        title: i18n('Actions'),
        menuPath: []
    }
});
