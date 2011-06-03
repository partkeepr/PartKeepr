Ext.migration.NavTree = Ext.extend(Ext.tree.TreePanel, {
    region: 'west',
    title: 'Navigation',
    width: 200,
    split: true,
    collapsible: true,
    xtype: 'treepanel',
    rootVisible: false,
    dataUrl: '../shared/nav-tree.json',
    root: {
        nodeType: 'async',
        expanded: true
    },
    listeners: {
        'click': function(n) {
            this.fireEvent('navclick', this, n.attributes.id);
        }
    },
    
    initComponent: function() {
        Ext.migration.NavTree.superclass.initComponent.call(this);
        this.addEvents('navclick');
    }
});

// BEGIN-COMPAT
//Ext.reg('migration-navtree', Ext.migration.NavTree);
Ext.reg('migration-navtree', 'Ext.migration.NavTree');
// END-COMPAT