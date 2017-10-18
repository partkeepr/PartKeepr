Ext.define("PartKeepr.Components.ProjectReport.Renderers.MetaPartRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.projectReportMetaPart',

    renderer: function (val, q, rec)
    {
        var part = rec.getPart(), icon;

        if (part !== null)
        {
            if (part.get("metaPart"))
            {
                icon = "bricks";
            } else
            {
                icon = "brick";
            }
            return '<span class="web-icon ' + icon + '"></span> ' + Ext.util.Format.htmlEncode(
                    part.get("name"));
        }
    },
    statics: {
        rendererName: i18n("Project Report MetaPart Renderer"),
        rendererDescription: i18n("Renders a specific icon if the part is a meta part"),

        restrictToEntity: ["PartKeepr.ProjectBundle.Entity.ReportPart"]
    }
});
