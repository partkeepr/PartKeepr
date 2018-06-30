Ext.define('PartKeepr.CategoryEditorForm', {
    extend: 'Ext.form.Panel',
    layout: 'anchor',
    border: false,
    frame: false,
    ui: 'default-framed',
    xtype: "CategoryEditorForm",
    items: [
        {
            xtype: 'textfield',
            name: 'name',
            anchor: '100%',
            enableKeyEvents: true,
            fieldLabel: i18n("Name")
        }, {
            xtype: 'htmleditor',
            name: 'description',
            anchor: '100%',
            enableKeyEvents: true,
            fieldLabel: i18n("Description")
        }
    ]
});
