Ext.define("PartKeepr.Components.Part.Details.Overview", {
    extend: "Ext.panel.Panel",

    xtype: "PartDetailsOverview",

    tpl: [
        '<h1>{name}</h1>',
        '<h2>{description}</h2>',
        '<hr/>',
        '<p><span class="x-fa fa-folder"/> {categoryPath}</p>',
        '<hr/>',
        '<p><span class="x-fa fa-database"/> Stock Level: {stockLevel} <span style="margin-left: 16px;" class="x-fa fa-arrow-circle-down"/> Minimum Stock Level {minStockLevel}</p>',
    ],

    setPart: function (part) {
        this.setData(part.getData());
    }
});