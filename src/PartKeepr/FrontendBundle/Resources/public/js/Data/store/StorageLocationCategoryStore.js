Ext.define('PartKeepr.data.store.StorageLocationCategoryStore', {
    extend: 'Ext.data.TreeStore',

    /**
     * The store ID to use
     */
    storeId: 'StorageLocationCategoryStore',

    /**
     * Don't sort remotely as this is a tree store
     */
    remoteSort: false,

    /**
     * Sort folders alphabetically
     */
    folderSort: true,

    /**
     * Show the root node by default
     */
    rootVisible: false,

    /**
     * Automatically load the store
     */
    autoLoad: true,

    /**
     * Sort by name ascending by default
     */
    sorters: [
        {
            property: 'name',
            direction: 'ASC'
        }
    ],

    /**
     * Virtual Root Node
     */
    root: {
        "@id": "@local-tree-root",
        "name": "virtual root - should not be visible"
    },

    /**
     * The model to use
     */
    model: "PartKeepr.StorageLocationBundle.Entity.StorageLocationCategory",

    proxy: {
        ignoreLoadId: '@local-tree-root',
        url: "/api/storage_location_categories/getExtJSRootNode",
        type: "Hydra",
        appendId: false,
        reader: {
            type: 'tree'
        }
    }
});
