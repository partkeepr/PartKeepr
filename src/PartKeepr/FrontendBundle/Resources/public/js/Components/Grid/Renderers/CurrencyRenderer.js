Ext.define("PartKeepr.Components.Grid.Renderers.CurrencyRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.currency',

    renderer: function (value)
    {
        return PartKeepr.getApplication().formatCurrency(value);
    },

    statics: {
        rendererName: i18n("Currency Renderer"),
        rendererDescription: i18n("Renders a value with the system defined currency")
    }
});
