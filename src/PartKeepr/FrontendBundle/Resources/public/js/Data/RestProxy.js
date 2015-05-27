Ext.define("PartKeepr.data.RestProxy", {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.PartKeeprREST',

    reader: {
        type: 'json',
        rootProperty: 'data',
        totalProperty: 'totalCount'
    },

    constructor: function (config) {
        config.url = PartKeepr.getBasePath() + config.url;
        this.callParent(arguments);
    }
});