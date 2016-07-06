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
                 switch (Ext.getClassName(records[i])) {
                    case "PartKeepr.StorageLocationBundle.Entity.StorageLocation":
                        records[i].setCategory(target);
                        records[i].save({
                            success: function ()
                            {
                                if (records[i].store && records[i].store.reload) {
                                    records[i].store.reload();
                                }
                            }
                        });
                        break;
                    case "PartKeepr.StorageLocationBundle.Entity.StorageLocationCategory":
                        records[i].callPutAction("move", {parent: target.getId()}, Ext.bind(function ()
                        {
                            this.store.load();
                        }, this));
                        break;

                }
            }
        }
    }
});
