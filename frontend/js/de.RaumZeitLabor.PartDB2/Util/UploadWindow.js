Ext.ns("de.RaumZeitLabor.PartDB2");

de.RaumZeitLabor.PartDB2.UploadWindow = Ext.extend(Ext.Window, {
	initComponent: function () {
		
		this.form = new de.RaumZeitLabor.PartDB2.UploadForm();
		
		this.items = this.form;
		
		this.form.on("upload-complete", function () {
			alert("YES");
		});
		
		de.RaumZeitLabor.PartDB2.UploadWindow.superclass.initComponent.call(this);
	},
	getForm: function () {
		return this.form;
	}
	
});

de.RaumZeitLabor.PartDB2.UploadForm = Ext.extend(Ext.form.FormPanel, {
	fileUpload: true,
	width: 500,
	uploadMode: null,
	uploadType: null,
	initComponent: function () {
		
		this.customParams = {};
		
		this.addEvents("upload-complete");
		
		this.uploadButton = new Ext.ux.form.FileUploadField({

		});
		
		

		this.items = [ this.uploadButton ];
		
		this.buttons = [{
			text: 'Upload',
			handler: function () {
				var params = {};
				
				Ext.apply(params, this.customParams, {});
				
				
				params.uploadMode = this.uploadMode;
				params.uploadType = this.uploadType;
				
				console.log(params);
				console.log(this.customParams);
				
				this.getForm().submit({
                    url: 'upload.php',
                    params: params,
                    success: function () {
                    	this.fireEvent("upload-complete");
                    }.createDelegate(this)
                    });
			}.createDelegate(this)
		}];
		
		de.RaumZeitLabor.PartDB2.UploadForm.superclass.initComponent.call(this);
	
	},
	setImageType: function (type) {
		this.uploadMode = "image";
		this.uploadType = type;
	},
	setCustomParams: function (params) {
		Ext.apply(this.customParams, params, {});
	}
});