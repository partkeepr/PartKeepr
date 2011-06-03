Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    'Ext.data.*',
    'Ext.ux.FieldReplicator'
]);


Ext.onReady(function() {
    var form = Ext.create('Ext.form.Panel', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        url: 'save-form.php',

        fieldDefaults: {
            labelWidth: 55,
            anchor: '100%'
        },

        layout: {
            type: 'vbox',
            align: 'stretch'  // Child items are stretched to full width
        },

        items: [{
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [ 'email' ],
                data: [
                    ['test@example.com'],
                    ['someone@example.com'],
                    ['someone-else@example.com']
                ]
            }),
            displayField: 'email',
            plugins: [ Ext.ux.FieldReplicator ],
            fieldLabel: 'Send To',
            queryMode: 'local',
            selectOnTab: false,
            name: 'to'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Subject',
            name: 'subject'
        }, {
            xtype: 'textarea',
            fieldLabel: 'Message text',
            hideLabel: true,
            name: 'msg',
            style: 'margin:0', // Remove default margin
            flex: 1  // Take up all *remaining* vertical space
        }]
    });

    var win = Ext.create('Ext.window.Window', {
        title: 'Compose message',
        collapsible: true,
        animCollapse: true,
        maximizable: true,
        width: 750,
        height: 500,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        items: form,
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
            },
            items: [{
                minWidth: 80,
                text: 'Send'
            },{
                minWidth: 80,
                text: 'Cancel'
            }]
        }]
    });
    win.show();
});