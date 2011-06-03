Ext.require('Ext.chart.*');
Ext.require('Ext.layout.container.Fit');

Ext.onReady(function () {
    store1.loadData(generateData(6, 20));

    var donut = false,
        panel1 = Ext.create('widget.panel', {
        width: 800,
        height: 600,
        title: 'Semester Trends',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData(6, 20));
            }
        }, {
            enableToggle: true,
            pressed: false,
            text: 'Donut',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.series.first().donut = pressed ? 35 : false;
                chart.refresh();
            }
        }],
        items: {
            xtype: 'chart',
            id: 'chartCmp',
            animate: true,
            store: store1,
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'data1',
                showInLegend: true,
                donut: donut,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
                    var total = 0;
                    store1.each(function(rec) {
                        total += rec.get('data1');
                    });
                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
                  }
                },
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }]
        }
    });
});
