Ext.define('Ext.migration.OrderWindow', {
    extend: 'Ext.Window',
    alias: 'widget.migration-orderwindow',
    requires: 'Ext.form.*',

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
        
        this.callParent(arguments);
        
        this.form = this.getComponent('order-form').getForm();
    },
    
    onSave: function() {
        if (this.form.isValid()) {
            var data = this.form.getValues();
            data.id = this.nextRecordId++;
            var rec = new this.store.model(data);
            this.store.add(rec);
            this.hide();
            this.form.reset();
        }
    }
});