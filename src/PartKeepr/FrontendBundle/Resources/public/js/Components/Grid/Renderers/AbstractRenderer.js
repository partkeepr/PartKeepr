Ext.define("PartKeepr.Components.Grid.Renderers.AbstractRenderer", {
    name: null,
    description: null,
    config: {
        rendererConfig: {}
    },
    constructor: function (config)
    {
        this.initConfig(config);

        return this;
    },
    getRendererConfigItem: function (renderObj, item, defaultValue)
    {
        var config = renderObj.getRendererConfig();

        if (typeof(config) !== "object")
        {
            return defaultValue;
        }

        if (config === null)
        {
            return defaultValue;
        }

        if (config[item] === undefined)
        {
            return defaultValue;
        }

        return config[item];
    }
});
