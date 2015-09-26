Ext.define('PartKeepr.ProjectBundle.Entity.ProjectReportList', {
    extend: 'PartKeepr.data.HydraModel',
    alias: 'schema.PartKeepr.ProjectBundle.Entity.ProjectReportList',

    idProperty: "@id",

    fields: [
        {name: '@id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'quantity', type: 'integer'},
        {name: 'description', type: 'string'},
        {
            name: 'user',
            reference: 'PartKeepr.AuthBundle.Entity.User'
        }

    ],

    hasMany: [
        {
            name: 'parts',
            associationKey: 'parts',
            model: 'PartKeepr.ProjectBundle.Entity.ProjectPart'
        },
        {
            name: 'attachments',
            associationKey: 'attachments',
            model: 'PartKeepr.ProjectBundle.Entity.ProjectAttachment'
        }
    ],


    proxy: {
        type: "Hydra",
        url: '/api/projects'
    }
});
