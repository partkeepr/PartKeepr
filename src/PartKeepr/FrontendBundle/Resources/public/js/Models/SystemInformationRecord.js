Ext.define('PartKeepr.SystemInformationRecord', {
    extend: 'PartKeepr.data.HydraModel',
    alias: 'schema.PartKeepr.SystemInformationRecord',

    fields: [
                { name: 'name', type: 'string'},
                { name: 'category', type: 'string'},
                { name: 'value', type: 'string'},
    ],



    proxy: {
        type: "Hydra",
        url: '/api/system_information'
    }
});