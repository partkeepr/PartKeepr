Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    store1.loadData(generateData(8));
    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Mixed Charts',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData(8));
            }
        }, {
            enableToggle: true,
            pressed: true,
            text: 'Animate',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed ? { easing: 'ease', duration: 500 } : false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            theme: 'Category1',
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1', 'data2', 'data3'],
                title: 'Number of Hits',
                grid: true
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'column',
                axis: 'left',
                xField: 'name',
                yField: 'data1',
                markerConfig: {
                    type: 'cross',
                    size: 3
                }
            }, {
                type: 'scatter',
                axis: 'left',
                xField: 'name',
                yField: 'data2',
                markerConfig: {
                    type: 'circle',
                    size: 5
                }
            }, {
                type: 'line',
                axis: 'left',
                smooth: true,
                fill: true,
                fillOpacity: 0.5,
                xField: 'name',
                yField: 'data3'
            }]
        }
    });
});
