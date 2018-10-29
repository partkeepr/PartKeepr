/**
 * Creates a panel with a webcam widget. The webcam widget is
 * a flash (jpegcam).
 */
Ext.define('PartKeepr.WebcamPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.WebcamPanel',

    layout: 'fit',
    width: 320,
    height: 286,
    items: [{
        xtype: 'component',
        itemId: 'video',
        autoEl: {
            tag: 'video',
            autoplay: 'true'
        }
    },{
        xtype: 'component',
        itemId: 'canvas',
        autoEl: {
            tag: 'canvas'
        }
    }],
    video: null,
    stream: null,

    initComponent: function ()
    {
        this.takePhotoButton = Ext.create("Ext.button.Button", {
            text: i18n("Take picture and upload"),
            iconCls: 'fugue-icon webcam',
            handler: this.takePhoto,
            scope: this
        });

        // Create a toolbar with the "take photo" button
        this.bbar = Ext.create("Ext.toolbar.Toolbar", {
            enableOverflow: true,
            items: [this.takePhotoButton]
        });


        this.callParent();

        this.on("afterrender", this._onAfterRender, this);
        this.on("beforedestroy", this._onBeforeDestroy, this);
    },
    handleVideo: function (stream) {
        this.stream = stream;
        try {
            this.video.srcObject = stream;
        } catch (error) {
            this.video.src = window.URL.createObjectURL(stream);
        }
    },
    videoError: function () {
        // @todo: Implement video error handler
    },
    _onAfterRender: function () {
        this.video = this.down("#video").getEl().dom;
        this.canvas = this.down("#canvas").getEl().dom;

        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, Ext.bind(this.handleVideo, this), Ext.bind(this.videoError, this));
        }
    },
    /**
     * Takes a photo using the webcam.
     */
    takePhoto: function ()
    {
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;

        var ctx = this.canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);

        Ext.Ajax.request({
            // Might need to adjust the path, depending on if we are uploading a file or image
            url: PartKeepr.getBasePath() + "/api/temp_uploaded_files/webcamUpload",
            params: this.canvas.toDataURL(),
            success: function (response) {
                var responseObject = Ext.decode(response.responseText);
                this.fireEvent("fileUploaded", responseObject);
            },
            //@todo implement failure handler
            scope: this
        });

        this.takePhotoButton.disable();
        this.takePhotoButton.setText(i18n("Uploading..."));
    },
    _onBeforeDestroy: function () {
        // stream.stop is deprecated for newer chrome versions,
        // use getTracks instead
        if (this.stream.getTracks) {
            var tracks= this.stream.getTracks();

            for (var i=0;i<tracks.length;i++) {
                tracks[i].stop();
            }
        } else {
            this.stream.stop();
        }

        this.video.pause();
        this.video.src=null;
    }

});
