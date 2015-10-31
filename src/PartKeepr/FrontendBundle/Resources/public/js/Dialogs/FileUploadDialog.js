Ext.define('PartKeepr.FileUploadDialog', {
    extend: 'Ext.window.Window',

    title: i18n("File Upload"),
    fileFieldLabel: i18n("File"),
    uploadButtonText: i18n('Select File...'),
    uploadURL: PartKeepr.getBasePath() + "/api/temp_uploaded_files/upload",
    layout: 'fit',
    resizable: false,
    modal: true,
    defaults: {
        labelWidth: 80
    },
    initComponent: function ()
    {

        if (this.imageUpload) {
            this.uploadURL = PartKeepr.getBasePath() + "/api/temp_images/upload";
        }

        this.uploadButton = Ext.create("Ext.button.Button",
            {
                text: i18n('Upload'),
                iconCls: 'fugue-icon drive-upload',
                handler: Ext.bind(function ()
                {
                    var form = this.form.getForm();

                    if (this.fileField.getValue() === "" && this.urlField.getValue() === "") {
                        Ext.Msg.alert(i18n("Error"), i18n("Please select a file to upload or enter an URL"));
                        return;
                    }


                    if (form.isValid()) {
                        form.submit({
                            url: this.uploadURL,
                            success: Ext.bind(function (fp, o)
                            {
                                this.fireEvent("fileUploaded", o.result.response);
                                this.close();
                            }, this),
                            failure: function (form, action)
                            {
                                 PartKeepr.ExceptionWindow.showException(action.response);
                            }
                        });
                    }
                }, this)
            });

        this.urlField = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("URL"),
            name: "url",
            anchor: '100%'
        });

        this.diskUsage = Ext.create("Ext.ProgressBar", {
            width: "200px"
        });

        this.diskUsage.updateProgress(0, i18n("Loading…"));

        this.tbButtons = [this.diskUsage, '->', this.uploadButton];

        if (this.imageUpload) {

            this.title = i18n("Image Upload");
            this.fileFieldLabel = i18n("Image");
            this.uploadButtonText = i18n("Select Image...");

            this.fileFormatButton = Ext.create("Ext.button.Button", {
                text: i18n("Available Formats"),
                iconCls: 'fugue-icon infocard',
                handler: this.showAvailableFormats,
                scope: this
            });

            this.tbButtons.push(this.fileFormatButton);
        }

        this.fileField = Ext.create("Ext.form.field.File", {
            xtype: 'filefield',
            name: 'userfile',
            fieldLabel: this.fileFieldLabel,
            msgTarget: 'side',
            anchor: '100%',
            buttonText: this.uploadButtonText
        });

        this.uploadSizeButton = Ext.create("Ext.button.Button", {
            xtype: 'button',
            iconCls: 'fugue-icon information-frame',
            handler: this.showUploadSizeInformation,
            scope: this
        });

        this.form = Ext.create('Ext.form.Panel', {
            width: 500,
            bodyPadding: 10,
            border: false,
            items: [
                {
                    html: i18n("Select a file to upload or enter an URL to load the file from"),
                    border: false,
                    style: "margin-bottom: 20px;"
                },
                this.fileField,
                {
                    xtype: 'fieldcontainer',
                    hideEmptyLabel: false,
                    border: false,
                    style: 'margin-bottom: 20px;',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'middle'
                    },
                    items: [
                        {
                            html: sprintf(i18n("Maximum upload size: %s"),
                                PartKeepr.bytesToSize(PartKeepr.getMaxUploadSize())),
                            style: 'margin-right: 10px;',
                            border: false
                        },
                        this.uploadSizeButton
                    ]
                },
                this.urlField
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                defaults: {minWidth: 120},
                items: this.tbButtons
            }]
        });

        this.on("beforedestroy", this.onBeforeDestroy, this);

        this.items = this.form;

        var call = new PartKeepr.ServiceCall("api", "disk_space");
        call.setHandler(Ext.bind(this.onDiskSpaceRetrieved, this));
        call.doCall();

        this.callParent();
    },
    onDiskSpaceRetrieved: function (data) {
        var usedString = PartKeepr.bytesToSize(data.disk_used),
            totalString = PartKeepr.bytesToSize(data.disk_total);

        var text = usedString + " / " + totalString + " " + i18n("used");

        this.diskUsage.updateProgress(data.disk_used / data.disk_total, text);
    },
    /**
     * Displays a little hint regarding the maximum upload size
     */
    showUploadSizeInformation: function ()
    {
        if (!this.uploadSizeTip) {
            this.uploadSizeTip = Ext.create("Ext.tip.ToolTip", {
                title: i18n("Upload Size Information"),
                anchor: 'left',
                width: 350,
                height: 132,
                autoScroll: true,
                target: this.uploadSizeButton.getEl(),
                closable: true,
                html: i18n("The maximum upload size can be configured in your php.ini file. There are two separate options:<br/>- post_max_size<br/>- upload_max_filesize<br/><br/>You need to set both values high enough.") +
                '<br/><br/><a target="_blank" href="http://de2.php.net/manual/en/ini.core.php#ini.post-max-size">' + i18n("More Information") + '</a>',
                autoHide: false
            });
        }


        this.uploadSizeTip.show();
    },
    /**
     * Shows a tooltip for all available image formats.
     */
    showAvailableFormats: function ()
    {
        if (!this.imageFormatsTip) {
            this.imageFormatsTip = Ext.create("Ext.tip.ToolTip", {
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


        this.imageFormatsTip.show();
    },
    onBeforeDestroy: function ()
    {
        if (this.imageFormatsTip) {
            this.imageFormatsTip.destroy();
        }

        if (this.uploadSizeTip) {
            this.uploadSizeTip.destroy();
        }
    }
});
