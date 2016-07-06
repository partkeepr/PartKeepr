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
        "foreignModelDrop": function (records, target)
        {
            for (var i in records) {
                switch (Ext.getClassName(records[i])) {
                    case "PartKeepr.FootprintBundle.Entity.Footprint":
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
                    case "PartKeepr.FootprintBundle.Entity.FootprintCategory":
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
