Ext.define('Ext.migration.Dashboard', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.migration-dashboard',
    requires: 'Ext.chart.*',
    
    title: 'Dashboard',
    layout: 'fit',
    
    initComponent: function() {
        Ext.define('OrderStats', {
            extend: 'Ext.data.Model',
            fields:['name', 'orders']
        });
        var store = new Ext.data.Store({
            model: 'OrderStats',
            data: [
                {name:'Q1 \'10', orders: 45},
                {name:'Q2 \'10', orders: 123},
                {name:'Q3 \'10', orders: 145},
                {name:'Q4 \'10', orders: 131},
                {name:'Q1 \'11', orders: 170},
                {name:'Q2 \'11', orders: 204},
                {name:'Q3 \'11', orders: 199},
                {name:'Q4 \'11', orders: 234}
            ]
        });
        
        this.items = {
            xtype: 'chart',
            style: 'background:#fff',
            store: store,
            shadow: true,
            axes: [{
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['orders'],
                title: 'Orders',
                minorTickSteps: 1,
                grid: true
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Quarter'
            }],
            series: [{
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                tips: {
                    width: 130,
                    renderer: function(storeItem, item) {
                        this.setTitle('Received ' + storeItem.get('orders') + 
                            ' orders in ' + storeItem.get('name'));
                    }
                },
                axis: 'left',
                xField: 'name',
                yField: 'orders',
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }]
        };
        
        this.callParent(arguments);
    }
});