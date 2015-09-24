Ext.define('PartKeepr.ManufacturerGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.ManufacturerGrid',
    columns: [
        {header: i18n("Manufacturer"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Manufacturer"),
    addButtonIconCls: 'web-icon building_add',
    deleteButtonText: i18n("Delete Manufacturer"),
    deleteButtonIconCls: 'web-icon building_delete',
    automaticPageSize: true
});
