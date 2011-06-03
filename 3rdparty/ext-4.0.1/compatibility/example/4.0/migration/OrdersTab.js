Ext.define('Ext.migration.OrdersTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.migration-orderstab',
    requires: 'Ext.migration.OrdersGrid',

    title: 'Orders',
    layout: 'border',
    
    initComponent: function() {
        this.addEvents('addorder');
        
        this.tbar = [{
            xtype: 'button',
            text: 'New Order',
            handler: function() {
                this.fireEvent('addorder', this);
            },
            scope: this
        }];
        
        this.items = [{
            xtype: 'migration-ordersgrid',
            id: 'orders-grid',
            region: 'center',
            store: this.store,
            border: false
        },{
            region: 'east',
            id: 'order-view',
            html: '<p>Select an order to view...</p>',
            width: 300,
            split: true,
            border: false
        }];
        
        this.tpl = new Ext.Template([
                '<h1>Order #{id}</h1>',
                '<p>{desc}</p>',
                '<p>Total: {total:usMoney}</p>',
                '<p>Date: {dt:date("m/d/Y")}</p>'
            ].join(''));
        
        this.tpl.compile();
        this.callParent(arguments);
        this.ordersGrid = this.getComponent('orders-grid');
        this.orderView = this.getComponent('order-view');
        
        this.ordersGrid.getSelectionModel().on('select', function(selModel, model, idx) {
            var rec = this.store.getAt(idx);
            this.tpl.overwrite(this.orderView.body, rec.data);
        }, this);
    }
});