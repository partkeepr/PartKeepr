/**
 * @class PartKeepr.PartImageDisplay
 * Provides a display of all part images with scroll-through functionality.
 */
Ext.define('PartKeepr.PartImageDisplay', {
    extend: 'Ext.panel.Panel',

    displayedImageIndex: 0,
    maxHeight: 256,

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
            height: this.maxHeight,
            handler: this.onPreviousClick,
            scope: this
        });

        this.nextButton = Ext.create("Ext.button.Button", {
            text: '>',
            width: 20,
            height: this.maxHeight,
            handler: this.onNextClick,
            scope: this
        });

        this.image = Ext.create("Ext.Img", {
            maxHeight: this.maxHeight,
            autoEl: 'div',
            height: this.maxHeight,
            flex: 1
        });

        this.items = [this.prevButton, this.image, this.nextButton];

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
            this.image.setSrc( image.getId() + "/getImage");
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