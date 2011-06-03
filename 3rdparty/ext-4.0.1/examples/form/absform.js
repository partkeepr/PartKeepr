Ext.require([
    'Ext.form.*',
    'Ext.layout.container.Absolute',
    'Ext.window.Window'
]);

Ext.onReady(function() {
    var form = Ext.create('Ext.form.Panel', {
        layout: 'absolute',
        url: 'save-form.php',
        defaultType: 'textfield',
        border: false,

        items: [{
            fieldLabel: 'Send To',
            fieldWidth: 60,
            msgTarget: 'side',
            allowBlank: false,
            x: 5,
            y: 5,
            name: 'to',
            anchor: '-5'  // anchor width by percentage
        }, {
            fieldLabel: 'Subject',
            fieldWidth: 60,
            x: 5,
            y: 35,
            name: 'subject',
            anchor: '-5'  // anchor width by percentage
        }, {
            x:5,
            y: 65,
            xtype: 'textarea',
            style: 'margin:0',
            hideLabel: true,
            name: 'msg',
            anchor: '-5 -5'  // anchor width and height
        }]
    });

    var win = Ext.create('Ext.window.Window', {
        title: 'Resize Me',
        width: 500,
        height: 300,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        plain:true,
        items: form,

        buttons: [{
            text: 'Send'
        },{
            text: 'Cancel'
        }]
    });

    win.show();
});