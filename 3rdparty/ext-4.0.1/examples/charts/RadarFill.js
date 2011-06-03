Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    store1.loadData(generateData());

    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        shadow: false,
        maximizable: true,
        style: 'overflow: hidden;',
        title: 'Filled Radar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData());
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
            theme: 'Category2',
            insetPadding: 20,
            animate: true,
            store: store1,
            legend: {
                position: 'right'
            },
            axes: [{
                type: 'Radial',
                position: 'radial',
                label: {
                    display: true
                }
            }],
            series: [{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data1',
                style: {
                    opacity: 0.4
                }
            },{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data2',
                style: {
                    opacity: 0.4
                }
            },{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data3',
                style: {
                    opacity: 0.4
                }
            }]
        }
    }); 
});
