Ext.define("PartKeepr.Components.Part.Details.Overview", {
    extend: "Ext.panel.Panel",

    xtype: "PartDetailsOverview",

    tpl: [
        '<h1>{name}</h1>',
        '<h2>{description}</h2>',
        '<hr/>',
        '<p><span class="x-fa fa-folder"/> {categoryPath}</p>',
        '<hr/>',
        '<table><tr>',
        '<td><span class="x-fa fa-database"/> Stock Level: {stockLevel}</td>',
        '<td> <span style="margin-left: 16px;" class="x-fa fa-arrow-circle-down"/> Minimum Stock Level {minStockLevel}</td>',
        '</tr><tr>',
        '<td><span class="x-fa fa-archive"/> Storage Location: {storageLocation.name}</td>',
        '<td> <span style="margin-left: 16px;" class="x-fa fa-info-circle"/> Footprint: {footprint.name}</td>',
        '</tr><tr>',
        '<td><span class="x-fa fa-info-circle"/> Status: {status}</td>',
        '<td><span style="margin-left: 16px;" class="x-fa fa-info-circle"/> Condition: {condition}</td>',
        '</tr><tr>',
        '<td colspan="2"><span class="x-fa fa-info-circle"/> Internal Part Number: {internalPartNumber}</td>',
        '</tr></table>',
        '<hr/>',
        '<p>{comment}</p>'

    ],

    setPart: function (part) {
        this.setData(part.getData(true));
    }
});