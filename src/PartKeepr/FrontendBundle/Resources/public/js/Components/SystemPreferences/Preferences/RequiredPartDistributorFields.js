Ext.define('PartKeepr.Components.SystemPreferences.Preferences.RequiredPartDistributorFields', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {

        this.fieldSelector = Ext.create("PartKeepr.Components.Widgets.FieldSelector", {
            height: 300,
            sourceModel: PartKeepr.PartBundle.Entity.PartDistributor,
            recurseSubModels: false,
            excludeFields: [
                "@id"
            ],
            initiallyChecked: PartKeepr.getApplication().getSystemPreference("partkeepr.partDistributor.requiredFields",
                [])
        });

        this.items = [
            {
                xtype: "fieldcontainer",
                fieldLabel: i18n("Required Fields"),
                items: [
                    {
                        border: false,
                        html: "The field <strong>Distributor</strong> is always required.",
                        style: "padding-top: 4px; padding-bottom: 5px;"
                    },
                    this.fieldSelector
                ]
            }
        ];

        this.callParent(arguments);
    },
    onSave: function ()
    {
        var selection = this.fieldSelector.getChecked();
        var fields = [];

        for (var i = 0; i < selection.length; i++) {
            fields.push(selection[i].data.data.name);
        }

        PartKeepr.getApplication().setSystemPreference("partkeepr.partDistributor.requiredFields", fields);
    },
    statics: {
        iconCls: 'fugue-icon block--plus',
        title: i18n('Part Distributor'),
        menuPath: [{text: i18n("Required Fields")}]
    }
});
