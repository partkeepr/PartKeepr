Ext.require([
    'Ext.direct.*',
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Number'
]);

Ext.onReady(function(){
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
    
    var form = Ext.create('Ext.form.Panel', {
        width: 300,
        height: 130,
        renderTo: document.body,
        bodyPadding: 5,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            value: 'Evan'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',
            value: 'Trimboli'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age',
            value: 25
        }],
        dockedItems: [{
            dock: 'bottom',
            ui: 'footer',
            xtype: 'toolbar',
            items: ['->', {
                text: 'Send',
                handler: function(){
                    var values = form.getForm().getValues();
                    TestAction.showDetails(values, function(value){
                        Ext.example.msg('Server Response', value);
                    });
                }
            }]
        }]  
    });
});
