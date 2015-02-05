Ext.define('PartKeepr.FadingButton', {
	extend: 'Ext.Button',

    /**
     * Holds the fadeButtonTask
     * @var object
     */
    fadeButtonTask: null,

    /**
     * Holds the selector for the button's icon
     * @var string
     */
    selector: ".x-btn-icon",

    /**
     * Initializes the component and adds the fadeButtonTask.
     */
	initComponent: function () {
		this.callParent();

        this.fadeButtonTask = {
            run: this.fadeButton,
            interval: 10000, // No constant fading, because fading eats quite some CPU
            scope: this
        };

	},
    /**
     * Adds an animation to the button's icon. This is only done once and needs to be refreshed (done automatically
     * by startFading).
     *
     * @param none
     * @return nothing
     */
	fadeButton: function () {
		var iconEl = this.getEl().down(this.selector);

		iconEl.animate({
			duration: 1000, // One second
			iterations: 1,
		    keyframes: {
			        50: {
			            opacity: 0
			        },
			        100: {
			            opacity: 1
			        }
			        }});
	},
    /**
     * Starts button fading by adding the task from the task manager
     * @param none
     * @return nothing
     */
    startFading: function () {
        Ext.TaskManager.start(this.fadeButtonTask);
    },
    /**
     * Stops button fading by removing the task from the task manager
     * @param none
     * @return nothing
     */
	stopFading: function () {
        Ext.TaskManager.stop(this.fadeButtonTask);
	}
});