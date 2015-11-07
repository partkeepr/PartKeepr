/**
 * Represents the stock history grid.
 */
Ext.define('PartKeepr.AbstractStockHistoryGrid', {
    extend: 'PartKeepr.BaseGrid',

    pageSize: 25,

    defineColumns: function () {
        this.columns = [
            {
                header: "",
                xtype: 'actioncolumn',
                renderer: function (val, p, rec) {
                    if (rec.get("stockLevel") < 0) {
                        return '<span title="' + i18n(
                                "Parts removed") + '" style="vertical-align: top;" class="web-icon brick_delete">ad</span>';
                    } else {
                        return '<span title="' + i18n(
                                "Parts added") + '" style="vertical-align: top;" class="web-icon brick_add"></span>';
                    }
                },
                width: 20
            },
            {header: i18n("Date"), dataIndex: 'dateTime', width: 120},
            {
                header: i18n("User"),
                flex: 1,
                minWidth: 80,
                renderer: function (val, p, rec) {
                    if (rec.getUser() !== null) {
                        return rec.getUser().get("username");
                    }
                },
                editor: {
                    xtype: 'UserComboBox'
                }
            },
            {
                header: i18n("Amount"), dataIndex: 'stockLevel', width: 50,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            },

            {
                header: i18n("Price"),
                editor: {
                    xtype: 'CurrencyField',
                    allowBlank: false
                },
                dataIndex: 'price',
                width: 60,
                renderer: function (val, p, rec) {
                    if (rec.get("dir") == "out") {
                        return "-";
                    } else {
                        return PartKeepr.getApplication().formatCurrency(val);
                    }
                }
            }, {
                header: i18n("Comment"),
                dataIndex: 'comment',
                renderer: Ext.util.Format.htmlEncode,
                width: 60,
                editor: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            }
        ];
    },
    model: 'PartKeepr.StockBundle.Entity.StockEntry',
    /**
     * Initializes the stock history grid.
     */
    initComponent: function () {

        this.defineColumns();

        var config = {
            autoLoad: false,
            autoSync: true,
            remoteFilter: true,
            remoteSort: true,
            model: this.model,
            sorters: [
                {
                    property: 'dateTime',
                    direction: 'DESC'
                }
            ],
            pageSize: this.pageSize
        };

        this.store = Ext.create('Ext.data.Store', config);

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        this.plugins = [this.editing];

        this.bottomToolbar = Ext.create("PartKeepr.PagingToolbar", {
            store: this.store,
            enableOverflow: true,
            dock: 'bottom',
            displayInfo: false,
            grid: this
        });


        this.dockedItems = [];
        this.dockedItems.push(this.bottomToolbar);

        this.editing.on("beforeedit", this.onBeforeEdit, this);

        this.callParent();
    },
    /**
     * Called before editing a cell. Checks if the user may actually make the requested changes.
     *
     * @param e Passed from ExtJS
     * @returns {Boolean}
     */
    onBeforeEdit: function (editor, context, eOpts) {
        var sameUser = false;

        // Checks if the usernames match
        if (context.record.getUser() !== null) {
            sameUser = context.record.getUser().getId() == PartKeepr.getApplication().getLoginManager().getUser().getId();
        }

        switch (context.field) {
            case "price":
                // Check the direction is "out". If yes, editing the price field is not allowed
                if (context.record.get("direction") == "out") {
                    return false;
                }

                // If it's not the same user or an admin, editing is not allowed
                if (!sameUser && !PartKeepr.getApplication().isAdmin()) {
                    return false;
                }
                break;
            case "stockLevel":
                // Only an admin may edit the amount. Regular users must put the stock back in manually.
                if (!PartKeepr.getApplication().isAdmin()) {
                    return false;
                }
                break;
            case "user":
                if (!PartKeepr.getApplication().isAdmin()) {
                    return false;
                }
                break;
            case "comment":
                if (!sameUser && !PartKeepr.getApplication().isAdmin()) {
                    return false;
                }
                break;
            default:
                return true;
        }

        return true;
    }
});
