Ext.define('PartKeepr.ManufacturerGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.ManufacturerGrid',
    columns: [
        {header: i18n("Manufacturer"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Manufacturer"),
    addButtonIconCls: 'fugue-icon building--plus',
    deleteButtonText: i18n("Delete Manufacturer"),
    deleteButtonIconCls: 'fugue-icon building--minus',
    automaticPageSize: true
});
