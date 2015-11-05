Ext.define('PartKeepr.data.store.UserPreferenceStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'UserPreferenceStore',

    /**
     * Automatically load the store
     */
    autoLoad: false,

    /**
     * The model to use
     */
    model: "PartKeepr.AuthBundle.Entity.UserPreference",

    pageSize: 99999999
});
