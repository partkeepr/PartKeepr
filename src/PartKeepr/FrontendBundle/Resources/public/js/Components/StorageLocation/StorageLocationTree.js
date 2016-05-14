Ext.define("PartKeepr.StorageLocationTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.StorageLocationTree',
    xtype: 'partkeepr.StorageLocationTree',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            sortOnDrop: true,
            ddGroup: 'StorageLocationTree'
        }
    },
    folderSort: true,

    categoryModel: "PartKeepr.StorageLocationBundle.Entity.StorageLocationCategory",

    initComponent: function ()
    {
        this.store = Ext.create("PartKeepr.data.store.StorageLocationCategoryStore");
        this.callParent();
    },
    listeners: {
        "foreignModelDrop": function (records, target)
        {
            for (var i in records) {
                records[i].setCategory(target);
                records[i].save({
                    success: function ()
                    {
                        if (records[i].store && records[i].store.reload) {
                            records[i].store.reload();
                        }
                    }
                });
            }
        }
    }
});
