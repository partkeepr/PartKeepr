Ext.require(['*']);

Ext.onReady(function(){
    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php'
        },
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        },
        folderSort: true,
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree = Ext.create('Ext.tree.Panel', {
        id: 'tree',
        store: store,
        width: 250,
        height: 300,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                appendOnly: true
            }
        },
        renderTo: document.body
    });

    var store2 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php'
        },
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        },
        folderSort: true,
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree2 = Ext.create('Ext.tree.Panel', {
        id: 'tree2',
        width: 250,
        height: 300,
        store: store2,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                appendOnly: true
            }
        },
        renderTo: document.body
    });
});
