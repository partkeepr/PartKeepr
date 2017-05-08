Ext.define('PartKeepr.Components.SystemPreferences.Preferences.FulltextSearch', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {

        this.fieldSelector = Ext.create("PartKeepr.Components.Widgets.FieldSelector", {
            height: 300,
            sourceModel: PartKeepr.PartBundle.Entity.Part,
            initiallyChecked: PartKeepr.getApplication().getSystemPreference("partkeepr.part.search.fields",
                ["name", "description", "comment", "internalPartNumber"])
        });

        this.items = [
            {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Search Mode"),
                defaultType: 'radiofield',
                defaults: {
                    flex: 1
                },
                layout: 'vbox',
                items: [
                    {
                        boxLabel: i18n("Use entered text as-is"),
                        name: 'splitMode',
                        inputValue: 'full',
                        id: 'searchModeFull'
                    }, {
                        boxLabel: i18n("Separate search terms"),
                        name: 'splitMode',
                        inputValue: 'split',
                        id: 'searchModeSplit'
                    }
                ]
            },
            {
                xtype: "fieldcontainer",
                fieldLabel: i18n("Search Fields"),
                items: [
                    {
                        style: "padding-top: 4px; padding-bottom: 5px;",
                        html: i18n(
                            "Select all fields which are searched when entering a search term in the upper-right search field within the part manager"),
                        border: false
                    }, this.fieldSelector
                ]
            }
        ];

        this.callParent(arguments);

        if (PartKeepr.getApplication().getSystemPreference("partkeepr.part.search.split", true)) {
            this.down("#searchModeFull").setValue(false);
            this.down("#searchModeSplit").setValue(true);
        } else {
            this.down("#searchModeFull").setValue(true);
            this.down("#searchModeSplit").setValue(false);
        }
    },
    onSave: function ()
    {
        var selection = this.fieldSelector.getChecked();
        var fields = [];

        for (var i = 0; i < selection.length; i++) {
            fields.push(selection[i].data.data.name);
        }

        PartKeepr.getApplication().setSystemPreference("partkeepr.part.search.fields", fields);

        if (this.down("#searchModeFull").getValue()) {
            PartKeepr.getApplication().setSystemPreference("partkeepr.part.search.split", false);
        } else {
            PartKeepr.getApplication().setSystemPreference("partkeepr.part.search.split", true);
        }
    },
    statics: {
        iconCls: 'fugue-icon magnifier-medium',
        title: i18n('Fulltext Search'),
        menuPath: [{text: i18n("Search")}]
    }
});
