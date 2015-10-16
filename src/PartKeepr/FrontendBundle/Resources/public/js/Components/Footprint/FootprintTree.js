Ext.define("PartKeepr.FootprintTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.FootprintTree',
    xtype: 'partkeepr.FootprintTree',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            sortOnDrop: true,
            ddGroup: 'FootprintCategoryTree'
        }
    },
    folderSort: true,

    categoryModel: "PartKeepr.FootprintBundle.Entity.FootprintCategory",

    initComponent: function ()
    {
        this.store = Ext.create("PartKeepr.data.store.FootprintCategoryStore");
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
