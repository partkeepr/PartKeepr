Ext.define("PartKeepr.Components.Widgets.FieldSelectorWindow", {
    extend: 'Ext.window.Window',

    layout: 'fit',
    width: 600,
    height: 600,
    title: i18n("Select Field"),

     /* Constrain the window to fit the viewport */
    constrainHeader: true,

    config: {
        sourceModel: null
    },

    initComponent: function ()
    {
        var modelFieldSelector = Ext.create({
            xtype: 'modelFieldSelector',
            border: false,
            sourceModel: this.sourceModel,
            useCheckBoxes: false,
            flex: 1,
            listeners: {
                selectionchange: function (selectionModel, selected)
                {
                    var addFieldButton = this.down("#addSelectedField");

                    if (selected.length == 1 && selected[0].data.data.type !== "onetomany") {
                        addFieldButton.enable();
                    } else {
                        addFieldButton.disable();
                    }
                },
                scope: this
            }
        });

        modelFieldSelector.on("itemdblclick", function (view, record)
        {
            if (record.data.data && record.data.data.type !== "onetomany") {

                this.fireEvent("fieldSelect", record);
                this.close();
            }
        }, this);

        this.items = modelFieldSelector;

        this.bbar = [
                {
                    xtype: 'button',
                    itemId: 'addSelectedField',
                    disabled: true,
                    text: i18n("Add selected Field"),
                    iconCls: 'fugue-icon flask--plus',
                    handler: function ()
                    {
                        var selection = modelFieldSelector.getSelection();

                        if (selection.length == 1 && selection[0].data.data.type !== "onetomany") {
                            this.fireEvent("fieldSelect", selection[0]);
                            this.close();
                        }
                    },
                    scope: this
                }
            ];

        this.callParent(arguments);
    }
});
