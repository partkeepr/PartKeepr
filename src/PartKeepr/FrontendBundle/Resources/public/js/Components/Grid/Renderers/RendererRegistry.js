Ext.define("PartKeepr.Components.Grid.Renderers.RendererRegistry", {
    statics: {
        aliasPrefix: "columnRenderer.",

        lookupRenderer: function (rtype)
        {
            return Ext.ClassManager.getByAlias(this.aliasPrefix + rtype);
        },
        getRenderersForEntity: function (targetEntity)
        {
            var renderers = Ext.ClassManager.getNamesByExpression(this.aliasPrefix + "*");
            var finalRenderers = [], renderer;

            for (var i = 0; i < renderers.length; i++)
            {
                renderer = Ext.ClassManager.get(renderers[i]);

                if (renderer.restrictToEntity && renderer.restrictToEntity instanceof Array)
                {
                    if (renderer.restrictToEntity.indexOf(targetEntity) !== -1)
                    {
                        finalRenderers.push(renderers[i]);
                    }
                } else
                {
                    finalRenderers.push(renderers[i]);
                }
            }

            return finalRenderers;
        },
        getRType: function (className) {
            var aliases = Ext.ClassManager.getAliasesByName(className);

            for (var i=0;i<aliases.length;i++) {
                if (Ext.String.startsWith(aliases[i], this.aliasPrefix)) {
                    return aliases[i].substr(this.aliasPrefix.length);
                }
            }

            return "";
        }
    }
});
