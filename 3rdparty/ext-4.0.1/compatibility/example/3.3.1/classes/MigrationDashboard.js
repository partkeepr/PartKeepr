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
        
        this.items = [{
            xtype: 'linechart',
            store: store,
            xField: 'name',
            yField: 'orders',
            yAxis: new Ext.chart.NumericAxis({
                title: 'Orders'
            })
        }];
        
        Ext.migration.Dashboard.superclass.initComponent.call(this);
    }
});

Ext.reg('migration-dashboard', Ext.migration.Dashboard);