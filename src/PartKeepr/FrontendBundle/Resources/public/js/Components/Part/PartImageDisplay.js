/**
 * @class PartKeepr.PartImageDisplay
 * Provides a display of all part images with scroll-through functionality.
 */
Ext.define('PartKeepr.PartImageDisplay', {
    extend: 'Ext.panel.Panel',

    displayedImageIndex: 0,
    maxImageWidth: 200,
    maxImageHeight: 150,

    layout: 'hbox',
    border: false,

    /**
     * Initializes the component and creates all widgets.
     */
    initComponent: function ()
    {

        this.store = Ext.create("Ext.data.ChainedStore");

        this.prevButton = Ext.create("Ext.button.Button", {
            text: '<',
            width: 20,
            height: this.maxImageHeight,
            handler: this.onPreviousClick,
            scope: this
        });

        this.nextButton = Ext.create("Ext.button.Button", {
            text: '>',
            width: 20,
            height: this.maxImageHeight,
            handler: this.onNextClick,
            scope: this
        });

        this.imageDisplay = Ext.create("Ext.container.Container", {
            height: this.maxImageHeight,
            width: this.maxImageWidth,
            style: 'align: center'
        });

        this.items = [this.prevButton, this.imageDisplay, this.nextButton];

        this.tpl = new Ext.XTemplate('<img src="{image}/getFile"/>');

        this.callParent();
    },
    /**
     * Sets the stored when a new part is selected.
     * @param store The store
     */
    setStore: function (store)
    {
        this.store.setSource(store);

        this.store.setRemoteFilter(false);

        this.store.addFilter({
            property: "isImage",
            operator: "=",
            value: true
        });

        this.displayedImageIndex = 0;
        this.setImage();
    },
    /**
     * Sets the image
     * @param id The attachment ID to set
     */
    setImage: function ()
    {
        var image = this.store.getAt(this.displayedImageIndex);

        if (image) {
            this.tpl.overwrite(this.imageDisplay.getEl(), {image: image.getId()});
        }
    },
    /**
     * Handler for the "next" button
     */
    onNextClick: function ()
    {
        if (this.displayedImageIndex < this.store.getCount()) {
            this.displayedImageIndex++;
        }

        this.setImage();
    },
    /**
     * Handler for the "previous" button
     */
    onPreviousClick: function ()
    {
        if (this.displayedImageIndex > 0) {
            this.displayedImageIndex--;
        }

        this.setImage();
    }
});