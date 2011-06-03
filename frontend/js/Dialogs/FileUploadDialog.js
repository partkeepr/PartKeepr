Ext.define('PartDB2.FileUploadDialog', {
    extend: 'Ext.window.Window',
    title: i18n("Image Upload"),
    initComponent: function () {
    	
    	this.addEvents("fileUploaded");
    	
    	this.form = Ext.create('Ext.form.Panel', {
    	    width: 400,
    	    bodyPadding: 10,
    	    border: false,
    	    items: [{
    	        xtype: 'filefield',
    	        name: 'userfile',
    	        fieldLabel: 'Photo',
    	        labelWidth: 50,
    	        msgTarget: 'side',
    	        allowBlank: false,
    	        anchor: '100%',
    	        buttonText: 'Select Image...'
    	    }],

    	    buttons: [{
    	        text: 'Upload',
    	        handler: Ext.bind(function() {
    	            var form = this.form.getForm();
    	            if(form.isValid()){
    	                form.submit({
    	                    url: 'rest.php/TempImage',
    	                    params: {
    	                    	call: "upload",
    	                    	session: PartDB2.getApplication().getSession()
    	                    },
    	                    waitMsg: 'Uploading your photo...',
    	                    success: Ext.bind(function(fp, o) {
    	                    	this.fireEvent("fileUploaded", o.result.response.id);
    	                    	this.close();
    	                    },this),
    	                    failure: function(form, action) {
    	                    	console.log(action);
    	                    }
    	                });
    	            }
    	        }, this)
    	    }]
    	});
    	
    	this.items = this.form;
    	this.callParent();
    }
});
