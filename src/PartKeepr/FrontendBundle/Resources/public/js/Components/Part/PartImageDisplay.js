/**
 * @class PartKeepr.PartImageDisplay
 * Provides a display of all part images with scroll-through functionality.
 */
Ext.define('PartKeepr.PartImageDisplay', {
	extend: 'Ext.panel.Panel',

	displayedImageId: 0,
	maxImageWidth: 200,
	maxImageHeight: 150,
	
	layout: 'hbox',
	border: false,
	
	/**
	 * Initializes the component and creates all widgets.
	 */
	initComponent: function () {
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
		
		this.items = [ this.prevButton, this.imageDisplay, this.nextButton ];
		
		this.tpl = new Ext.XTemplate('<img src="{image}"/>');
		
		this.callParent();
	},
	/**
	 * Sets the stored when a new part is selected.
	 * @param store The store
	 */
	setStore: function (store) {
		var imageSet = false;
		
		this.store = store;
		
		this.displayedImageId = 0;
		
		var id = this.getImageToDisplayForward(0);
		
		if (id !== -1) {
			this.setImage(id);
			imageSet = true;
				
		}
	
		if (!imageSet) {
			this.tpl.overwrite(this.imageDisplay.getEl(), { image: 'image.php?type=partattachment&id=0&w='+this.maxImageWidth+'&h='+this.maxImageHeight});
		}
	},
	/**
	 * Sets the image
	 * @param id The attachment ID to set
	 */
	setImage: function (id) {
		this.tpl.overwrite(this.imageDisplay.getEl(), { image: 'image.php?type=partattachment&m=fitexact&w='+this.maxImageWidth+'&h='+this.maxImageHeight+'&id='+id});
		this.displayedImageId = id;
	},
	/**
	 * Handler for the "next" button
	 */
	onNextClick: function () {
		var imgId = this.getImageToDisplayForward(this.displayedImageId);
		
		if (imgId !== -1) {
			this.setImage(imgId);
		}
	},
	/**
	 * Handler for the "previous" button
	 */
	onPreviousClick: function () {
		var imgId = this.getImageToDisplayBackward(this.displayedImageId);
		
		if (imgId !== -1) {
			this.setImage(imgId);
		}
		
	},
	/**
	 * Returns the next image in the attachment store
	 * @param startId The start ID
	 * @returns int An attachment id, or -1 of none was found
	 */
	getImageToDisplayForward: function (startId) {
		var startIdx = this.store.findExact("id", startId);
		
		if (startIdx === -1) {
			startIdx = 0;
		} else {
			startIdx++;
		}
		
		for (var i=startIdx;i<this.store.count();i++) {
			if (this.store.getAt(i).get("image")) {
				return this.store.getAt(i).get("id");
			}
		}
		
		return -1;
	},
	/**
	 * Returns the previous image in the attachment store
	 * @param startId The start ID
	 * @returns int An attachment id, or -1 of none was found
	 */
	getImageToDisplayBackward: function (startId) {
		var startIdx = this.store.findExact("id", startId);
		
		if (startIdx >= this.store.count()) {
			startIdx = this.store.count()-1;
		} else {
			startIdx--;
		}
		
		for (var i=startIdx;i>-1;i--) {
			if (this.store.getAt(i).get("image")) {
				return this.store.getAt(i).get("id");
			}
		}
		
		return -1;
	}
});