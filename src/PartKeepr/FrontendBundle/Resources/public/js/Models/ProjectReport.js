/**
 * Represents a project report
 */
Ext.define("PartKeepr.ProjectBundle.Entity.ProjectReport", {
    extend: "PartKeepr.data.HydraModel",
    fields: [
        {name: 'quantity', type: 'int'},
        {name: 'storageLocation_name', type: 'string'},
        {name: 'available', type: 'int'},
        {name: 'missing', type: 'int'},
        {name: 'distributor_order_number', type: 'string'},
        {name: 'sum_order', type: 'float'},
        {name: 'sum', type: 'float'},
        {name: 'projects', type: 'string'},
        {name: 'remarks', type: 'string'},
        {name: 'part', reference: 'PartKeepr.PartBundle.Entity.Part'},
        {name: 'distributor', reference: 'PartKeepr.DistributorBundle.Entity.Distributor'}
    ],

    proxy: {
        type: "Hydra",
        url: '/api/project_reports'
    }
});
