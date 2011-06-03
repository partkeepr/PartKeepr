Ext.migration.OrdersGrid = Ext.extend(Ext.grid.GridPanel, {
    title: 'Orders',
    xtype: 'grid',
    autoExpandColumn: 'desc',

    columns: [{
        id: 'id', 
        header: 'Order ID', 
        width: 100, 
        sortable: true
    },{
        id: 'desc', 
        header: 'Description', 
        width: 400, 
        sortable: true
    },{
        id: 'total', 
        header: 'Total', 
        width: 150, 
        sortable: true, 
        align: 'right', 
        renderer: 'usMoney'
    },{
        id: 'dt', 
        header: 'Order Date', 
        width: 150, 
        sortable: true, 
        align: 'right', 
        renderer: Ext.util.Format.dateRenderer('m/d/Y')
    }]
});

// BEGIN-COMPAT
//Ext.reg('migration-ordersgrid', Ext.migration.OrdersGrid);
Ext.reg('migration-ordersgrid', 'Ext.migration.OrdersGrid');
// END-COMPAT