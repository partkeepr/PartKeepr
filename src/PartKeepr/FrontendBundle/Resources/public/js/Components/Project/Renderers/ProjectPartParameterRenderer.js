Ext.define("PartKeepr.Components.Project.Renderers.ProjectPartParameterRenderer", {
    extend: "PartKeepr.Components.Part.Renderers.PartParameterRenderer",

    alias: 'columnRenderer.projectPartParameter',

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
        return record.getPart().parameters();
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
        restrictToEntity: ["PartKeepr.ProjectBundle.Entity.ProjectReport"]
    }
});
