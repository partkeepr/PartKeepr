Ext.define('PartKeepr.StatisticsChartPanel', {
    extend: 'Ext.form.Panel',
    title: i18n("Statistics Chart"),

    layout: 'anchor',
    bodyStyle: 'background:#DBDBDB;padding: 15px;',

    initComponent: function ()
    {
        this.chart = Ext.create("PartKeepr.StatisticsChart", {anchor: '100% -60'});

        this.dateSelector1 = Ext.create("Ext.form.field.Date", {
            style: 'margin-top: 10px',
            fieldLabel: i18n("From"),
            listeners: {
                change: Ext.bind(this.onDateChanged, this)
            }
        });

        this.dateSelector2 = Ext.create("Ext.form.field.Date", {
            fieldLabel: i18n("To"),
            listeners: {
                change: Ext.bind(this.onDateChanged, this)
            }
        });

        this.items = [this.chart, this.dateSelector1, this.dateSelector2];

        this.reloadDates();

        this.callParent();
    },
    onDateChanged: function ()
    {
        this.chart.setStart(this.dateSelector1.getValue());
        this.chart.setEnd(this.dateSelector2.getValue());
        this.chart.store.load();
    },
    reloadDates: function ()
    {
        var options = {
            url: PartKeepr.getBasePath() + "/api/statistics/range",
            method: "GET",
            callback: Ext.bind(this.onReloadDates, this)
        };

        Ext.Ajax.request(options);
    },
    onReloadDates: function (options, success, response)
    {
        var data = Ext.decode(response.responseText);

        if (data.startDate === null || data.endDate === null) {
            Ext.Msg.alert(
                i18n("Unable to retrieve the statistic data"),
                i18n(
                    "The system was unable to retrieve the statistic data. The most probable cause is that the CreateStatisticSnapshot.php cronjob is not running."));
            return;
        }

        var start = Ext.Date.parse(data.startDate, "Y-m-d H:i:s");
        var end = Ext.Date.parse(data.endDate, "Y-m-d H:i:s");

        this.dateSelector1.setMinValue(start);
        this.dateSelector1.setMaxValue(end);
        this.dateSelector1.suspendEvents();

        this.dateSelector1.setValue(start);
        this.dateSelector1.resumeEvents();


        this.dateSelector2.setMinValue(start);
        this.dateSelector2.setMaxValue(end);

        this.dateSelector2.suspendEvents();
        this.dateSelector2.setValue(end);
        this.dateSelector2.resumeEvents();

        this.chart.setStart(start);
        this.chart.setEnd(end);
        this.chart.store.load();
    },
    statics: {
        iconCls: 'web-icon chart_bar',
        title: i18n('Chart'),
        closable: true,
        menuPath: [{text: i18n("View")}, {text: i18n("Statistics"), iconCls: "web-icon chart_bar"}]
    }
});
