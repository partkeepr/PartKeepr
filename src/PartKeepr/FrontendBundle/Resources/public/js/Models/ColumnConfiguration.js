Ext.define("PartKeepr.Models.ColumnConfiguration", {
    extend: "Ext.data.Model",
    fields: [
        {name: 'dataIndex', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'hidden', type: 'boolean'},
        {name: 'flex', type: 'number'},
        {name: 'width', type: 'number'},
        {name: 'tooltip', type: 'string'},
        {name: 'widthMode', type: 'string'},
        {name: 'index', type: 'number'}
    ],
    hasMany: [
        {
            name: 'renderers',
            associationKey: 'renderers',
            model: 'PartKeepr.Models.ColumnRendererConfiguration'
        }
    ]

});
