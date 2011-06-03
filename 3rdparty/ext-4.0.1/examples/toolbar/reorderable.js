Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.require([
    'Ext.panel.*',
    'Ext.fx.*',
    'Ext.toolbar.*',
    'Ext.button.*',
    'Ext.ux.BoxReorderer'
]);

Ext.onReady(function() {
    var toolbar = Ext.createWidget('toolbar', {
        renderTo: Ext.getBody(),
        defaults: {
            reorderable: true
        },
        plugins : Ext.create('Ext.ux.BoxReorderer', {}),
        items   : [
            {
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Item 1'}],
                reorderable: false
            },
            {
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },
            {
                text: 'Copy',
                iconCls: 'add16'
            },
            {
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },
            {
                text: 'Format',
                iconCls: 'add16'
            }
        ]
    });
    
    Ext.createWidget('panel', {
        renderTo: Ext.getBody(),
        tbar    : toolbar,
        border  : true,
        width   : 600,
        height  : 400
    });
});