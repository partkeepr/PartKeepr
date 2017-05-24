Ext.define("PartKeepr.Components.Grid.Renderers.InternalIDRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.internalID',

    renderer: function (value)
    {
        var values = value.split("/");
        var idstr = values[values.length - 1];
        var idint = parseInt(idstr);

        return idstr + " (#" + idint.toString(36) + ")";
    },

    statics: {
        rendererName: i18n("ID Renderer"),
        rendererDescription: i18n("Renders an ID in both base36 as well as integer format")
    }
});
