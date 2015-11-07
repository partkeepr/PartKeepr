Ext.define('PartKeepr.SummaryStatisticsPanel', {
    extend: 'Ext.panel.Panel',
    width: 400,
    height: 250,
    title: i18n("Current Statistics"),
    bodyStyle: {
        padding: "5px"
    },
    layout: 'fit',
    /**
     * Initializes the component and adds a template
     */
    initComponent: function ()
    {
        /**
         * Create the template
         */
        this.tpl = new Ext.XTemplate(
            '<h1>' + i18n("Current Statistics") + '</h1>',
            '<table>',
                '<tr>',
                    '<td style="width: 200px;" class="o">' + i18n("Different Parts") + ':</td>',
                    '<td style="width: 200px;" class="o">{partCount}</td>',
                '</tr>',
                '<tr>',
                    '<td style="width: 200px;" class="e">' + i18n("Total Part Value") + ':</td>',
                    '<td style="width: 200px;" class="e">{[PartKeepr.getApplication().formatCurrency(values.totalPrice)]}</td>',
                '</tr>',
                '<tr>',
                    '<td style="width: 200px;" class="o">' + i18n("Average Part Value") + ':</td>',
                    '<td style="width: 200px;" class="o">{[PartKeepr.getApplication().formatCurrency(values.averagePrice)]}</td>',
                '</tr>',
                '<tr>',
                    '<td style="width: 200px;" class="e">' + i18n("Parts with price") + ':</td>',
                    '<td style="width: 200px;" class="e">{partsWithPrice}</td>',
                '</tr>',
                '<tr>',
                    '<td style="width: 200px;" class="o">' + i18n("Parts without price") + ':</td>',
                    '<td style="width: 200px;" class="o">{partsWithoutPrice}</td>',
                '</tr>',
                '<tr>',
                    '<td class="e">' + i18n("Categories") + ':</td>',
                '<td class="e">{partCategoryCount}</td>',
                '</tr>',
            '</table>',
            '<h1>' + i18n("Counts per Unit") + '</h1>',
            '<table>',
                '<tpl for="units">',
                '<tr>',
                    '<td style="width: 200px;" class="{[xindex % 2 === 0 ? "e" : "o"]}">{partMeasurementUnit.name}</td>',
                    '<td style="width: 200px;" class="{[xindex % 2 === 0 ? "e" : "o"]}">{stockLevel}</td>',
                '</tr>',
                '</tpl>',
            '</table>');

        this.tbButtons = [
            {
                text: i18n("Refresh"),
                handler: this.loadStats,
                scope: this
            }, {
                text: i18n("Close"),
                handler: this.close,
                scope: this
            }
        ];

        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: this.tbButtons
            }
        ];

        this.view = Ext.create("Ext.panel.Panel", {
            autoScroll: true
        });

        this.items = this.view;
        this.callParent();

        this.loadStats();
    },
    loadStats: function ()
    {
        var options = {
            url: PartKeepr.getBasePath() + "/api/statistics/current",
            method: "GET",
            callback: Ext.bind(this.onStatsLoaded, this)
        };

        Ext.Ajax.request(options);
    },
    onStatsLoaded: function (options, success, response)
    {
        var data = Ext.decode(response.responseText);
        this.tpl.overwrite(this.view.getTargetEl(), data);
    },
    statics: {
        iconCls: 'web-icon chart_bar',
        title: i18n('Summary'),
        closable: true,
        menuPath: [{text: i18n("View")}, {text: i18n("Statistics"), iconCls: "web-icon chart_bar"}]
    }
});
