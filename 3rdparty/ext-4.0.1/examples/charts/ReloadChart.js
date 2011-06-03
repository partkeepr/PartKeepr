Ext.require('Ext.chart.*');
Ext.require('Ext.layout.container.Fit');

Ext.onReady(function () {
    var panel1 = Ext.create('widget.panel', {
        width: 800,
        height: 400,
        title: 'Column Chart with Reload - Hits per Month',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData());
            }
        }],
        items: {
            xtype: 'chart',
            animate: true,
            shadow: true,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                title: 'Hits',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Months',
                label: {
                    rotate: {
                        degrees: 270
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['data1'],
                tips: {
                    trackMouse: true,
                    width: 74,
                    height: 38,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('name') + '<br />' + storeItem.get('data1'));
                    }
                },
                style: {
                    fill: '#38B8BF'
                }
            }]
        }
    });
});
