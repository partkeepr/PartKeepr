/**
 * This class represents the tip of the day window and its logic.
 */
Ext.define("PartKeepr.TipOfTheDayWindow", {
	extend: 'Ext.window.Window',
	
	/* Defines the title template. */
	titleTemplate: i18n("Tip of the Day"),
	
	/* Cosmetic settings */
	width: 600,
	height: 300,
	
	minWidth: 600,
	minHeight: 300,
	
	layout: 'fit',
	
	/**
	 * Stores the currently displayed tip, or null if none is displayed
	 * @var Ext.data.Record
	 */
	currentTip: null,
	
	/**
	 * Holds an instance of the TipOfTheDay store.
	 */
	tipStore: null,
	
	/**
	 * Initializes the window. Adds the iframe used for displaying tips, as well
	 * as the user controls (prev/next buttons, config checkboxes).
	 */
	initComponent: function () {
		// Initialize the window with the title template
		this.title = this.titleTemplate;
		
		// Set the tip store
		this.tipStore = PartKeepr.getApplication().getTipOfTheDayStore();
		
		// Set the tip display iframe and add it to the items
		this.tipDisplay = Ext.create("Ext.ux.SimpleIFrame", {
			border: false
		});
		
		this.items = this.tipDisplay;

		// Initialize previous and next buttons
		this.previousButton = Ext.create("Ext.button.Button", {
			text: i18n("Previous Tip"),
        	handler: Ext.bind(this.displayPreviousTip, this),
        	icon: 'resources/icons/tip_previous.png',
        	disabled: true
		});
		
		this.nextButton = Ext.create("Ext.button.Button", {
			text: i18n("Next Tip"),
			icon: 'resources/icons/tip_next.png',
        	handler: Ext.bind(this.displayNextTip, this)
		});
		
		// Initializes the "show tips on login" checkbox as well as the "show read tips" checkbox
		this.showTipsCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Show Tips on login"),
			handler: Ext.bind(this.showTipsHandler, this)
		});
		
		this.displayReadTipsCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Show read tips"),
			handler: Ext.bind(this.showReadTipsHandler, this)
		});
		
		// Initialize the "show tips" checkbox with the user preference
		if (PartKeepr.getApplication().getUserPreference("partkeepr.tipoftheday.showtips") === false) {
			this.showTipsCheckbox.setValue(false);
		} else {
			this.showTipsCheckbox.setValue(true);
		}
		
		// Append the controls to the bottom toolbar
		this.dockedItems = [{
		    xtype: 'toolbar',
		    dock: 'bottom',
		    ui: 'footer',
		    defaults: {minWidth: 100},
		    pack: 'start',
		    items: [
		        this.previousButton,
		        this.nextButton,
		        '->',
		        this.showTipsCheckbox,
		        this.displayReadTipsCheckbox
		    ]
		}];
		
		// Auto-load the next unread tip on window display
		this.on("show", this.displayNextTip, this);
		
		// Window destroy handler
		this.on("destroy", this.onDestroy, this);
		this.callParent();
	},
	/**
	 * If the "show read tips" checkbox was clicked, update the buttons
	 * to reflect the tip navigation.
	 */
	showReadTipsHandler: function () {
		this.updateButtons(this.currentTip);
	},
	/**
	 * Destroy handler. Removes the "read tip" timer.
	 */
	onDestroy: function () {
		this.cancelReadTimer();
	},
	/**
	 * Cancels the read timer.
	 */
	cancelReadTimer: function () {
		if (this.markAsReadTask) {
			this.markAsReadTask.cancel();
		}
	},
	/**
	 * Handler when the "show tips" checkbox was clicked. 
	 */
	showTipsHandler: function (checkbox, checked) {
		PartKeepr.getApplication().setUserPreference("partkeepr.tipoftheday.showtips", checked);
	},
	/**
	 * Displays a specific tip of the day.
	 * @param record The record which contains the information regarding the tip
	 */
	displayTip: function (record) {
		// Cancel the old read timer
		this.cancelReadTimer();

		// Update buttons to reflect position
		this.updateButtons(record);
		
		// Set the title to the tip name
		this.setTitle(this.titleTemplate+ ": " + record.get("name"));
		
		// Set iframe to the tip url
		this.tipDisplay.setSrc(record.get("url"));
		
		// Fire up delayed task to mark the tip as read
		this.markAsReadTask = new Ext.util.DelayedTask(this.markTipRead, this);
		this.markAsReadTask.delay(5000);
		
	},
	/**
	 * Updates the navigation buttons.
	 * 
	 * This method has two modes, depending on which state the "show read tips" checkbox is in.
	 * @param record The currently displayed tip
	 */
	updateButtons: function (record) {
		if (this.displayReadTipsCheckbox.getValue() === true) {
			if (this.tipStore.indexOf(record) > 0) {
				this.previousButton.enable();
			} else {
				this.previousButton.disable();
			}
			
			if (this.tipStore.indexOf(record) === this.tipStore.getTotalCount() - 1) {
				this.nextButton.disable();
			} else {
				this.nextButton.enable();
			}	
		} else {
			if (this.tipStore.indexOf(record) > this.getFirstUnreadTip()) {
				this.previousButton.enable();
			} else {
				this.previousButton.disable();
			}
			
			
			if (this.tipStore.indexOf(record) >= this.getLastUnreadTip()) {
				this.nextButton.disable();
			} else {
				this.nextButton.enable();
			}	
		}
		
	},
	/**
	 * Returns the index of the first unread tip, or null if there's no unread tip.
	 * @returns int The index of the first unread tip, or null
	 */
	getFirstUnreadTip: function () {
		for (var i=0;i<this.tipStore.getTotalCount();i++) {
			if (this.tipStore.getAt(i).get("read") === false) {
				return i;
			}
		}
		
		return null;
	},
	/**
	 * Returns the index of the last unread tip, or null if there's no unread tip.
	 * @returns int The index of the last unread tip, or null
	 */
	getLastUnreadTip: function () {
		for (var i=this.tipStore.getTotalCount()-1;i>-1;i--) {
			if (this.tipStore.getAt(i).get("read") === false) {
				return i;
			}
		}
		
		return null;
	},
	/**
	 * Marks the current tip as read. Commits the information to the server.
	 */
	markTipRead: function () {
		this.currentTip.set("read", true);
		this.currentTip.commit();
		
		var call = new PartKeepr.ServiceCall("TipOfTheDay", "markTipAsRead");
		call.setLoadMessage(sprintf(i18n("Marking tip %s as read..."), this.currentTip.get("name")));
		call.setParameter("name", this.currentTip.get("name"));
		call.doCall();
	},
	/**
	 * Displays the next tip
	 */
	displayNextTip: function () {
		this.retrieveTip("ASC");
	},
	/**
	 * Displays the previous tip
	 */
	displayPreviousTip: function () {
		this.retrieveTip("DESC");
	},
	/**
	 * Displays the next or previous tip.
	 * 
	 * @param dir string Either "ASC" or "DESC", which denotes the direction to search for the next tip
	 */
	retrieveTip: function (dir) {
		var startIdx = -1, record = null;
		
		if (this.currentTip) {
			startIdx = this.tipStore.indexOf(this.currentTip);
		}
	
		if (dir === "ASC") {
			record = this.extractNextTip(startIdx);
		} else {
			record = this.extractPreviousTip(startIdx);
		}
		
		if (record) {
			this.currentTip = record;
			this.displayTip(record);	
		}
	},
	/**
	 * Returns the record with the next tip
	 * @param startIdx The index to start searching from
	 * @returns record The record with the next tip
	 */
	extractNextTip: function (startIdx) {
		var record = null, foundRecord = null;
		if (this.displayReadTipsCheckbox.getValue() === true) {
			var tmpIdx = startIdx + 1;
			if (tmpIdx > this.tipStore.getTotalCount() - 1) {
				tmpIdx = this.tipStore.getTotalCount() - 1;
			}
			
			foundRecord = this.tipStore.getAt(tmpIdx);
		} else {
			for (var i = startIdx+1; i < this.tipStore.getTotalCount();i++) {
				record = this.tipStore.getAt(i);
				if (record.get("read") === false) {
					foundRecord = record;
					break;
				}
			}
		}
		
		return foundRecord;
	},
	/**
	 * Returns the record with the previous tip
	 * @param startIdx The index to start searching from
	 * @returns record The record with the previous tip
	 */
	extractPreviousTip: function (startIdx) {
		var record = null, foundRecord = null;
		if (this.displayReadTipsCheckbox.getValue() === true) {
			var tmpIdx = startIdx - 1;
			if (tmpIdx < 0) {
				tmpIdx = 0;
			}
			
			foundRecord = this.tipStore.getAt(tmpIdx);
		} else {
			for (var i = startIdx - 1; i > -1;i--) {
				record = this.tipStore.getAt(i);
				
				if (record.get("read") === false) {
					foundRecord = record;
					break;
				}
			}	
		}
		
		
		return foundRecord;
	}
	
	
});