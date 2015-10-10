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

    /**
     * @cfg {String} text The path to the 'add' icon
     */
    addButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_add.png',

    /**
     * @cfg {String} text The path to the 'delete' icon
     */
    deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_delete.png',

    initComponent: function ()
    {
        this.store = Ext.create("PartKeepr.data.store.StorageLocationCategoryStore");
        this.callParent();
    },
    listeners: {
        "foreignModelDrop": function (record, target)
        {
            record.setCategory(target);
            record.save({
                success: function ()
                {
                    if (record.store && record.store.reload) {
                        record.store.reload();
                    }
                }
            });
        }
    }
});
