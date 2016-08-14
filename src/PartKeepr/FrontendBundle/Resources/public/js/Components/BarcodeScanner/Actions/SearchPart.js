Ext.define("PartKeepr.BarcodeScanner.Actions.SearchPart", {
    extend: "PartKeepr.BarcodeScanner.Action",

    statics: {
        actionName: i18n("Search Part"),
        actionDescription: i18n("Searches for a part in the parts list"),
        configure: function (configuration)
        {
            configuration = Ext.applyIf(configuration, {
                searchFields: []
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
                        modelFieldSelector
                    ],
                    dockedItems: bottomToolbar
                }
            ).show();

            saveButton.setHandler(function ()
            {
                var selection = modelFieldSelector.getChecked();
                var fields = [];

                for (var i = 0; i < selection.length; i++) {
                    fields.push(selection[i].data.data);
                }
                configuration.searchFields = fields;
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

        for (var i = 0; i < this.config.searchFields.length; i++) {
            subFilters.push(Ext.create("PartKeepr.util.Filter", {
                property: this.config.searchFields[i],
                operator: "LIKE",
                value: this.data
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
