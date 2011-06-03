Ext.migration.App = function() {
    return {
        init: function() {
            Ext.QuickTips.init();
            
            // This store is shared by the order grid and the order view template.
            // The dashboard chart just uses its own dummy data for this example.
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
                    html: 'Ext JS Migration Demo <span class="subtitle">Ext 3.3.1 Version</span>',
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
                            'load': function(node) {
                                // This fires after the root node has loaded, but before the UI elements
                                // have rendered, so we'll defer slightly for the selection to work
                                this.syncNavigation.defer(100, this, [node.firstChild.id]);
                            },
                            scope: this
                        }
                    },{
                        region: 'center',
                        xtype: 'tabpanel',
                        id: 'app-tabpanel',
                        activeItem: 0,
                        items: [{
                            // Start with only the dashboard initially. The orders tab will
                            // be lazy-instantiated the first time the tree node for it is selected.
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
                // Wait until the first time it's requested to create the window
                this.orderWindow = new Ext.migration.OrderWindow({
                    store: this.ordersStore
                });
            }
            this.orderWindow.show();
        },
        
        /*
         * Synchronize navigation among the main UI components. The selected item's tab will 
         * activate and the corresponding tree node will be highlighted.
         */
        syncNavigation: function(navItemId) {
            // NavItemId can be like "tab-orders" or "node-orders" 
            // so we just want the "orders" part here
            var navId = navItemId.split('-')[1],
                tree = Ext.getCmp('app-navtree'),
                tabs = Ext.getCmp('app-tabpanel');
            
            if (navId == 'orders' && !this.ordersTab) {
                // The orders tab is being requested for the first time, so we'll
                // render it and then cache the reference for next time
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
            
            // Highlight the selected item's tree node
            var node = tree.getNodeById('node-'+navId);
            if (node) {
                tree.getSelectionModel().select(node);
            }
            
            // Activate the selected item's tab
            Ext.getCmp('app-tabpanel').setActiveTab('tab-'+navId);
        }
    }
}();
