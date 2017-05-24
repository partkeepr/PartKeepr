Ext.define("PartKeepr.Components.ProjectReport.Renderers.QuantityRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.projectReportQuantity',

    renderer: function (v, q, rec)
    {
        var i, total;

        if (rec.get("metaPart"))
        {
            total = 0;
            for (i = 0; i < rec.subParts().getCount(); i++)
            {
                if (rec.subParts().getAt(i).get("use"))
                {
                    total += rec.subParts().getAt(i).get("stockToUse");
                }
            }

            return total + " / " + v;
        } else
        {
            return v;
        }
    },

    statics: {
        rendererName: i18n("Project Report Quantity Renderer"),
        rendererDescription: i18n("Renders the amount of required metadata quantities"),

        restrictToEntity: ["PartKeepr.PartBundle.Entity.ProjectReport"]
    }
});
