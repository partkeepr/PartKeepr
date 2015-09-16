Ext.define('PartKeepr.PartStockHistory', {
    extend: 'PartKeepr.AbstractStockHistoryGrid',
    alias: 'widget.PartStockHistory',

    part: null,

    initComponent: function ()
    {
        this.callParent();

        this.on("activate", this.onActivate, this);
    },
    /**
     * Called when the view is activated.
     */
    onActivate: function ()
    {
        var filter = Ext.create("Ext.util.Filter", {
            property: 'part',
            operator: '=',
            value: this.part
        });

        this.store.clearFilter(true);
        this.store.addFilter(filter);
    }
});
