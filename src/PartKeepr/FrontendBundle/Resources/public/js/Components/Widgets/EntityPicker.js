Ext.define("PartKeepr.Widgets.EntityPicker", {
    extend: "PartKeepr.Widgets.EntityQueryPanel",

    initComponent: function ()
    {
        this.callParent(arguments);

        var bottomToolbar = Ext.create("Ext.toolbar.Paging", {
            store: this.down("#grid").store,
            enableOverflow: true,
            dock: 'bottom',
            displayInfo: false
        });

        bottomToolbar.insert(0, [{
            xtype: 'button',
            iconCls: "fugue-icon tick",
            text: i18n("Select entity"),
            itemId: "selectEntity",
            disabled: true,
            handler: this.onEntitySelect,
            scope: this
        }, '-']);

        this.down("#grid").addDocked(bottomToolbar);
        this.down("#grid").on("selectionchange", this.onSelectionChange, this);
        this.down("#grid").on("itemdblclick", this.onEntitySelect, this);
    },
    onSelectionChange: function (grid, selected) {
        if (selected.length != 1) {
            this.down("#selectEntity").disable();
        } else {
            this.down("#selectEntity").enable();
        }
    },
    onEntitySelect: function () {
        this.fireEvent("entityselect", this.down("#grid").getSelection()[0]);
    },
});
