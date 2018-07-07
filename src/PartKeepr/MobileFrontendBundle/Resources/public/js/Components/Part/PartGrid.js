Ext.define("PartKeepr.Components.Part.PartGrid", {
    extend: "Ext.grid.Grid",

    xtype: 'PartGrid',

    store: {
        type: 'PartStore'
    },

    plugins: {
        type: 'pagingtoolbar'
    },

    columns: [{
        text: i18n("Name"),
        dataIndex: 'name',
        flex: 1,
        minWidth: 150
    }],
    listeners: {
        itemtap: function (view, index, target, part) {
            this.up("PartPanel").getController().showPartDetails(part);
        }
    }
});