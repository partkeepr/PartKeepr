Ext.migration.Dashboard = Ext.extend(Ext.Panel, {
    title: 'Dashboard',
    layout: 'fit',
    
    initComponent: function() {
        var store = new Ext.data.JsonStore({
            fields:['name', 'orders'],
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

        // BEGIN-COMPAT
        // The Ext 4 charts API is much more extensive and expressive then the 3.x API
        // and compatibility is simply not feasible, so manual upgrading is required.
        
//        this.items = [{
//            xtype: 'linechart',
//            store: store,
//            xField: 'name',
//            yField: 'orders',
//            yAxis: new Ext.chart.NumericAxis({
//                title: 'Orders'
//            })
//        }];
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
                minorTickSteps: 4,
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
        // END-COMPAT
        
        Ext.migration.Dashboard.superclass.initComponent.call(this);
    }
});

// BEGIN-COMPAT
//Ext.reg('migration-dashboard', Ext.migration.Dashboard);
Ext.reg('migration-dashboard', 'Ext.migration.Dashboard');
// END-COMPAT