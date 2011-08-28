/**
 * Creates a panel with a webcam widget. The webcam widget is
 * a flash (jpegcam).
 */
Ext.define('PartKeepr.WebcamPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.WebcamPanel',
	initComponent: function () {
		
		this.takePhotoButton = Ext.create("Ext.button.Button", {
			text: i18n("Take picture and upload"),
        	icon: 'resources/fugue-icons/icons/webcam.png',
        	handler: this.takePhoto
		});
		
		// Create a toolbar with the "take photo" button
		this.bbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			items: [ this.takePhotoButton ]
		});
		
		// Render the SWF
		this.on("afterrender", this.renderWebcam, this);
		
		// Fires when the image upload is complete
		this.addEvents("uploadComplete");
		this.callParent();
	},
	/**
	 * Renders the webcam swf.
	 * @param e The element for this component
	 */
	renderWebcam: function (e) {
		webcam.set_swf_url("resources/webcam.swf");
		webcam.set_quality(90);
		webcam.set_api_url(PartKeepr.getBasePath()+"?service=TempFile&call=uploadCam&session="+PartKeepr.getApplication().getSession());
		webcam.set_shutter_sound(false);
		webcam.set_hook('onComplete', Ext.bind(this.onUploadComplete, this));
		
		e.body.insertHtml('beforeEnd', webcam.get_html(640,480, 640, 480));
	},
	/**
	 * Takes a photo using the webcam.
	 */
	takePhoto: function () {
		webcam.snap();
		this.takePhotoButton.disable();
		this.takePhotoButton.setText(i18n("Uploading..."));
	},
	/**
	 * Called when the upload is complete. Resumes webcam operation
	 * and fires the event. 'uploadComplete'
	 * @param message	The server side message
	 */
	onUploadComplete: function (message) {
		var response = Ext.decode(message);
		
		webcam.reset();
		this.fireEvent("uploadComplete", response.response);
		
	}
});