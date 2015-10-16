Ext.define('PartKeepr.data.store.SystemNoticeStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'SystemNoticeStore',

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * The model to use
     */
    model: "PartKeepr.CoreBundle.Entity.SystemNotice",

    pageSize: 99999999,

    sorters: [
        {
            property: 'date',
            direction: 'DESC'
        }
    ],

    filters: [
        {
            property: 'acknowledged',
            operator: "=",
            value: false
        }
    ]
});
