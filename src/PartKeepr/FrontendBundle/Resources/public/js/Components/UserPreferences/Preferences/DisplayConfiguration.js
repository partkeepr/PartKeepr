Ext.define('PartKeepr.Components.UserPreferences.Preferences.DisplayConfiguration', {
    extend: 'PartKeepr.Components.Preferences.PreferenceEditor',

    initComponent: function ()
    {
        this.showDescriptionsCheckbox = Ext.create("Ext.form.field.Checkbox", {
            labelWidth: 120,
            hideEmptyLabel: false,
            boxLabel: i18n("Show category descriptions (requires reload)")
        });

        if (PartKeepr.getApplication().getUserPreference("partkeepr.categorytree.showdescriptions") === false) {
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

        if (PartKeepr.getApplication().getUserPreference("partkeepr.partmanager.compactlayout", false) === true) {
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
            items: [
                this.compactLayout,
                this.standardLayout
            ]
        });

        this.items = [this.showDescriptionsCheckbox, this.compactLayoutChooser];

        this.callParent();
    },
    onSave: function ()
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.categorytree.showdescriptions",
            this.showDescriptionsCheckbox.getValue());

        var layout = this.compactLayoutChooser.getValue();
        
        var compactLayout = false;
        
        if (layout.rb === "compact") {
            compactLayout = true;
        }
        
        var oldCompactLayout = PartKeepr.getApplication().getUserPreference("partkeepr.partmanager.compactlayout", false);
        PartKeepr.getApplication().setUserPreference("partkeepr.partmanager.compactlayout", compactLayout);
        
        if (oldCompactLayout !== compactLayout) {
            PartKeepr.getApplication().recreatePartManager();
        }

    },
    statics: {
        iconCls: 'fugue-icon monitor',
        title: i18n('Display'),
        menuPath: [{iconCls: 'fugue-icon ui-scroll-pane-image', text: i18n("User Interface")}]
    }
});
