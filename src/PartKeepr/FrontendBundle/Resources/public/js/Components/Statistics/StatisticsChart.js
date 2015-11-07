Ext.define('PartKeepr.StatisticsChart', {
    extend: 'Ext.chart.CartesianChart',
    animate: true,
    shadow: true,

    style: 'border: 1px solid #AAA;background-color: white;box-shadow: 5px 5px 0px #aaa',
    legend: {
        position: 'right'
    },
    theme: 'Base',
    series: [
        {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'start',
            yField: 'parts',
            style: {
                    lineWidth: 4
                },
                marker: {
                    radius: 4
                },
            tooltip: {
                trackMouse: true,
                renderer: function (tip, item)
                {
                    tip.update(
                        Ext.Date.format(item.get('start'), "Y-m-d") + ": " + item.get("parts") + " " + i18n(
                            "Parts"));
                }
            },
            title: i18n("Parts"),
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }, {
            type: 'line',
            style: {
                    lineWidth: 4
                },
                marker: {
                    radius: 4
                },
            highlight: {
                size: 7,
                radius: 7
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tip, item)
                {
                    tip.update(Ext.Date.format(item.get('start'), "Y-m-d") + ": " + item.get(
                            "categories") + " " + i18n("Categories"));
                }
            },
            axis: 'left',
            title: i18n("Categories"),
            smooth: true,
            xField: 'start',
            yField: 'categories',
            markerConfig: {
                type: 'circle',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }
    ],
    axes: [
        {
            type: 'numeric',
            minimum: 0,
            position: 'left',
            fields: ['parts', 'categories'],
            title: i18n("Count"),
            minorTickSteps: 1,
            grid: {
                odd: {
                    opacity: 1,
                    fill: '#eee',
                    stroke: '#bbb',
                    'stroke-width': 0.5
                },
                even: {
                    opacity: 1,
                    stroke: '#bbb',
                    'stroke-width': 0.5
                }
            }
        },
        {
            type: 'time',
            dateFormat: 'Y-m-d',
            position: 'bottom',
            aggregateOp: "avg",
            fields: ['start'],
            title: i18n("Date"),
            grid: true
        }
    ],
    store: {
        model: 'PartKeepr.StatisticSample',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: ''
                },
                url: PartKeepr.getBasePath() + "/api/statistics/sampled",
                extraParams: {
                    "start": "2011-01-01 00:00:00",
                    "end": "2011-12-01 23:59:59"
                }
            },
            autoLoad: false
    },
    initComponent: function () {
        this.mask = new Ext.LoadMask({
            msg: i18n("Loading…"),
            target: this
        });
        this.callParent();

        this.store.on("beforeload", Ext.bind(this.onBeforeLoad, this));
        this.store.on("load", Ext.bind(this.onLoad, this));
    },
    /**
     * Sets the start date for the chart. Does not trigger a reload of the dataset.
     * @param date A valid date object
     */
    setStart: function (date)
    {
        if (!(date instanceof Date)) {
            return;
        }
        this.store.getProxy().extraParams.start = Ext.Date.format(date, "Y-m-d H:i:s");
    },
    /**
     * Sets the end date for the chart. Does not trigger a reload of the dataset.
     * @param date A valid date object
     */
    setEnd: function (date)
    {
        if (!(date instanceof Date)) {
            return;
        }

        // Always set the end date to the end of the day
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);

        this.store.getProxy().extraParams.end = Ext.Date.format(date, "Y-m-d H:i:s");
    },
    onBeforeLoad: function () {
        this.mask.show();
    },
    onLoad: function () {
        this.mask.hide();

    }
});
