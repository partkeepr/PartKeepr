Ext.define('PartKeepr.ManufacturerEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.ManufacturerEditorComponent',
    navigationClass: 'PartKeepr.ManufacturerGrid',
    editorClass: 'PartKeepr.ManufacturerEditor',
    newItemText: i18n("New Manufacturer"),
    model: 'PartKeepr.ManufacturerBundle.Entity.Manufacturer',
    initComponent: function ()
    {
        this.createStore({
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });

        this.callParent();
    },
    statics: {
        iconCls: 'web-icon building',
        title: i18n('Manufacturers'),
        closable: true,
        menuPath: [{text: i18n("Edit")}]
    }
});
