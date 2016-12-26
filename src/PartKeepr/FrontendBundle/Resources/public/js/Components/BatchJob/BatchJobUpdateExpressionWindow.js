Ext.define("PartKeepr.Components.BatchJob.BatchJobUpdateExpressionWindow", {
    extend: "Ext.window.Window",
    modal: true,
    layout: 'fit',
    title: i18n("Add Filter Expression"),
    sourceModel: null,

    initComponent: function ()
    {
        this.items = {
            xtype: "partkeepr.batchjobupdateexpression",
            sourceModel: this.sourceModel,
            listeners: {
                "applyexpression": this.onApplyExpression,
                scope: this
            }
        };
        this.callParent(arguments);
    },

    onApplyExpression: function (field, value)
    {
        this.fireEvent("applyexpression", field, value);
        this.close();
    }
});
