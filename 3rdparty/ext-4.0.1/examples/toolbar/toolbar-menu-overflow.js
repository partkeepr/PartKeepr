Ext.require(['*']);
var buttons = [{
    xtype: 'tbtext',
    text : 'Text'
},  {
    xtype: 'tbseparator'
}];
for (var i = 0; i < 20; i++) {
    buttons.push({
        text: 'Button ' + (i + 1),
        handler: function(b) {
            Ext.Msg.alert('Click', 'You clicked ' + b.text);
        }
    })
}

Ext.onReady(function() {
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width : 600,
        layout: {
            overflowHandler: 'Menu'
        },
        items: buttons
    });
});