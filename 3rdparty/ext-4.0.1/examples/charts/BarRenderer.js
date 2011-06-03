Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Bar Renderer',
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
            style: 'background:#fff',
            shadow: false,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'bottom',
                fields: ['data1'],
                label: {
                   renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Number of Hits',
                minimum: 0
            }, {
                type: 'Category',
                position: 'left',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'bar',
                axis: 'bottom',
                label: {
                    display: 'insideEnd',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true
                },
                xField: 'name',
                yField: ['data1'],
                //color renderer
                renderer: function(sprite, record, attr, index, store) {
                    var fieldValue = Math.random() * 20 + 10;
                    var value = (record.get('data1') >> 0) % 5;
                    var color = ['rgb(213, 70, 121)', 
                                 'rgb(44, 153, 201)', 
                                 'rgb(146, 6, 157)', 
                                 'rgb(49, 149, 0)', 
                                 'rgb(249, 153, 0)'][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });
});
