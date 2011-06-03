Ext.migration.OrderWindow = Ext.extend(Ext.Window, {
    title: 'New Order',
    layout: 'fit',
    modal: true,
    width: 400,
    height: 170,
    resizable: false,
    closeAction: 'hide',
    
    initComponent: function() {
        this.nextRecordId = 105;
        this.items = [{
            xtype: 'form',
            id: 'order-form',
            border: false,
            bodyStyle: {
                padding: '10px 20px'
            },
            defaultType: 'textfield',
            defaults: {
                anchor: '100%',
                allowBlank: false
            },
            items: [{
                fieldLabel: 'Description',
                name: 'desc'
            },{
                fieldLabel: 'Order Total',
                name: 'total',
                xtype: 'numberfield'
            },{
                fieldLabel: 'Order Date',
                name: 'dt',
                xtype: 'datefield'
            }]
        }];
        
        this.buttons = [{
            text: 'Save',
            handler: this.onSave,
            scope: this
        },{
            text: 'Cancel',
            handler: function() {
                this.hide();
            },
            scope: this
        }];
        
        Ext.migration.OrderWindow.superclass.initComponent.call(this);
        
        this.form = this.get('order-form').getForm();
    },
    
    onSave: function() {
        if (this.form.isValid()) {
            var data = this.form.getValues();
            data.id = this.nextRecordId++;
            // BEGIN-COMPAT
            //var rec = new this.store.recordType(data);
            var rec = new this.store.model(data);
            // END-COMPAT
            this.store.add(rec);
            this.hide();
            this.form.reset();
        }
    }
});

// BEGIN-COMPAT
//Ext.reg('migration-orderwindow', Ext.migration.OrderWindow);
Ext.reg('migration-orderwindow', 'Ext.migration.OrderWindow');
// END-COMPAT