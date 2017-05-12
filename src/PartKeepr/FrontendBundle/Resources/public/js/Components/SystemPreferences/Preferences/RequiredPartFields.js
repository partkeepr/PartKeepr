Ext.define('PartKeepr.Components.SystemPreferences.Preferences.RequiredPartFields', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {

        this.fieldSelector = Ext.create("PartKeepr.Components.Widgets.FieldSelector", {
            height: 150,
            sourceModel: PartKeepr.PartBundle.Entity.Part,
            recurseSubModels: false,
            excludeFields: [
                "@id",
                "name",
                "needsReview",
                "stockLevel",
                "averagePrice",
                "createDate",
                "removals",
                "lowStock",
                "minStockLevel"
            ],
            initiallyChecked: PartKeepr.getApplication().getSystemPreference("partkeepr.part.requiredFields", [])
        });

        this.items = [
            {
                xtype: "fieldcontainer",
                fieldLabel: i18n("Required Fields"),
                items: [
                    {
                        border: false,
                        html: "The fields <strong>Name</strong>, <strong>Category</strong> and <strong>Storage Location</strong> are always required.",
                        style: "padding-top: 4px; padding-bottom: 5px;"
                    },
                    this.fieldSelector
                ]
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Minimum Numbers"),
                items: [
                    {
                        fieldLabel: i18n("Distributors"),
                        xtype: 'numberfield',
                        minValue: 0,
                        id: 'requirePartDistributorsAmount'
                    },
                    {
                        fieldLabel: i18n("Manufacturers"),
                        xtype: 'numberfield',
                        minValue: 0,
                        id: 'requirePartManufacturersAmount'
                    },
                    {
                        fieldLabel: i18n("Attachments"),
                        xtype: 'numberfield',
                        minValue: 0,
                        id: 'requirePartAttachmentsAmount'
                    }
                ]
            }

        ];

        this.callParent(arguments);

        this.down("#requirePartDistributorsAmount").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.part.constraints.distributorCount", 0));
        this.down("#requirePartManufacturersAmount").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.part.constraints.manufacturerCount", 0));
        this.down("#requirePartAttachmentsAmount").setValue(
            PartKeepr.getApplication().getSystemPreference("partkeepr.part.constraints.attachmentCount", 0));

    },
    onSave: function ()
    {
        var selection = this.fieldSelector.getChecked();
        var fields = [];

        for (var i = 0; i < selection.length; i++) {
            fields.push(selection[i].data.data.name);
        }

        PartKeepr.getApplication().setSystemPreference("partkeepr.part.requiredFields", fields);
        PartKeepr.getApplication().setSystemPreference("partkeepr.part.constraints.distributorCount",
            this.down("#requirePartDistributorsAmount").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.part.constraints.manufacturerCount",
            this.down("#requirePartManufacturersAmount").getValue());
        PartKeepr.getApplication().setSystemPreference("partkeepr.part.constraints.attachmentCount",
            this.down("#requirePartAttachmentsAmount").getValue());
    },
    statics: {
        iconCls: 'fugue-icon block--plus',
        title: i18n('Part'),
        menuPath: [{text: i18n("Required Fields")}]
    }
});
