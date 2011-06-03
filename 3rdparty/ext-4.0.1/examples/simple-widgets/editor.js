Ext.require([
    'Ext.Editor',
    'Ext.form.Panel',
    'Ext.form.field.ComboBox',
    'Ext.form.field.Date',
    'Ext.data.Store',
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
]);

Ext.onReady(function(){
    Ext.create('Ext.form.Panel', {
        renderTo: 'container',
        width: 700,
        height: 400,
        title: 'User Details',
        defaultType: 'textfield',
        bodyStyle: 'padding: 10px;',
        labelWidth: 90,
        items: [{
            fieldLabel: 'First Name',
            name: 'firstname'
        }, {
            fieldLabel: 'Middle Name',
            name: 'middlename'
        }, {
            fieldLabel: 'Last Name',
            name: 'lastname'
        }, {
            xtype: 'datefield',
            name: 'dob',
            fieldLabel: 'D.O.B'
        }],
        listeners: {
            afterrender: function(form){
                var cfg = {
                    shadow: false,
                    completeOnEnter: true,
                    cancelOnEsc: true,
                    updateEl: true,
                    ignoreNoChange: true
                }, height = form.child('textfield').getHeight();

                var labelEditor = Ext.create('Ext.Editor', Ext.apply({
                    width: 100,
                    height: height,
                    offsets: [0, 2],
                    alignment: 'l-l',
                    listeners: {
                        beforecomplete: function(ed, value){
                            if (value.charAt(value.length - 1) != ':') {
                                ed.setValue(ed.getValue() + ':');
                            }
                            return true;
                        }
                    },
                    field: {
                        name: 'labelfield',
                        allowBlank: false,
                        xtype: 'textfield',
                        width: 90,
                        selectOnFocus: true
                    }
                }, cfg));
                form.body.on('dblclick', function(e, t){
                    labelEditor.startEdit(t);
                    // Manually focus, since clicking on the label will focus the text field
                    labelEditor.field.focus(50, true);
                }, null, {
                    delegate: 'label.x-form-item-label'
                });

                var titleEditor = Ext.create('Ext.Editor', Ext.apply({
                    alignment: 'bl-bl?',
                    offsets: [0, 10],
                    field: {
                        width: 130,
                        xtype: 'combo',
                        editable: false,
                        forceSelection: true,
                        queryMode: 'local',
                        displayField: 'text',
                        valueField: 'text',
                        store: {
                            fields: ['text'],
                            data: [{
                                text: 'User Details'
                            },{
                                text: 'Developer Detail'
                            },{
                                text: 'Manager Details'
                            }]
                        }
                    }
                }, cfg));

                form.header.titleCmp.textEl.on('dblclick', function(e, t){
                    titleEditor.startEdit(t);
                });
            }
        }
    });
});
