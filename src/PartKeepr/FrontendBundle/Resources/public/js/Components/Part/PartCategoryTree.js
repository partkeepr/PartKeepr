Ext.define("PartKeepr.PartCategoryTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.PartCategoryTree',

    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            sortOnDrop: true,
            ddGroup: 'PartTree'
        }
    },
    categoryModel: 'PartKeepr.PartBundle.Entity.PartCategory',
    rootVisible: false,

    initComponent: function ()
    {
        this.store = Ext.create("PartKeepr.data.store.PartCategoryStore");

        this.callParent();

        this.syncButton = Ext.create("Ext.button.Button", {
            tooltip: i18n("Reveal Category for selected part"),
            iconCls: 'fugue-icon arrow-split-180',
            handler: Ext.bind(function ()
            {
                this.fireEvent("syncCategory");
            }, this),
            disabled: true
        });
        this.toolbar.add(['->', this.syncButton]);
    },
    listeners: {
        "foreignModelDrop": function (records, target)
        {
            for (var i in records) {
                switch (Ext.getClassName(records[i])) {
                    case "PartKeepr.PartBundle.Entity.Part":
                        records[i].setCategory(target);
                        records[i].save();
                        break;
                    case "PartKeepr.PartBundle.Entity.PartCategory":
                        records[i].callPutAction("move", { parent: target.getId() }, Ext.bind(function () {
                            this.store.load();
                        }, this));
                        break;
                }
            }
        }
    }
});
