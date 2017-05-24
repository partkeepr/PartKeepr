Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.RenderersGrid", {
    extend: "Ext.grid.Panel",

    xtype: 'partkeepr.renderersGrid',

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },

    bbar: [{
        itemId: "addRenderer",
        text: i18n("Add")
    }, {
        itemId: "removeRenderer",
        text: i18n("Remove"),
        disabled: true,
        bind: {
            disabled: '{!renderers.selection}'
        }
    }],

    reference: "renderers",

    initComponent: function ()
    {
        this.rendererStore = Ext.create("Ext.data.Store");

        this.columns = [{
            text: i18n("Renderer"),
            dataIndex: 'rtype',
            renderer: function (val, q, rec)
            {
                var targetClass = PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(
                    rec.get("rtype"));

                if (typeof(targetClass) === "undefined")
                {
                    return i18n("unknown");
                }

                if (targetClass.rendererName)
                {
                    return targetClass.rendererName;
                }

                return targetClass.$className;
            },
            editor: {
                xtype: 'combobox',
                store: this.rendererStore,
                displayField: 'rendererName',
                valueField: 'rendererType',
                queryMode: 'local',
                forceSelection: true,
                editable: false,
                clicksToEdit: 1,
                matchFieldWidth: false,
                listConfig: {
                    itemTpl: [
                        '<div>{rendererName}: {rendererDescription}</div>'
                    ]
                }
            },
            flex: 1
        }, {
            text: i18n("Description"),
            renderer: function (val, q, rec)
            {
                var targetClass = PartKeepr.Components.Grid.Renderers.RendererRegistry.lookupRenderer(
                    rec.get("rtype"));

                if (typeof(targetClass) === "undefined")
                {
                    return i18n("unknown");
                }

                if (targetClass.rendererDescription)
                {
                    return targetClass.rendererDescription;
                }

                return targetClass.$className;
            },
            flex: 2
        }, {
            text: i18n("Configuration"),
            dataIndex: "config",
            editor: {
                xtype: 'textarea'
            }
        }, {
            xtype: 'actioncolumn',
            items: [
                {
                    iconCls: 'fugue-icon pencil',
                    tooltip: i18n("Configure"),
                    handler: function (view, rowIndex, colIndex, item, e, record)
                    {
                        var config = record.get("config");

                        if (typeof config === "undefined")
                        {
                            config = {};
                            record.set("config", config);
                        }

                        this.configure(record);
                    },
                    scope: this
                }
            ]
        }];

        this.callParent(arguments);

        this.down("#addRenderer").on("click", this.addRenderer, this);
        this.down("#removeRenderer").on("click", this.removeRenderer, this);
    },
    configure: function (record)
    {
        var i = Ext.create("PartKeepr.Components.Widgets.ColumnConfigurator.RendererConfigurationForm", {
            renderer: record.get("rtype"),
            rendererConfiguration: record.get("config")
        });

        var j = Ext.create("Ext.window.Window", {
            layout: 'fit',
            minWidth: 500,
            minHeight: 200,
            title: i18n("Renderer Configuration"),
            modal: true,
            items: [i]
        });

        i.down("#apply").on("click", function ()
        {
            record.set("config", Ext.encode(i.getForm().getValues()));
            j.destroy();

        });

        i.down("#cancel").on("click", function ()
        {
            j.destroy();
        });

        j.show();
    },
    setSourceModel: function (sourceModel)
    {
        this.sourceModel = sourceModel;

        var rendererClasses = PartKeepr.Components.Grid.Renderers.RendererRegistry.getRenderersForEntity(
            this.sourceModel.$className);

        for (var i = 0; i < rendererClasses.length; i++)
        {
            this.rendererStore.add({
                rendererClass: rendererClasses[i],
                rendererName: Ext.ClassManager.get(rendererClasses[i]).rendererName,
                rendererDescription: Ext.ClassManager.get(rendererClasses[i]).rendererDescription,
                rendererType: PartKeepr.Components.Grid.Renderers.RendererRegistry.getRType(rendererClasses[i])
            });
        }
    },
    addRenderer: function ()
    {
        this.getStore().add({config: "null"});
    },
    removeRenderer: function ()
    {
        var selection = this.getSelection();

        if (selection.length !== 1)
        {
            return;
        }

        this.getStore().remove(selection[0]);
    }
});
