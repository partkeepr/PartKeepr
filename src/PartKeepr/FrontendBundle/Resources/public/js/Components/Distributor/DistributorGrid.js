Ext.define('PartKeepr.DistributorGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.DistributorGrid',
    columns: [
        {
            header: i18n("Distributor"),
            dataIndex: 'name',
            flex: 1
        },
        {
            header: i18n("Pricing"),
            dataIndex: 'enabledForReports',
            width: 80,
            renderers: [{
                rtype: 'icon',
                rendererConfig: {
                    iconCls: 'web-icon fugue-icon money-bag-dollar',
                    title: i18n("Used for price calculations")
                }
            }]
        }
    ],
    addButtonText: i18n("Add Distributor"),
    addButtonIconCls: 'web-icon lorry_add',
    deleteButtonText: i18n("Delete Distributor"),
    deleteButtonIconCls: 'web-icon lorry_delete',
    automaticPageSize: true
});
