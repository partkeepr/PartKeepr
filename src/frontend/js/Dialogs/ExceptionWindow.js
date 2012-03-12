/**
 * Represents an exception window.
 */
Ext.define('PartKeepr.ExceptionWindow', {
    extend: 'Ext.window.Window',
    resizable: true,
    layout: 'fit',
    width: 500,
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
    	
    	this.exceptionDetails = Ext.create('Ext.form.field.TextArea', {
    		fieldLabel: i18n("Exception Details"),
    		flex: 1,
    		minHeight: 65,
    		readOnly: true
        });
    	
    	this.backtraceDetails = Ext.create('Ext.form.field.TextArea', {
    		fieldLabel: i18n("Backtrace"),
    		flex: 1,
    		minHeight: 65,
    		readOnly: true
    	});
    	
    	this.requestDetails = Ext.create('Ext.form.field.TextArea', {
    		fieldLabel: i18n("Request"),
    		flex: 1,
    		minHeight: 65,
    		readOnly: true
        });
    	
    	this.responseDetails = Ext.create('Ext.form.field.TextArea', {
    		fieldLabel: i18n("Response"),
    		flex: 1,
    		minHeight: 65,
    		readOnly: true
        });
    		
    	this.basicTab = Ext.create("Ext.panel.Panel", {
    		style: 'padding: 10px',
    		layout: 'anchor',
    		anchor: '100% 100%',
    		title: i18n("Basic"),
    		items: [this.iconComponent, this.messageDiv, this.detailDiv ]
    	});
    	
    	this.detailTab = Ext.create("Ext.form.Panel", {
    		style: 'padding: 10px',
    		layout: 'anchor',
    		autoScroll: true,
    		title: i18n("Detail"),
    		items: [{
    			xtype: 'panel',
    			height: 300,
    			border: false,
    			layout: {
        		    type: 'vbox',
        		    align : 'stretch',
        		    pack  : 'start'
        		},
    			items: [ this.exceptionDetails, this.backtraceDetails, this.requestDetails, this.responseDetails ]
    		}]
    	});
    	
    	this.fullReport = Ext.create("Ext.form.field.TextArea", {
    		readOnly: true,
    		height: 300
    	});
    	
    	this.backtraceTab = Ext.create("Ext.panel.Panel", {
    		style: 'padding: 10px',
    		layout: 'fit',
    		anchor: '100% 100%',
    		title: i18n("Full Report"),
    		items: [ this.fullReport ]
    	});
    	
    	this.topContainer = Ext.create("Ext.tab.Panel", {
    		items: [ this.basicTab, this.detailTab, this.backtraceTab ]
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
    		
    		this.exceptionDetails.setValue(exception.exception);
    	} else {
    		this.exceptionDetails.setValue("No information available");
    	}
    	
    	if (exception.backtrace) {
    		fullDetails += "\n\n"+i18n("Backtrace")+"\n"+separator+"\n";
    		fullDetails += exception.exception;
    		
    		this.backtraceDetails.setValue(nl2br(exception.backtrace));
    	} else {
    		this.backtraceDetails.setValue("No backtrace available");
    	}
    	
    	if (requestData.request) {
    		fullDetails += "\n\n"+i18n("Request")+"\n"+separator+"\n";
    		fullDetails += requestData.request;
    		
    		this.requestDetails.setValue(nl2br(requestData.request));
    	} else {
    		this.requestDetails.setValue("No server request information available");
    	}
    	
    	if (requestData.response) {
    		fullDetails += "\n\n"+i18n("Response")+"\n"+separator+"\n";
    		fullDetails += requestData.response;
    		
    		this.responseDetails.setValue(nl2br(requestData.response));
    	} else {
    		this.responseDetails.setValue("No server response information available");
    	}
    	
    	fullDetails += "\n\n"+i18n("Server Configuration")+"\n"+separator+"\n";
    	
    	for (var j in window.parameters) {
    		fullDetails += j+": " + window.parameters[j]+"\n"; 
    	}
    	
    	this.fullReport.setValue(fullDetails);
    	
    	this.show();
    	this.topContainer.layout.setActiveItem(0);
    	this.doLayout();
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