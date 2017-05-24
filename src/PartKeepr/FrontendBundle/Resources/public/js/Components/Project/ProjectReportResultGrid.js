Ext.define("PartKeepr.Components.Project.ProjectReportResultGrid", {
    extend: "PartKeepr.BaseGrid",


    initComponent: function ()
    {
        this.columns = [
            {
                header: i18n("Qty"), dataIndex: 'quantity',
                width: 50,
                renderers: [{
                    rtype: "projectReportQuantity"
                }]
            }, {
                header: i18n("Part Name"),
                renderers: [{
                    rtype: "projectReportMetaPart"
                }],
                flex: 1
            }, {
                header: i18n("Part Description"),
                dataIndex: "part.description",
                flex: 1
            }, {
                header: i18n("Remarks"),
                dataIndex: 'remarks',
                flex: 1
            }, {
                header: i18n("Production Remarks"),
                dataIndex: 'productionRemarks',
                flex: 1
            }, {
                header: i18n("Projects"),
                dataIndex: 'projectNames',
                flex: 1
            }, {
                header: i18n("Storage Location"), dataIndex: 'storageLocation_name',
                width: 100
            }, {
                header: i18n("Available"), dataIndex: 'available',
                width: 75
            }, {
                header: i18n("Distributor"),
                dataIndex: 'distributor.name',
                flex: 1,
                editor: {
                    xtype: 'DistributorComboBox',
                    returnObject: true,
                    triggerAction: 'query',
                    ignoreQuery: true,
                    forceSelection: true,
                    editable: false
                }
            }, {
                header: i18n("Distributor Order Number"), dataIndex: 'distributor_order_number',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                header: i18n("Price per Item"), dataIndex: 'price',
                renderers: [{
                    rtype: 'currency'
                }],
                width: 100
            }, {
                header: i18n("Sum"),
                dataIndex: 'sum',
                renderers: [{
                    rtype: 'currency'
                }],
                summaryType: 'sum',
                summaryRenderer: PartKeepr.getApplication().formatCurrency,
                width: 100
            }, {
                header: i18n("Amount to Order"), dataIndex: 'missing',
                width: 100
            }, {
                header: i18n("Sum (Order)"),
                dataIndex: 'sum_order',
                renderers: [{
                    rtype: 'currency'
                }],
                summaryType: 'sum',
                summaryRenderer: PartKeepr.getApplication().formatCurrency,
                width: 100
            }
        ];

        this.callParent(arguments);
    }
});
