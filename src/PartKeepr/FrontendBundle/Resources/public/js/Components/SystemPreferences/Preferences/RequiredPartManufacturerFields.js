Ext.define('PartKeepr.Components.SystemPreferences.Preferences.RequiredPartManufacturerFields', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {

        this.fieldSelector = Ext.create("PartKeepr.Components.Widgets.FieldSelector", {
            height: 300,
            sourceModel: PartKeepr.PartBundle.Entity.PartManufacturer,
            recurseSubModels: false,
            excludeFields: [
                "@id"
            ],
            initiallyChecked: PartKeepr.getApplication().getSystemPreference(
                "partkeepr.partManufacturer.requiredFields", [])
        });

        this.items = [
            {
                xtype: "fieldcontainer",
                fieldLabel: i18n("Required Fields"),
                items: [
                    {
                        border: false,
                        html: "The field <strong>Manufacturer</strong> is always required.",
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

        PartKeepr.getApplication().setSystemPreference("partkeepr.partManufacturer.requiredFields", fields);
    },
    statics: {
        iconCls: 'fugue-icon block--plus',
        title: i18n('Part Manufacturer'),
        menuPath: [{text: i18n("Required Fields")}]
    }
});
