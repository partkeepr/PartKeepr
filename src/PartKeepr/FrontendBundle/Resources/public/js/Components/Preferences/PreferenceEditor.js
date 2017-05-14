Ext.define('PartKeepr.Components.Preferences.PreferenceEditor', {
    extend: 'Ext.form.Panel',
    trackResetOnLoad: true,
    bodyPadding: 10,
    saveText: i18n("Save"),
    cancelText: i18n("Cancel"),
    layout: 'anchor',
    change: false,
    border: false,
    scrollable: true,
    autoScroll: true,
    defaults: {
        anchor: '100%',
        labelWidth: 150
    },
    enableButtons: true,
    titleProperty: 'name',

    initComponent: function ()
    {
        if (this.enableButtons) {
            this.saveButton = Ext.create("Ext.button.Button", {
                text: this.saveText,
                iconCls: 'fugue-icon disk',
                handler: Ext.bind(this.onSave, this)
            });

            this.cancelButton = Ext.create("Ext.button.Button", {
                text: this.cancelText,
                iconCls: 'web-icon cancel',
                handler: Ext.bind(this.onCancelEdit, this)
            });

            this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
                enableOverflow: true,
                margin: '10px',
                defaults: {minWidth: 100},
                dock: 'bottom',
                ui: 'footer',
                items: [this.saveButton, this.cancelButton]
            });

            Ext.apply(this, {
                dockedItems: [this.bottomToolbar]
            });
        }

        this.callParent();
    },
    onCancelEdit: function ()
    {
        this.fireEvent("editorClose", this);
    },
    onSave: function ()
    {
        console.log("You need to override PreferenceEditor::onSave");
    }
});
