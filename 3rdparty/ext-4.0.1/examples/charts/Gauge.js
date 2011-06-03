Ext.require(['Ext.chart.*', 'Ext.chart.axis.Gauge', 'Ext.chart.series.*', 'Ext.Window']);

Ext.onReady(function () {

    Ext.create('Ext.Window', {
        width: 800,
        height: 250,
        minWidth: 650,
        minHeight: 225,
        title: 'Gauge Charts',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData(1));
                store3.loadData(generateData(1));
                store4.loadData(generateData(1));
            }
        }],
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'elasticIn',
                duration: 1000
            },
            store: store1,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: -10
            }],
            series: [{
                type: 'gauge',
                field: 'data1',
                donut: false,
                colorSet: ['#F49D10', '#ddd']
            }]
        }, {
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: store3,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 7
            }],
            series: [{
                type: 'gauge',
                field: 'data1',
                donut: 30,
                colorSet: ['#82B525', '#ddd']
            }]
        }, {
            xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'bounceOut',
                duration: 500
            },
            store: store4,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 7
            }],
            series: [{
                type: 'gauge',
                field: 'data1',
                donut: 80,
                colorSet: ['#3AA8CB', '#ddd']
            }]
        }]
    }).show();
    
});