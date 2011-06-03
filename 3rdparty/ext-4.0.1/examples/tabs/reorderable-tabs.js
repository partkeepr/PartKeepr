Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.require([
    'Ext.tab.*',
    'Ext.ux.TabReorderer'
]);

Ext.onReady(function() {
    var tabCount = 4;

    var tabPanel = Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        width: 600,
        height: 400,
        //plain: true,
        bodyStyle: 'padding:5px',
        plugins: Ext.create('Ext.ux.TabReorderer'),
        items: [{
            xtype: 'panel',
            title: 'Tab 1',
            html : 'Test 1',
            closable: true
        }, {
            xtype: 'panel',
            title: 'Tab 2',
            html : 'Test 2',
            closable: true
        }, {
            xtype: 'panel',
            title: 'Tab 3',
            html : 'Test 3',
            closable: true
        }, {
            xtype: 'panel',
            title: 'Non Reorderable',
            html : "I can't be moved",
            reorderable: false,
            closable: true
        
        },{
            xtype: 'panel',
            title: 'Tab 4',
            html : 'Test 4',
            closable: true
        }],

        dockedItems: {
            dock: 'bottom',
            xtype: 'toolbar',
            items: [{
                text : 'Add an item',
                handler: function() {
                    tabCount++;

                    tabPanel.add({
                        xtype: 'panel',
                        title: 'Tab ' + tabCount,
                        html : 'Content for tab ' + tabCount,
                        closable: true
                    });
                }
            }, {
                text: 'Toggle tabs enabled',
                handler: function() {
                    tabPanel.tabBar.items.each(function(tab) {
                        if (tab.disabled) {
                            tab.enable();
                        } else {
                            tab.disable();
                        }
                    });
                }
            }, {
                text: 'Remove 2nd item',
                handler: function() {
                    var item = tabPanel.items.items[1];

                    if (item) {
                        tabPanel.remove(item);
                    }
                }
            }]
        }
    });
});