/**
 * Enhances grid columns to support multiple renderers.
 */
Ext.define("PartKeepr.ExtJS.Enhancements.Grid.MultipleRendererSupport", {
    override: "Ext.grid.Column",

    rendererInstances: [],

    initComponent: function ()
    {
        var i, rendererDef, rendererClass;

        if (this.$className !== "Ext.grid.column.Column") {
            return this.callParent(arguments);
        }

        this.originalRenderer = this.renderer;
        this.originalScope = this.scope;
        this.scope = this;
        this.renderer = this.doRender;


        this.callParent(arguments);


        if (!this.renderers)
        {
            this.renderers = [];
        }


        if (!(this.renderers instanceof Array))
        {
            this.renderers = [this.renderers];
        }

        this.rendererInstances = [];

        for (i = 0; i < this.renderers.length; i++)
        {
            rendererDef = this.renderers[i];

            if (typeof(rendererDef) === "string")
            {
                rendererClass = PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(rendererDef);

                this.rendererInstances.push(Ext.create(rendererClass));
                continue;
            }

            if (typeof(rendererDef) === "object" && rendererDef.rtype)
            {
                rendererClass = PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(rendererDef.rtype);
                this.rendererInstances.push(Ext.create(rendererClass, rendererDef));
                continue;
            }

            if (rendererDef instanceof PartKeepr.Components.Grid.Renderers.AbstractRenderer)
            {
                Ext.raise("Passing a renderer instance is prohibited!");
                continue;
            }

            Ext.raise("No valid renderers definition found for entry:");
            Ext.raise(rendererDef);
        }
    },
    doRender: function (value, metaData, record, rowIndex, colIndex, store, view)
    {
        var i;

        value = Ext.util.Format.htmlEncode(value);

        for (i = 0; i < this.rendererInstances.length; i++)
        {
            value = this.rendererInstances[i].renderer.call(this.originalScope, value, metaData, record, rowIndex, colIndex, store, view, this.rendererInstances[i]);
        }

        if (typeof(this.originalRenderer) === "function")
        {
            return this.originalRenderer.call(this.originalScope, value, metaData, record, rowIndex, colIndex, store, view);
        } else {
            return value;
        }
    }
});
