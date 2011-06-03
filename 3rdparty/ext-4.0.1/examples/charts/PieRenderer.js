Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    store1.loadData(generateData(5));

    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Pie Renderer Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData(5));
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: store1,
            series: [{
                type: 'pie',
                animate: true,
                angleField: 'data1', //bind angle span to visits
                lengthField: 'data2', //bind pie slice length to views
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'name',   //bind label text to name
                    display: 'rotate', //rotate labels (also middle, out).
                    font: '14px Arial',
                    contrast: true
                },                                
                style: {
                    'stroke-width': 1,
                    'stroke': '#fff'
                },
                //add renderer
                renderer: function(sprite, record, attr, index, store) {
                    var value = (record.get('data1') >> 0) % 9;
                    var color = [ "#94ae0a", "#115fa6","#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });
});
