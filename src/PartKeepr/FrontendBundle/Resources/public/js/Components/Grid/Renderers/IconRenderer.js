Ext.define("PartKeepr.Components.Grid.Renderers.IconRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.icon',

    config: {
        rendererConfig: {
            iconCls: '',
            invert: false,
            title: ''
        }
    },


    renderer: function (value, metaData, record, rowIndex, colIndex, store, view, renderObj)
    {
        var invert = renderObj.getRendererConfigItem(renderObj, "invert", false),
            title = renderObj.getRendererConfigItem(renderObj, "title", ""),
            iconCls = renderObj.getRendererConfigItem(renderObj, "iconCls", "web-icon fugue-icon fruit");

        if (value ||invert)
        {
            return '<span class="' + iconCls + '" title="' + title + '"/>';
        }

        return "";
    },

    statics: {
        rendererName: i18n("Icon Renderer"),
        rendererDescription: i18n("Renders an icon"),
        rendererConfigs: {
            iconCls: {
                type: 'string',
                description: i18n("The icon CSS class to render"),
                title: i18n("CSS Class")

            },
            invert: {
                type: 'boolean',
                description: i18n("Render the icon if the column is zero"),
                title: i18n("Invert")
            },
            title: {
                type: 'string',
                title: i18n("Hover Title"),
                description: i18n("The title to display when the mouse is hovered above the icon")
            }
        }
    }
});
