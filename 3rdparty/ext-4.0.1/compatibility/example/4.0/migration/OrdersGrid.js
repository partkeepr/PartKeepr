Ext.define('Ext.migration.OrdersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.migration-ordersgrid',
    
    title: 'Orders',
    xtype: 'grid',

    columns: [{
        dataIndex: 'id', 
        header: 'Order ID', 
        width: 100, 
        sortable: true
    },{
        dataIndex: 'desc', 
        header: 'Description', 
        width: 400, 
        sortable: true, 
        flex: 1
    },{
        dataIndex: 'total', 
        header: 'Total', 
        width: 150, 
        sortable: true, 
        align: 'right', 
        renderer: 'usMoney'
    },{
        dataIndex: 'dt', 
        header: 'Order Date', 
        width: 150, 
        sortable: true, 
        align: 'right', 
        renderer: Ext.util.Format.dateRenderer('m/d/Y')
    }]
});