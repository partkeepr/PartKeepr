Ext.define('PartKeepr.FadingButton', {
	extend: 'Ext.Button',
	initComponent: function () {
		this.callParent();
		
	},
	startFading: function () {
		var iconEl = this.getEl().down(".x-btn-inner");
		
		iconEl.animate({
			duration: 1000,
			iterations: 1, // Should be enough for any session,
			listeners: {
				afteranimate: function () {
					if (this.fadeRunning) {
						// Not sure why defer is needed, but without it, it won't work.
						Ext.defer(this.startFading, 100, this);	
					}
				},
				scope: this
			},
		    keyframes: {
			        50: {
			            opacity: 0
			        },
			        100: {
			            opacity: 1
			        }
			        }});
		this.fadeRunning = true;
	},
	stopFading: function () {
		this.fadeRunning = false;
	},
	isFading: function () {
		var iconEl = this.getEl().down(".x-btn-inner");
		
		if (iconEl.getActiveAnimation() === false) {
			return false;
		}
		
		return true;
	}
});