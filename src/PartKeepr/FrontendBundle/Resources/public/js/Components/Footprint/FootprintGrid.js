Ext.define('PartKeepr.FootprintGrid', {
    extend: 'PartKeepr.EditorGrid',
    xtype: 'partkeepr.FootprintGrid',
    columns: [
        {header: i18n("Footprint"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Footprint"),
    addButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_add.png',
    addButtonIconCls: '',
    deleteButtonText: i18n("Delete Footprint"),
    deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_delete.png',
    deleteButtonIconCls: '',
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name} ({children.length})',
            enableNoGroups: true
        }
    ]
});
