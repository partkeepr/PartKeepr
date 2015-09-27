Ext.define('PartKeepr.data.store.TipOfTheDayStore', {
    extend: 'Ext.data.Store',

    /**
     * The store ID to use
     */
    storeId: 'TipOfTheDayStore',

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * The model to use
     */
    model: "PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay",

    pageSize: 99999999
});
