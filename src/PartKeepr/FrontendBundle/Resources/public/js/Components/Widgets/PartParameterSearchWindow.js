Ext.define("PartKeepr.Components.Widgets.PartParameterSearchWindow", {
    extend: "Ext.window.Window",
    modal: true,
    layout: 'fit',
    title: i18n("Add Parametric Search Expression"),
    sourceModel: null,

    minHeight: 150,
    minWidth: 400,


     /* Constrain the window to fit the viewport */
    constrainHeader: true,

    initComponent: function ()
    {
        this.partParameterSearch = Ext.create("PartKeepr.Components.Widgets.PartParameterSearch");
        this.partParameterSearch.on("apply", this.onApply, this);
        this.items = this.partParameterSearch;
        this.callParent(arguments);
    },

    onApply: function (rec)
    {
        this.fireEvent("apply", rec);
        this.close();
    }
});
