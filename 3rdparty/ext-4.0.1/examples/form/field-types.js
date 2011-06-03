Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {

    var formPanel = Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Form Fields',
        width: 340,
        bodyPadding: 5,

        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 90,
            anchor: '100%'
        },

        items: [{
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Text field',
            value: 'Text field value'
        }, {
            xtype: 'textfield',
            name: 'password1',
            inputType: 'password',
            fieldLabel: 'Password field'
        }, {
            xtype: 'filefield',
            name: 'file1',
            fieldLabel: 'File upload'
        }, {
            xtype: 'textareafield',
            name: 'textarea1',
            fieldLabel: 'TextArea',
            value: 'Textarea value'
        }, {
            xtype: 'displayfield',
            name: 'displayfield1',
            fieldLabel: 'Display field',
            value: 'Display field <span style="color:green;">value</span>'
        }, {
            xtype: 'numberfield',
            name: 'numberfield1',
            fieldLabel: 'Number field',
            value: 5,
            minValue: 0,
            maxValue: 50
        }, {
            xtype: 'checkboxfield',
            name: 'checkbox1',
            fieldLabel: 'Checkbox',
            boxLabel: 'box label'
        }, {
            xtype: 'radiofield',
            name: 'radio1',
            value: 'radiovalue1',
            fieldLabel: 'Radio buttons',
            boxLabel: 'radio 1'
        }, {
            xtype: 'radiofield',
            name: 'radio1',
            value: 'radiovalue2',
            fieldLabel: '',
            labelSeparator: '',
            hideEmptyLabel: false,
            boxLabel: 'radio 2'
        }, {
            xtype: 'datefield',
            name: 'date1',
            fieldLabel: 'Date Field'
        }, {
            xtype: 'timefield',
            name: 'time1',
            fieldLabel: 'Time Field',
            minValue: '1:30 AM',
            maxValue: '9:15 PM'
        }]
    });

    formPanel.render('form-ct');

});
