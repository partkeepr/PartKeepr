Ext.define('PartKeepr.Components.SystemPreferences.Preferences.BarcodeScannerConfiguration', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {
        var modifierItems = [
            {
                xtype: 'checkbox',
                boxLabel: "Ctrl",
                itemId: 'barcodeScannerModifierCtrl'
            },
            {
                xtype: 'checkbox',
                boxLabel: "Shift",
                itemId: 'barcodeScannerModifierShift'
            },
            {
                xtype: 'checkbox',
                boxLabel: "Alt",
                itemId: 'barcodeScannerModifierAlt'
            }
        ];

        this.barcodeScannerActionsStore = Ext.create("Ext.data.Store", {
            fields: ["code", "action", "configuration"],
            data: []
        });

        this.deleteButton = Ext.create("Ext.button.Button", {
            text: i18n("Delete"),
            tooltip: i18n("Delete"),
            iconCls: "web-icon delete",
            handler: Ext.bind(function ()
            {
                this.barcodeScannerActionsStore.remove(
                    this.barcodeScannerActionsGrid.getSelectionModel().getSelection());
            }, this),
            disabled: true
        });

        this.addButton = Ext.create("Ext.button.Button", {
            text: i18n("Add"),
            tooltip: i18n("Add"),
            iconCls: "web-icon add",
            handler: Ext.bind(function ()
            {
                var rec = this.barcodeScannerActionsStore.add({});

                this.editing.startEdit(rec[0], 0);
            }, this)
        });

        this.topToolbar = Ext.create("Ext.toolbar.Toolbar", {
            dock: 'top',
            enableOverflow: true,
            items: [this.addButton, this.deleteButton]
        });

        this.editing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1

        });

        this.barcodeScannerActionsGrid = Ext.create({
            height: 200,
            plugins: [this.editing],
            xtype: 'grid',
            dockedItems: [this.topToolbar],
            itemId: 'barcodeScannerActionsGrid',
            store: this.barcodeScannerActionsStore,
            columns: [
                {
                    text: i18n("Code"), dataIndex: 'code', flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    text: i18n("Action"), dataIndex: 'action', flex: 1,
                    renderer: function (v)
                    {
                        if (v instanceof Ext.data.Model) {
                            return v.get("name");
                        } else {
                            return i18n("No action selected");
                        }
                    },
                    editor: {
                        xtype: 'barcodescannerActions'
                    }
                }, {
                    text: i18n("Description"),
                    flex: 3,
                    renderer: function (v, m, record)
                    {
                        if (record.get("action") instanceof Ext.data.Model) {
                            return record.get("action").get("description");
                        } else {
                            return "";
                        }

                    }
                },
                {
                    xtype: 'actioncolumn',
                    items: [
                        {
                            iconCls: 'fugue-icon pencil',
                            tooltip: i18n("Configure"),
                            handler: function (view, rowIndex, colIndex, item, e, record)
                            {
                                var config = record.get("configuration");

                                if (typeof config === "undefined") {
                                    config = {};
                                    record.set("configuration", config);
                                }

                                if (record.get("action") instanceof Ext.data.Model) {


                                    Ext.ClassManager.get(record.get("action").get("action")).configure(config);
                                }
                            }
                        }
                    ]
                }
            ]
        });

        this.barcodeScannerActionsGrid.getSelectionModel().on("select", this._onItemSelect, this);
        this.barcodeScannerActionsGrid.getSelectionModel().on("deselect", this._onItemDeselect, this);

        this.items = [
            {
                fieldLabel: i18n("Modifier"),
                xtype: 'checkboxgroup',
                layout: {
                    type: 'vbox',
                    align: 'left'
                },
                items: modifierItems
            },
            {
                fieldLabel: i18n("Key"),
                xtype: 'textfield',
                itemId: 'barcodeScannerKey',
                minLength: 1,
                maxLength: 1,
                enforceMaxLength: true
            }, {
                fieldLabel: i18n("Timeout (ms)"),
                xtype: 'numberfield',
                minValue: 100,
                maxValue: 3000,
                itemId: 'barcodeScannerTimeout'

            }, {
                boxLabel: i18n("Use enter/return to indicate scan input end"),
                xtype: 'checkbox',
                hideEmptyLabel: false,
                itemId: 'barcodeScannerEnter'
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Actions"),
                items: [this.barcodeScannerActionsGrid]
            }
        ];

        this.callParent(arguments);

        this.down("#barcodeScannerKey").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.key", ""));
        this.down("#barcodeScannerModifierAlt").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierAlt", false));
        this.down("#barcodeScannerModifierShift").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierShift", false));
        this.down("#barcodeScannerModifierCtrl").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.modifierCtrl", false));
        this.down("#barcodeScannerEnter").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.enter", true));
        this.down("#barcodeScannerTimeout").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.timeout", 500));

        var actions = PartKeepr.getApplication().getSystemPreference("partkeepr.barcodeScanner.actions", []);
        var actionStore = Ext.create("PartKeepr.Data.store.BarcodeScannerActionsStore");

        for (var i = 0; i < actions.length; i++) {
            var item = actions[i];

            this.barcodeScannerActionsStore.add({
                code: item.code,
                action: actionStore.findRecord("action", item.action),
                configuration: item.config
            });
        }
    },
    onSave: function ()
    {
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.key",
            this.down("#barcodeScannerKey").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.modifierAlt",
            this.down("#barcodeScannerModifierAlt").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.modifierShift",
            this.down("#barcodeScannerModifierShift").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.modifierCtrl",
            this.down("#barcodeScannerModifierCtrl").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.enter",
            this.down("#barcodeScannerEnter").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.timeout",
            this.down("#barcodeScannerTimeout").getValue());

        var data = this.down("#barcodeScannerActionsGrid").getStore().getData();
        var actions = [];

        for (var i = 0; i < data.length; i++) {
            var item = data.getAt(i);

            actions.push({
                code: item.get("code"),
                action: item.get("action").get("action"),
                config: item.get("configuration")
            });
        }

        PartKeepr.getApplication().setSystemPreference("partkeepr.barcodeScanner.actions", actions);

        PartKeepr.getApplication().getBarcodeScannerManager().registerBarcodeScannerHotkey();

    },
    /**
     * Called when an item was selected
     */
    _onItemSelect: function (selectionModel, record)
    {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemSelect", record);
    },
    /**
     * Called when an item was deselected
     */
    _onItemDeselect: function (selectionModel, record)
    {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemDeselect", record);
    },
    /**
     * Called when an item was selected. Enables/disables the delete button.
     */
    _updateDeleteButton: function ()
    {
        /* Right now, we support delete on a single record only */
        if (this.barcodeScannerActionsGrid.getSelectionModel().getCount() === 1) {
            this.deleteButton.enable();
        } else {
            this.deleteButton.disable();
        }
    },
    statics: {
        iconCls: 'fugue-icon barcode',
        title: i18n('Barcode Scanner Configuration'),
        menuPath: []
    }
});
