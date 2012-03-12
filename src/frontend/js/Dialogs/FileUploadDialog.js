Ext.define('PartKeepr.FileUploadDialog', {
    extend: 'Ext.window.Window',
    
    title: i18n("File Upload"),
    fileFieldLabel: i18n("File"),
    uploadButtonText: i18n('Select File...'),
    uploadURL: PartKeepr.getBasePath()+"/TempFile",
    layout: 'fit',
    resizable: false,
    modal: true,
    iconCls: 'icon-drive-upload',
    initComponent: function () {
    	
    	if (this.imageUpload) {
    		this.uploadURL = PartKeepr.getBasePath()+"/TempImage";
    	}
    	
    	this.addEvents("fileUploaded");
    	
    	this.uploadButton = Ext.create("Ext.button.Button",
    			{
    	        	text: i18n('Upload'),
    	        	iconCls: 'icon-drive-upload',
    	        	width: 120,
    	        	handler: Ext.bind(function() {
    	        		var form = this.form.getForm();
    	        		
    	        		var values = form.getValues();
    	        		
    	        		if (this.fileField.getValue() === "" && this.urlField.getValue() === "") {
    	        			Ext.Msg.alert(i18n("Error"), i18n("Please select a file to upload or enter an URL"));
    	        			return;
    	        		}
    	        		
    	        		
    	        		if(form.isValid()){
    	        			form.submit({
    	        				url: this.uploadURL,
    	        				params: {
    	        				call: "upload",
    	                    	session: PartKeepr.getApplication().getSession()
    	                    },
    	                    success: Ext.bind(function(fp, o) {
    	                    	this.fireEvent("fileUploaded", o.result.response);
    	                    	this.close();
    	                    },this),
    	                    failure: function(form, action) {
    	                    	
    	                    	 var data = Ext.decode(action.response.responseText);
    	                         
    	                         request = {
    	                     			response: action.response.responseText
    	                     	};
    	                         
    	                     	PartKeepr.ExceptionWindow.showException(data.exception, request);
    	                    }
    	                });
    	            }
    	        }, this)
    	    });
    	
    	this.urlField = Ext.create("Ext.form.field.Text", {
    		fieldLabel: i18n("URL"),
    		labelWidth: 50,
    		name: "url",
    		anchor: '100%'
    	});
    	
    	this.tbButtons = [ this.uploadButton ];
    	
    	if (this.imageUpload) {
    		
    		this.title = i18n("Image Upload");
    		this.fileFieldLabel = i18n("Image");
    		this.uploadButtonText = i18n("Select Image...");
    		
    		this.fileFormatButton = Ext.create("Ext.button.Button", {
    			text: i18n("Available Formats"),
    			width: 120,
    			iconCls: 'icon-infocard',
    			handler: this.showAvailableFormats,
    			scope: this
    		});
    		
    		this.tbButtons.push(this.fileFormatButton);
    	}
    	
    	this.fileField = Ext.create("Ext.form.field.File",{
    	        xtype: 'filefield',
    	        name: 'userfile',
    	        fieldLabel: this.fileFieldLabel,
    	        labelWidth: 50,
    	        msgTarget: 'side',
    	        anchor: '100%',
    	        buttonText: this.uploadButtonText
    	    });
    	
    	this.form = Ext.create('Ext.form.Panel', {
    	    width: 400,
    	    bodyPadding: 10,
    	    border: false,
    	    items: [{
    	    	html: i18n("Select a file to upload or enter an URL to load the file from"),
    	    	border: false,
    	    	style: "margin-bottom: 20px;"
    	    },
    	    this.fileField,
    	    {
    	    	html: sprintf(i18n("Maximum upload size: %s"), PartKeepr.bytesToSize(PartKeepr.getMaxUploadSize())),
    	    	style: 'margin-bottom: 10px;',
    	    	border: false
    	    },
    	    this.urlField],

    	    buttons: this.tbButtons
    	});
    	
    	this.on("beforedestroy", this.onBeforeDestroy, this);
    	
    	this.items = this.form;
    	this.callParent();
    },
    /**
     * Shows a tooltip for all available image formats.
     */
    showAvailableFormats: function () {
    	if (!this.tip) {
    		this.tip = Ext.create("Ext.tip.ToolTip", {
        		title: i18n("Available Image Formats"),
        		anchor: 'left',
        		width: 200,
        		height: 300,
        		autoScroll: true,
        		target: this.fileFormatButton.getEl(),
        		closable: true,
        		html: implode("<br>", PartKeepr.getAvailableImageFormats()),
        		autoHide: false
        	});	
    	}
    	
    	
    	this.tip.show();
    },
    onBeforeDestroy: function () {
    	if (this.tip) {
    		this.tip.destroy();	
    	}
    }
});
