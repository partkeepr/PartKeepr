Ext.define("PartKeepr.PartCategoryTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.PartCategoryTree',

    ddGroup: 'PartTree',
    categoryModel: 'PartKeepr.PartBundle.Entity.PartCategory',
    rootVisible: false,

    initComponent: function ()
    {
        this.store = Ext.create("Ext.data.TreeStore",
            {
                remoteSort: false,
                folderSort: true,
                rootVisible: true,
                autoLoad: true,
                sorters: [
                    {
                        property: 'name',
                        direction: 'ASC'
                    }
                ],
                root: {
                    "@id": "@local-tree-root"
                },
                model: "PartKeepr.PartBundle.Entity.PartCategory",
                proxy: {
                    ignoreLoadId: '@local-tree-root',
                    url: "/api/part_categories/getExtJSRootNode",
                    type: "Hydra",
                    appendId: false,
                    reader: {
                        type: 'json'
                    }

                }
            });

        this.callParent();

        this.syncButton = Ext.create("Ext.button.Button", {
            tooltip: i18n("Reveal Category for selected part"),
            icon: 'bundles/brainbitsfugueicons/icons/fugue/16/arrow-split-180.png',
            handler: Ext.bind(function ()
            {
                this.fireEvent("syncCategory");
            }, this),
            disabled: true
        });
        this.toolbar.add(['->', this.syncButton]);
    }
});