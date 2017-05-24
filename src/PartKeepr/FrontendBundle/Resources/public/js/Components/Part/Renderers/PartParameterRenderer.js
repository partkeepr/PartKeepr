Ext.define("PartKeepr.Components.Part.Renderers.PartParameterRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.partParameter',

    renderer: function (value, metaData, record, rowIndex, colIndex, store, view, renderObj)
    {
        var i;
        var partParameterName = renderObj.getRendererConfigItem(renderObj, "parameterName", false);

        for (i = 0; i < renderObj.getPartParameters(record).getCount(); i++)
        {
            if (renderObj.getPartParameters(record).getAt(i).get("name") === partParameterName)
            {
                return PartKeepr.PartManager.formatParameter(
                    renderObj.getPartParameters(record).getAt(i));
            }
        }

        return "";
    },
    getPartParameters: function (record) {
        return record.parameters();
    },

    statics: {
        rendererName: i18n("Part Parameter Renderer"),
        rendererDescription: i18n("Renders a specific part parameter"),
        rendererConfigs: {
            parameterName: {
                type: 'partParameter',
                title: i18n("Part Parameter Name")
            }
        },
        restrictToEntity: ["PartKeepr.PartBundle.Entity.Part"]
    }
});
