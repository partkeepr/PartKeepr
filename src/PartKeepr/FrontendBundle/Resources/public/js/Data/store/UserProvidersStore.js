Ext.define('PartKeepr.data.store.UserProviderStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'UserProviderStore',

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * The model to use
     */
    model: "PartKeepr.AuthBundle.Entity.UserProvider",

    pageSize: 99999999
});
