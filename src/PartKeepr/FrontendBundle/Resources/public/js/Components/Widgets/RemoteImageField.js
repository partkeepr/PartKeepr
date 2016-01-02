/**
 * @class PartKeepr.RemoteImageField
 * <p>The RemoteImageField is a form field which can be used to upload one image. It automatically
 * displays the remote image by id, assigns a temporary ID if it's a new image so the model can be
 * syncronized at once.
 *
 */
Ext.define('PartKeepr.RemoteImageField', {
    extend: 'Ext.container.Container',
    alias: 'widget.remoteimagefield',

    xtype: 'remoteimagefield',

    listeners: {
        'click': "onClick"
    },
    layout: 'vbox',
    /**
     * Initializes the field
     */
    initComponent: function ()
    {

        this.image = Ext.create("Ext.Img", {
            maxHeight: this.maxHeight,
            maxWidth: this.maxWidth,
            autoEl: 'div',
            width: this.maxWidth,
            height: this.maxHeight,
            flex: 1,
            cls: 'remote-image-background'
        });

        this.button = Ext.create("Ext.button.Button", {
            text: i18n("Change Image"),
            scope: this,
            handler: this.onClick
        });

        this.items = [this.image, this.button];
        this.minHeight = this.maxHeight;
        this.minWidth = this.maxWidth;

        this.callParent();
    },
    onClick: function ()
    {
        var j = Ext.create("PartKeepr.FileUploadDialog", {imageUpload: true});
        j.on("fileUploaded", this.onFileUploaded, this);
        j.show();
    },
    onFileUploaded: function (data)
    {
        this.fireEvent("fileUploaded", data);
    },
    /**
     * Sets a value for the field. If the value is numeric, we call the image service
     * with the specified id and the specified type. If the value is a string and prefixed
     * with TMP:, we use the type "TempImage" and pass the id which has to be specified after TMP:.
     *
     * Example
     * TMP:12     would retrieve the temporary image with the ID 12
     * @param {Mixed} value The value to set
     * @return {Ext.form.field.Field} this
     */
    setValue: function (value)
    {
        this.value = value;

        if (value !== null) {
            this.image.setSrc(
                value.getId() + "/getImage?maxWidth=" + this.maxWidth + "&maxHeight=" + this.maxHeight + "&ts=" + new Date().getTime());
        } else {
            this.image.setSrc("");
        }

        return this;
    }
});

