Ext.define('Ext.migration.NavTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.migration-navtree',
    
    region: 'west',
    title: 'Navigation',
    width: 200,
    split: true,
    collapsible: true,
    xtype: 'treepanel',
    rootVisible: false,
    
    listeners: {
        'itemclick': function(view, model) {
            this.fireEvent('navclick', this, model.data.id);
        }
    },
    
    initComponent: function() {
        Ext.define('NavLink', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id', type: 'string'},
                {name: 'text', type: 'string'}
            ],
            proxy: {
                type: 'ajax',
                url: '../shared/nav-tree.json'
            }
        });
        
        this.store = Ext.create('Ext.data.TreeStore', {
            model: 'NavLink',
            root: {
                expanded: true
            }
        });
        
        this.callParent(arguments);
        this.addEvents('navclick');
    }
});