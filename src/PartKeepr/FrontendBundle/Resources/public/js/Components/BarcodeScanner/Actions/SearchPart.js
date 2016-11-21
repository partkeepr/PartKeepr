Ext.define("PartKeepr.BarcodeScanner.Actions.SearchPart", {
    extend: "PartKeepr.BarcodeScanner.Action",

    statics: {
        actionName: i18n("Search Part"),
        actionDescription: i18n("Searches for a part in the parts list"),
        configure: function (configuration)
        {
            configuration = Ext.applyIf(configuration, {
                searchFields: [],
                searchMode: 'fixed'
            });

            var modelFieldSelector = Ext.create({
                xtype: 'modelFieldSelector',
                id: 'searchPartFieldSelector',
                border: false,
                sourceModel: PartKeepr.PartBundle.Entity.Part,
                initiallyChecked: configuration.searchFields,
                flex: 1
            });

            var saveButton = Ext.create("Ext.button.Button", {
                text: i18n("OK"),
                iconCls: 'fugue-icon disk',
            });

            var cancelButton = Ext.create("Ext.button.Button", {
                text: i18n("Cancel"),
                iconCls: 'web-icon cancel'
            });

            var bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
                enableOverflow: true,
                margin: '10px',
                defaults: {minWidth: 100},
                dock: 'bottom',
                ui: 'footer',
                items: [saveButton, cancelButton]
            });

            var window = Ext.create('Ext.window.Window', {
                    title: i18n("Search Part Configuration"),
                    height: 400,
                    modal: true,
                    width: 600,
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [
                        {
                            html: i18n("Select all fields to be searched"),
                            border: false,
                            bodyStyle: 'padding: 5px; background:transparent;',
                        },
                        modelFieldSelector,
                        {
                            xtype: 'radiogroup',
                            layout: 'vbox',
                            itemId: 'searchMode',
                            items: [
                                {
                                    boxLabel: i18n("Search string as-is"),
                                    name: 'searchMode',
                                    inputValue: "fixed",
                                    checked: configuration.searchMode == "fixed" ? true : false
                                },
                                {
                                    boxLabel: i18n("Search beginning of string (string*)"),
                                    name: 'searchMode',
                                    inputValue: "beginning",
                                    checked: configuration.searchMode == "beginning" ? true : false
                                }, {
                                    boxLabel: i18n("Search middle of string (*string*)"),
                                    name: 'searchMode',
                                    inputValue: "any",
                                    checked: configuration.searchMode == "any" ? true : false

                                }
                            ]
                        }
                    ],
                    dockedItems: bottomToolbar
                }
            ).show();

            saveButton.setHandler(function ()
            {
                var selection = modelFieldSelector.getChecked();
                var fields = [];

                for (var i = 0; i < selection.length; i++) {
                    fields.push(selection[i].data.data.name);
                }
                configuration.searchFields = fields;
                configuration.searchMode = this.down("#searchMode").getValue().searchMode;
                this.close();
            }, window);

            cancelButton.setHandler(function ()
            {
                this.close();

            }, window);

        }
    },

    execute: function ()
    {
        var subFilters = [];
        var searchValue;

        switch (this.config.searchMode) {
            case "beginning":
                searchValue = this.data + "%";
                break;
            case "any":
                searchValue = "%" + this.data + "%";
                break;
            default:
                searchValue = this.data;
                break;
        }

        for (var i = 0; i < this.config.searchFields.length; i++) {
            subFilters.push(Ext.create("PartKeepr.util.Filter", {
                property: this.config.searchFields[i],
                operator: "LIKE",
                value: searchValue
            }));
        }

        this.filter = Ext.create("PartKeepr.util.Filter", {
            type: "OR",
            subfilters: subFilters
        });

        var store = PartKeepr.getApplication().getPartManager().getStore();

        store.getFilters().clear();
        store.addFilter(this.filter, true);
        store.currentPage = 1;
        store.load({start: 0});

    }
});
