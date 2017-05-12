Ext.define("PartKeepr.Widgets.FilterExpressionWindow", {
    extend: "Ext.window.Window",
    modal: true,
    layout: 'fit',
    title: i18n("Add Filter Expression"),
    sourceModel: null,

    minHeight: 150,
    minWidth: 400,


     /* Constrain the window to fit the viewport */
    constrainHeader: true,

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
