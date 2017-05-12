/**
 * This class defines a window which is used to in- or decrease the stock level for a specific part. Logic and service
 * calls are not contained in this window, and need to be implemented from the caller.
 */
Ext.define('PartKeepr.Components.Part.AddRemoveStockWindow', {
    extend: 'Ext.window.Window',

    // Configurations
    constrainHeader: true,
    width: 600,
    overflowY: 'auto',
    resizable: false,

    // We set the title later
    title: i18n("Add/Remove Stock"),

    layout: 'fit',
    bodyStyle: {
        padding: "5px"
    },

    record: null,

    /*
     * Initializes the window with the quantity and price fields. The price field is hidden when a stock decrease
     * happens.
     */
    initComponent: function ()
    {

        this.quantityField = Ext.create("Ext.form.field.Number", {
            value: 0, // The initial value is 0, to indicate that this is a number field
            //minValue: 1, // The minimum value is 1. That way we force the user to enter a value
            width: 100,
            listeners: {
                specialkey: {
                    fn: function (field, e)
                    {
                        if (e.getKey() == e.ENTER) {
                            this.onOKClick();
                        }
                    },
                    scope: this
                }
            }
        });

        this.commentField = Ext.create("Ext.form.field.Text", {
            anchor: '100%',
            fieldLabel: i18n("Comment"),
            maxLength: 255,
            enforceMaxLength: true,
            listeners: {
                specialkey: {
                    fn: function (field, e)
                    {
                        if (e.getKey() == e.ENTER) {
                            this.onOKClick();
                        }
                    },
                    scope: this
                }
            }
        });

        this.infoGrid = Ext.create("PartKeepr.Components.Part.PartInfoGrid", {
            mode: 'short',
            padding: {
                bottom: "5px"
            }
        });

        this.infoGrid.applyFromPart(this.record);

        this.form = Ext.create("Ext.form.Panel", {
            border: false,
            bodyStyle: 'background-color: transparent',
            items: [
                this.infoGrid,
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: i18n("Quantity"),
                    layout: 'hbox',
                    items: [
                        this.quantityField, {
                            width: 75,
                            xtype: 'displayfield',
                            margin: "0 0 0 5",
                            value: this.partUnitName
                        }
                    ]
                }, this.commentField
            ]
        });

        this.items = this.form;

        this.addButton = Ext.create("Ext.button.Button", {
            text: i18n("Add"),
            iconCls: 'web-icon brick_add',
            handler: this.onAddClick,
            scope: this
        });

        this.removeButton = Ext.create("Ext.button.Button", {
            text: i18n("Remove"),
            iconCls: 'web-icon brick_delete',
            handler: this.onRemoveClick,
            scope: this
        });

        this.buttons = [
            {
                text: i18n("Close"),
                handler: this.onCloseClick,
                iconCls: "web-icon cancel",
                scope: this
            }, this.addButton, this.removeButton
        ];
        this.on("show", function ()
        {
            this.quantityField.focus();
            this.quantityField.selectText(0);
        }, this, {
            delay: 100
        });
        this.callParent();
    },
    /**
     * Closes the window
     */
    onCloseClick: function ()
    {
        this.close();
    },
    onAddClick: function ()
    {
        if (this.form.getForm().isValid()) {
            var qty = Math.abs(this.quantityField.getValue());

            this.record.callPutAction("addStock", {
            quantity: qty,
            comment: this.commentField.getValue()
        }, null, true);
        this.close();
        }


    },
    onRemoveClick: function ()
    {
        if (this.form.getForm().isValid()) {
            var qty = Math.abs(this.quantityField.getValue());

            this.record.callPutAction("removeStock", {
            quantity: qty,
            comment: this.commentField.getValue()
        }, null, true);
        this.close();
        }


    },
    /**
     * Checks if the form is valid. If yes, execute the callback.
     */
    onOKClick: function ()
    {
        if (this.form.getForm().isValid()) {
            var qty = this.quantityField.getValue();

            if (qty < 0) {
                this.onRemoveClick();
            } else {
                if (qty > 0) {
                    this.onAddClick();
                } else {
                    Ext.Msg.alert(i18n("Invalid quantity"), i18n("The quantity must be not equal to 0"));
                }
            }
        }
    }
});
