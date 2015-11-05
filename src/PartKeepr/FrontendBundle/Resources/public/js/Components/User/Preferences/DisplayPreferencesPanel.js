Ext.define('PartKeepr.DisplayPreferencesPanel', {
    extend: 'Ext.form.FormPanel',
    title: i18n("Display"),
    bodyStyle: 'background:#DBDBDB;padding: 10px;',
    initComponent: function ()
    {
        this.showDescriptionsCheckbox = Ext.create("Ext.form.field.Checkbox", {
            labelWidth: 120,
            hideEmptyLabel: false,
            boxLabel: i18n("Show category descriptions"),
            handler: Ext.bind(this.showDescriptionsHandler, this)
        });

        if (PartKeepr.getApplication().getUserPreference("partkeepr.categorytree.showdescriptions") == false) {
            this.showDescriptionsCheckbox.setValue(false);
        } else {
            this.showDescriptionsCheckbox.setValue(true);
        }

        this.compactLayout = Ext.create("Ext.form.field.Radio", {
            boxLabel: i18n(
                "Compact Layout") + '<br/> <span class="partkeepr-part-manager-compact"/>',
            name: 'rb',
            inputValue: 'compact'
        });

        this.standardLayout = Ext.create("Ext.form.field.Radio", {
            boxLabel: i18n(
                "Standard Layout") + '<br/> <span class="partkeepr-part-manager-standard"/>',
            name: 'rb',
            inputValue: 'standard'
        });

        if (PartKeepr.getApplication().getUserPreference("partkeepr.partmanager.compactlayout", false) == true) {
            this.compactLayout.setValue(true);
        } else {
            this.standardLayout.setValue(true);
        }
        this.compactLayoutChooser = Ext.create("Ext.form.RadioGroup", {
            fieldLabel: i18n("Part Manager Layout"),
            labelWidth: 120,
            columns: 2,
            width: 400,
            vertical: true,
            listeners: {
                change: function (field, newValue)
                {
                    if (newValue.rb == "standard") {
                        value = false;
                    } else {
                        value = true;
                    }

                    PartKeepr.getApplication().setUserPreference("partkeepr.partmanager.compactlayout", value);
                    PartKeepr.getApplication().recreatePartManager();
                }
            },
            items: [
                this.compactLayout,
                this.standardLayout
            ]
        });

        this.items = [this.showDescriptionsCheckbox, this.compactLayoutChooser];

        this.callParent();
    },
    /**
     * Handler when the "show descriptions" checkbox is clicked.
     */
    showDescriptionsHandler: function (checkbox, checked)
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.categorytree.showdescriptions", checked);
    }
});

