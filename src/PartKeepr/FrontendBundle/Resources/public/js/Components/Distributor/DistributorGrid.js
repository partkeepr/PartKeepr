Ext.define('PartKeepr.DistributorGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.DistributorGrid',
    columns: [
        {header: i18n("Distributor"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Distributor"),
    addButtonIconCls: 'web-icon lorry_add',
    deleteButtonText: i18n("Delete Distributor"),
    deleteButtonIconCls: 'web-icon lorry_delete',
    automaticPageSize: true
});
