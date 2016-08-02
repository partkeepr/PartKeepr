Ext.define('PartKeepr.data.store.SystemPreferenceStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'SystemPreferenceStore',

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * The model to use
     */
    model: "PartKeepr.SystemPreferenceBundle.Entity.SystemPreference",

    pageSize: 99999999
});
