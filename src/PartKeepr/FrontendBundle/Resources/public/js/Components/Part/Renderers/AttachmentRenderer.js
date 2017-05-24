Ext.define("PartKeepr.Components.Part.Renderers.AttachmentRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.partAttachment',

    renderer: function (val, q, rec)
    {
        var ret = "";
        if (rec.attachments().getCount() > 0)
        {
            ret += '<span class="web-icon fugue-icon paper-clip" title="' + i18n("Has attachments") + '"/>';
        }

        return ret;
    },

    statics: {
        rendererName: i18n("Attachment Renderer"),
        rendererDescription: i18n("Renders an attachment icon if one or more attachments exist"),

        restrictToEntity: ["PartKeepr.PartBundle.Entity.Part"]
    }
});
