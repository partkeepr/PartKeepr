Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.RendererConfigurationForm", {
    extend: "Ext.form.Panel",

    renderer: null,
    rendererConfiguration: null,

    scrollable: true,

    bbar: {
        items: [{
            xtype: 'button',
            itemId: "apply",
            text: i18n("Apply")
        }, {
            xtype: 'button',
            itemId: "cancel",
            text: i18n("Cancel")
        }]
    },
    defaults: {
        labelWidth: 200
    },
    initComponent: function ()
    {
        var renderer = PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(this.renderer);


        if (typeof(renderer) !== undefined)
        {
            this.items = this.createFormConfig(renderer);

        }

        if (typeof(this.rendererConfiguration) === "string") {
            this.rendererConfiguration = Ext.decode(this.rendererConfiguration);
        }

        this.callParent(arguments);
        this.getForm().setValues(this.rendererConfiguration);

    },
    createFormConfig: function (renderer)
    {
        var configIterator, config, field, fields = [], useDescriptionElemement;

        for (configIterator in renderer.rendererConfigs)
        {
            config = renderer.rendererConfigs[configIterator];

            Ext.applyIf(config, {
                type: "",
                description: ""
            });

            useDescriptionElemement = false;

            switch (config.type)
            {
                case "boolean":
                    field = {
                        xtype: 'checkbox',
                        name: configIterator,
                        boxLabel: config.description,
                        fieldLabel: config.title
                    };

                    break;
                case "string":
                    field = {
                        xtype: 'textfield',
                        name: configIterator,
                        fieldLabel: config.title,
                        title: config.description
                    };

                    useDescriptionElemement = true;
                    break;
                case "partParameter":
                    field = {
                        xtype: 'PartParameterComboBox',
                        name: configIterator,
                        fieldLabel: config.title
                    };
                    break;
                default:
                    field = {};
            }

            fields.push(field);

            if (useDescriptionElemement)
            {
                fields.push({
                    xtype: 'displayfield',
                    value: config.description,
                    hideEmptyLabel: false
                });
            }
        }

        if (fields.length === 0) {
            fields.push({
                    xtype: 'displayfield',
                    value: i18n("The selected renderer cannot be configured")
                });
        }

        return fields;
    }
});
