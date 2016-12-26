Ext.define("PartKeepr.Widgets.FilterExpressionWindow", {
    extend: "Ext.window.Window",
    modal: true,
    layout: 'fit',
    title: i18n("Add Filter Expression"),
    sourceModel: null,

    initComponent: function ()
    {
        this.items = {
            xtype: "partkeepr.filterexpression",
            sourceModel: this.sourceModel,
            listeners: {
                "applyfilter": this.onAddFilter,
                scope: this
            }
        };
        this.callParent(arguments);
    },

    onAddFilter: function (filter)
    {
        this.fireEvent("applyfilter", filter);
        this.close();
    }
});
