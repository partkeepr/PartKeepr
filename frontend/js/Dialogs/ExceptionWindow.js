Ext.define('PartDB2.ExceptionWindow', {
    extend: 'Ext.window.Window',
    autoScroll: true,
    resizable: true,
    layout: 'anchor',
    width: 500,
    height: 300,
    cls: Ext.baseCSSPrefix + 'message-box',
    initComponent: function () {
    	
    	this.iconComponent = Ext.create('Ext.Component', {
            cls: 'ext-mb-icon',
            width: 40,
            height: 35,
            style: {
                'float': 'left'
            }
        });
    	
    	this.messageDiv = Ext.create('Ext.Component', {                            autoEl: { tag: 'div' },
            cls: 'ext-mb-text',
            style: 'margin-left: 40px;'
        });
    	
    	this.detailDiv = Ext.create('Ext.Component', {                            autoEl: { tag: 'div' },
            cls: 'ext-mb-text',
            style: 'margin-left: 40px; margin-top: 20px;'
        });
    	
    	this.exceptionDiv = Ext.create('Ext.Component', {                            autoEl: { tag: 'div' },
            cls: 'ext-mb-text'
        });
    	
    	this.traceDiv = Ext.create('Ext.Component', {                            autoEl: { tag: 'div' },
            cls: 'ext-mb-text'
        });
    		
    	this.exceptionDetails = Ext.create('Ext.form.FieldSet', {
			style: 'margin-left: 40px; margin-top: 20px',
			title: 'Exception Details',
			collapsible: true,
			collapsed: true,
			items: this.exceptionDiv
        });
    	
    	this.backtraceDetails = Ext.create('Ext.form.FieldSet', {
			style: 'margin-left: 40px',
			title: 'Backtrace',
			collapsible: true,
			collapsed: true,
			items: this.traceDiv
    	});
    	
    	this.topContainer = Ext.create("Ext.container.Container", {
    		xtype: 'container',
    		style: 'padding: 10px',
    		layout: 'anchor',
    		anchor: '100% 100%',
    		items: [this.iconComponent, this.messageDiv, this.detailDiv, 
    		        this.exceptionDetails, this.backtraceDetails]
    	});
    	
    	this.items = this.topContainer;
    	
    	this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            defaults: {minWidth: 80},
            layout: {
                pack: 'center'
            },
            items: [
                { xtype: 'button', text: 'OK', handler: Ext.bind(function () { this.hide(); }, this) },
                //{ xtype: 'button', text: 'Details >>', handler: Ext.bind(function () { this.showDetails(); }, this) }
            ]
        }];
    	
    	this.callParent();
    },
    setIcon : function(icon) {
        this.iconComponent.removeCls(this.iconCls);
        
        if (icon) {
            this.iconComponent.show();
            this.iconComponent.addCls(Ext.baseCSSPrefix + 'dlg-icon');
            this.iconComponent.addCls(icon);
        } else {
            this.iconComponent.removeCls(Ext.baseCSSPrefix + 'dlg-icon');
            this.iconComponent.hide();
        }
    },
    showException: function (exception) {
    	this.setIcon(Ext.MessageBox.ERROR);
    	
    	this.messageDiv.update(exception.message);
    	this.setTitle(exception.message);
    	
    	if (exception.detail) {
    		this.detailDiv.update(exception.detail);
    	} else {
    		this.detailDiv.update("");
    	}
    	
    	
    	if (exception.exception) {
    		this.exceptionDiv.update(exception.exception);
    	} else {
    		this.exceptionDiv.update("No information available");
    	}
    	
    	if (exception.backtrace) {
    		this.traceDiv.update(exception.backtrace);
    	} else {
    		this.traceDiv.update("No backtrace available");
    	}
    	
    	this.show();
    	
    }
});