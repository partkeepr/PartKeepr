Ext.define("PartKeepr.PartCategoryTree", {
    extend: 'PartKeepr.CategoryEditorTree',
    alias: 'widget.PartCategoryTree',

    ddGroup: 'PartTree',
    categoryModel: 'PartKeepr.PartBundle.Entity.PartCategory',
    rootVisible: true,

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
    }
});