Ext.define("PartKeepr.Data.Store.PartStore", {
    extend: "PartKeepr.Data.Store.BaseStore",

    alias: 'store.PartStore',
    model: "PartKeepr.PartBundle.Entity.Part",

    autoLoad: true,

    pageSize: 50,
    groupField: 'categoryPath',

    searchFieldSystemPreference: "partkeepr.part.search.field",
    searchFieldSystemPreferenceDefaults: ["name", "description", "comment", "internalPartNumber"],
    splitSearchTermSystemPreference: "partkeepr.part.search.split",
    splitSearchTermSystemPreferenceDefaults: true,

    sorters: [
        {
            property: 'category.categoryPath',
            direction: 'ASC'
        },
        {
            property: 'name',
            direction: 'ASC'
        }
    ]
});