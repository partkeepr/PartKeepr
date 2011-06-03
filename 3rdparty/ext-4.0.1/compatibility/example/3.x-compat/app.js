Ext.migration.App = function() {
    return {
        init: function() {
            Ext.QuickTips.init();
            
            this.ordersStore = new Ext.data.JsonStore({
                root: 'orders',
                fields: [
                   {name: 'id'},
                   {name: 'desc'},
                   {name: 'total', type: 'float'},
                   {name: 'dt', type: 'date', dateFormat: 'n/j/Y'}
                ],
                data: {orders: [
                    {id:101, desc:'This is order 101.', total:123.45, dt: '1/12/2011'},
                    {id:102, desc:'This is order 102.', total:345.75, dt: '3/1/2011'},
                    {id:103, desc:'This is order 103.', total:153.43, dt: '4/8/2011'},
                    {id:104, desc:'This is order 104.', total:865.28, dt: '4/21/2011'}
                ]}
            });
            
            new Ext.Viewport({
                layout:'border',
                items:[{
                    xtype: 'box',
                    id: 'app-header',
                    region:'north',
                    html: 'Ext JS Migration Demo <span class="subtitle">3.x Compat Version</span>',
                    height: 50
                },{
                    region: 'center',
                    layout: 'border',
                    border: false,
                    items: [{
                        xtype: 'migration-navtree',
                        id: 'app-navtree',
                        listeners: {
                            'navclick': function(tree, nodeId) {
                                this.syncNavigation(nodeId);
                            },
                            // BEGIN-COMPAT
//                            'load': function(node) {
//                                // this fires after the root node has loaded
//                                this.syncNavigation.defer(100, this, [node.firstChild.id]);
//                            },
                            'load': function(store, node) {
                                // this fires after the root node has loaded
                                this.syncNavigation.defer(100, this, [node.firstChild.data.id]);
                            },
                            // END-COMPAT
                            scope: this
                        }
                    },{
                        region: 'center',
                        xtype: 'tabpanel',
                        id: 'app-tabpanel',
                        activeItem: 0,
                        items: [{
                            xtype: 'migration-dashboard',
                            id: 'tab-dashboard'
                        }],
                        listeners: {
                            'tabchange': function(tabs, tab) {
                                this.syncNavigation(tab.id);
                            },
                            scope: this
                        }
                    }]
                }]
            });
        },
        
        showOrderForm: function() {
            if (!this.orderWindow) {
                this.orderWindow = new Ext.migration.OrderWindow({
                    store: this.ordersStore
                });
            }
            this.orderWindow.show();
        },
        
        syncNavigation: function(navItemId) {
            var navId = navItemId.split('-')[1],
                tree = Ext.getCmp('app-navtree'),
                tabs = Ext.getCmp('app-tabpanel');
            
            if (navId == 'orders' && !this.ordersTab) {
                this.ordersTab = tabs.add({
                    xtype: 'migration-orderstab',
                    id: 'tab-orders',
                    store: this.ordersStore,
                    listeners: {
                        'addorder': function() {
                            this.showOrderForm();
                        },
                        scope: this
                    }
                });
            }
            
            var node = tree.getNodeById('node-'+navId);
            if (node) {
                tree.getSelectionModel().select(node);
            }
            
            Ext.getCmp('app-tabpanel').setActiveTab('tab-'+navId);
        }
    }
}();
