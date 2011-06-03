Ext.migration.OrdersTab = Ext.extend(Ext.Panel, {
    title: 'Orders',
    layout: 'border',
    
    tpl: new Ext.Template([
            '<h1>Order #{id}</h1>',
            '<p>{desc}</p>',
            '<p>Total: {total:usMoney}</p>',
            '<p>Date: {dt:date("m/d/Y")}</p>'
        ].join('')),
    
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
        
        Ext.migration.OrdersTab.superclass.initComponent.call(this);
        
        this.tpl.compile();
        this.ordersGrid = this.get('orders-grid');
        this.orderView = this.get('order-view');
        
        this.ordersGrid.getSelectionModel().on('rowselect', function(selModel, idx) {
            var rec = this.store.getAt(idx);
            this.tpl.overwrite(this.orderView.body, rec.data);
        }, this);
    }
});

Ext.reg('migration-orderstab', Ext.migration.OrdersTab);