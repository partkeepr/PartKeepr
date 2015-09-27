Ext.define('PartKeepr.data.store.TipOfTheDayHistoryStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'TipOfTheDayHistoryStore',

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * The model to use
     */
    model: "PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDayHistory",

    pageSize: 99999999
});
