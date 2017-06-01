/**
 * This renderer renders a field from the current object.
 *
 * Example: If you have set your dataIndex to an object like
 * "distributor", and you need the object in-place to perform editing on it,
 * for example, using a ComboBox, you probably wish to display another value
 * than the object itself (like the distributor's name).
 */
Ext.define("PartKeepr.Components.Grid.Renderers.ObjectFieldRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.objectField',

    config: {
        rendererConfig: {
            displayField: ''
        }
    },

    renderer: function (value, metaData, record, rowIndex, colIndex, store, view, renderObj)
    {
        var displayField = renderObj.getRendererConfigItem(renderObj, "displayField", false);

        return record.get(displayField);
    },

    statics: {
        rendererName: i18n("Object Field Renderer"),
        rendererDescription: i18n("Renders a field value from an object"),
        rendererConfigs: {
            displayField: {
                type: 'string',
                description: i18n("The field to render from an object"),
                title: i18n("Display Field")
            }
        }
    }
});
