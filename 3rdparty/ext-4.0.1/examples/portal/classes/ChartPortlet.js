Ext.define('Ext.app.ChartPortlet', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.chartportlet',

    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.theme.Base',
        'Ext.chart.series.Series',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric'
    ],

    generateData: function(){
        var data = [{
                name: 'x',
                djia: 10000,
                sp500: 1100
            }],
            i;
        for (i = 1; i < 50; i++) {
            data.push({
                name: 'x',
                sp500: data[i - 1].sp500 + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7),
                djia: data[i - 1].djia + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7)
            });
        }
        return data;
    },

    initComponent: function(){

        Ext.apply(this, {
            layout: 'fit',
            width: 600,
            height: 300,
            items: {
                xtype: 'chart',
                animate: false,
                shadow: false,
                store: Ext.create('Ext.data.JsonStore', {
                    fields: ['name', 'sp500', 'djia'],
                    data: this.generateData()
                }),
                legend: {
                    position: 'bottom'
                },
                axes: [{
                    type: 'Numeric',
                    position: 'left',
                    fields: ['djia'],
                    title: 'Dow Jones Average',
                    label: {
                        font: '11px Arial'
                    }
                }, {
                    type: 'Numeric',
                    position: 'right',
                    grid: false,
                    fields: ['sp500'],
                    title: 'S&P 500',
                    label: {
                            font: '11px Arial'
                        }
                }],
                series: [{
                    type: 'line',
                    lineWidth: 1,
                    showMarkers: false,
                    fill: true,
                    axis: 'left',
                    xField: 'name',
                    yField: 'djia',
                    style: {
                        'stroke-width': 1
                    }
                }, {
                    type: 'line',
                    lineWidth: 1,
                    showMarkers: false,
                    axis: 'right',
                    xField: 'name',
                    yField: 'sp500',
                    style: {
                        'stroke-width': 1
                    }
                }]
            }
        });

        this.callParent(arguments);
    }
});
