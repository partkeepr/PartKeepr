Ext.define("PartKeepr.PartCategoryTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.PartCategoryTree',

    ddGroup: 'PartTree',
    categoryModel: 'PartKeepr.PartBundle.Entity.PartCategory',
    rootVisible: false,

    initComponent: function ()
    {
        this.store = Ext.create("PartKeepr.data.store.PartCategoryStore");

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