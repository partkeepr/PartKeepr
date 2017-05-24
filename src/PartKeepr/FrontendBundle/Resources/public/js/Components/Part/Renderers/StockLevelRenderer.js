Ext.define("PartKeepr.Components.Part.Renderers.StockLevelRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.stockLevel',

    renderer: function (val, q, rec)
    {
        if (rec.getPartUnit())
        {
            return val + " " + rec.getPartUnit().get("shortName");
        } else
        {
            return val;
        }
    },

    statics: {
        rendererName: i18n("Stock Level Renderer"),
        rendererDescription: i18n("Renders the stock level including the part unit"),

        restrictToEntity: ["PartKeepr.PartBundle.Entity.Part"]
    }
});
