/**
 * Represents an exception window.
 */
Ext.define('PartKeepr.ExceptionWindow', {
    extend: 'Ext.window.Window',
    autoScroll: true,
    resizable: true,
    layout: 'anchor',
    width: 500,
    //height: 300,
    autoHeight: true,
    maxHeight: 800,
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
    	
    	this.exceptionDiv = Ext.create('Ext.form.field.TextArea', {
    		anchor: '100% 100%'
        });
    	
    	this.traceDiv = Ext.create('Ext.form.field.TextArea', {
    		anchor: '100% 100%'
    	});
    	
    	this.requestDiv = Ext.create('Ext.form.field.TextArea', {
    		anchor: '100% 100%'
        });
    	
    	this.responseDiv = Ext.create('Ext.form.field.TextArea', {
    		anchor: '100% 100%'
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
    	
    	this.requestDetails = Ext.create('Ext.form.FieldSet', {
			style: 'margin-left: 40px',
			title: 'Server Request',
			collapsible: true,
			collapsed: true,
			items: this.requestDiv
    	});
    	
    	this.responseDetails = Ext.create('Ext.form.FieldSet', {
			style: 'margin-left: 40px',
			title: 'Server Response',
			collapsible: true,
			collapsed: true,
			items: this.responseDiv
    	});
    	
    	this.topContainer = Ext.create("Ext.container.Container", {
    		xtype: 'container',
    		style: 'padding: 10px',
    		layout: 'anchor',
    		anchor: '100% 100%',
    		items: [this.iconComponent, this.messageDiv, this.detailDiv, 
    		        this.exceptionDetails, this.backtraceDetails, this.requestDetails, this.responseDetails]
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
                { xtype: 'button', text: 'OK', handler: Ext.bind(function () { this.hide(); }, this) }
                /*{ xtype: 'button', text: 'Details >>', handler: Ext.bind(function () { this.showDetails(); }, this) }*/
            ]
        }];
    	
    	this.callParent();
    },
    showDetails: function () {
    	this.doComponentLayout();
    	console.log(this.getHeight());
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
    /**
     * Private. Updates the exception dialog with the exception data.
     * 
     * @see showException
     * 
     * @param exception The exception data
     * @param requestData The request data
     */
    _showException: function (exception, requestData) {
    	var separator = "==================================";
    	
    	this.setIcon(Ext.MessageBox.ERROR);
    	
    	this.messageDiv.update(exception.message);
    	this.setTitle(exception.message);
    	
    	var fullDetails = exception.message;
    	
    	if (exception.detail) {
    		fullDetails += "\n\n"+i18n("Details")+"\n"+separator+"\n";
    		fullDetails += exception.detail;
    		
    		this.detailDiv.update(exception.detail);
    	} else {
    		this.detailDiv.update("");
    	}
    	
    	
    	if (exception.exception) {
    		fullDetails += "\n\n"+i18n("Exception")+"\n"+separator+"\n";
    		fullDetails += exception.exception;
    		
    		this.exceptionDiv.setValue(exception.exception);
    	} else {
    		this.exceptionDiv.setValue("No information available");
    	}
    	
    	if (exception.backtrace) {
    		fullDetails += "\n\n"+i18n("Backtrace")+"\n"+separator+"\n";
    		fullDetails += exception.exception;
    		
    		this.traceDiv.setValue(nl2br(exception.backtrace));
    	} else {
    		this.traceDiv.setValue("No backtrace available");
    	}
    	
    	if (requestData.request) {
    		fullDetails += "\n\n"+i18n("Request")+"\n"+separator+"\n";
    		fullDetails += requestData.request;
    		
    		this.requestDiv.setValue(nl2br(requestData.request));
    	} else {
    		this.requestDiv.setValue("No server request information available");
    	}
    	
    	if (requestData.response) {
    		fullDetails += "\n\n"+i18n("Response")+"\n"+separator+"\n";
    		fullDetails += requestData.response;
    		
    		this.responseDiv.setValue(nl2br(requestData.response));
    	} else {
    		this.responseDiv.setValue("No server response information available");
    	}
    	
    	this.show();
    },
    
    statics: {
    	/**
    	 * Displays the exception window.
    	 * 
    	 * The exception object may contain the following members:
    	 * - message:   The message to display    [mandatory]
    	 * - detail:    Details about the message [optional]
    	 * - exception: Exception details         [optional]
    	 * - backtrace: The backtrace             [optional]
    	 * 
    	 * The request data object may contain the following members:
    	 * - request:  The request data
    	 * - response: The response data
    	 *  
    	 * Any members specified are strings. Any other data type is not supported.
    	 *  
    	 * @param exception 	The exception object 
    	 * @param requestData	The request data
    	 */
    	showException: function (exception, requestData) {
    		if (!PartKeepr.ExceptionWindow.activeInstance) {
        		PartKeepr.ExceptionWindow.activeInstance = new PartKeepr.ExceptionWindow();
        	}
    		
    		PartKeepr.ExceptionWindow.activeInstance._showException(exception, requestData);
    	}
    	
    }
});